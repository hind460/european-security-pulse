import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const MAX_FILE_SIZE = 10 * 1024 * 1024;
const ALLOWED_FILE_EXTENSIONS = new Set(["pdf", "doc", "docx", "txt", "md"]);

const contactSchema = z.object({
  name: z.string().trim().min(1).max(120),
  email: z.string().trim().email().max(255),
  message: z.string().trim().min(1).max(2000),
  consent: z.literal("on"),
});

const newsSchema = z
  .object({
    type: z.enum(["Article", "Research", "White paper", "Other"]),
    otherType: z.string().trim().max(120),
    title: z.string().trim().min(1).max(200),
    email: z.string().trim().email().max(255),
    author: z.string().trim().min(1).max(120),
    linkedin: z
      .string()
      .trim()
      .max(255)
      .refine(
        (value) => value === "" || /^(https?:\/\/)?([\w-]+\.)*linkedin\.com\/.+/i.test(value),
      ),
  })
  .refine((data) => data.type !== "Other" || data.otherType.length > 0);

function validateFormData(data: unknown): FormData {
  if (!(data instanceof FormData)) throw new Error("Expected form data.");
  return data;
}

function value(data: FormData, key: string): string {
  return String(data.get(key) ?? "");
}

function safeFileName(name: string): string {
  return name
    .normalize("NFKD")
    .replace(/[^a-zA-Z0-9._-]+/g, "-")
    .replace(/-+/g, "-")
    .slice(0, 160);
}

export const submitContactForm = createServerFn({ method: "POST" })
  .validator(validateFormData)
  .handler(async ({ data }) => {
    // Honeypot: bots commonly fill hidden fields. Return success without storing it.
    if (value(data, "website")) return { success: true, notificationSent: false };

    const parsed = contactSchema.parse({
      name: value(data, "name"),
      email: value(data, "email").toLowerCase(),
      message: value(data, "message"),
      consent: value(data, "consent"),
    });

    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { error } = await supabaseAdmin.from("contact_messages").insert({
      name: parsed.name,
      email: parsed.email,
      message: parsed.message,
      consent: true,
    });

    if (error) {
      console.error("[Forms] Could not store a contact message.", error.code);
      throw new Error("Could not submit the contact form.");
    }

    const { sendFormNotification } = await import("./form-email.server");
    const notificationSent = await sendFormNotification({
      subject: `New website contact from ${parsed.name}`,
      replyTo: parsed.email,
      text: [
        "A new contact message was submitted on International Security Hub.",
        "",
        `Name: ${parsed.name}`,
        `Email: ${parsed.email}`,
        "",
        "Message:",
        parsed.message,
      ].join("\n"),
    });

    return { success: true, notificationSent };
  });

export const submitNewsForm = createServerFn({ method: "POST" })
  .validator(validateFormData)
  .handler(async ({ data }) => {
    if (value(data, "website")) return { success: true, notificationSent: false };

    const parsed = newsSchema.parse({
      type: value(data, "type"),
      otherType: value(data, "otherType"),
      title: value(data, "title"),
      email: value(data, "email").toLowerCase(),
      author: value(data, "author"),
      linkedin: value(data, "linkedin"),
    });

    const candidate = data.get("file");
    const file = candidate instanceof File && candidate.size > 0 ? candidate : null;
    let filePath: string | null = null;

    if (file) {
      const extension = file.name.split(".").pop()?.toLowerCase() ?? "";
      if (file.size > MAX_FILE_SIZE || !ALLOWED_FILE_EXTENSIONS.has(extension)) {
        throw new Error("The attached file is not an accepted type or is over 10 MB.");
      }
      const cleanedName = safeFileName(file.name) || `submission.${extension}`;
      filePath = `${new Date().toISOString().slice(0, 10)}/${crypto.randomUUID()}-${cleanedName}`;
    }

    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    if (file && filePath) {
      const bytes = new Uint8Array(await file.arrayBuffer());
      const { error: uploadError } = await supabaseAdmin.storage
        .from("news-submissions")
        .upload(filePath, bytes, {
          contentType: file.type || "application/octet-stream",
          upsert: false,
        });

      if (uploadError) {
        console.error("[Forms] Could not upload a news file.", uploadError.message);
        throw new Error("Could not upload the attached file.");
      }
    }

    const { error: insertError } = await supabaseAdmin.from("news_submissions").insert({
      type: parsed.type,
      other_type: parsed.type === "Other" ? parsed.otherType : null,
      title: parsed.title,
      email: parsed.email,
      author: parsed.author,
      linkedin: parsed.linkedin || null,
      file_path: filePath,
      file_name: file?.name ?? null,
    });

    if (insertError) {
      if (filePath) {
        await supabaseAdmin.storage.from("news-submissions").remove([filePath]);
      }
      console.error("[Forms] Could not store a news submission.", insertError.code);
      throw new Error("Could not submit the news form.");
    }

    const { sendFormNotification } = await import("./form-email.server");
    const notificationSent = await sendFormNotification({
      subject: `New ${parsed.type.toLowerCase()} submission: ${parsed.title}`,
      replyTo: parsed.email,
      text: [
        "A new contribution was submitted on International Security Hub.",
        "",
        `Type: ${parsed.type}${parsed.type === "Other" ? ` (${parsed.otherType})` : ""}`,
        `Title: ${parsed.title}`,
        `Author: ${parsed.author}`,
        `Email: ${parsed.email}`,
        `LinkedIn: ${parsed.linkedin || "Not provided"}`,
        `File: ${file?.name ?? "Not attached"}`,
        "",
        "Open Supabase to review the stored submission and its private file.",
      ].join("\n"),
    });

    return { success: true, notificationSent };
  });

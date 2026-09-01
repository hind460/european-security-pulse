import { useRef, useState } from "react";
import { Check, Paperclip } from "lucide-react";
import { z } from "zod";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const TYPES = ["Article", "Research", "White paper", "Other"] as const;

const schema = z
  .object({
    type: z.enum(TYPES, { errorMap: () => ({ message: "Please select a type." }) }),
    otherType: z.string().trim().max(120).optional(),
    title: z.string().trim().min(1, "Please enter a title.").max(200),
    email: z.string().trim().email("Please enter a valid email address.").max(255),
    author: z.string().trim().min(1, "Please enter the author name.").max(120),
    linkedin: z
      .string()
      .trim()
      .max(255)
      .refine((v) => v === "" || /^(https?:\/\/)?([\w-]+\.)*linkedin\.com\/.+/i.test(v), {
        message: "Please enter a valid LinkedIn URL.",
      }),
  })
  .refine((d) => d.type !== "Other" || (d.otherType?.length ?? 0) > 0, {
    path: ["otherType"],
    message: "Please describe the type of contribution.",
  });

type Errors = Partial<Record<string, string>>;

export function SubmitNewsDialog({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const [done, setDone] = useState(false);
  const [type, setType] = useState<string>("");
  const [fileName, setFileName] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const formRef = useRef<HTMLFormElement>(null);

  function reset() {
    setDone(false);
    setType("");
    setFileName("");
    setErrors({});
    formRef.current?.reset();
  }

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse({
      type,
      otherType: String(fd.get("otherType") ?? ""),
      title: String(fd.get("title") ?? ""),
      email: String(fd.get("email") ?? ""),
      author: String(fd.get("author") ?? ""),
      linkedin: String(fd.get("linkedin") ?? ""),
    });

    if (!parsed.success) {
      const next: Errors = {};
      for (const issue of parsed.error.issues) {
        const key = String(issue.path[0] ?? "form");
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      return;
    }

    setErrors({});
    setDone(true);
  }

  const fieldClass = "mt-1.5";
  const errClass = "mt-1 text-xs text-signal";

  return (
    <Dialog
      open={open}
      onOpenChange={(v) => {
        setOpen(v);
        if (!v) setTimeout(reset, 200);
      }}
    >
      <DialogTrigger asChild>
        <button type="button" className={className}>
          {children}
        </button>
      </DialogTrigger>

      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-lg">
        {done ? (
          <div className="py-4">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2 font-serif">
                <Check className="size-5 text-signal" aria-hidden="true" />
                Thank you for your contribution
              </DialogTitle>
              <DialogDescription className="pt-2 text-sm leading-relaxed">
                Your work will be reviewed and you will be contacted by the ISH
                team shortly.
              </DialogDescription>
            </DialogHeader>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="font-serif">Submit news</DialogTitle>
              <DialogDescription>
                Share an article, research, white paper or other contribution
                with the ISH editorial desk.
              </DialogDescription>
            </DialogHeader>

            <form ref={formRef} onSubmit={onSubmit} noValidate className="space-y-4">
              <div>
                <Label htmlFor="submission-file">Attach file</Label>
                <label
                  htmlFor="submission-file"
                  className={`${fieldClass} flex cursor-pointer items-center gap-2 border border-input px-3 py-2 text-sm text-muted-foreground hover:bg-accent`}
                >
                  <Paperclip className="size-4 shrink-0" aria-hidden="true" />
                  <span className="truncate">
                    {fileName || "Choose a file (PDF, DOC, DOCX)"}
                  </span>
                </label>
                <input
                  id="submission-file"
                  name="file"
                  type="file"
                  accept=".pdf,.doc,.docx,.txt,.md"
                  className="sr-only"
                  onChange={(e) => setFileName(e.target.files?.[0]?.name ?? "")}
                />
              </div>

              <div>
                <Label htmlFor="submission-type">Type</Label>
                <Select value={type} onValueChange={setType}>
                  <SelectTrigger id="submission-type" className={fieldClass}>
                    <SelectValue placeholder="Select a type" />
                  </SelectTrigger>
                  <SelectContent>
                    {TYPES.map((t) => (
                      <SelectItem key={t} value={t}>
                        {t}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors['type'] && <p className={errClass}>{errors['type']}</p>}
              </div>

              {type === "Other" && (
                <div>
                  <Label htmlFor="submission-other">Describe the type</Label>
                  <Textarea
                    id="submission-other"
                    name="otherType"
                    maxLength={120}
                    rows={2}
                    className={fieldClass}
                    placeholder="Tell us what kind of contribution this is"
                  />
                  {errors['otherType'] && <p className={errClass}>{errors['otherType']}</p>}
                </div>
              )}

              <div>
                <Label htmlFor="submission-title">Title</Label>
                <Input
                  id="submission-title"
                  name="title"
                  maxLength={200}
                  className={fieldClass}
                  placeholder="Title of your contribution"
                />
                {errors['title'] && <p className={errClass}>{errors['title']}</p>}
              </div>

              <div>
                <Label htmlFor="submission-email">Email</Label>
                <Input
                  id="submission-email"
                  name="email"
                  type="email"
                  maxLength={255}
                  className={fieldClass}
                  placeholder="you@example.com"
                />
                {errors['email'] && <p className={errClass}>{errors['email']}</p>}
              </div>

              <div>
                <Label htmlFor="submission-author">Author name</Label>
                <Input
                  id="submission-author"
                  name="author"
                  maxLength={120}
                  className={fieldClass}
                  placeholder="Full name"
                />
                {errors['author'] && <p className={errClass}>{errors['author']}</p>}
              </div>

              <div>
                <Label htmlFor="submission-linkedin">LinkedIn link</Label>
                <Input
                  id="submission-linkedin"
                  name="linkedin"
                  maxLength={255}
                  className={fieldClass}
                  placeholder="https://www.linkedin.com/in/…"
                />
                {errors['linkedin'] && <p className={errClass}>{errors['linkedin']}</p>}
              </div>

              <button
                type="submit"
                className="w-full bg-signal px-5 py-3 text-xs font-bold tracking-[0.12em] text-card uppercase transition-opacity hover:opacity-90"
              >
                Submit contribution
              </button>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}

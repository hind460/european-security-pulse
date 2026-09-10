import { useRef, useState } from "react";
import { Check } from "lucide-react";
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
import { Checkbox } from "@/components/ui/checkbox";

const schema = z.object({
  name: z.string().trim().min(1, "Please enter your name.").max(120),
  email: z.string().trim().email("Please enter a valid email address.").max(255),
  message: z.string().trim().min(1, "Please enter a message.").max(2000),
  consent: z.literal(true, {
    errorMap: () => ({ message: "Please confirm you agree to be contacted." }),
  }),
});

type Errors = Partial<Record<string, string>>;

export function ContactDialog({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const [done, setDone] = useState(false);
  const [consent, setConsent] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const formRef = useRef<HTMLFormElement>(null);

  function reset() {
    setDone(false);
    setConsent(false);
    setErrors({});
    formRef.current?.reset();
  }

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse({
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      message: String(fd.get("message") ?? ""),
      consent: fd.get("consent") === "on",
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
                Thank you for getting in touch
              </DialogTitle>
              <DialogDescription className="pt-2 text-sm leading-relaxed">
                Your message has been received. The ISH team will review it and respond to you
                shortly.
              </DialogDescription>
            </DialogHeader>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="font-serif">Contact us</DialogTitle>
              <DialogDescription>
                Send a message to the International Security Hub editorial desk.
              </DialogDescription>
            </DialogHeader>

            <form ref={formRef} onSubmit={onSubmit} noValidate className="space-y-4">
              <div>
                <Label htmlFor="contact-name">Name</Label>
                <Input
                  id="contact-name"
                  name="name"
                  maxLength={120}
                  className={fieldClass}
                  placeholder="Your full name"
                />
                {errors["name"] && <p className={errClass}>{errors["name"]}</p>}
              </div>

              <div>
                <Label htmlFor="contact-email">Email</Label>
                <Input
                  id="contact-email"
                  name="email"
                  type="email"
                  maxLength={255}
                  className={fieldClass}
                  placeholder="you@example.com"
                />
                {errors["email"] && <p className={errClass}>{errors["email"]}</p>}
              </div>

              <div>
                <Label htmlFor="contact-message">Message</Label>
                <Textarea
                  id="contact-message"
                  name="message"
                  maxLength={2000}
                  rows={4}
                  className={fieldClass}
                  placeholder="How can we help?"
                />
                {errors["message"] && <p className={errClass}>{errors["message"]}</p>}
              </div>

              <div>
                <div className="flex items-start gap-3">
                  <Checkbox
                    id="contact-consent"
                    name="consent"
                    checked={consent}
                    onCheckedChange={(checked) => setConsent(checked === true)}
                    className="mt-0.5"
                  />
                  <Label
                    htmlFor="contact-consent"
                    className="cursor-pointer text-sm font-normal leading-snug text-muted-foreground"
                  >
                    I agree that ISH may use my name and email address to reply to this message. ISH
                    will not share my data with third parties.
                  </Label>
                </div>
                {errors["consent"] && <p className={errClass}>{errors["consent"]}</p>}
              </div>

              <button
                type="submit"
                className="w-full bg-signal px-5 py-3 text-xs font-bold tracking-[0.12em] text-card uppercase transition-opacity hover:opacity-90"
              >
                Send message
              </button>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}

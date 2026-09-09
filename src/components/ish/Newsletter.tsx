import { useState } from "react";
import { Check } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [done, setDone] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const value = email.trim().toLowerCase();
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value);
    if (!valid) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    setSubmitting(true);
    const { error: insertError } = await supabase
      .from("newsletter_subscribers")
      .insert({ email: value });
    setSubmitting(false);

    // 23505 = already subscribed; treat as success for the reader.
    if (insertError && insertError.code !== "23505") {
      setError("Something went wrong. Please try again in a moment.");
      return;
    }
    setDone(true);
  }

  return (
    <section
      id="newsletter"
      aria-labelledby="newsletter-title"
      className="bg-ink text-ink-foreground"
    >
      <div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-16 md:px-10 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:py-20">
        <div>
          <p className="kicker">
            <span className="h-0.5 w-6 bg-signal" aria-hidden="true" />
            Newsletter
          </p>
          <h2
            id="newsletter-title"
            className="mt-4 font-serif text-3xl leading-tight font-bold md:text-4xl"
          >
            The European Security Brief
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-mist">
            Essential cybersecurity policy, innovation and leadership intelligence—delivered every
            month.
          </p>
        </div>

        <div>
          {done ? (
            <div
              role="status"
              className="flex items-start gap-3 border border-signal/60 bg-night p-6"
            >
              <Check className="mt-0.5 size-5 shrink-0 text-signal" aria-hidden="true" />
              <p className="text-sm text-mist">
                <span className="block font-semibold text-ink-foreground">You're subscribed.</span>
                We'll send the next European Security Brief to {email}.
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate className="space-y-3">
              <label
                htmlFor="newsletter-email"
                className="block text-xs font-semibold tracking-[0.12em] text-mist uppercase"
              >
                Email address
              </label>
              <div className="flex flex-col gap-3 sm:flex-row">
                <input
                  id="newsletter-email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  aria-invalid={!!error}
                  aria-describedby={error ? "newsletter-error" : "newsletter-privacy"}
                  placeholder="name@organisation.eu"
                  className="min-h-11 w-full border border-mist/30 bg-night px-4 py-2.5 text-sm text-ink-foreground placeholder:text-mist/70 focus:border-signal focus:outline-none"
                />
                <button
                  type="submit"
                  disabled={submitting}
                  className="min-h-11 shrink-0 bg-signal px-6 text-sm font-bold tracking-[0.08em] text-signal-foreground uppercase transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {submitting ? "Subscribing…" : "Subscribe"}
                </button>
              </div>
              {error && (
                <p id="newsletter-error" role="alert" className="text-sm text-signal">
                  {error}
                </p>
              )}
              <p id="newsletter-privacy" className="text-xs leading-relaxed text-mist">
                We use your address only to send the Brief. No third-party sharing, unsubscribe at
                any time.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

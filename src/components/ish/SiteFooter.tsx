import { Linkedin, Mail } from "lucide-react";
import logo from "@/assets/ish-mark-2026.svg";
import { navHref } from "@/data/ish";
import { ContactDialog } from "./ContactDialog";


const sections = [
  {
    title: "Sections",
    links: [
      "Latest",
      "Regulation",
      "Innovation",
      "Events",
      "Experts",
      "Organisations",
      "About",
    ],
  },
];

const policies = [
  { label: "Editorial standards", href: "/editorial-standards", external: true },
  { label: "Privacy", href: "src/assets/privacy-policy.pdf", external: true },
];


export function SiteFooter() {
  return (
    <footer className="bg-night text-night-foreground">
      <div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-14 md:grid-cols-2 md:px-10 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="International Security Hub logo: red heart emblem"
              width={989}
              height={1245}
              loading="lazy"
              className="h-14 w-auto shrink-0"
            />
            <span className="font-serif text-lg leading-tight font-bold text-card">
              International Security Hub
            </span>
          </div>

          <p className="mt-4 text-xs tracking-[0.14em] text-night-foreground uppercase">
            INDEPENDENT · EUROPEAN BASED · EVIDENCE-LED
          </p>
        </div>

        {sections.map((s) => (
          <nav key={s.title} aria-label={s.title}>
            <h2 className="text-xs font-bold tracking-[0.14em] text-card uppercase">
              {s.title}
            </h2>
            <ul className="mt-4 space-y-2 text-sm">
              {s.links.map((l) => (
                <li key={l}>
                  <a href={navHref[l] ?? "#about"} className="link-underline hover:text-card">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ))}

        <nav aria-label="Policies">
          <h2 className="text-xs font-bold tracking-[0.14em] text-card uppercase">
            Standards
          </h2>
          <ul className="mt-4 space-y-2 text-sm">
            {policies.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  target={l.external ? "_blank" : undefined}
                  rel={l.external ? "noopener noreferrer" : undefined}
                  className="link-underline hover:text-card"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <ContactDialog className="link-underline hover:text-card text-left">
                Contact
              </ContactDialog>
            </li>
          </ul>

        </nav>

        <div>
          <h2 className="text-xs font-bold tracking-[0.14em] text-card uppercase">
            Follow
          </h2>
          <div className="mt-4 flex gap-3">
            <a
              href="https://www.linkedin.com/in/k-el-bouhmi-53b30a107/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="International Security Hub on LinkedIn"
              className="inline-flex size-11 items-center justify-center border border-slate/50 transition-colors hover:border-signal hover:text-card"
            >
              <Linkedin className="size-4" />
            </a>
            <a
              href="#newsletter"
              aria-label="Subscribe to the newsletter"
              className="inline-flex size-11 items-center justify-center border border-slate/50 transition-colors hover:border-signal hover:text-card"
            >
              <Mail className="size-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-slate/25">
        <div className="mx-auto max-w-[1440px] px-5 py-6 text-xs text-night-foreground md:px-10">
          International Security Hub curates and links to reporting published by
          external organisations. External articles remain the work of their
          publishers and are not presented as original ISH reporting.
        </div>
      </div>
    </footer>
  );
}

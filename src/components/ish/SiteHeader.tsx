import { useEffect, useState } from "react";
import { Menu, Search, X } from "lucide-react";
import logo from "@/assets/ish-heart.svg.asset.json";
import { navHref, navItems } from "@/data/ish";

function useToday() {
  const [today, setToday] = useState("");
  useEffect(() => {
    setToday(
      new Date().toLocaleDateString("en-GB", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      }),
    );
  }, []);
  return today;
}

export function SiteHeader() {
  const today = useToday();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-card">
      <div className="h-1 bg-signal" aria-hidden="true" />

      <div className="bg-night text-night-foreground">
        <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-between gap-y-1 px-5 py-2 text-[11px] tracking-[0.11em] uppercase md:px-10">
          <p className="flex items-center gap-2 text-card">
            <span
              className="inline-block size-1.5 rounded-full bg-signal"
              aria-hidden="true"
            />
            Global Desk Live
          </p>
          <p className="hidden sm:block">{today}</p>
          <div className="flex items-center gap-5">
            <a href="#about" className="link-underline hover:text-card">
              Submit News
            </a>
            <a href="#newsletter" className="link-underline hover:text-card">
              Newsletter
            </a>
          </div>
        </div>
      </div>

      <div className="border-b border-border bg-card">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-6 px-5 py-4 md:px-10">
          <a href="/" className="flex items-center gap-4">
            <img
              src={logo.url}
              alt="International Security Hub logo: red heart emblem"
              width={989}
              height={1245}
              className="h-10 w-auto md:h-14"
            />

            <span className="block">
              <span className="block font-serif text-lg leading-tight font-bold tracking-tight md:text-2xl">
                International Security Hub
              </span>
              <span className="mt-1 block text-[9px] font-semibold tracking-[0.2em] text-muted-foreground uppercase md:text-[10px]">
                The European cybersecurity press platform
              </span>
            </span>
          </a>

          <a
            href="#newsletter"
            className="hidden max-w-xs border-l border-border pl-6 lg:block"
          >
            <span className="block font-serif text-sm font-bold">
              The Global Security Brief
            </span>
            <span className="mt-1 block text-xs text-muted-foreground">
              Policy, innovation and leadership intelligence, every weekday morning.
            </span>
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex size-11 items-center justify-center border border-border text-foreground transition-colors hover:bg-accent lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

        <nav aria-label="Primary" className="border-t border-border">
          <div className="mx-auto hidden max-w-[1440px] items-center gap-8 px-5 md:px-10 lg:flex">
            {navItems.map((item, i) => (
              <a
                key={item}
                href={navHref[item]}
                className={`link-underline py-3.5 text-xs font-bold tracking-[0.07em] uppercase transition-colors hover:text-signal ${
                  i === 0 ? "text-signal" : "text-foreground"
                }`}
              >
                {item}
              </a>
            ))}
            <button
              type="button"
              aria-label="Search"
              className="ml-auto inline-flex size-11 items-center justify-center transition-colors hover:text-signal"
            >
              <Search className="size-4" />
            </button>
          </div>

          {open && (
            <div id="mobile-nav" className="lg:hidden">
              <ul className="mx-auto max-w-[1440px] px-5 pb-4">
                {navItems.map((item) => (
                  <li key={item} className="border-b border-border last:border-0">
                    <a
                      href={navHref[item]}
                      onClick={() => setOpen(false)}
                      className="block py-3 text-sm font-bold tracking-[0.07em] uppercase hover:text-signal"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}

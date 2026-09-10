import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, CalendarDays, MapPin } from "lucide-react";

import { SiteHeader } from "@/components/ish/SiteHeader";
import { SiteFooter } from "@/components/ish/SiteFooter";
import { Newsletter } from "@/components/ish/Newsletter";
import { SectionTag, StoryCard } from "@/components/ish/StoryCard";
import {
  curatedStories,
  events,
  latestDevelopments,
  leadStory,
  organisations,
  trackerItems,
} from "@/data/ish";

import heroImage from "@/assets/hero-lead.jpg";
import europeMap from "@/assets/europe-network.jpg";
import quantumImage from "@/assets/innovation-quantum.jpg";
import startupsImage from "@/assets/innovation-startups.jpg";

const TITLE = "International Security Hub — European Cybersecurity Press";
const DESCRIPTION =
  "Independent European press platform covering cybersecurity regulation, innovation, experts, events and organisations across the EU and beyond.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div id="top" className="min-h-screen bg-background">
      <SiteHeader />

      <main>
        {/* HERO */}
        <section id="latest" aria-labelledby="lead-headline" className="border-b border-border">
          <div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-10 md:px-10 lg:grid-cols-[1.65fr_1fr] lg:py-14">
            <article className="group">
              <SectionTag>EU Regulation</SectionTag>
              <h1
                id="lead-headline"
                className="mt-4 font-serif text-3xl leading-[1.08] font-bold sm:text-4xl lg:text-[3.4rem]"
              >
                <a
                  href={leadStory.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline"
                >
                  {leadStory.headline}
                </a>
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                {leadStory.summary}
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2">
                <span className="meta">Published by {leadStory.publisher}</span>
                <span className="hidden h-3 w-px bg-border sm:block" aria-hidden="true" />
                <a
                  href={leadStory.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-bold text-signal"
                >
                  Read at {leadStory.publisher}
                  <ArrowUpRight className="size-4 shrink-0" aria-hidden="true" />
                </a>
              </div>
              <figure className="mt-7">
                <img
                  src={heroImage}
                  alt="Empty press briefing room in a modern European institutional building"
                  width={1600}
                  height={1000}
                  className="aspect-[16/9] w-full object-cover"
                />
                <figcaption className="mt-2 text-xs text-muted-foreground">
                  Illustrative image · European institutional press room
                </figcaption>
              </figure>
            </article>

            <aside aria-labelledby="latest-dev" className="lg:border-l lg:border-border lg:pl-10">
              <h2
                id="latest-dev"
                className="border-b border-border pb-3 font-serif text-xl font-bold"
              >
                Latest Developments
              </h2>
              <ul>
                {latestDevelopments.map((s) => (
                  <li key={s.url + s.headline} className="border-b border-border py-5">
                    <span className="text-[10px] font-bold tracking-[0.16em] text-signal uppercase">
                      {s.category}
                    </span>
                    <h3 className="mt-2 font-serif text-lg leading-snug font-semibold">
                      <a
                        href={s.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-underline"
                      >
                        {s.headline}
                      </a>
                    </h3>
                    <p className="meta mt-2">{s.publisher}</p>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </section>

        {/* REGULATION TRACKER */}
        <section
          id="regulation"
          aria-labelledby="tracker-title"
          className="border-b border-border bg-mist/50"
        >
          <div className="mx-auto max-w-[1440px] px-5 py-14 md:px-10">
            <SectionTag>Regulation Tracker</SectionTag>
            <h2 id="tracker-title" className="mt-3 font-serif text-2xl font-bold md:text-3xl">
              Where European cybersecurity law stands
            </h2>
            <div className="mt-8 grid gap-px border border-border bg-border sm:grid-cols-2 xl:grid-cols-4">
              {trackerItems.map((item) => (
                <a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col bg-card p-6 transition-colors hover:bg-card/60"
                >
                  <span
                    className={`inline-flex w-fit items-center gap-2 border px-2.5 py-1 text-[10px] font-bold tracking-[0.12em] uppercase ${
                      item.active
                        ? "border-signal text-signal"
                        : "border-border text-muted-foreground"
                    }`}
                  >
                    {item.active && (
                      <span className="size-1.5 rounded-full bg-signal" aria-hidden="true" />
                    )}
                    {item.status}
                  </span>
                  <h3 className="mt-4 font-serif text-xl font-bold group-hover:text-signal">
                    {item.name}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {item.note}
                  </p>
                  <span className="meta mt-5">{item.publisher}</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* CURATED STORIES */}
        <section aria-labelledby="curated-title" className="border-b border-border">
          <div className="mx-auto max-w-[1440px] px-5 py-14 md:px-10">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <SectionTag>Curated Coverage</SectionTag>
                <h2 id="curated-title" className="mt-3 font-serif text-2xl font-bold md:text-3xl">
                  Selected reporting from across Europe
                </h2>
              </div>
              <p className="max-w-md text-sm text-muted-foreground">
                Every item links to the original publisher. ISH curates; it does not republish.
              </p>
            </div>
            <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {curatedStories.map((s) => (
                <StoryCard key={s.url + s.headline} story={s} />
              ))}
            </div>
          </div>
        </section>

        {/* INNOVATION */}
        <section
          id="innovation"
          aria-labelledby="innovation-title"
          className="border-b border-border"
        >
          <div className="mx-auto max-w-[1440px] px-5 py-14 md:px-10">
            <SectionTag>Innovation in Europe</SectionTag>
            <h2 id="innovation-title" className="mt-3 font-serif text-2xl font-bold md:text-3xl">
              The technologies shaping European security
            </h2>

            <div className="mt-8 grid gap-6 lg:grid-cols-4 md:grid-cols-2">
              <article className="group overflow-hidden border border-border bg-card">
                <img
                  src={startupsImage}
                  alt="Open-plan European technology office with people working at desks"
                  width={1200}
                  height={900}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <div className="p-6">
                  <h3 className="font-serif text-lg font-bold">European cybersecurity start-ups</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    A mapped ecosystem of 728 companies across the continent.
                  </p>
                  <a
                    href="https://www.wavestone.com/en/insight/european-cybersecurity-startup-radar-2026/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-signal uppercase"
                  >
                    Read at Wavestone{" "}
                    <ArrowUpRight className="size-4 shrink-0" aria-hidden="true" />
                  </a>
                </div>
              </article>

              <article className="group overflow-hidden border border-border bg-ink text-ink-foreground">
                <div className="relative aspect-[4/3] overflow-hidden bg-night">
                  <img
                    src={europeMap}
                    alt="Abstract line map of Europe used as an editorial motif"
                    width={1400}
                    height={900}
                    loading="lazy"
                    className="size-full object-cover opacity-25 mix-blend-screen invert"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-lg font-bold">Frontier AI security</h3>
                  <p className="mt-2 text-sm text-mist">
                    An EU action plan links cybersecurity policy to advanced AI.
                  </p>
                  <a
                    href="https://digital-strategy.ec.europa.eu/en/library/eu-action-plan-cybersecurity-and-artificial-intelligence"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-signal uppercase"
                  >
                    Read at European Commission
                    <ArrowUpRight className="size-4 shrink-0" aria-hidden="true" />
                  </a>
                </div>
              </article>

              <article className="group overflow-hidden border border-border bg-card">
                <img
                  src={quantumImage}
                  alt="Cryogenic quantum computing apparatus in a research laboratory"
                  width={1200}
                  height={900}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <div className="p-6">
                  <h3 className="font-serif text-lg font-bold">Post-quantum cryptography</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Europe accelerates its transition to quantum-safe cryptography.
                  </p>
                  <a
                    href="https://digital-strategy.ec.europa.eu/en/news/eu-reinforces-its-cybersecurity-post-quantum-cryptography"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-signal uppercase"
                  >
                    Read at European Commission
                    <ArrowUpRight className="size-4 shrink-0" aria-hidden="true" />
                  </a>
                </div>
              </article>

              <article className="flex flex-col justify-between border border-border bg-mist/60 p-6">
                <div>
                  <span className="text-[10px] font-bold tracking-[0.16em] text-signal uppercase">
                    Sovereignty
                  </span>
                  <h3 className="mt-3 font-serif text-lg font-bold">
                    Sovereign European technology
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Certification, managed security services and home-grown capability are moving to
                    the centre of the European debate.
                  </p>
                </div>
                <a
                  href="https://www.enisa.europa.eu/news/have-your-say-on-the-certification-of-eu-managed-security-services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-1 text-xs font-bold text-signal uppercase"
                >
                  Read at ENISA <ArrowUpRight className="size-4 shrink-0" aria-hidden="true" />
                </a>
              </article>
            </div>
          </div>
        </section>

        {/* EXPERT PERSPECTIVES */}
        <section
          id="experts"
          aria-labelledby="experts-title"
          className="bg-ink text-ink-foreground"
        >
          <div className="mx-auto max-w-[1440px] px-5 py-16 md:px-10">
            <SectionTag>Expert Perspectives</SectionTag>
            <h2 id="experts-title" className="mt-3 font-serif text-2xl font-bold md:text-3xl">
              Voices shaping European cyber policy
            </h2>
            <div className="mt-8 grid gap-px bg-mist/20 md:grid-cols-2">
              {curatedStories
                .filter((s) => s.category === "Experts")
                .map((s) => (
                  <article key={s.url} className="group bg-ink p-8">
                    <div className="flex flex-wrap gap-2">
                      <span className="border border-signal px-2 py-0.5 text-[10px] font-bold tracking-[0.12em] text-signal uppercase">
                        {s.contentType}
                      </span>
                      <span className="border border-mist/30 px-2 py-0.5 text-[10px] tracking-[0.12em] text-mist uppercase">
                        {s.contentType === "Podcast" ? "Expert analysis" : "Policy perspective"}
                      </span>
                    </div>
                    <h3 className="mt-4 font-serif text-2xl leading-snug font-bold">
                      <a
                        href={s.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-underline"
                      >
                        {s.headline}
                      </a>
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-mist">{s.summary}</p>
                    <p className="mt-6 text-xs tracking-[0.12em] text-mist uppercase">
                      {s.publisher}
                    </p>
                  </article>
                ))}
            </div>
          </div>
        </section>

        {/* EVENTS */}
        <section id="events" aria-labelledby="events-title" className="border-b border-border">
          <div className="mx-auto max-w-[1440px] px-5 py-14 md:px-10">
            <SectionTag>European Security Agenda</SectionTag>
            <h2 id="events-title" className="mt-3 font-serif text-2xl font-bold md:text-3xl">
              Where the community meets
            </h2>
            <ul className="mt-8 border-t border-border">
              {events.map((e) => (
                <li
                  key={e.title}
                  className="grid gap-3 border-b border-border py-6 transition-colors hover:bg-card md:grid-cols-[1.4fr_1fr_1fr] md:items-center"
                >
                  <div>
                    {e.country && (
                      <span
                        className="inline-flex h-3 w-5 overflow-hidden rounded-[2px] border border-border"
                        aria-label={
                          e.country === "NL"
                            ? "Netherlands"
                            : e.country === "DE"
                              ? "Germany"
                              : e.country === "EE"
                                ? "Estonia"
                                : e.country
                        }
                        role="img"
                      >
                        <span className="flex flex-col w-full">
                          {e.country === "NL" && (
                            <>
                              <span className="block h-1/3 w-full bg-[#AE1C28]" />
                              <span className="block h-1/3 w-full bg-[#FFFFFF]" />
                              <span className="block h-1/3 w-full bg-[#21468B]" />
                            </>
                          )}
                          {e.country === "DE" && (
                            <>
                              <span className="block h-1/3 w-full bg-[#000000]" />
                              <span className="block h-1/3 w-full bg-[#DD0000]" />
                              <span className="block h-1/3 w-full bg-[#FFCE00]" />
                            </>
                          )}
                          {e.country === "EE" && (
                            <>
                              <span className="block h-1/3 w-full bg-[#0072CE]" />
                              <span className="block h-1/3 w-full bg-[#000000]" />
                              <span className="block h-1/3 w-full bg-[#FFFFFF]" />
                            </>
                          )}
                        </span>
                      </span>
                    )}
                    <h3 className="mt-2 font-serif text-xl font-bold">{e.title}</h3>
                  </div>
                  <p className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="size-4 shrink-0" aria-hidden="true" />
                    {e.city} · {e.format}
                  </p>
                  <p className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CalendarDays className="size-4 shrink-0" aria-hidden="true" />
                    {e.date} · {e.topic}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ORGANISATIONS */}
        <section
          id="organisations"
          aria-labelledby="orgs-title"
          className="border-b border-border bg-mist/50"
        >
          <div className="mx-auto max-w-[1440px] px-5 py-14 md:px-10">
            <SectionTag>Organisations to Watch</SectionTag>
            <h2 id="orgs-title" className="mt-3 font-serif text-2xl font-bold md:text-3xl">
              The institutions behind European cybersecurity
            </h2>
            <div className="mt-8 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
              {organisations.map((o) => (
                <div key={o.name} className="bg-card p-6">
                  <h3 className="font-serif text-lg font-bold">{o.name}</h3>
                  <p className="meta mt-2">{o.type}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{o.location}</p>
                </div>
              ))}
            </div>
            <p className="mt-5 text-xs text-muted-foreground">
              Directory preview for orientation only. Listing does not imply endorsement or
              partnership.
            </p>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" aria-labelledby="about-title" className="border-b border-border">
          <div className="mx-auto grid max-w-[1440px] gap-8 px-5 py-14 md:px-10 lg:grid-cols-[1fr_1.2fr]">
            <div>
              <SectionTag>About ISH</SectionTag>
              <h2 id="about-title" className="mt-3 font-serif text-2xl font-bold md:text-3xl">
                The meeting point for European cybersecurity
              </h2>
            </div>
            <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                International Security Hub is an independent knowledge hub covering cybersecurity
                regulation, innovation, experts, events and organisations across Europe and beyond.
              </p>
              <p>
                We curate and contextualise reporting from institutions, agencies, researchers and
                news organisations, always attributing and linking to the original publisher.
                Curated coverage is never presented as original ISH reporting.
              </p>
            </div>
          </div>
        </section>

        <Newsletter />
      </main>

      <SiteFooter />
    </div>
  );
}

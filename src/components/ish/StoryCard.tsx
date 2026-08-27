import { ArrowUpRight } from "lucide-react";
import type { Story } from "@/data/ish";

export function SectionTag({ children }: { children: React.ReactNode }) {
  return (
    <p className="kicker">
      <span className="h-0.5 w-6 bg-signal" aria-hidden="true" />
      {children}
    </p>
  );
}

export function StoryCard({ story }: { story: Story }) {
  return (
    <article className="group relative flex h-full flex-col border border-border bg-card p-6 transition-[box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_-18px_oklch(0.229_0.0413_262.4_/_0.45)] focus-within:-translate-y-0.5">
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
        <span className="text-[10px] font-bold tracking-[0.16em] text-signal uppercase">
          {story.category}
        </span>
        {story.contentType && (
          <span className="border border-border px-2 py-0.5 text-[10px] tracking-[0.1em] text-muted-foreground uppercase">
            {story.contentType}
          </span>
        )}
      </div>

      <h3 className="mt-3 font-serif text-xl leading-snug font-semibold">
        <a
          href={story.url}
          target="_blank"
          rel="noopener noreferrer"
          className="after:absolute after:inset-0 after:content-['']"
        >
          {story.headline}
        </a>
      </h3>

      {story.summary && (
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          {story.summary}
        </p>
      )}

      <div className="mt-6 flex items-center justify-between gap-3 border-t border-border pt-4">
        <span className="meta">{story.publisher}</span>
        <span className="inline-flex items-center gap-1 text-xs font-semibold text-foreground transition-colors group-hover:text-signal">
          Read at {story.publisher}
          <ArrowUpRight className="size-3.5" aria-hidden="true" />
        </span>
      </div>
    </article>
  );
}

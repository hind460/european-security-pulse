import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Download } from "lucide-react";

import logo from "@/assets/ish-mark-2026.svg.asset.json";
import originalPdf from "@/assets/ISH-Editorial-Standards.pdf.asset.json";
import page1 from "@/assets/ISH-Editorial-Standards-page-1.jpg.asset.json";
import page2 from "@/assets/ISH-Editorial-Standards-page-2.jpg.asset.json";
import page3 from "@/assets/ISH-Editorial-Standards-page-3.jpg.asset.json";
import page4 from "@/assets/ISH-Editorial-Standards-page-4.jpg.asset.json";

const TITLE = "Editorial Standards — International Security Hub";
const DESCRIPTION =
  "Read the editorial standards of International Security Hub.";
const pages = [page1, page2, page3, page4];

export const Route = createFileRoute("/editorial-standards")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: EditorialStandardsPage,
});

function EditorialStandardsPage() {
  return (
    <main className="min-h-screen bg-muted">
      <header className="sticky top-0 z-10 border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <Link
            to="/"
            aria-label="Return to the International Security Hub front page"
            className="inline-flex min-w-0 items-center gap-3"
          >
            <img
              src={logo.url}
              alt=""
              width={989}
              height={1245}
              className="h-10 w-auto shrink-0"
            />
            <span className="hidden font-serif text-base font-bold sm:block">
              International Security Hub
            </span>
          </Link>

          <div className="flex items-center gap-2">
            <Link
              to="/"
              className="inline-flex size-10 items-center justify-center border border-border bg-background text-foreground transition-colors hover:bg-accent sm:w-auto sm:gap-2 sm:px-3"
              aria-label="Back to front page"
              title="Back to front page"
            >
              <ArrowLeft className="size-4 shrink-0" aria-hidden="true" />
              <span className="hidden text-sm font-semibold sm:inline">Front page</span>
            </Link>
            <a
              href={originalPdf.url}
              download="ISH-Editorial-Standards.pdf"
              className="inline-flex size-10 items-center justify-center bg-primary text-primary-foreground transition-colors hover:bg-primary/90 sm:w-auto sm:gap-2 sm:px-3"
              aria-label="Download editorial standards PDF"
              title="Download PDF"
            >
              <Download className="size-4 shrink-0" aria-hidden="true" />
              <span className="hidden text-sm font-semibold sm:inline">Download PDF</span>
            </a>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-5xl px-3 py-6 sm:px-6 sm:py-10">
        <div className="mb-6 text-center">
          <p className="kicker">International Security Hub</p>
          <h1 className="mt-2 font-serif text-3xl font-bold">Editorial Standards</h1>
          <p className="mt-2 text-sm text-muted-foreground">4 pages</p>
        </div>

        <ol className="space-y-5 sm:space-y-8">
          {pages.map((page, index) => (
            <li key={page.asset_id}>
              <figure>
                <img
                  src={page.url}
                  alt={`International Security Hub editorial standards, page ${index + 1} of ${pages.length}`}
                  width={1240}
                  height={1754}
                  loading={index === 0 ? "eager" : "lazy"}
                  className="mx-auto h-auto w-full bg-card shadow-sm"
                />
                <figcaption className="mt-2 text-center text-xs text-muted-foreground">
                  Page {index + 1} of {pages.length}
                </figcaption>
              </figure>
            </li>
          ))}
        </ol>
      </div>
    </main>
  );
}
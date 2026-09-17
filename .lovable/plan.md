Add estimated reading time under article title

Goal
- Display an estimated reading time beneath the H1 title on the article page `/articles/when-the-whistleblower-took-the-main-stage`.

Implementation
1. In `src/routes/articles.when-the-whistleblower-took-the-main-stage.tsx`, add a constant that holds the pre-computed reading time (e.g. `const READING_TIME = "12 min read"`), calculated from the current article word count at roughly 200 words per minute.
2. Insert the reading time under the `<h1>` title inside the article header, before the signal-red subtitle. Use the existing `meta` utility class and `text-muted-foreground` token so it matches the byline styling. Optionally prefix with a small `Clock` icon from `lucide-react` (`size-4 shrink-0`).
3. Do not change any article text, captions, images, SEO metadata, route path, or surrounding layout.

Validation
- Run `bun run build` and confirm it succeeds.
- Use Playwright to capture desktop and mobile screenshots of the article page and verify the reading time appears directly under the title without overlapping or layout shift.

Out of scope
- No changes to the homepage, forms, database, email, footer/header, Editorial Standards page, Privacy page, or any other routes.

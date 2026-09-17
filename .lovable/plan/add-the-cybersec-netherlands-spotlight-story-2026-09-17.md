# Add the Cybersec Netherlands Spotlight Story

## What will change

- Prepare the supplied conference image as an optimized 16:9 homepage image and a 1200 × 630 social preview.
- Add a new Spotlight feature at the top of the homepage using the existing lead-story visual language.
- Keep the current EU Regulation feature and every existing homepage section intact, moving them below the new feature.
- Create a dedicated article page containing the full supplied article, its byline, section headings, quotations, images, and captions.
- Add the requested page title, description, social metadata, accessible image text, and keyboard-friendly internal links.

## Technical details

- Use a new TanStack route at `/articles/when-the-whistleblower-took-the-main-stage`.
- Store optimized article images through the project asset flow and preserve explicit image dimensions to prevent layout shifts.
- Use the local article image for the homepage and article body. The article’s social image will be included only if the deployed asset provides a valid absolute URL; otherwise hosting-generated previews remain in place.
- Keep all current external story links, content arrays, navigation, forms, and page styling unchanged.

## Verification

- Confirm the Spotlight is first and the existing AI Act story remains directly below it.
- Open the story from the homepage and verify the complete article and captions.
- Check desktop and mobile layouts for cropping, readability, overflow, and heading structure.
- Confirm the latest build is healthy.
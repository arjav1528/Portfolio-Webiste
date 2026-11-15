# Arjav Patel — Ideas. Code. Impact.

A fresh Next.js portfolio combining the previous site, supplied resume, and brief Showpad contribution summaries. Bold typography, a portrait collage, asymmetric project cards, opposite-direction marquees, and an impact wall built from supplied achievements.

## Run locally

Node.js 20.9 or newer is required.

```sh
npm ci
npm run dev
```

Open http://127.0.0.1:3001.

## Verify and build

```sh
npm run build
npm run typecheck
npm test
```

`npm test` checks the generated HTML, so build first. The production site is exported to `out/` and can be deployed to a static host. It needs no API keys, runtime server, database, analytics service, or remote fonts.

For browser regression checks, `scripts/browser-check.js` contains a Playwright `async (page) => ...` function. With the dev server running, pass this file to the Playwright MCP `browser_run_code_unsafe` tool. It checks seven viewport widths, filtering, disclosures, mobile navigation, reduced motion, motion controls, images, resume delivery, and keyboard entry.

## Interactive components

The portrait uses 3D pointer tilt and a color reveal. Project cards follow the pointer with a spotlight, and filter changes use spring/layout motion. Main CTAs are magnetic with sliding text; filters ripple on click; the hero headline briefly decrypts on hover. A layered press button copies the email address with success and error feedback. A top-edge progress bar tracks the page.

Adapted React Bits, Magic UI, Kokonut UI, and Uiverse components are documented in [component sources](docs/component-sources.md), with retained licenses. Decorative motion respects both the OS preference and the footer pause button. Hover effects do not capture touch scrolling.

`scripts/interactions-check.js` is a second Playwright page function covering the effects, keyboard ripple placement, disabled-motion states, touch fallback, and clipboard success/failure. Clipboard calls are mocked during tests so the user's clipboard is untouched.

## Editing

- `lib/content.json`: project records, work experience, and skills.
- `app/page.tsx`: page composition, open source, research, education, contact.
- `app/globals.css`: colors, typography, layout, animation, and responsive styles.
- `public/`: original portrait, campus image, and supplied resume PDF.
- `docs/content-notes.md`: source reconciliation, corrected inconsistencies, and deliberately unverified claims.

Showpad appears alongside the other companies in the shared experience list, with a concise description of the contributions. Ticket identifiers, ticket titles, internal links, and implementation details are omitted. The existing PDF is preserved and may contain less information than the consolidated website.

## Repository and deployment

The portfolio lives at the root of [arjav1528/Portfolio-Webiste](https://github.com/arjav1528/Portfolio-Webiste). The previous website remains available in Git history. Any local `arjav-portfolio/` source snapshot is excluded from version control and TypeScript checks.

Deploy the repository with its Next.js build command, or serve the generated `out/` directory on a static host.

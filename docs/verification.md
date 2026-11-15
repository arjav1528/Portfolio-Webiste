# Verification

Validated on 15 November 2026 with Next.js 16.4.6.

- `npm run build`: production static export generated successfully.
- `npm run typecheck`: passed.
- `npm test`: four tests passed, covering merged content, valid project destinations and exported assets, Showpad in the shared experience list without ticket references, and internal anchors.
- Playwright: no horizontal overflow at 320, 375, 390, 760, 768, 1024, and 1440 pixels.
- Playwright: all four project filters select the expected records; experience disclosure opens/closes; mobile menu opens, navigates, and closes.
- Playwright: pause/resume controls work; the OS reduced-motion setting disables animation.
- Playwright: the resume returns a PDF successfully; portrait and campus images load; skip navigation is first in keyboard order.
- Browser console: no warnings or errors during the checks.
- Visual inspection: desktop hero/project wall and mobile hero inspected and corrected for display-font overflow.

External destination availability and the historical achievement metrics were not independently audited. No cloud publication was performed: Sites is not enabled for this workspace.

## Interaction update

The production static export also passed both Playwright page functions on a temporary port (4173), with no browser runtime errors. New checks cover portrait tilt, magnetic CTAs, decryption settling, pointer spotlights, click and keyboard-centered ripples, global pause, OS reduced motion, touch fallback, clipboard success/failure, and scroll progress. Build, TypeScript, and all four content checks passed again. The temporary preview and test browser were closed afterward.

## Scroll and viewport update

The production build, TypeScript, four content checks, and all three Playwright page functions passed. The new viewport check verifies scroll-linked hero movement, first-entry reveals, staggered cards, no replay on re-entry, immediate visibility for keyboard focus, and cancellation through both reduced motion and the pause button. It also checks the stationary mobile collage, horizontal overflow, and readable content with JavaScript disabled. No browser runtime errors occurred. The existing seven-width layout and interaction checks passed again.

Browser checks ran in desktop Chrome with simulated mobile viewports; physical mobile devices and Safari were not tested. No npm processes were started for these checks.

After moving the portfolio to the existing repository root, the production build, TypeScript, all four content tests, and all three browser-check functions passed again against that root export. The temporary preview server and browser were closed after verification.

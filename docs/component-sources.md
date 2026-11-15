# Interaction components

Adapted for this portfolio on 15 November 2026. These are local source adaptations, not embeds or remote runtime dependencies. Motion is the shared spring/layout engine. All decorative effects honor the OS reduced-motion setting and the portfolio’s pause control; touch users keep ordinary taps and scrolling.

| Source                                                                                                                         | Applied here          | Adaptation                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------ | --------------------- | ------------------------------------------------------------------------------------------------------- |
| [React Bits Tilted Card](https://reactbits.dev/components/tilted-card)                                                         | Portrait              | Pointer-relative 3D tilt; limited amplitude, no device sensors or flipped content.                      |
| [React Bits Spotlight Card](https://reactbits.dev/components/spotlight-card)                                                   | Project wall          | Pointer-relative radial highlight inside existing colored cards; no global pointer loop.                |
| [React Bits Magnet](https://reactbits.dev/animations/magnet)                                                                   | Hero and contact CTAs | Bounded pointer attraction and spring return.                                                           |
| [React Bits Decrypted Text](https://reactbits.dev/text-animations/decrypted-text)                                              | Hero “CODE.”          | Short hover scramble, fixed character widths, persistent accessible text, cleaned-up interval.          |
| [Magic UI Ripple Button](https://magicui.design/docs/components/ripple-button)                                                 | Project filters       | Local click ripple, keyboard-centered coordinates, one bounded ripple at a time.                        |
| [Magic UI Scroll Progress](https://magicui.design/docs/components/scroll-progress)                                             | Top edge              | Scroll position mapped directly to a color strip, without scroll smoothing.                             |
| [Kokonut UI Slide Text Button](https://github.com/kokonut-labs/kokonutui/blob/main/components/kokonutui/slide-text-button.tsx) | Main CTA labels       | Grid-based text slide on hover and keyboard focus; native anchor destinations retained.                 |
| [Uiverse / cssbuttons-io](https://uiverse.io/cssbuttons-io/evil-monkey-41)                                                     | Copy email            | Layered front, edge, and shadow press treatment; actual clipboard action with success/failure feedback. |

Discovery also used [21st.dev’s Kokonut UI collection](https://21st.dev/@kokonutd/library/kokonut-ui) and the [shadcn.io Kokonut listing](https://www.shadcn.io/template/kokonut-labs-kokonutui). The linked Magic UI Agent template is a paid template; its code was not copied. The free Magic UI components above were used instead.

Source code reviewed in the official [React Bits](https://github.com/DavidHDev/react-bits), [Magic UI](https://github.com/magicuidesign/magicui), and [Kokonut UI](https://github.com/kokonut-labs/kokonutui) repositories, and Uiverse’s public component editor. The implementations keep only the behavior needed by this portfolio and replace the original styling with the existing design system.

License notices are retained in `docs/licenses/`. React Bits is MIT + Commons Clause: use within this website is permitted; do not resell or redistribute the components as a standalone component library. Magic UI, Kokonut UI, and the Uiverse element use MIT notices.

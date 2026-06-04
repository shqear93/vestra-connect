# Marketing UI Kit — Vestra Connect

A high-fidelity recreation of the **public Vestra Connect landing page** — the surface
that explains the platform and converts both founders and investors.

> **Note:** No marketing site existed at build time; this is an original interpretation
> of the brand brief, not a copy of a shipped page.

## Run it
Open `index.html`. It's a single scrolling landing page with anchored nav links
(For founders · For investors · How it works).

## Sections / components
| Component | What it is |
|---|---|
| `MNav` | Sticky frosted top nav with logo, links, sign-in, primary CTA |
| `Hero` | Serif headline (emerald italic accent), lead, dual CTA, trust strip, floating verified project card + "new introduction" chip |
| `TrustBand` | Four-stat credibility band |
| `Categories` | The three project types — university / small business / tech |
| `HowItWorks` | Three-step flow: profile → readiness → introduction |
| `InvestorBand` | Navy + gold section addressed to investors & partners |
| `FinalCTA` | Closing call to action on the tagline |
| `Footer` | Inverse footer with link columns |

## Files
| File | Contents |
|---|---|
| `index.html` | Mounts React + Babel + Lucide + the JSX |
| `kit.css` | All marketing styles (consumes `../../colors_and_type.css`) |
| `components.jsx` | All section components (exported to `window`) |
| `App.jsx` | Composes the page in order |

## Conventions
- Icons are **Lucide** (CDN), rendered via the `MIcon` component + `lucide.createIcons()`.
- Sentence-case copy throughout; numbers in mono; no emoji.
- Gold is used only in the investor band and premium markers — emerald carries the page.

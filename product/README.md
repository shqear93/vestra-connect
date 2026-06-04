# Vestra Connect — Product Concept (landing + app)

A polished, production-ready **visual direction** for Vestra Connect: a full marketing
landing page plus the core product screens, built as a reusable, shadcn/ui-style
component system on top of the design tokens in `../colors_and_type.css`.

Warm light theme · deep-navy trust · emerald opportunity accent · sparing gold for the
premium/investor layer. Calm hierarchy, soft borders, rounded cards, gentle shadows.

## Open the prototype
Start at **`landing.html`** and click through — every CTA navigates:
- `landing.html` → the full marketing site (14 sections)
- `signup.html` → choose **Entrepreneur** or **Investor**
- `dashboard-entrepreneur.html` → founder home (opportunity, matches, verification)
- `dashboard-investor.html` → curated marketplace with live industry/risk filters
- `opportunity.html?id=<id>` → opportunity detail (overview · traction · team · due
  diligence, with a connect / trust-score / key-facts rail). Opportunity cards link here.

## Pages
| File | Screen |
|---|---|
| `landing.html` | Landing page — hero, trust strip, problem, solution, marketplace, for-entrepreneurs, for-investors, how-it-works, features, dashboard preview, testimonials, pricing, final CTA, footer |
| `signup.html` | Sign-up choice (Entrepreneur vs Investor) |
| `dashboard-entrepreneur.html` | Entrepreneur dashboard |
| `dashboard-investor.html` | Investor dashboard / marketplace |
| `opportunity.html` | Opportunity details page |

## Component system (shadcn/ui-style)
| Layer | File |
|---|---|
| Component CSS (Button, Card, Badge, Tabs, Input, Avatar, Progress, Table, TrustScore, sections) | `ui.css` |
| Landing-only styles (nav, hero, footer, section visuals) | `landing.css` |
| App shell styles (sidebar, topbar, choice, detail) | `app.css` |
| Primitives + domain components (`Button`, `Badge`, `RiskBadge`, `Verified`, `Avatar`, `Progress`, `Tabs`, `TrustScore`, `Stat`, `OpportunityCard`) | `lib.jsx` |
| Marketing nav + footer | `marketing.jsx` |
| App sidebar + topbar | `appshell.jsx` |
| Landing sections | `landing-1.jsx` · `landing-2.jsx` · `landing-3.jsx` |
| Sample data | `data.jsx` |

### Reusable components worth lifting
- **`OpportunityCard`** — the signature listing card (logo, industry, verified badge,
  stage + risk, ask, committed progress, investor count).
- **`TrustScore`** — conic-gradient trust ring (0–100).
- **`RiskBadge` / `Verified`** — the trust vocabulary, emerald + gold.
- **`Sidebar` / `Topbar`** — app chrome, role-aware (entrepreneur vs investor).
- **`Stat`** — dashboard metric tile.

## Conventions
- Icons are **Lucide** (CDN), rendered via the `Icon` component + `lucide.createIcons()`
  in a `useLucide()` effect on each page root.
- Each Babel script exports to `window` so sibling scripts share components.
- All color / spacing / type come from the design tokens — no hard-coded hex.
- Sentence-case copy, mono tabular numbers, **no emoji**. Currency is **JOD**.

## Notes
- This is a **visual direction / hi-fi prototype**, not production code — interactions
  are cosmetic (filters and a few toggles are live; auth/messaging are mocked).
- Sample companies and people are fictional.

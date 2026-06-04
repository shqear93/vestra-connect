# Platform UI Kit — Vestra Connect

A high-fidelity, interactive recreation of the **logged-in Vestra Connect platform**:
the discovery feed, project profiles, the readiness signal, and the trusted-introduction
flow.

> **Note:** Vestra Connect had no application code at build time, so this kit is an
> original interpretation of the brand brief — *not* a copy of a shipped product. Treat
> it as a strong starting point and re-ground it against real code when one exists.

## Run it
Open `index.html`. It's a click-through prototype:
1. **Discover feed** — filter by category, drag the readiness slider, sort.
2. Click any **project card** → opens the **project profile** (about, team, readiness
   meter, funding ask).
3. Click **Request introduction** → the **intro modal** with a pre-filled note and a
   success state.

## Files
| File | Contents |
|---|---|
| `index.html` | Mounts React + Babel + Lucide and the JSX below |
| `kit.css` | All platform component styles (consumes `../../colors_and_type.css`) |
| `data.jsx` | Sample projects (`window.VC_PROJECTS`) — one per category |
| `components.jsx` | `Icon`, `VerifiedBadge`, `PremiumBadge`, `ReadinessMeter`, `TopNav`, `FilterSidebar`, `ProjectCard` |
| `screens.jsx` | `Feed`, `Profile`, `IntroModal` |
| `App.jsx` | Root state machine (tab · open project · intro modal) |

## Components worth reusing
- **`ProjectCard`** — the signature discovery card (thumb, category, verified badge,
  ask / committed / signals, readiness track).
- **`ReadinessMeter`** — structured 0–100 score; dimensions under 70 turn gold.
- **`TopNav` / `FilterSidebar`** — app chrome with frosted sticky nav.
- **`IntroModal`** — the trusted-introduction request + confirmation.

## Conventions
- Icons are **Lucide** (CDN). The `Icon` component renders `<i data-lucide>`; the app
  calls `lucide.createIcons()` in a `useEffect` after every render.
- Each JSX file exports its components to `window` so sibling Babel scripts can use them.
- All color/spacing/type comes from the design tokens — no hard-coded hex.

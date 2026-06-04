---
name: vestra-connect-design
description: Use this skill to generate well-branded interfaces and assets for Vestra Connect — Jordan's trusted network for projects, founders, and investors — either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

# Vestra Connect — Design Skill

Read the `README.md` file within this skill first — it covers product context, brand
voice (CONTENT FUNDAMENTALS), VISUAL FOUNDATIONS, and ICONOGRAPHY. Then explore the
other files:

- `colors_and_type.css` — design tokens (color ramps + semantic colors, type scale,
  radii, shadows, spacing, motion). Link this in any artifact and use the CSS variables
  rather than hard-coded values.
- `assets/` — logos and the Vestra connection mark (light + inverse).
- `preview/` — small specimen cards showing each foundation in use.
- `ui_kits/marketing/` — landing-page components (hero, categories, how-it-works,
  investor band, footer).
- `ui_kits/platform/` — logged-in app components (discovery feed, project card,
  readiness meter, project profile, intro modal).

## How to work
- **Visual artifacts (slides, mocks, throwaway prototypes):** copy the assets you need
  out of this skill and produce static/standalone HTML files for the user to view. Lift
  components from the UI kits rather than rebuilding them.
- **Production code:** copy assets and apply the rules here to design on-brand. Mirror
  the token names and component structure.

## Brand guardrails (quick reference)
- **Tone:** professional, clear, confident, supportive. Sentence case. No emoji.
- **Color:** deep navy (`--ink-800`) for trust, warm paper (`--paper-50`) canvas,
  emerald (`--emerald-600`) as the single growth/opportunity accent, gold
  (`--gold-500`) used sparingly for the premium/investor layer.
- **Type:** Spectral (serif display, CDN), Proxima Nova (UI/body — official brand sans,
  self-hosted in `/fonts`), IBM Plex Mono (data, readiness, labels, CDN).
- **Icons:** Lucide, line style, ~1.75px stroke, `currentColor`. *Chosen — confirm.*
- **Surfaces:** white/warm-white rounded cards (16–20px radius), soft navy-tinted
  shadows, warm hairline borders. Calm motion (220ms ease-out), no bounce.
- Trust mechanics recur everywhere: **verification badges**, **readiness signals**,
  **trusted introductions**. Currency is **JOD**.

If the user invokes this skill without other guidance, ask what they want to build, ask
a few focused questions, then act as an expert Vestra Connect designer who outputs HTML
artifacts or production code as needed.

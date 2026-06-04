# Vestra Connect — Design System

> **Where Jordan's projects meet opportunity.**
> Vestra Connect is a trusted professional network that connects serious projects —
> university innovations, small businesses, and tech builders — with investors and
> opportunity partners in Jordan. Think *"LinkedIn for investment and projects in
> Jordan,"* not a crowdfunding site.

This repository is a **brand & design system**: foundations (color, type, spacing,
shadows), reusable UI components, and ready-to-use HTML so any designer or agent can
produce on-brand Vestra Connect interfaces, marketing pages, and decks.

---

## ⚠️ Important context for the reader

**This system was built from a written brand brief, not from an existing product.**
The source GitHub repository —
[`shqear93/vestra-connect`](https://github.com/shqear93/vestra-connect) — currently
contains only a `README.md` and `LICENSE`; there is **no application code, Figma file,
or token source** to reverse-engineer. Explore that repo for the latest source if the
team has since added a codebase. Everything here is an *original interpretation* of the
brand direction and is intended as a strong, opinionated starting point to iterate on.

Because there were no brand fonts or assets to import, this system makes deliberate,
flag-it-clearly substitutions (see **Typography** and **Iconography**).

---

## 1. Product context

Vestra Connect serves a two-sided professional network:

- **Project owners** — student innovators, small-business owners, and tech founders —
  showcase *structured, verified opportunities*: a profile, a readiness signal, the
  ask, traction, and the team.
- **Investors & opportunity partners** — discover credible local projects through
  profiles, readiness scoring, verification badges, and *trusted introductions* rather
  than cold outreach.

Three project categories shape much of the UI taxonomy:

| Category | Tone | Typical signal |
|---|---|---|
| **University projects** | Promising, early, academic credibility | Faculty backing, prototype, research |
| **Small businesses** | Operating, revenue-bearing, local | Revenue, customers, expansion plan |
| **Tech projects** | Scalable, product-led | MRR, users, technical readiness |

The experience is built around three trust mechanics that recur everywhere:
1. **Verification badges** (identity / business / project verified)
2. **Readiness signals** (a structured 0–100 score across dimensions)
3. **Trusted introductions** (warm, mutual-connection-based intros — never spam)

### Products represented in this system
- **Marketing site** — the public landing experience that explains the platform and
  drives sign-ups for both sides. → `ui_kits/marketing/`
- **The platform (web app)** — the logged-in network: discovery feed, project profile
  cards, investor↔project matching, and verification UI. → `ui_kits/platform/`

---

## 2. Sources

- **GitHub:** https://github.com/shqear93/vestra-connect *(brief only — no code at time of build)*
- **Brand brief:** provided by the Vestra Connect team (premium / modern / trustworthy /
  calm direction, color & voice guidance, taglines).

Explore the GitHub repository further if you want to build designs closer to a future
production implementation — this system should be re-grounded against real code or a
Figma file once one exists.

---

## 3. CONTENT FUNDAMENTALS — how Vestra writes

The voice is **professional, clear, confident, and supportive** — serious enough for
institutional investors, welcoming enough for a final-year student or a family business
owner. It earns trust by being *plain and specific*, never hype-y.

**Person & address**
- Speak to the reader as **"you"**; refer to the platform as **"Vestra Connect"** or
  **"Vestra."** Avoid "we" in product UI; use it sparingly in marketing ("We verify
  every project").
- Address both sides plainly: *"Showcase your project."* / *"Discover credible
  projects."*

**Tone & casing**
- **Sentence case everywhere** — headings, buttons, menu items. (`Showcase your project`,
  not `Showcase Your Project`.) The only uppercase is the **mono eyebrow/overline**
  label (`READINESS SIGNAL`, `VERIFIED PROJECT`) used as a small structural tag.
- Calm and declarative. Short sentences. One idea per line.
- Confident, not boastful: *"Built for serious projects,"* not *"The #1 platform!!!"*

**Vocabulary**
- Preferred nouns: **project, founder, investor, opportunity, readiness, verification,
  introduction, partner, traction.**
- Say **"opportunity"** and **"introduction,"** not "deal" or "lead." Say **"project,"**
  not "startup" or "campaign." Never "crowdfunding," "backers," or "pledges" — Vestra is
  a network, not a funding portal.

**Numbers & data**
- Numbers are set in **mono, tabular** for credibility: `82` readiness, `JOD 45K` ask,
  `3 verified` signals. Currency is **JOD** (Jordanian Dinar), written `JOD 45,000` or
  `45K JOD` in tight spaces.

**Emoji:** **None.** Vestra never uses emoji in product or marketing copy. Status and
meaning are carried by icons and badges, not emoji.

**Examples**
- Hero: *"Where Jordan's projects meet opportunity."*
- Sub: *"A trusted network connecting verified projects with the investors and partners
  who can move them forward."*
- Button: `Showcase your project` · `Explore projects` · `Request introduction`
- Empty state: *"No introductions yet. When an investor requests one, it'll appear
  here."*
- Trust microcopy: *"Verified by Vestra — identity and project details confirmed."*

---

## 4. VISUAL FOUNDATIONS

The look is **premium, calm, and trustworthy** — generous white space, warm paper
backgrounds, navy structure, and a single growth-green accent with a restrained gold
highlight for the investor/premium layer.

**Color**
- **Deep navy (`--ink-800` `#102A43`)** is the trust anchor: primary text, dark
  sections, the footer, primary-on-dark surfaces.
- **Warm paper (`--paper-50` `#F6F2EC`)** is the canvas — never stark white at the page
  level. Cards sit on it in **white / warm-white**, which creates calm separation
  without heavy borders.
- **Emerald (`--emerald-600` `#0E7C5A`)** is the *opportunity / growth / verification*
  accent — the single dominant brand color. Used for primary buttons, verified badges,
  links, readiness progress.
- **Gold (`--gold-500` `#C2A24E`)** is the *premium / investor* highlight — used
  sparingly: investor-tier badges, premium markers, a thin rule under a hero word. Never
  as a large fill.
- **Clay (`#A8482F`)** is the warm, muted danger/warning color — we never use a bright
  alarming red.
- Semantic tints are very light (`--emerald-50`, `--gold-50`) for badge and callout
  backgrounds.

**Typography**
- **Spectral** (serif) — display & headings. Calm, editorial, credible; gives gravitas. *(CDN / Google Fonts — chosen, no brand file yet.)*
- **Proxima Nova** (sans) — all UI, body, labels. The **official brand sans**, self-hosted from `/fonts` (full family: Thin 100, Light 300, Regular 400, Medium 500, Semibold 600, Bold 700, Extrabold 800, Black 900). Clean, geometric, premium.
- **IBM Plex Mono** — data, metrics, readiness scores, verification IDs, and uppercase
  eyebrow labels. The mono treatment of numbers is a signature trust cue.
- Headings use tight tracking (`-0.02em`); body is relaxed (`line-height 1.65`).

**Spacing & layout**
- 4px base scale (`--space-*`). Sections breathe: `80–128px` vertical rhythm on
  marketing, `24–32px` inside app cards.
- Max content width `1200px`; fluid gutters. Strong left-alignment; symmetrical,
  grid-driven — not diagonal or grid-breaking. Calm > clever.

**Backgrounds**
- Flat warm paper, occasionally a **very subtle** navy section for contrast or a faint
  emerald tint behind a trust callout. **No** loud gradients, no purple/blue mesh, no
  hand-drawn illustration, no photographic full-bleed by default (photography, when
  added, is warm-toned and editorial — see Iconography).
- Optional faint grid / dotted texture at very low opacity on dark sections only.

**Corner radii & cards**
- Cards: `--radius-lg` (16px) to `--radius-xl` (20px), white/warm-white fill, **soft
  navy-tinted shadow** (`--shadow-md`) and a **hairline warm border** (`--border-default`).
  Rounded, soft, premium — never sharp corners, never heavy 1px black borders.
- Buttons & inputs: `--radius-md` (12px). Pills/badges: `--radius-pill`.

**Shadows & elevation**
- Soft, navy-tinted, multi-layer (`--shadow-sm → --shadow-xl`). Elevation communicates
  hierarchy gently. Primary emerald buttons get a faint colored shadow (`--shadow-emerald`)
  on hover.

**Borders**
- Warm hairlines (`#E4DDD1`), not gray. Dividers are low-contrast. On dark navy,
  borders are `rgba(255,255,255,0.12)`.

**Motion**
- Calm and short. `--dur-base 220ms` with `--ease-out`. Fades and 4–8px rises on
  reveal; gentle 1.01 scale or shadow lift on card hover. **No bounce, no spring, no
  parallax.** Respect `prefers-reduced-motion`.

**Hover / press states**
- **Hover:** primary buttons darken one step (`--accent → --accent-hover`) and lift with
  a soft emerald shadow; cards lift shadow + border darkens slightly; links gain an
  underline.
- **Press:** darken a further step (`--accent-press`) and settle (translateY 0 / scale
  0.99). Subtle, never a big squish.
- **Focus:** 3px emerald focus ring (`--shadow-focus`) — always visible for
  accessibility.

**Transparency & blur**
- Used sparingly: a frosted (`backdrop-filter: blur`) sticky top nav over paper, and
  light scrim overlays on modals. Not a decorative motif.

**Imagery vibe**
- Warm, natural light; real people and workspaces in Jordan; editorial, not stock-cheesy.
  Slightly warm color grade to sit with the paper palette. Avoid cold blue corporate
  stock.

---

## 5. ICONOGRAPHY

**No icon set existed in the source repo**, so this system standardizes on
**[Lucide](https://lucide.dev)** — an open-source, MIT-licensed icon family with a
clean **1.75px stroke**, rounded line caps, and a calm geometric feel that matches the
premium-but-approachable tone. Lucide is loaded **from CDN** (`unpkg`/`jsDelivr`) in the
UI kits. **This is a flagged substitution** — if Vestra adopts a bespoke icon set, swap
the CDN reference and document it here.

Rules:
- **Line (stroke) icons only**, ~1.75px weight, `currentColor` so they inherit text
  color (navy by default, emerald when active/verified, gold for premium).
- Sizes: `16` (inline/labels), `20` (buttons, nav), `24` (feature/section). Never mix
  filled and outline styles in one cluster.
- **Verification** uses Lucide `badge-check` / `shield-check` rendered in emerald; the
  **premium/investor** marker uses a gold accent.
- **No emoji. No unicode glyph icons.** Meaning is carried by Lucide icons + text labels.
- The **logo** is a custom wordmark + "connection node" mark stored in `assets/`
  (`logo-*.svg`). It's the only bespoke vector in the system.

See `assets/` for logos and the brand mark. Decorative/feature icons in the UI kits are
Lucide; product logos and the Vestra mark are local SVGs.

---

## 6. Index — what's in this system

| File / folder | What it is |
|---|---|
| `README.md` | This document — context, voice, foundations, iconography, index |
| `colors_and_type.css` | All design tokens: color ramps + semantic colors, type scale, radii, shadows, spacing, motion |
| `SKILL.md` | Agent-Skill manifest so this system can be used as a Claude Skill |
| `assets/` | Logos, brand mark, and any imagery |
| `preview/` | Small HTML specimen cards that populate the Design System tab |
| `ui_kits/marketing/` | Marketing-site UI kit — landing page recreation + components |
| `ui_kits/platform/` | Platform (web-app) UI kit — discovery feed, project profile, matching |
| `product/` | **Full product concept** — complete landing page + signup, entrepreneur & investor dashboards, and opportunity detail, built as a shadcn/ui-style component system on the tokens |

### Quick start
1. Link the tokens: `<link rel="stylesheet" href="colors_and_type.css">`.
2. Use semantic CSS variables (`var(--accent)`, `var(--fg-strong)`, `var(--radius-lg)`)
   — avoid hard-coded hex.
3. Headings → `.vc-h1`/`.vc-h2` (Spectral); body → `.vc-body` (Proxima Nova);
   data/labels → `.vc-mono` / `.vc-eyebrow`.
4. For full components, open a `ui_kits/*/index.html` and lift the JSX components.

---

## 7. Caveats

- Built from a **brief, not a product** — treat as a strong v1 to validate with the team.
- **Proxima Nova** (brand sans) is the **official uploaded typeface**, self-hosted from
  `/fonts`. **Spectral** (serif display) and **IBM Plex Mono** remain CDN-loaded chosen
  fonts, and **icons (Lucide)** are a chosen substitution — please confirm or replace.
- No real photography is bundled; imagery slots use placeholders to be filled with
  warm, editorial Jordan-based photos.

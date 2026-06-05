/* Vestra Connect premium landing — content */
const CATEGORIES = [
  {
    ic: "graduation-cap", tag: "University projects",
    h: "Academic innovation",
    p: "Student innovators showcase prototypes and research with faculty backing — turning academic work into credible, investable opportunities.",
    n: "120+", l: "projects from 6 universities",
  },
  {
    ic: "store", tag: "Small businesses",
    h: "Local & operating",
    p: "Revenue-bearing businesses raise to expand — with transparent numbers, a clear growth plan, and verified financials.",
    n: "JOD 4.8M", l: "raised to expand locally",
  },
  {
    ic: "cpu", tag: "Tech projects",
    h: "Product-led & scalable",
    p: "Founders share traction, recurring revenue, and technical readiness with investors who understand how to scale.",
    n: "41", l: "tech projects funded",
  },
];

const STEPS = [
  { h: "Build your profile", p: "Create a structured project profile — the ask, traction, and team — then complete identity and business verification to earn trust badges.", icon: "shield-check", lbl: "Identity verified" },
  { h: "Earn your readiness signal", p: "Vestra scores your project across team, traction, verification, and financial clarity — a single signal investors learn to trust.", icon: "gauge", lbl: "Readiness scored" },
  { h: "Get trusted introductions", p: "Credible investors discover you and request warm introductions through mutual connections. No cold outreach, ever.", icon: "handshake", lbl: "Warm intro sent" },
];

const STATS = [
  { n: 340, suffix: "+", l: "Verified projects on the network", icon: "shield-check", variant: "info", trend: "+12%", trendNote: "this quarter" },
  { n: 12, prefix: "JOD ", suffix: "M", l: "Opportunity listed to date", icon: "trending-up", variant: "success", trend: "+8%", trendNote: "than last month" },
  { n: 900, suffix: "+", l: "Investors & opportunity partners", icon: "users", variant: "rose", trend: "+24%", trendNote: "year over year" },
  { n: 94, suffix: "%", l: "Introductions accepted as warm", icon: "handshake", variant: "warn", trend: "+3%", trendNote: "than last month" },
];

const FEATURE_ROWS = [
  {
    eyebrow: "Verified profiles",
    h: "Every project is who it says it is.",
    p: "Identity and business verification happen before a project ever reaches an investor — so the people you meet, and the numbers you see, are real.",
    li: ["Government-ID and business-registry checks", "Confirmed founders, team, and ownership", "A verification badge investors recognise"],
    cta: "How verification works",
    slot: "feature-verify",
    badge: { ic: "badge-check", grad: "g-success", t: "Identity verified", s: "Confirmed by Vestra", pos: "tl" },
  },
  {
    eyebrow: "Trusted introductions",
    h: "Warm intros — never cold outreach.",
    p: "Credible investors discover your project and request an introduction through mutual, opted-in connections. You stay in control of who you meet.",
    li: ["Mutual-connection, opt-in introductions", "No cold spam, ever", "Context shared before you connect"],
    cta: "See how intros happen",
    slot: "feature-intro",
    flip: true,
    badge: { ic: "sparkles", grad: "g-rose", t: "New introduction", s: "An investor wants to connect", pos: "br" },
  },
];

const DIMENSIONS = [
  { l: "Team & founders", v: 90, icon: "users" },
  { l: "Traction & revenue", v: 78, icon: "trending-up" },
  { l: "Verification", v: 100, icon: "badge-check" },
  { l: "Financial clarity", v: 72, icon: "file-check" },
];

const READY_POINTS = [
  { ic: "layers", b: "Four weighted dimensions", s: "Team, traction, verification, and financial clarity roll up into one 0–100 signal." },
  { ic: "lock", b: "Evidence, not claims", s: "Every dimension is backed by verified documents — investors see what's confirmed." },
  { ic: "refresh-cw", b: "Always current", s: "The score updates as a project ships traction and completes verification steps." },
];

const FEATURED = [
  {
    banner: "green", logo: "B", cat: "Small business · Agri-food", name: "Baladi olive cooperative",
    desc: "A 40-farmer cooperative bringing cold-pressed Jordanian olive oil to regional retail.",
    stats: [{ n: "JOD 120K", l: "Funding ask" }, { n: "JOD 310K", l: "Revenue" }], ready: 88,
  },
  {
    banner: "default", logo: "N", cat: "Tech · Logistics", name: "Nuqta delivery OS",
    desc: "Routing and dispatch software for Amman's independent couriers, with live tracking.",
    stats: [{ n: "JOD 90K", l: "Funding ask" }, { n: "2.4K", l: "Monthly users" }], ready: 82,
  },
  {
    banner: "gold", logo: "H", cat: "University · Health-tech", name: "Hayat diagnostics",
    desc: "A JUST research team's low-cost anemia screening device, prototype validated in clinic.",
    stats: [{ n: "JOD 60K", l: "Funding ask" }, { n: "3", l: "Patents filed" }], ready: 76,
  },
];

const PROOF = [
  { ic: "building-2", t: "King Hussein Fund" },
  { ic: "landmark", t: "Jordan Innovation" },
  { ic: "graduation-cap", t: "JUST Ventures" },
  { ic: "briefcase", t: "Oasis500" },
  { ic: "globe", t: "MENA Angels" },
];

Object.assign(window, { CATEGORIES, STEPS, STATS, FEATURE_ROWS, DIMENSIONS, READY_POINTS, FEATURED, PROOF });

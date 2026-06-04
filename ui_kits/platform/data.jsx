/* Vestra Connect — sample platform data */
const VC_PROJECTS = [
  {
    id: 'solar',
    name: 'Solar microgrid for rural clinics',
    category: 'University', sector: 'Renewable energy',
    initial: 'S', grad: 'linear-gradient(135deg,#173A57,#102A43)',
    verified: true,
    desc: 'A student-led pilot bringing reliable solar power to three clinics in Irbid, with faculty backing and a working prototype now in its second deployment.',
    ask: 'JOD 45K', askFull: 'JOD 45,000', raised: 28, signals: 3, readiness: 82,
    location: 'Irbid, Jordan', stage: 'Prototype · Pilot',
    dims: [
      { k: 'Team & founders', v: 90 },
      { k: 'Traction & proof', v: 78 },
      { k: 'Verification', v: 95 },
      { k: 'Financial clarity', v: 64 },
    ],
    team: [
      { initial: 'LA', nm: 'Layla Al-Amri', rl: 'Founder · Electrical Engineering, JUST' },
      { initial: 'OK', nm: 'Omar Khalil', rl: 'Co-founder · Operations' },
      { initial: 'DR', nm: 'Dr. Rania Saleh', rl: 'Faculty advisor' },
    ],
  },
  {
    id: 'olive',
    name: 'Baladi — premium olive oil cooperative',
    category: 'Small business', sector: 'Agri-food',
    initial: 'B', grad: 'linear-gradient(135deg,#0B6B4F,#0A5640)',
    verified: true,
    desc: 'A revenue-generating cooperative of 40 farming families near Ajloun, expanding cold-press capacity and launching a verified export line.',
    ask: 'JOD 120K', askFull: 'JOD 120,000', raised: 55, signals: 4, readiness: 88,
    location: 'Ajloun, Jordan', stage: 'Operating · Revenue',
    dims: [
      { k: 'Team & founders', v: 84 },
      { k: 'Traction & proof', v: 92 },
      { k: 'Verification', v: 90 },
      { k: 'Financial clarity', v: 86 },
    ],
    team: [
      { initial: 'NH', nm: 'Nadia Haddad', rl: 'Managing director' },
      { initial: 'YF', nm: 'Yousef Freij', rl: 'Operations & supply' },
    ],
  },
  {
    id: 'tareeq',
    name: 'Tareeq — logistics routing for SMEs',
    category: 'Tech', sector: 'Logistics SaaS',
    initial: 'T', grad: 'linear-gradient(135deg,#244E6E,#173A57)',
    verified: false,
    desc: 'A B2B routing platform helping Jordanian distributors cut last-mile costs. Live with 12 paying customers and growing recurring revenue.',
    ask: 'JOD 200K', askFull: 'JOD 200,000', raised: 40, signals: 2, readiness: 71,
    location: 'Amman, Jordan', stage: 'Early revenue · SaaS',
    dims: [
      { k: 'Team & founders', v: 80 },
      { k: 'Traction & proof', v: 74 },
      { k: 'Verification', v: 55 },
      { k: 'Financial clarity', v: 76 },
    ],
    team: [
      { initial: 'RM', nm: 'Rami Mansour', rl: 'CEO · ex-Aramex' },
      { initial: 'SA', nm: 'Sara Atieh', rl: 'CTO' },
    ],
  },
];
window.VC_PROJECTS = VC_PROJECTS;

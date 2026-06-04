/* Vestra Connect — marketing components */
function MIcon({ name, className, style }) {
  return <i data-lucide={name} className={className} style={style}></i>;
}

function MNav() {
  return (
    <header className="mnav">
      <div className="wrap mnav__in">
        <img className="mnav__logo" src="../../assets/logo-wordmark.svg" alt="Vestra Connect" />
        <nav className="mnav__links">
          <a href="#categories">For founders</a>
          <a href="#investors">For investors</a>
          <a href="#how">How it works</a>
        </nav>
        <div className="mnav__cta">
          <a className="mnav__signin" href="#">Sign in</a>
          <button className="btn btn--primary">Get started</button>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div className="wrap hero__grid">
        <div>
          <span className="eyebrow">Jordan's trusted project network</span>
          <h1>Where Jordan's projects meet <em>opportunity</em>.</h1>
          <p className="hero__lead">A trusted network connecting verified projects with the investors and partners who can move them forward.</p>
          <div className="hero__cta">
            <button className="btn btn--primary"><MIcon name="arrow-right" />Showcase your project</button>
            <button className="btn btn--secondary">Explore projects</button>
          </div>
          <div className="hero__trust">
            <div className="ti"><MIcon name="shield-check" /><span>Every project verified</span></div>
            <div className="ti"><MIcon name="gauge" /><span>Structured readiness signals</span></div>
            <div className="ti"><MIcon name="handshake" /><span>Trusted introductions</span></div>
          </div>
        </div>
        <div className="hero__visual">
          <div className="fcard">
            <div className="fcard__top">
              <div className="fcard__logo">B</div>
              <div>
                <span className="fcard__cat">Small business · Agri-food</span>
                <h3>Baladi olive cooperative</h3>
              </div>
            </div>
            <span className="vbadge"><MIcon name="shield-check" />Verified project</span>
            <div className="fcard__row">
              <div><div className="n">JOD 120K</div><div className="l">Funding ask</div></div>
              <div><div className="n" style={{textAlign:'right'}}>88</div><div className="l">Readiness</div><div className="track"><div className="fill" style={{width:'88%'}}></div></div></div>
            </div>
          </div>
          <div className="float-chip float-chip--match">
            <MIcon name="sparkles" />
            <div><div className="t">New introduction</div><div className="s">An accredited investor wants to connect</div></div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustBand() {
  const stats = [
    { n: '340+', l: 'Verified projects' },
    { n: 'JOD 12M', l: 'Opportunity listed' },
    { n: '900+', l: 'Investors & partners' },
    { n: '11', l: 'Governorates' },
  ];
  return (
    <div className="tband"><div className="wrap tband__in">
      {stats.map((s) => <div className="stat" key={s.l}><div className="n">{s.n}</div><div className="l">{s.l}</div></div>)}
    </div></div>
  );
}

function Categories() {
  const c = [
    { ic: 'graduation-cap', h: 'University projects', p: 'Student innovators showcase prototypes and research with faculty backing — turning academic work into credible opportunities.' },
    { ic: 'store', h: 'Small businesses', p: 'Operating, revenue-bearing local businesses raise to expand — with transparent numbers and a clear growth plan.' },
    { ic: 'cpu', h: 'Tech projects', p: 'Product-led founders share traction, recurring revenue, and technical readiness with investors who understand scale.' },
  ];
  return (
    <section className="section" id="categories"><div className="wrap">
      <div className="section__head">
        <span className="eyebrow">Built for three kinds of project</span>
        <h2>Serious projects, structured and verified.</h2>
        <p>Whatever stage you're at, Vestra gives your project a credible profile that the right people can trust.</p>
      </div>
      <div className="cats">
        {c.map((x) => (
          <div className="ccard" key={x.h}>
            <div className="ccard__ic"><MIcon name={x.ic} /></div>
            <h3>{x.h}</h3>
            <p>{x.p}</p>
            <a href="#">Explore projects <MIcon name="arrow-right" /></a>
          </div>
        ))}
      </div>
    </div></section>
  );
}

function HowItWorks() {
  const s = [
    { h: 'Build your profile', p: 'Create a structured project profile — the ask, traction, and team. Complete verification to earn trust badges.' },
    { h: 'Earn your readiness signal', p: 'Vestra scores your project across team, traction, verification, and financial clarity — a signal investors trust.' },
    { h: 'Get trusted introductions', p: 'Credible investors discover you and request warm introductions through mutual connections. No cold outreach.' },
  ];
  return (
    <section className="section" id="how" style={{ background: 'var(--bg-surface-warm)', borderTop: '1px solid var(--border-default)', borderBottom: '1px solid var(--border-default)' }}><div className="wrap">
      <div className="section__head">
        <span className="eyebrow">How it works</span>
        <h2>From profile to introduction in three steps.</h2>
      </div>
      <div className="steps">
        {s.map((x, i) => (
          <div className="step" key={x.h}>
            <div className="step__n">{i + 1}</div>
            <h3>{x.h}</h3>
            <p>{x.p}</p>
          </div>
        ))}
      </div>
    </div></section>
  );
}

function InvestorBand() {
  const li = [
    { b: 'Verified deal flow', s: 'Every project passes identity and detail verification before it reaches you.' },
    { b: 'Readiness signals', s: 'A structured 0–100 score across the dimensions that matter — at a glance.' },
    { b: 'Warm introductions', s: 'Connect through mutual, opted-in introductions — never cold spam.' },
  ];
  return (
    <section className="section" id="investors"><div className="wrap">
      <div className="invest"><div className="invest__in">
        <div>
          <span className="eyebrow">For investors &amp; partners</span>
          <h2>Discover credible Jordanian projects, with confidence.</h2>
          <p>Vestra brings structure and trust to local opportunity — so you spend time on real projects, not chasing leads.</p>
          <button className="btn btn--light"><MIcon name="star" />Request investor access</button>
        </div>
        <div className="invest__list">
          {li.map((x) => (
            <div className="invest__li" key={x.b}><MIcon name="check-circle-2" /><div><b>{x.b}</b><span>{x.s}</span></div></div>
          ))}
        </div>
      </div></div>
    </div></section>
  );
}

function FinalCTA() {
  return (
    <section className="fcta"><div className="wrap">
      <h2>Connecting serious projects with the right people.</h2>
      <p>Join Vestra Connect — Jordan's trusted network for projects, founders, and investors.</p>
      <div className="fcta__cta">
        <button className="btn btn--primary"><MIcon name="arrow-right" />Showcase your project</button>
        <button className="btn btn--secondary">Explore projects</button>
      </div>
    </div></section>
  );
}

function Footer() {
  const cols = [
    { h: 'Platform', items: ['Discover projects', 'For founders', 'For investors', 'Readiness signals'] },
    { h: 'Company', items: ['About', 'Trust & verification', 'Careers', 'Contact'] },
    { h: 'Resources', items: ['Help center', 'Guides', 'Privacy', 'Terms'] },
  ];
  return (
    <footer className="footer"><div className="wrap">
      <div className="footer__grid">
        <div>
          <img className="footer__logo" src="../../assets/logo-wordmark-inverse.svg" alt="Vestra Connect" />
          <p>Jordan's trusted network for projects, founders, and investors.</p>
        </div>
        {cols.map((c) => (
          <div key={c.h}><h4>{c.h}</h4><ul>{c.items.map((i) => <li key={i}><a href="#">{i}</a></li>)}</ul></div>
        ))}
      </div>
      <div className="footer__bar">
        <span>© 2026 Vestra Connect. Amman, Jordan.</span>
        <span>Built on trust, opportunity, and credibility.</span>
      </div>
    </div></footer>
  );
}

Object.assign(window, { MIcon, MNav, Hero, TrustBand, Categories, HowItWorks, InvestorBand, FinalCTA, Footer });

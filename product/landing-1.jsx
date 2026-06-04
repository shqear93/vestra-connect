/* VESTRA CONNECT — landing hero + early sections */

function Hero() {
  const o = window.VC_OPPS[0];
  return (
    <section className="hero hero--center">
      <div className="hero__glow"></div>
      <div className="hero__glow2"></div>
      <div className="wrap hero__center">
        <div className="hero__pill"><span className="tag">New</span>Curated investor matching is live in Amman<Icon name="arrow-right" /></div>
        <h1 className="h-display hero__title">Where ambitious founders<br/>meet the <em>right investors</em>.</h1>
        <p className="hero__lead lead">Vestra Connect helps entrepreneurs present their ventures, investors discover curated opportunities, and both sides move from interest to serious conversations — with confidence.</p>
        <div className="hero__cta">
          <a className="btn btn--primary btn--lg" href="signup.html">Start as Entrepreneur<Icon name="arrow-right" /></a>
          <a className="btn btn--secondary btn--lg" href="signup.html">Explore as Investor</a>
        </div>
        <div className="hero__sub"><Icon name="shield-check" />Every founder verified · curated investors · secure conversations</div>
      </div>

      <div className="wrap hero__stage">
        <div className="matchcard">
          <div className="matchcard__bar">
            <div className="matchcard__dots"><i></i><i></i><i></i></div>
            <span className="matchcard__title">vestra · opportunity match</span>
          </div>
          <div className="matchcard__body">
            <div className="matchcard__split">
              <div className="matchcard__opp">
                <div style={{ display:'flex', alignItems:'center', gap:12, marginBottom:14 }}>
                  <span className="avatar avatar--lg" style={{ borderRadius:'var(--radius-md)', background:o.grad, fontFamily:'var(--font-display)', fontSize:22 }}>{o.initial}</span>
                  <div style={{ flex:1, minWidth:0 }}>
                    <div className="card-t serif" style={{ fontSize:18 }}>{o.name}</div>
                    <div className="subtle" style={{ fontSize:12.5 }}>{o.industry} · {o.location}</div>
                  </div>
                  <Verified small />
                </div>
                <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:10, marginBottom:14 }}>
                  <MiniStat label="Ask" value={o.ask} />
                  <MiniStat label="Stage" value={o.stage} />
                  <MiniStat label="Risk" value={o.risk} />
                </div>
                <div style={{ display:'flex', alignItems:'center', gap:12, padding:'13px 14px', background:'var(--emerald-50)', border:'1px solid var(--emerald-200)', borderRadius:'var(--radius-md)' }}>
                  <TrustScore value={o.trust} />
                  <div style={{ flex:1 }}>
                    <div style={{ fontSize:13, fontWeight:600, color:'var(--emerald-800)' }}>Trust score {o.trust}/100</div>
                    <div style={{ fontSize:12, color:'var(--emerald-700)' }}>Verified profile · manual review passed</div>
                  </div>
                  <span className="btn btn--primary btn--sm" style={{ pointerEvents:'none' }}>Match</span>
                </div>
              </div>
              <div className="matchcard__side">
                <div className="matchcard__sideh"><span className="mono">RECOMMENDED INVESTORS</span></div>
                {window.VC_INVESTORS.slice(0,3).map((iv) => (
                  <div className="matchrow" key={iv.name}>
                    <span className="avatar" style={{ background:iv.grad }}>{iv.initial}</span>
                    <div style={{ flex:1, minWidth:0 }}>
                      <div className="matchrow__nm">{iv.name}</div>
                      <div className="matchrow__rl">{iv.focus}</div>
                    </div>
                    <span className="matchrow__pct">{iv.match}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
function MiniStat({ label, value }) {
  return (
    <div style={{ background:'var(--bg-surface)', border:'1px solid var(--border-subtle)', borderRadius:'var(--radius-sm)', padding:'9px 11px' }}>
      <div className="subtle" style={{ fontSize:10, fontFamily:'var(--font-mono)', letterSpacing:'.06em', textTransform:'uppercase' }}>{label}</div>
      <div className="mono" style={{ fontSize:14, fontWeight:600, color:'var(--fg-strong)', marginTop:3 }}>{value}</div>
    </div>
  );
}

function TrustStrip() {
  const items = [
    { i:'badge-check', t:'Verified founders' },
    { i:'gem', t:'Curated investors' },
    { i:'lock', t:'Secure conversations' },
    { i:'user-check', t:'Manual review' },
    { i:'eye', t:'Transparent process' },
  ];
  return (
    <div className="tstrip"><div className="wrap tstrip__in">
      {items.map((x) => <div className="tstrip__item" key={x.t}><Icon name={x.i} />{x.t}</div>)}
    </div></div>
  );
}

function Problem() {
  const probs = [
    { i:'search-x', h:'Founders can\'t reach serious investors', p:'Great ventures stall because the right capital is hidden behind warm intros and closed networks.' },
    { i:'help-circle', h:'Investors can\'t find credible deals', p:'Early opportunities are scattered, unverified, and hard to evaluate at the screening stage.' },
    { i:'unplug', h:'Trust and communication are fragmented', p:'Verification, due diligence, and conversations live across email, spreadsheets, and chats.' },
  ];
  return (
    <section className="section section--tight">
      <div className="wrap">
        <div className="shead shead--left" style={{ maxWidth:680 }}>
          <span className="eyebrow eyebrow--muted">The problem</span>
          <h2 className="h2">Raising and investing early is broken by trust.</h2>
          <p className="lead">Both sides want the same thing — a credible connection. Today, getting there is slow, opaque, and risky.</p>
        </div>
        <div className="grid grid-3">
          {probs.map((x) => (
            <div className="prob" key={x.h}>
              <div className="prob__ic"><Icon name={x.i} /></div>
              <div><h3 className="h3">{x.h}</h3><p>{x.p}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Solution() {
  const steps = [
    { h:'Create a verified profile', p:'Founders and investors build structured, reviewed profiles that establish credibility from day one.' },
    { h:'Publish a clear opportunity', p:'Present the venture with funding stage, traction, and the ask — in a consistent, comparable format.' },
    { h:'Get matched with the right people', p:'Vestra surfaces relevant investors by industry, stage, location, and risk appetite — no cold outreach.' },
    { h:'Start secure conversations', p:'Move from interest to a serious, private conversation, then toward agreement — safely and on the record.' },
  ];
  return (
    <section className="section section--warm" id="solution">
      <div className="wrap split">
        <div>
          <span className="eyebrow">The solution</span>
          <h2 className="h2" style={{ marginTop:14 }}>One trusted path from idea to agreement.</h2>
          <p className="lead" style={{ marginTop:16 }}>Vestra Connect brings verification, structure, and secure communication into a single, calm workflow — so both sides can focus on the opportunity.</p>
          <div style={{ marginTop:24, display:'flex', gap:12, flexWrap:'wrap' }}>
            <a className="btn btn--primary" href="signup.html">Get started<Icon name="arrow-right" /></a>
            <a className="btn btn--ghost" href="#how">See how it works</a>
          </div>
        </div>
        <div className="card card--pad">
          {steps.map((s, i) => (
            <div className="solrow" key={s.h}>
              <div className="solrow__n">{i+1}</div>
              <div><h3 className="h3">{s.h}</h3><p>{s.p}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Hero, TrustStrip, Problem, Solution });

/* VESTRA CONNECT — marketplace, audience, how-it-works */

function Marketplace() {
  const opps = window.VC_OPPS.slice(0, 3);
  return (
    <section className="section" id="marketplace">
      <div className="wrap">
        <div className="shead" style={{ textAlign:'center' }}>
          <span className="eyebrow">Opportunity marketplace</span>
          <h2 className="h2">Curated opportunities, presented with structure.</h2>
          <p className="lead">Every listing is verified and comparable — funding stage, traction, and risk at a glance.</p>
        </div>
        <div className="grid grid-3">
          {opps.map((o) => <OpportunityCard key={o.id} o={o} />)}
        </div>
        <div style={{ textAlign:'center', marginTop:36 }}>
          <a className="btn btn--secondary btn--lg" href="signup.html">Browse all opportunities<Icon name="arrow-right" /></a>
        </div>
      </div>
    </section>
  );
}

function ForEntrepreneurs() {
  const benefits = [
    { i:'presentation', b:'Present your idea professionally', s:'A structured business profile that makes your venture easy to understand and trust.' },
    { i:'target', b:'Reach relevant investors', s:'Get surfaced to investors whose focus matches your industry, stage, and geography.' },
    { i:'message-square-quote', b:'Get early validation', s:'Turn interest into feedback and serious conversations that move your venture forward.' },
    { i:'shield-check', b:'Build credibility with verification', s:'Earn trust badges through identity and business verification reviewed by our team.' },
  ];
  return (
    <section className="section section--warm" id="entrepreneurs">
      <div className="wrap split">
        <div>
          <span className="eyebrow">For entrepreneurs</span>
          <h2 className="h2" style={{ marginTop:14 }}>Present your venture to people who can move it forward.</h2>
          <p className="lead" style={{ marginTop:16 }}>Build a credible profile, publish a clear opportunity, and connect with investors who are genuinely a fit.</p>
          <div style={{ marginTop:18 }}>
            {benefits.map((x) => (
              <div className="benefit" key={x.b}><Icon name={x.i} /><div><b>{x.b}</b><span>{x.s}</span></div></div>
            ))}
          </div>
          <a className="btn btn--primary" href="signup.html" style={{ marginTop:18 }}>Start as Entrepreneur<Icon name="arrow-right" /></a>
        </div>
        <div className="card card--pad" style={{ padding:26 }}>
          <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:18 }}>
            <div style={{ display:'flex', alignItems:'center', gap:11 }}>
              <Avatar initial="T" size="lg" /><div><div className="card-t serif" style={{fontSize:17}}>Tareeq</div><div className="subtle" style={{fontSize:12.5}}>Logistics SaaS</div></div>
            </div>
            <Badge variant="gold" mono icon="star">Featured</Badge>
          </div>
          <div className="label">Verification progress</div>
          <Progress value={75} /><div className="hint">3 of 4 steps complete — financials in review</div>
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:12, marginTop:18 }}>
            <Stat label="Profile views" value="248" sub="last 30 days" />
            <Stat label="Investor saves" value="19" sub="+6 this week" accent />
          </div>
        </div>
      </div>
    </section>
  );
}

function ForInvestors() {
  const benefits = [
    { i:'gem', b:'Discover curated opportunities', s:'A reviewed pipeline of credible early ventures — not an unfiltered firehose.' },
    { i:'sliders-horizontal', b:'Filter by what matters', s:'Industry, stage, location, and risk — screen for fit in seconds.' },
    { i:'file-check', b:'Review structured information', s:'Consistent profiles with traction, financials, and due-diligence checklists.' },
    { i:'handshake', b:'Connect with serious founders', s:'Start secure conversations only with verified, committed teams.' },
  ];
  return (
    <section className="section" id="investors">
      <div className="wrap split">
        <div className="card card--pad" style={{ padding:26, order:0 }}>
          <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:16 }}>
            <div className="label" style={{ margin:0 }}>Recommended for you</div>
            <Badge variant="secondary" mono>Fintech focus</Badge>
          </div>
          {window.VC_OPPS.slice(5,6).concat(window.VC_OPPS.slice(2,3)).map((o) => (
            <div key={o.id} style={{ display:'flex', alignItems:'center', gap:12, padding:'13px 0', borderBottom:'1px solid var(--border-subtle)' }}>
              <span className="avatar avatar--md" style={{ borderRadius:'var(--radius-sm)', background:o.grad }}>{o.initial}</span>
              <div style={{ flex:1, minWidth:0 }}>
                <div style={{ fontSize:14, fontWeight:600, color:'var(--fg-strong)' }}>{o.name}</div>
                <div className="subtle" style={{ fontSize:12 }}>{o.industry} · {o.ask} · {o.stage}</div>
              </div>
              <RiskBadge level={o.risk} />
            </div>
          ))}
          <div style={{ display:'flex', alignItems:'center', gap:10, marginTop:16 }}>
            <TrustScore value={85} />
            <div style={{ fontSize:13, color:'var(--fg-muted)' }}>Average trust score of your matched pipeline</div>
          </div>
        </div>
        <div>
          <span className="eyebrow">For investors</span>
          <h2 className="h2" style={{ marginTop:14 }}>Spend your time on credible opportunities, not screening noise.</h2>
          <p className="lead" style={{ marginTop:16 }}>Vestra curates and verifies, so you discover serious local ventures and move quickly to conversations that matter.</p>
          <div style={{ marginTop:18 }}>
            {benefits.map((x) => (
              <div className="benefit" key={x.b}><Icon name={x.i} /><div><b>{x.b}</b><span>{x.s}</span></div></div>
            ))}
          </div>
          <a className="btn btn--primary" href="signup.html" style={{ marginTop:18 }}>Explore as Investor<Icon name="arrow-right" /></a>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { i:'user-plus', h:'Create your profile', p:'Sign up as an entrepreneur or investor and complete verification.' },
    { i:'file-plus-2', h:'Submit or discover', p:'Publish an opportunity, or browse the curated marketplace.' },
    { i:'sparkles', h:'Get matched', p:'Vestra surfaces relevant, high-fit connections for both sides.' },
    { i:'lock', h:'Connect securely', p:'Start private, on-the-record conversations and move forward.' },
  ];
  return (
    <section className="section section--warm" id="how">
      <div className="wrap">
        <div className="shead">
          <span className="eyebrow">How it works</span>
          <h2 className="h2">From sign-up to secure conversation in four steps.</h2>
        </div>
        <div className="hiw">
          {steps.map((s, i) => (
            <div className="card hiw__step" key={s.h}>
              <span className="hiw__n">0{i+1}</span>
              <div className="hiw__ic"><Icon name={s.i} /></div>
              <h3 className="h3">{s.h}</h3><p>{s.p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Marketplace, ForEntrepreneurs, ForInvestors, HowItWorks });

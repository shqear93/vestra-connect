/* VESTRA CONNECT — features, dashboard preview, testimonials, pricing, final CTA */

function Features() {
  const feats = [
    { i:'badge-check', h:'Verified profiles', p:'Identity and business verification with visible trust badges.' },
    { i:'layout-grid', h:'Opportunity cards', p:'Structured, comparable listings with stage and risk signals.' },
    { i:'sparkles', h:'Investor matching', p:'Relevance by industry, stage, location, and risk appetite.' },
    { i:'lock', h:'Secure messaging', p:'Private, on-the-record conversations between matched parties.' },
    { i:'bookmark', h:'Saved opportunities', p:'Shortlist and track ventures you want to revisit.' },
    { i:'clipboard-check', h:'Due-diligence checklist', p:'A shared, structured checklist to move toward agreement.' },
    { i:'gauge', h:'Basic risk scoring', p:'A transparent signal across the dimensions that matter.' },
    { i:'user-check', h:'Admin / manual review', p:'A human pass on every profile before it goes live.' },
  ];
  return (
    <section className="section" id="features">
      <div className="wrap">
        <div className="shead">
          <span className="eyebrow">Platform features</span>
          <h2 className="h2">Everything both sides need, in one calm workspace.</h2>
        </div>
        <div className="grid grid-4">
          {feats.map((f) => (
            <div className="card card--hover feat" key={f.h}>
              <div className="feat__ic"><Icon name={f.i} /></div>
              <h3 className="h3">{f.h}</h3><p>{f.p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DashboardPreview() {
  const [view, setView] = useState('entrepreneur');
  return (
    <section className="section section--warm" id="dashboard">
      <div className="wrap">
        <div className="shead">
          <span className="eyebrow">Dashboard preview</span>
          <h2 className="h2">A clear home base for founders and investors.</h2>
          <div style={{ display:'flex', justifyContent:'center', marginTop:20 }}>
            <Tabs value={view} onChange={setView} items={[{id:'entrepreneur',label:'Entrepreneur'},{id:'investor',label:'Investor'}]} />
          </div>
        </div>
        <div className="dashprev">
          <div className="dashprev__bar">
            <span className="dot" style={{ background:'#E5645A' }}></span><span className="dot" style={{ background:'#E6B24D' }}></span><span className="dot" style={{ background:'#5BAE7E' }}></span>
            <span className="mono subtle" style={{ fontSize:12, marginLeft:8 }}>app.vestraconnect.com/dashboard</span>
            <a href={view==='investor'?'dashboard-investor.html':'dashboard-entrepreneur.html'} className="btn btn--ghost btn--sm" style={{ marginLeft:'auto' }}>Open full dashboard<Icon name="external-link" /></a>
          </div>
          <div style={{ padding:24 }}>
            {view==='entrepreneur' ? <MiniEntrepreneur /> : <MiniInvestor />}
          </div>
        </div>
      </div>
    </section>
  );
}

function MiniEntrepreneur() {
  return (
    <div style={{ display:'grid', gridTemplateColumns:'1.5fr 1fr', gap:18 }}>
      <div style={{ display:'flex', flexDirection:'column', gap:14 }}>
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:12 }}>
          <Stat label="Profile views" value="248" sub="+18% this week" accent />
          <Stat label="Investor saves" value="19" sub="6 new" />
          <Stat label="Matches" value="3" sub="2 active chats" />
        </div>
        <div className="card card--pad">
          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:12 }}>
            <div className="card-t">Your opportunity</div><Badge variant="success" icon="circle-dot">Live</Badge>
          </div>
          <div style={{ display:'flex', alignItems:'center', gap:12 }}>
            <Avatar initial="T" size="lg" />
            <div style={{ flex:1 }}><div style={{ fontWeight:600, color:'var(--fg-strong)' }}>Tareeq — Seed round</div><div className="subtle" style={{ fontSize:13 }}>JOD 200K ask · 40% committed</div></div>
          </div>
          <div style={{ marginTop:12 }}><Progress value={40} /></div>
        </div>
      </div>
      <div className="card card--pad">
        <div className="card-t" style={{ marginBottom:6 }}>Verification</div>
        <div className="subtle" style={{ fontSize:12.5, marginBottom:14 }}>Complete to unlock matching</div>
        {[['Identity','done'],['Business registration','done'],['Team profiles','done'],['Financials','review']].map(([l,st]) => (
          <div key={l} style={{ display:'flex', alignItems:'center', gap:10, padding:'9px 0', borderBottom:'1px solid var(--border-subtle)' }}>
            <Icon name={st==='done'?'check-circle-2':'clock'} style={{ width:17, height:17, color: st==='done'?'var(--accent)':'var(--gold-600)' }} />
            <span style={{ fontSize:13.5, color:'var(--fg-default)', flex:1 }}>{l}</span>
            <span className="subtle" style={{ fontSize:12 }}>{st==='done'?'Verified':'In review'}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function MiniInvestor() {
  return (
    <div style={{ display:'grid', gridTemplateColumns:'1fr 1.5fr', gap:18 }}>
      <div className="card card--pad">
        <div className="card-t" style={{ marginBottom:12 }}>Pipeline</div>
        {[['Saved','7'],['In conversation','3'],['Due diligence','1']].map(([l,v]) => (
          <div key={l} style={{ display:'flex', justifyContent:'space-between', alignItems:'center', padding:'10px 0', borderBottom:'1px solid var(--border-subtle)' }}>
            <span style={{ fontSize:13.5, color:'var(--fg-default)' }}>{l}</span><span className="mono" style={{ fontWeight:600, color:'var(--fg-strong)' }}>{v}</span>
          </div>
        ))}
        <div style={{ display:'flex', alignItems:'center', gap:10, marginTop:14 }}><TrustScore value={85} /><div className="subtle" style={{ fontSize:12.5 }}>Avg. pipeline trust score</div></div>
      </div>
      <div style={{ display:'flex', flexDirection:'column', gap:12 }}>
        <div className="card-t">Recommended opportunities</div>
        {window.VC_OPPS.slice(0,3).map((o) => (
          <div className="card card--pad" key={o.id} style={{ padding:14, display:'flex', alignItems:'center', gap:12 }}>
            <span className="avatar avatar--md" style={{ borderRadius:'var(--radius-sm)', background:o.grad }}>{o.initial}</span>
            <div style={{ flex:1, minWidth:0 }}><div style={{ fontSize:14, fontWeight:600, color:'var(--fg-strong)' }}>{o.name}</div><div className="subtle" style={{ fontSize:12 }}>{o.industry} · {o.ask}</div></div>
            <Badge variant="secondary" mono>{o.stage}</Badge>
            <RiskBadge level={o.risk} />
          </div>
        ))}
      </div>
    </div>
  );
}

function Testimonials() {
  const quotes = [
    { q:'Vestra gave our venture the credibility we couldn\'t build over email. We were in real conversations within two weeks.', nm:'Layla Haddad', rl:'Founder, Naqsh Studio', v:'emerald' },
    { q:'The curation is the product. I see fewer, better opportunities — already verified — so my screening time dropped sharply.', nm:'Kareem Odeh', rl:'Angel investor', v:'gold' },
    { q:'Structured profiles and a clear due-diligence checklist make introductions feel safe for both sides. That\'s rare.', nm:'Dr. Hana Saleh', rl:'Business advisor', v:'' },
  ];
  return (
    <section className="section">
      <div className="wrap">
        <div className="shead">
          <span className="eyebrow">Credibility</span>
          <h2 className="h2">Trusted by founders, investors, and advisors.</h2>
        </div>
        <div className="grid grid-3">
          {quotes.map((x) => (
            <div className="card quote" key={x.nm}>
              <div className="quote__stars">{[0,0,0,0,0].map((_,i)=><Icon key={i} name="star" />)}</div>
              <p>“{x.q}”</p>
              <div className="quote__by"><Avatar initial={x.nm.split(' ').map(s=>s[0]).slice(0,2).join('')} variant={x.v} /><div><div className="nm">{x.nm}</div><div className="rl">{x.rl}</div></div></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  const plans = [
    { n:'Entrepreneur', d:'Present your venture and reach verified investors.', price:'Free', unit:'to start', cta:'Start as Entrepreneur', feat:['Verified profile & trust badges','1 active opportunity','Investor matching','Secure messaging','Basic risk scoring'], featured:false, variant:'secondary' },
    { n:'Investor', d:'Discover curated opportunities and move fast.', price:'JOD 49', unit:'/ month', cta:'Explore as Investor', feat:['Full curated marketplace','Advanced filters & saved searches','Unlimited saved opportunities','Secure messaging','Due-diligence checklists'], featured:true, variant:'primary' },
    { n:'Partner / Advisor', d:'Support deals and add credibility as a reviewer.', price:'Custom', unit:'', cta:'Talk to us', feat:['Advisor profile & endorsements','Deal collaboration tools','Review & referral workflows','Priority support'], featured:false, variant:'secondary' },
  ];
  return (
    <section className="section section--warm" id="pricing">
      <div className="wrap">
        <div className="shead">
          <span className="eyebrow">Access &amp; pricing</span>
          <h2 className="h2">Simple access for every side of the table.</h2>
          <p className="lead">Start free as a founder. Pay only for the tools that save you time.</p>
        </div>
        <div className="grid grid-3" style={{ alignItems:'stretch' }}>
          {plans.map((p) => (
            <div className={'card price'+(p.featured?' price--featured':'')} key={p.n}>
              {p.featured && <div className="price__tag"><Badge variant="success" mono icon="star">Most popular</Badge></div>}
              <h3 className="h3">{p.n}</h3>
              <p className="price__desc">{p.d}</p>
              <div className="price__amt">{p.price} <small>{p.unit}</small></div>
              <ul className="price__list">{p.feat.map((f) => <li key={f}><Icon name="check" />{f}</li>)}</ul>
              <a className={'btn btn--'+p.variant+' btn--block'} href="signup.html">{p.cta}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="fcta">
          <div className="fcta__glow"></div>
          <div className="fcta__rule"></div>
          <h2 className="h2">Start building trusted investment connections today.</h2>
          <p>Join Vestra Connect — where ambitious founders meet the right investors, with confidence.</p>
          <div className="fcta__cta">
            <a className="btn btn--primary btn--lg" href="signup.html">Join as Entrepreneur<Icon name="arrow-right" /></a>
            <a className="btn btn--light btn--lg" href="signup.html">Join as Investor</a>
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Features, DashboardPreview, Testimonials, Pricing, FinalCTA });

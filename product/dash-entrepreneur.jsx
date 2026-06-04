/* VESTRA CONNECT — Entrepreneur dashboard */
function EntrepreneurDashboard() {
  useLucide();
  const [tab, setTab] = useState('overview');
  return (
    <div className="app">
      <Sidebar role="entrepreneur" active="home" />
      <div className="main">
        <Topbar title="Dashboard" ctaLabel="Edit opportunity" ctaIcon="pencil" ctaHref="#" />
        <div className="content">
          <div className="page-head">
            <div>
              <h1>Welcome back, Rami</h1>
              <p>Here's how Tareeq is performing with investors this week.</p>
            </div>
            <div className="tabs">
              {[['overview','Overview'],['analytics','Analytics']].map(([id,l]) => (
                <button key={id} className={tab===id?'is-on':''} onClick={()=>setTab(id)}>{l}</button>
              ))}
            </div>
          </div>

          {/* stat row */}
          <div className="grid grid-4" style={{ marginBottom:20 }}>
            <Stat label="Profile views" value="248" sub="+18% vs last week" accent />
            <Stat label="Investor saves" value="19" sub="6 new this week" />
            <Stat label="Active matches" value="3" sub="2 in conversation" />
            <Stat label="Committed" value="40%" sub="JOD 80K of 200K" />
          </div>

          <div className="detail-grid">
            <div style={{ display:'flex', flexDirection:'column', gap:18 }}>
              {/* opportunity card */}
              <div className="card card--pad">
                <div className="row-head">
                  <h2>Your opportunity</h2>
                  <Badge variant="success" icon="circle-dot">Live</Badge>
                </div>
                <div style={{ display:'flex', gap:16, alignItems:'center', marginBottom:18 }}>
                  <span className="avatar avatar--lg" style={{ borderRadius:'var(--radius-md)', background:'linear-gradient(135deg,#244E6E,#173A57)', fontFamily:'var(--font-display)', fontSize:24 }}>T</span>
                  <div style={{ flex:1, minWidth:0 }}>
                    <div className="card-t serif" style={{ fontSize:19 }}>Tareeq — Seed round</div>
                    <div className="subtle" style={{ fontSize:13 }}>Logistics SaaS · Amman · JOD 200K ask</div>
                  </div>
                  <a className="btn btn--secondary btn--sm" href="opportunity.html?id=tareeq">Preview<Icon name="external-link" /></a>
                </div>
                <div className="ddim__l"><b>Funding committed</b><span>JOD 80K · 40%</span></div>
                <Progress value={40} />
                <div className="grid grid-3" style={{ marginTop:18, gap:12 }}>
                  <Stat label="MRR" value="JOD 9.4K" />
                  <Stat label="Customers" value="12" />
                  <Stat label="Trust score" value="74" accent />
                </div>
              </div>

              {/* matches */}
              <div className="card card--pad">
                <div className="row-head"><h2>Recent investor matches</h2><a className="btn btn--ghost btn--sm" href="#">View all<Icon name="arrow-right" /></a></div>
                {[
                  { initial:'KO', nm:'Kareem Odeh', focus:'Logistics · Seed', status:'In conversation', tone:'success', v:'gold' },
                  { initial:'SF', nm:'Sana Faouri', focus:'B2B SaaS · Early', status:'New match', tone:'secondary', v:'emerald' },
                  { initial:'MT', nm:'Majd Tech Fund', focus:'Tech · MENA', status:'Saved you', tone:'secondary', v:'' },
                ].map((m) => (
                  <div key={m.nm} style={{ display:'flex', alignItems:'center', gap:12, padding:'12px 0', borderBottom:'1px solid var(--border-subtle)' }}>
                    <Avatar initial={m.initial} variant={m.v} />
                    <div style={{ flex:1, minWidth:0 }}><div style={{ fontSize:14, fontWeight:600, color:'var(--fg-strong)' }}>{m.nm}</div><div className="subtle" style={{ fontSize:12.5 }}>{m.focus}</div></div>
                    <Badge variant={m.tone}>{m.status}</Badge>
                    <button className="btn btn--secondary btn--sm"><Icon name="message-square" />Message</button>
                  </div>
                ))}
              </div>
            </div>

            {/* aside */}
            <div className="aside-sticky">
              <div className="card card--pad">
                <div className="row-head"><h2>Verification</h2><Badge variant="gold" mono>75%</Badge></div>
                <Progress value={75} gold />
                <div className="hint" style={{ marginBottom:8 }}>One step left to fully verify your profile.</div>
                {[['Identity','done'],['Business registration','done'],['Team profiles','done'],['Financial documents','review']].map(([l,st]) => (
                  <div className="checkrow" key={l}>
                    <Icon name={st==='done'?'check-circle-2':'clock'} style={{ color: st==='done'?'var(--accent)':'var(--gold-600)' }} />
                    <span className="t">{l}</span>
                    <span className="s">{st==='done'?'Verified':'In review'}</span>
                  </div>
                ))}
                <a className="btn btn--primary btn--block" href="#" style={{ marginTop:14 }}>Complete verification</a>
              </div>
              <div className="card card--pad">
                <div className="row-head"><h2>Messages</h2><span className="navi__badge" style={{ background:'var(--accent)' }}>2</span></div>
                {[['Kareem Odeh','Happy to dig into your unit economics…','gold'],['Sana Faouri','Could you share the cap table?','emerald']].map(([nm,msg,v]) => (
                  <div key={nm} style={{ display:'flex', gap:11, padding:'11px 0', borderBottom:'1px solid var(--border-subtle)' }}>
                    <Avatar initial={nm.split(' ').map(s=>s[0]).join('')} size="sm" variant={v} />
                    <div style={{ minWidth:0 }}><div style={{ fontSize:13.5, fontWeight:600, color:'var(--fg-strong)' }}>{nm}</div><div className="subtle" style={{ fontSize:12.5, overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap' }}>{msg}</div></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
ReactDOM.createRoot(document.getElementById('root')).render(<EntrepreneurDashboard />);

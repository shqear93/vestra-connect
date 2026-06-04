/* VESTRA CONNECT — Opportunity details page */
function OpportunityDetail() {
  useLucide();
  const params = new URLSearchParams(location.search);
  const id = params.get('id');
  const o = window.VC_OPPS.find(x => x.id===id) || window.VC_OPPS[0];
  const [tab, setTab] = useState('overview');
  const [connected, setConnected] = useState(false);

  const dims = [
    { k:'Team & execution', v: Math.min(98, o.trust+8) },
    { k:'Traction & proof', v: Math.max(40, o.trust-4) },
    { k:'Market opportunity', v: Math.min(95, o.trust+2) },
    { k:'Financial clarity', v: Math.max(45, o.trust-10) },
  ];
  const dd = [
    ['Identity verified','Founder identity confirmed','done'],
    ['Business registration','Registered in Amman, 2023','done'],
    ['Financial statements','Last 12 months provided','done'],
    ['Cap table','Shared under NDA','done'],
    ['Customer references','2 of 3 collected','review'],
    ['Legal & IP review','Scheduled with advisor','pending'],
  ];

  return (
    <div className="app">
      <Sidebar role="investor" active="market" />
      <div className="main">
        <Topbar title="Opportunity" />
        <div className="content">
          <a className="btn btn--ghost btn--sm" href="dashboard-investor.html" style={{ marginBottom:14 }}><Icon name="arrow-left" />Back to marketplace</a>

          <div className="detail-grid">
            {/* main */}
            <div>
              <div className="dcover" style={{ background:o.grad }}><div className="dcover__pat"></div></div>
              <div className="dhead">
                <span className="dhead__logo" style={{ background:o.grad }}>{o.initial}</span>
                <div style={{ flex:1, paddingBottom:4 }}>
                  <div style={{ display:'flex', alignItems:'center', gap:10, flexWrap:'wrap', marginBottom:6 }}>
                    <span className="mono" style={{ fontSize:11, letterSpacing:'.1em', textTransform:'uppercase', color:'var(--accent)' }}>{o.industry}</span>
                    {o.verified && <Verified small />}
                  </div>
                  <h1 style={{ fontFamily:'var(--font-display)', fontSize:30, fontWeight:600, color:'var(--fg-strong)', margin:0, letterSpacing:'-.02em' }}>{o.name}</h1>
                  <div className="subtle" style={{ fontSize:13.5, display:'flex', alignItems:'center', gap:5, marginTop:6 }}><Icon name="map-pin" style={{width:13,height:13}} />{o.location} · Founded {o.founded}</div>
                </div>
              </div>

              <div style={{ display:'flex', gap:8, flexWrap:'wrap', margin:'20px 0 18px' }}>
                <Badge variant="secondary" mono icon="trending-up">{o.stage}</Badge>
                <RiskBadge level={o.risk} />
                <Badge variant="secondary" mono icon="users">{o.investors} investors</Badge>
                <Badge variant="secondary" mono icon="banknote">{o.mrr} MRR</Badge>
              </div>

              <div className="tabs tabs--block" style={{ marginBottom:18 }}>
                {[['overview','Overview'],['traction','Traction'],['team','Team'],['dd','Due diligence']].map(([id,l]) => (
                  <button key={id} className={tab===id?'is-on':''} onClick={()=>setTab(id)}>{l}</button>
                ))}
              </div>

              {tab==='overview' && (
                <div className="card card--pad">
                  <h2 className="card-t" style={{ fontSize:17, marginBottom:10 }}>About {o.name}</h2>
                  <p className="muted" style={{ fontSize:15, lineHeight:1.65, margin:'0 0 16px' }}>{o.summary} The team is raising a {o.stage.toLowerCase()} round of {o.ask} to scale operations, deepen verification, and reach its next milestone — with transparent reporting to every partner on the platform.</p>
                  <div className="grid grid-3" style={{ gap:12 }}>
                    <Stat label="Funding ask" value={o.ask} />
                    <Stat label="Committed" value={o.raised+'%'} accent />
                    <Stat label="Monthly revenue" value={o.mrr} />
                  </div>
                </div>
              )}
              {tab==='traction' && (
                <div className="card card--pad">
                  <h2 className="card-t" style={{ fontSize:17, marginBottom:14 }}>Traction & proof</h2>
                  {[['Monthly recurring revenue',o.mrr,'+14% MoM'],['Active customers',String(o.investors+4),'4 added this quarter'],['Round committed',o.raised+'%','by '+o.investors+' verified investors']].map(([l,v,s]) => (
                    <div key={l} style={{ display:'flex', alignItems:'center', justifyContent:'space-between', padding:'13px 0', borderBottom:'1px solid var(--border-subtle)' }}>
                      <div><div style={{ fontSize:14, fontWeight:600, color:'var(--fg-strong)' }}>{l}</div><div className="subtle" style={{ fontSize:12.5 }}>{s}</div></div>
                      <div className="mono" style={{ fontSize:18, fontWeight:600, color:'var(--fg-strong)' }}>{v}</div>
                    </div>
                  ))}
                </div>
              )}
              {tab==='team' && (
                <div className="card card--pad">
                  <h2 className="card-t" style={{ fontSize:17, marginBottom:14 }}>Team</h2>
                  {[['RM','Rami Mansour','Founder & CEO · ex-Aramex','emerald'],['SA','Sara Atieh','Co-founder & CTO','emerald'],['HN','Hala Nimri','Head of Growth','']].map(([i,n,r,v]) => (
                    <div key={n} style={{ display:'flex', alignItems:'center', gap:12, padding:'12px 0', borderBottom:'1px solid var(--border-subtle)' }}>
                      <Avatar initial={i} variant={v} />
                      <div style={{ flex:1 }}><div style={{ fontSize:14.5, fontWeight:600, color:'var(--fg-strong)' }}>{n}</div><div className="subtle" style={{ fontSize:13 }}>{r}</div></div>
                      <Badge variant="success" icon="shield-check" mono>Verified</Badge>
                    </div>
                  ))}
                </div>
              )}
              {tab==='dd' && (
                <div className="card card--pad">
                  <h2 className="card-t" style={{ fontSize:17, marginBottom:6 }}>Due-diligence checklist</h2>
                  <p className="subtle" style={{ fontSize:13, margin:'0 0 12px' }}>A shared, structured checklist both sides complete before agreement.</p>
                  {dd.map(([t,s,st]) => (
                    <div className="checkrow" key={t}>
                      <Icon name={st==='done'?'check-circle-2':st==='review'?'clock':'circle'} style={{ color: st==='done'?'var(--accent)':st==='review'?'var(--gold-600)':'var(--fg-subtle)' }} />
                      <div className="t"><div style={{ fontWeight:600, color:'var(--fg-strong)', fontSize:13.5 }}>{t}</div><div className="s">{s}</div></div>
                      <span className="s" style={{ textTransform:'capitalize' }}>{st==='done'?'Complete':st}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* aside */}
            <div className="aside-sticky">
              <div className="card card--pad">
                <div style={{ display:'flex', alignItems:'baseline', justifyContent:'space-between' }}>
                  <div className="mono" style={{ fontSize:26, fontWeight:600, color:'var(--fg-strong)', whiteSpace:'nowrap' }}>{o.ask}</div>
                  <span className="subtle" style={{ fontSize:13 }}>ask</span>
                </div>
                <div className="subtle" style={{ fontSize:13, margin:'2px 0 14px' }}>{o.raised}% committed by {o.investors} verified investors</div>
                <Progress value={o.raised} />
                {!connected ? (
                  <button className="btn btn--primary btn--block" style={{ marginTop:16 }} onClick={()=>setConnected(true)}><Icon name="lock" />Start secure conversation</button>
                ) : (
                  <div style={{ marginTop:16, display:'flex', alignItems:'center', gap:9, padding:'11px 13px', background:'var(--emerald-50)', border:'1px solid var(--emerald-200)', borderRadius:'var(--radius-md)' }}>
                    <Icon name="check-circle-2" style={{ width:18, height:18, color:'var(--accent)' }} />
                    <span style={{ fontSize:13.5, fontWeight:600, color:'var(--emerald-800)' }}>Request sent to {o.name}</span>
                  </div>
                )}
                <button className="btn btn--secondary btn--block" style={{ marginTop:10 }}><Icon name="bookmark" />Save opportunity</button>
              </div>

              <div className="card card--pad">
                <div className="row-head"><h2>Trust & risk</h2><RiskBadge level={o.risk} /></div>
                <div style={{ display:'flex', alignItems:'center', gap:12, marginBottom:16 }}>
                  <TrustScore value={o.trust} />
                  <div><div style={{ fontSize:14, fontWeight:600, color:'var(--fg-strong)' }}>Trust score {o.trust}/100</div><div className="subtle" style={{ fontSize:12.5 }}>Verified · manual review passed</div></div>
                </div>
                {dims.map((d) => (
                  <div className="ddim" key={d.k}>
                    <div className="ddim__l"><b>{d.k}</b><span>{d.v}</span></div>
                    <Progress value={d.v} gold={d.v<70} sm />
                  </div>
                ))}
              </div>

              <div className="card card--pad">
                <div className="row-head"><h2>Key facts</h2></div>
                <div className="kvlist">
                  {[['Industry',o.industry],['Location',o.location],['Stage',o.stage],['Founded',o.founded],['Monthly revenue',o.mrr]].map(([k,v]) => (
                    <div className="kvlist__row" key={k}><span className="k">{k}</span><span className="v">{v}</span></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
ReactDOM.createRoot(document.getElementById('root')).render(<OpportunityDetail />);

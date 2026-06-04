/* VESTRA CONNECT — Investor dashboard */
function InvestorDashboard() {
  useLucide();
  const [ind, setInd] = useState('All');
  const [risk, setRisk] = useState('All');
  const opps = window.VC_OPPS;
  const inds = ['All', ...Array.from(new Set(opps.map(o=>o.industry)))];
  let list = opps.filter(o => (ind==='All'||o.industry===ind) && (risk==='All'||o.risk===risk));

  return (
    <div className="app">
      <Sidebar role="investor" active="home" />
      <div className="main">
        <Topbar title="Marketplace" ctaLabel="Saved searches" ctaIcon="bookmark" ctaHref="#" />
        <div className="content">
          <div className="page-head">
            <div>
              <h1>Discover opportunities</h1>
              <p>A curated, verified pipeline matched to your focus across Jordan.</p>
            </div>
          </div>

          <div className="grid grid-4" style={{ marginBottom:20 }}>
            <Stat label="In pipeline" value="11" sub="across 4 sectors" />
            <Stat label="Saved" value="7" sub="2 new this week" accent />
            <Stat label="In conversation" value="3" sub="1 in due diligence" />
            <Stat label="Avg. trust score" value="85" sub="of saved deals" />
          </div>

          {/* filter bar */}
          <div className="card card--pad" style={{ display:'flex', gap:16, alignItems:'center', flexWrap:'wrap', marginBottom:20 }}>
            <div style={{ display:'flex', alignItems:'center', gap:8 }}>
              <Icon name="sliders-horizontal" style={{ width:17, height:17, color:'var(--accent)' }} />
              <span style={{ fontSize:13, fontWeight:600, color:'var(--fg-strong)' }}>Filter</span>
            </div>
            <div style={{ display:'flex', alignItems:'center', gap:8, flexWrap:'wrap' }}>
              <span className="subtle" style={{ fontSize:12, fontFamily:'var(--font-mono)', textTransform:'uppercase', letterSpacing:'.06em' }}>Industry</span>
              <Tabs value={ind} onChange={setInd} items={inds} />
            </div>
            <div style={{ display:'flex', alignItems:'center', gap:8 }}>
              <span className="subtle" style={{ fontSize:12, fontFamily:'var(--font-mono)', textTransform:'uppercase', letterSpacing:'.06em' }}>Risk</span>
              <Tabs value={risk} onChange={setRisk} items={['All','Low','Medium','High']} />
            </div>
            <div style={{ marginLeft:'auto', fontSize:13, color:'var(--fg-muted)' }}>{list.length} opportunities</div>
          </div>

          <div className="grid grid-3">
            {list.map((o) => <OpportunityCard key={o.id} o={o} />)}
            {list.length===0 && <div className="card card--pad" style={{ gridColumn:'1/-1', textAlign:'center', color:'var(--fg-muted)' }}>No opportunities match these filters.</div>}
          </div>
        </div>
      </div>
    </div>
  );
}
ReactDOM.createRoot(document.getElementById('root')).render(<InvestorDashboard />);

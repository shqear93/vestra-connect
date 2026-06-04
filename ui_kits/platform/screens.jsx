/* Vestra Connect — platform screens */
const { useState: useStateS } = React;

/* ---- Discovery feed ---- */
function Feed({ projects, onOpen }) {
  const [filters, setFilters] = useStateS(['University', 'Small business', 'Tech']);
  const [minReady, setMinReady] = useStateS(0);
  const [sort, setSort] = useStateS('match');
  const toggle = (v) => setFilters((f) => f.includes(v) ? f.filter((x) => x !== v) : [...f, v]);

  let list = projects.filter((p) => filters.includes(p.category) && p.readiness >= minReady);
  if (filters.includes('Verified only')) list = list.filter((p) => p.verified);
  list = [...list].sort((a, b) => sort === 'ready' ? b.readiness - a.readiness : b.raised - a.raised);

  return (
    <div className="layout">
      <FilterSidebar filters={filters} onToggle={toggle} minReady={minReady} onReady={setMinReady} />
      <main>
        <div className="feed-head">
          <div>
            <h1>Discover projects</h1>
            <p>Verified opportunities matched to your focus across Jordan.</p>
          </div>
          <div className="seg">
            <button className={sort === 'match' ? 'on' : ''} onClick={() => setSort('match')}>Best match</button>
            <button className={sort === 'ready' ? 'on' : ''} onClick={() => setSort('ready')}>Readiness</button>
          </div>
        </div>
        <div className="cards">
          {list.map((p) => <ProjectCard key={p.id} p={p} onOpen={onOpen} />)}
          {list.length === 0 && <div className="panel" style={{ textAlign: 'center', color: 'var(--fg-muted)' }}>No projects match these filters yet.</div>}
        </div>
      </main>
    </div>
  );
}

/* ---- Project profile detail ---- */
function Profile({ p, onBack, onIntro }) {
  return (
    <div className="layout" style={{ gridTemplateColumns: '1fr' }}>
      <main>
        <button className="back" onClick={onBack}><Icon name="arrow-left" />Back to discover</button>
        <div className="detail">
          <div>
            <div className="dhero">
              <div className="dhero__cover" style={{ background: p.grad }}></div>
              <div className="dhero__inner">
                <div className="dhero__row">
                  <div className="dhero__logo" style={{ background: p.grad }}>{p.initial}</div>
                </div>
                <h1>{p.name}</h1>
                <div className="dhero__tags">
                  <span className="cat">{p.category} · {p.sector}</span>
                  {p.verified && <VerifiedBadge />}
                  <span className="chip"><Icon name="map-pin" style={{ width: 11, height: 11, marginRight: 4 }} />{p.location}</span>
                  <span className="chip">{p.stage}</span>
                </div>
              </div>
            </div>

            <div className="section">
              <h2>About the project</h2>
              <p>{p.desc} The team is raising to scale operations, deepen verification, and reach the next milestone with disciplined, transparent reporting to partners.</p>
              <div className="kv">
                <div className="b"><div className="n">{p.askFull}</div><div className="l">Funding ask</div></div>
                <div className="b"><div className="n">{p.raised}%</div><div className="l">Committed</div></div>
                <div className="b"><div className="n">{p.signals}</div><div className="l">Verified signals</div></div>
              </div>
            </div>

            <div className="section">
              <h2>Team</h2>
              <div className="team">
                {p.team.map((m) => (
                  <div className="team__row" key={m.nm}>
                    <div className="avatar">{m.initial}</div>
                    <div><div className="nm">{m.nm}</div><div className="rl">{m.rl}</div></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside className="aside">
            <div className="cta">
              <div className="ask">{p.askFull}<small>&nbsp;ask</small></div>
              <div className="sub">{p.raised}% committed by verified partners</div>
              <button className="btn btn--primary btn--block" onClick={onIntro}><Icon name="handshake" />Request introduction</button>
              <div style={{ height: 10 }}></div>
              <button className="btn btn--secondary btn--block"><Icon name="bookmark" />Save project</button>
            </div>
            <div className="cta">
              <ReadinessMeter score={p.readiness} dims={p.dims} />
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}

/* ---- Request introduction modal ---- */
function IntroModal({ p, onClose }) {
  const [sent, setSent] = useStateS(false);
  React.useEffect(() => { if (window.lucide) window.lucide.createIcons(); }, [sent]);
  return (
    <div className="scrim" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        {!sent ? (
          <React.Fragment>
            <h2>Request an introduction</h2>
            <p>We'll pass a short note to <b>{p.name}</b> through a trusted mutual connection. No cold outreach — both sides opt in.</p>
            <label>Your note</label>
            <textarea defaultValue={`Hi — I'm an investor focused on ${p.sector.toLowerCase()} in Jordan. Your readiness signal and verification stood out. I'd value a short introduction to learn more about the ${p.askFull} round.`}></textarea>
            <div className="modal__foot">
              <button className="btn btn--ghost" onClick={onClose}>Cancel</button>
              <button className="btn btn--primary" onClick={() => setSent(true)}><Icon name="send" />Send request</button>
            </div>
          </React.Fragment>
        ) : (
          <div className="modal__ok">
            <div className="ring"><Icon name="check" /></div>
            <h2>Introduction requested</h2>
            <p>Your note is on its way. You'll be notified when {p.name.split(' ')[0]}'s team accepts the introduction.</p>
            <button className="btn btn--primary btn--block" onClick={onClose}>Done</button>
          </div>
        )}
      </div>
    </div>
  );
}

Object.assign(window, { Feed, Profile, IntroModal });

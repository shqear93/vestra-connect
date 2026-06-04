/* Vestra Connect — shared platform components */
const { useState, useEffect, useRef } = React;

/* Lucide icon — renders an <i data-lucide>; App calls lucide.createIcons() after render */
function Icon({ name, className, style }) {
  return <i data-lucide={name} className={className} style={style}></i>;
}

function VerifiedBadge() {
  return <span className="vbadge"><Icon name="shield-check" />Verified</span>;
}
function PremiumBadge({ label }) {
  return <span className="pbadge"><Icon name="star" />{label || 'Premium'}</span>;
}

function ReadinessMeter({ score, dims }) {
  return (
    <div className="rmeter">
      <div className="hd">
        <span className="ttl">Readiness signal</span>
        <span className="score">{score}<small>&nbsp;/ 100</small></span>
      </div>
      {dims.map((d) => (
        <div className="rdim" key={d.k}>
          <div className="rdl"><b>{d.k}</b><span>{d.v}</span></div>
          <div className="track"><div className="fill" style={{ width: d.v + '%', background: d.v < 70 ? 'var(--gold-500)' : 'var(--accent)' }}></div></div>
        </div>
      ))}
    </div>
  );
}

/* ---- Top navigation ---- */
function TopNav({ tab, onTab }) {
  const links = [
    { id: 'discover', label: 'Discover', icon: 'compass' },
    { id: 'intros', label: 'Introductions', icon: 'handshake' },
    { id: 'saved', label: 'Saved', icon: 'bookmark' },
  ];
  return (
    <header className="nav">
      <img className="nav__logo" src="../../assets/logo-wordmark.svg" alt="Vestra Connect" />
      <div className="nav__search">
        <Icon name="search" />
        <input placeholder="Search projects, founders, sectors…" />
      </div>
      <nav className="nav__links">
        {links.map((l) => (
          <button key={l.id} className={'nav__link' + (tab === l.id ? ' is-active' : '')} onClick={() => onTab(l.id)}>
            <Icon name={l.icon} />{l.label}
          </button>
        ))}
        <button className="nav__bell"><Icon name="bell" /><span className="dot"></span></button>
        <div className="avatar">MK</div>
      </nav>
    </header>
  );
}

/* ---- Filter sidebar ---- */
function FilterSidebar({ filters, onToggle, minReady, onReady }) {
  const cats = ['University', 'Small business', 'Tech'];
  const status = ['Open to intros', 'In review', 'Verified only'];
  return (
    <aside className="sidebar">
      <div className="panel">
        <div className="panel__h"><Icon name="sliders-horizontal" />Filters</div>
        <div className="filter-group">
          <h4>Category</h4>
          {cats.map((c) => (
            <div key={c} className={'check' + (filters.includes(c) ? ' on' : '')} onClick={() => onToggle(c)}>
              <span className="bx"><Icon name="check" /></span>{c}
            </div>
          ))}
        </div>
        <div className="filter-group">
          <h4>Minimum readiness <span className="slider-val">{minReady}</span></h4>
          <input type="range" min="0" max="100" value={minReady} onChange={(e) => onReady(+e.target.value)} />
        </div>
        <div className="filter-group">
          <h4>Status</h4>
          {status.map((s) => (
            <div key={s} className={'check' + (filters.includes(s) ? ' on' : '')} onClick={() => onToggle(s)}>
              <span className="bx"><Icon name="check" /></span>{s}
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}

/* ---- Project card ---- */
function ProjectCard({ p, onOpen }) {
  return (
    <button className="pcard" onClick={() => onOpen(p)}>
      <div className="pcard__thumb" style={{ background: p.grad }}>{p.initial}</div>
      <div className="pcard__body">
        <div className="pcard__top">
          <span className="cat">{p.category} · {p.sector}</span>
          {p.verified && <VerifiedBadge />}
        </div>
        <h3>{p.name}</h3>
        <p className="pcard__desc">{p.desc}</p>
        <div className="pcard__meta">
          <div className="stat"><div className="n">{p.ask}</div><div className="l">Ask</div></div>
          <div className="stat"><div className="n">{p.raised}%</div><div className="l">Committed</div></div>
          <div className="stat"><div className="n">{p.signals}</div><div className="l">Signals</div></div>
          <div className="pcard__ready">
            <span className="ready-lbl">Readiness <b>{p.readiness}</b></span>
            <div className="track"><div className="fill" style={{ width: p.readiness + '%' }}></div></div>
          </div>
        </div>
      </div>
    </button>
  );
}

Object.assign(window, { Icon, VerifiedBadge, PremiumBadge, ReadinessMeter, TopNav, FilterSidebar, ProjectCard });

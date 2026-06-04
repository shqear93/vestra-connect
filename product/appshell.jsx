/* VESTRA CONNECT — app shell: sidebar + topbar (shared by dashboards & detail) */
function Sidebar({ role, active }) {
  const ent = [
    { sec:'Overview' },
    { id:'home', i:'layout-dashboard', label:'Dashboard', href:'dashboard-entrepreneur.html' },
    { id:'opp', i:'briefcase', label:'My opportunity', href:'dashboard-entrepreneur.html' },
    { id:'matches', i:'sparkles', label:'Matches', href:'dashboard-entrepreneur.html', badge:'3' },
    { id:'messages', i:'message-square', label:'Messages', href:'dashboard-entrepreneur.html', badge:'2' },
    { sec:'Account' },
    { id:'verify', i:'shield-check', label:'Verification', href:'dashboard-entrepreneur.html' },
    { id:'settings', i:'settings', label:'Settings', href:'dashboard-entrepreneur.html' },
  ];
  const inv = [
    { sec:'Discover' },
    { id:'home', i:'layout-dashboard', label:'Dashboard', href:'dashboard-investor.html' },
    { id:'market', i:'compass', label:'Marketplace', href:'dashboard-investor.html' },
    { id:'saved', i:'bookmark', label:'Saved', href:'dashboard-investor.html', badge:'7' },
    { id:'pipeline', i:'kanban', label:'Pipeline', href:'dashboard-investor.html' },
    { id:'messages', i:'message-square', label:'Messages', href:'dashboard-investor.html', badge:'3' },
    { sec:'Account' },
    { id:'settings', i:'settings', label:'Settings', href:'dashboard-investor.html' },
  ];
  const items = role==='investor' ? inv : ent;
  const user = role==='investor'
    ? { initial:'KO', nm:'Kareem Odeh', rl:'Angel investor', variant:'gold' }
    : { initial:'RM', nm:'Rami Mansour', rl:'Founder · Tareeq', variant:'emerald' };
  return (
    <aside className="sidebar">
      <a href="landing.html" className="sidebar__logo"><img src="../assets/logo-wordmark.svg" alt="Vestra Connect" /></a>
      <nav style={{ display:'flex', flexDirection:'column', gap:2 }}>
        {items.map((it, idx) => it.sec
          ? <div className="sidebar__sec" key={'s'+idx}>{it.sec}</div>
          : <a className={'navi'+(active===it.id?' is-on':'')} href={it.href} key={it.id}><Icon name={it.i} />{it.label}{it.badge && <span className="navi__badge">{it.badge}</span>}</a>
        )}
      </nav>
      <div className="sidebar__foot">
        <div className="sidebar__user">
          <Avatar initial={user.initial} variant={user.variant} />
          <div style={{ flex:1, minWidth:0 }}><div className="nm">{user.nm}</div><div className="rl">{user.rl}</div></div>
          <Icon name="chevrons-up-down" style={{ width:16, height:16, color:'var(--fg-subtle)' }} />
        </div>
      </div>
    </aside>
  );
}

function Topbar({ title, ctaLabel, ctaIcon, ctaHref }) {
  return (
    <div className="topbar">
      <div className="topbar__title">{title}</div>
      <div className="topbar__search input-icon" style={{ marginLeft:18 }}>
        <Icon name="search" />
        <input className="input" placeholder="Search opportunities, founders, sectors…" />
      </div>
      <div className="topbar__actions">
        <button className="iconbtn" aria-label="Notifications"><Icon name="bell" /><span className="dot"></span></button>
        <button className="iconbtn" aria-label="Help"><Icon name="life-buoy" /></button>
        {ctaLabel && <a className="btn btn--primary btn--sm" href={ctaHref||'#'} style={{ marginLeft:6 }}>{ctaIcon && <Icon name={ctaIcon} />}{ctaLabel}</a>}
      </div>
    </div>
  );
}

Object.assign(window, { Sidebar, Topbar });

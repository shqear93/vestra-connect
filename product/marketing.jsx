/* VESTRA CONNECT — marketing chrome: nav + footer */
function MarketingNav({ active }) {
  const [open, setOpen] = useState(false);
  const links = [
    { label:'For Entrepreneurs', href:'#entrepreneurs' },
    { label:'For Investors', href:'#investors' },
    { label:'How it Works', href:'#how' },
    { label:'Opportunities', href:'#marketplace' },
    { label:'Pricing', href:'#pricing' },
  ];
  return (
    <header className="mnav">
      <div className="wrap mnav__in">
        <a href="landing.html" className="mnav__logo"><img src="../assets/logo-wordmark.svg" alt="Vestra Connect" /></a>
        <nav className="mnav__links">
          {links.map((l) => <a key={l.label} href={l.href}>{l.label}</a>)}
        </nav>
        <div className="mnav__cta">
          <a className="mnav__signin" href="signup.html">Sign in</a>
          <a className="btn btn--primary btn--sm" href="signup.html">Get started<Icon name="arrow-right" /></a>
        </div>
        <button className="mnav__burger btn btn--ghost btn--icon" onClick={() => setOpen(!open)} aria-label="Menu"><Icon name={open?'x':'menu'} /></button>
      </div>
      {open && <div className="mnav__mobile">{links.map((l) => <a key={l.label} href={l.href} onClick={()=>setOpen(false)}>{l.label}</a>)}<a className="btn btn--primary btn--block" href="signup.html">Get started</a></div>}
    </header>
  );
}

function MarketingFooter() {
  const cols = [
    { h:'Platform', items:['Opportunities','For entrepreneurs','For investors','Pricing','How it works'] },
    { h:'Company', items:['About','Trust & verification','Careers','Press','Contact'] },
    { h:'Resources', items:['Help center','Guides','Due diligence','Privacy','Terms'] },
  ];
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer__grid">
          <div>
            <img className="footer__logo" src="../assets/logo-wordmark-inverse.svg" alt="Vestra Connect" />
            <p>The trusted platform where ambitious founders meet the right investors — built on verification, structure, and secure conversations.</p>
            <div className="footer__socials">
              <a href="#" aria-label="Website"><Icon name="globe" /></a>
              <a href="#" aria-label="Updates"><Icon name="send" /></a>
              <a href="#" aria-label="Email"><Icon name="mail" /></a>
            </div>
          </div>
          {cols.map((c) => (
            <div key={c.h}><h4>{c.h}</h4><ul>{c.items.map((i) => <li key={i}><a href="#">{i}</a></li>)}</ul></div>
          ))}
        </div>
        <div className="footer__bar">
          <span>© 2026 Vestra Connect. Amman, Jordan.</span>
          <span>Connecting serious projects with the right people.</span>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { MarketingNav, MarketingFooter });

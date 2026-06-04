/* VESTRA CONNECT — sign-up choice screen */
function Signup() {
  useLucide();
  const [sel, setSel] = useState(null);
  const roles = [
    { id:'entrepreneur', ic:'rocket', tint:'var(--emerald-50)', col:'var(--accent)', h:'I\'m an Entrepreneur',
      p:'Present your venture, build credibility, and reach investors who are a genuine fit.',
      feat:['Create a verified business profile','Publish a structured opportunity','Get matched with relevant investors','Start secure conversations'],
      cta:'Continue as Entrepreneur', href:'dashboard-entrepreneur.html' },
    { id:'investor', ic:'gem', tint:'var(--gold-50)', col:'var(--gold-600)', h:'I\'m an Investor',
      p:'Discover curated, verified opportunities and move quickly to serious conversations.',
      feat:['Browse the curated marketplace','Filter by industry, stage & risk','Save and track opportunities','Connect with verified founders'],
      cta:'Continue as Investor', href:'dashboard-investor.html' },
  ];
  return (
    <div className="choice">
      <div className="choice__glow"></div>
      <a href="landing.html" className="choice__logo"><img src="../assets/logo-wordmark.svg" alt="Vestra Connect" /></a>
      <div className="choice__head">
        <h1>How would you like to join Vestra?</h1>
        <p>Choose how you'll use the platform. You can always add the other role later.</p>
      </div>
      <div className="choice__grid">
        {roles.map((r) => (
          <div key={r.id} className={'rolecard'+(sel===r.id?' is-sel':'')} onClick={() => setSel(r.id)}>
            <div className="rolecard__ic" style={{ background:r.tint }}><Icon name={r.ic} style={{ color:r.col }} /></div>
            <h3>{r.h}</h3>
            <p>{r.p}</p>
            <ul>{r.feat.map((f) => <li key={f}><Icon name="check" />{f}</li>)}</ul>
            <a className={'btn '+(sel===r.id?'btn--primary':'btn--secondary')+' btn--block'} href={r.href}>{r.cta}<Icon name="arrow-right" /></a>
          </div>
        ))}
      </div>
      <div className="choice__foot">Already have an account? <a href="dashboard-entrepreneur.html">Sign in</a></div>
    </div>
  );
}
ReactDOM.createRoot(document.getElementById('root')).render(<Signup />);

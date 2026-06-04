/* =========================================================================
   VESTRA CONNECT — shadcn-style primitives + domain components
   Exported to window for sibling Babel scripts. Lucide for icons.
   ========================================================================= */
const { useState, useEffect, useRef } = React;

function Icon({ name, className, style }) { return <i data-lucide={name} className={className} style={style}></i>; }

/* re-render lucide icons after React commits (call once per page root) */
function useLucide(dep) { useEffect(() => { if (window.lucide) window.lucide.createIcons(); }); }

function Button({ variant='primary', size, block, icon, iconRight, children, className='', ...rest }) {
  const cls = ['btn', 'btn--'+variant, size && 'btn--'+size, block && 'btn--block', className].filter(Boolean).join(' ');
  return <button className={cls} {...rest}>{icon && <Icon name={icon} />}{children}{iconRight && <Icon name={iconRight} />}</button>;
}

function Badge({ variant='default', mono, icon, children, className='' }) {
  const cls = ['badge', 'badge--'+variant, mono && 'badge--mono', className].filter(Boolean).join(' ');
  return <span className={cls}>{icon && <Icon name={icon} />}{children}</span>;
}

function RiskBadge({ level }) {
  const map = { Low:'risk-low', Medium:'risk-med', High:'risk-high' };
  return <Badge variant={map[level]} mono icon="activity">{level} risk</Badge>;
}

function Verified({ small }) {
  return <Badge variant="success" icon="shield-check">{small ? 'Verified' : 'Verified founder'}</Badge>;
}

function Avatar({ initial, size='md', variant, src }) {
  const cls = ['avatar', 'avatar--'+size, variant && 'avatar--'+variant].filter(Boolean).join(' ');
  return <span className={cls}>{src ? <img src={src} alt="" /> : initial}</span>;
}

function Progress({ value, gold, sm }) {
  return <div className={'progress'+(gold?' progress--gold':'')+(sm?' progress--sm':'')}><span style={{ width: value+'%' }}></span></div>;
}

function Tabs({ items, value, onChange, block }) {
  return (
    <div className={'tabs'+(block?' tabs--block':'')}>
      {items.map((it) => {
        const id = it.id || it;
        const label = it.label || it;
        return <button key={id} className={value===id?'is-on':''} onClick={() => onChange(id)}>{label}</button>;
      })}
    </div>
  );
}

function TrustScore({ value }) {
  return <div className="tscore"><div className="tscore__ring" style={{ '--p': value }}><span>{value}</span></div></div>;
}

function Stat({ label, value, sub, accent }) {
  return (
    <div className="card card--pad">
      <div style={{ fontFamily:'var(--font-mono)', fontSize:11, letterSpacing:'.08em', textTransform:'uppercase', color:'var(--fg-subtle)' }}>{label}</div>
      <div style={{ fontFamily:'var(--font-display)', fontWeight:600, fontSize:30, color: accent?'var(--accent)':'var(--fg-strong)', marginTop:6, lineHeight:1 }}>{value}</div>
      {sub && <div style={{ fontSize:13, color:'var(--fg-muted)', marginTop:7 }}>{sub}</div>}
    </div>
  );
}

/* ---------- Opportunity card (signature) ---------- */
function OpportunityCard({ o, href='opportunity.html', onView }) {
  const handle = (e) => { if (onView) { e.preventDefault(); onView(o); } };
  return (
    <a className="card card--hover opp" href={href + '?id=' + o.id} onClick={handle}
       style={{ display:'flex', flexDirection:'column', overflow:'hidden' }}>
      <div style={{ padding:'20px 20px 0', display:'flex', alignItems:'flex-start', gap:12 }}>
        <span className="avatar avatar--lg" style={{ borderRadius:'var(--radius-md)', background:o.grad, fontFamily:'var(--font-display)', fontSize:22 }}>{o.initial}</span>
        <div style={{ minWidth:0, flex:1 }}>
          <div className="mono" style={{ fontSize:10.5, letterSpacing:'.1em', textTransform:'uppercase', color:'var(--accent)', whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis' }}>{o.industry}</div>
          <div className="card-t serif" style={{ fontSize:18.5, lineHeight:1.2, marginTop:3 }}>{o.name}</div>
          <div className="subtle" style={{ fontSize:12.5, display:'flex', alignItems:'center', gap:4, marginTop:4 }}><Icon name="map-pin" style={{width:12,height:12}} />{o.location}</div>
        </div>
        {o.verified && <Badge variant="success" icon="shield-check" className="badge--mono">Verified</Badge>}
      </div>
      <div style={{ padding:'14px 20px 0' }}>
        <p className="muted" style={{ fontSize:13.5, lineHeight:1.55, margin:0 }}>{o.summary}</p>
      </div>
      <div style={{ display:'flex', gap:8, flexWrap:'wrap', padding:'14px 20px 0' }}>
        <Badge variant="secondary" mono>{o.stage}</Badge>
        <RiskBadge level={o.risk} />
      </div>
      <div style={{ marginTop:'auto', padding:'16px 20px', display:'flex', alignItems:'flex-end', gap:16, borderTop:'1px solid var(--border-subtle)', marginTop:16 }}>
        <div><div className="mono" style={{ fontWeight:600, fontSize:16, color:'var(--fg-strong)' }}>{o.ask}</div><div className="subtle" style={{ fontSize:11 }}>Funding ask</div></div>
        <div style={{ flex:1 }}>
          <div style={{ display:'flex', justifyContent:'space-between', fontSize:11, marginBottom:5 }}><span className="subtle">{o.raised}% committed</span><span className="subtle">{o.investors} investors</span></div>
          <Progress value={o.raised} sm />
        </div>
        <span className="btn btn--secondary btn--sm" style={{ pointerEvents:'none' }}>View<Icon name="arrow-right" /></span>
      </div>
    </a>
  );
}

Object.assign(window, { Icon, useLucide, Button, Badge, RiskBadge, Verified, Avatar, Progress, Tabs, TrustScore, Stat, OpportunityCard });

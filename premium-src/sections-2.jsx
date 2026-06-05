/* Vestra Connect premium landing — sections part 2 */

function Categories() {
  return (
    <section className="section" id="categories">
      <div className="wrap">
        <Reveal as="div" className="section__head">
          <span className="eyebrow eyebrow--center">Built for three kinds of project</span>
          <h2>Serious projects, structured and verified.</h2>
          <p>Whatever stage you're at, Vestra gives your project a credible profile the right people can trust — and the structure to be taken seriously.</p>
        </Reveal>
        <div className="cats">
          {CATEGORIES.map((x, i) => (
            <Reveal key={x.tag} className="ccard" delay={String(i + 1)} style={{ display: "flex", flexDirection: "column" }}>
              <div className="ccard__ic"><Icon name={x.ic} /></div>
              <div className="ccard__tag">{x.tag}</div>
              <h3>{x.h}</h3>
              <p>{x.p}</p>
              <div className="ccard__meta">
                <span className="n">{x.n}</span>
                <span className="l">{x.l}</span>
                <Icon name="arrow-up-right" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section className="section section--warm" id="how">
      <div className="wrap">
        <Reveal as="div" className="section__head">
          <span className="eyebrow eyebrow--center">How it works</span>
          <h2>From profile to introduction in three steps.</h2>
          <p>A calm, structured path that turns your work into a credible opportunity — and connects you only when there's real interest.</p>
        </Reveal>
        <div className="steps">
          <div className="steps__line"></div>
          {STEPS.map((x, i) => (
            <Reveal key={x.h} className="step" delay={String(i + 1)}>
              <div className="step__n">{i + 1}</div>
              <h3>{x.h}</h3>
              <p>{x.p}</p>
              <span className="step__icon"><Icon name={x.icon} />{x.lbl}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ReadinessExplainer() {
  const [ref, shown] = useReveal({ threshold: 0.25 });
  useEffect(() => {
    if (!shown) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const fills = ref.current.querySelectorAll(".dimrow__fill");
    const apply = () => fills.forEach((f, i) => { setTimeout(() => { f.style.width = f.dataset.w + "%"; }, reduce ? 0 : i * 140); });
    apply();
  }, [shown]);
  const score = useCountUp(82, shown, { duration: 1700 });

  return (
    <section className="section" id="readiness">
      <div className="wrap ready__grid" ref={ref}>
        <Reveal className="ready__copy">
          <span className="eyebrow">Readiness signal</span>
          <h2>One score investors learn to trust.</h2>
          <p>Vestra reads a project across four weighted dimensions and rolls them into a single 0–100 readiness signal — so credibility is legible at a glance.</p>
          <div className="ready__list">
            {READY_POINTS.map((p) => (
              <div className="ready__li" key={p.b}>
                <Icon name={p.ic} />
                <div><b>{p.b}</b><span>{p.s}</span></div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="ready__panel" delay="1">
          <div className="ready__panel-head">
            <span className="vc-eyebrow">Readiness signal</span>
            <span className="vbadge"><Icon name="shield-check" />Verified inputs</span>
          </div>
          <div className="bigring">
            <div className="bigring__ring">
              <ProgressRing size={148} stroke={11} value={82} run={shown} duration={1700} />
              <div className="bigring__val">
                <span className="bigring__num">{score}</span>
                <span className="bigring__lbl">Readiness</span>
              </div>
            </div>
            <div className="bigring__side">
              <span className="bigring__verdict"><Icon name="circle-check-big" />Investor-ready</span>
              <p>Strong team and confirmed verification, with traction trending up across the last two quarters.</p>
            </div>
          </div>
          <div className="dims">
            {DIMENSIONS.map((d) => (
              <div className="dimrow" key={d.l}>
                <span className="dimrow__l"><Icon name={d.icon} />{d.l}</span>
                <span className="dimrow__v">{d.v}</span>
                <div className="dimrow__track"><div className="dimrow__fill" data-w={d.v}></div></div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function InvestorBand() {
  const LI = [
    { b: "Verified deal flow", s: "Every project passes identity and detail verification before it reaches you." },
    { b: "Readiness signals", s: "A structured 0–100 score across the dimensions that matter — at a glance." },
    { b: "Warm introductions", s: "Connect through mutual, opted-in introductions — never cold spam." },
  ];
  return (
    <section className="section section--tight" id="investors">
      <div className="wrap">
        <Reveal className="invest__panel">
          <div className="invest__in">
            <div>
              <span className="eyebrow eyebrow--gold">For investors &amp; partners</span>
              <h2>Discover credible Jordanian projects, with confidence.</h2>
              <p>Vestra brings structure and trust to local opportunity — so you spend your time on real projects, not chasing leads or sifting noise.</p>
              <button className="btn btn--gold btn--lg"><Icon name="star" />Request investor access</button>
            </div>
            <div className="invest__list">
              {LI.map((x) => (
                <div className="invest__li" key={x.b}>
                  <Icon name="check-circle-2" />
                  <div><b>{x.b}</b><span>{x.s}</span></div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Featured() {
  return (
    <section className="section section--warm">
      <div className="wrap">
        <Reveal as="div" className="section__head">
          <span className="eyebrow eyebrow--center">Featured projects</span>
          <h2>A look at what's on the network.</h2>
          <p>Verified profiles with a readiness signal, a clear ask, and real traction — the way every opportunity should be presented.</p>
        </Reveal>
        <div className="feat">
          {FEATURED.map((p, i) => (
            <Reveal key={p.name} className="pcard" delay={String(i + 1)}>
              <div className={`pcard__banner ${p.banner === "green" ? "pcard__banner--green" : p.banner === "gold" ? "pcard__banner--gold" : ""}`}>
                <span className="pcard__verify"><Icon name="shield-check" />Verified</span>
                <div className="pcard__logo">{p.logo}</div>
              </div>
              <div className="pcard__body">
                <div className="pcard__cat">{p.cat}</div>
                <div className="pcard__name">{p.name}</div>
                <p className="pcard__desc">{p.desc}</p>
                <div className="pcard__stats">
                  {p.stats.map((s) => (
                    <div className="pcard__stat" key={s.l}>
                      <div className="n">{s.n}</div>
                      <div className="l">{s.l}</div>
                    </div>
                  ))}
                  <div className="pcard__stat pcard__stat--ready">
                    <div className="pcard__ready"><span className="v">{p.ready}</span></div>
                    <div className="l">Readiness</div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="fcta">
      <div className="fcta__glow"></div>
      <div className="wrap fcta__in">
        <Reveal as="div">
          <span className="eyebrow eyebrow--center">Get started</span>
          <h2>Connecting serious projects with the right people.</h2>
          <p>Join Vestra Connect — Jordan's trusted network for projects, founders, and investors.</p>
          <div className="fcta__cta">
            <button className="btn btn--primary btn--lg"><Icon name="arrow-right" />Showcase your project</button>
            <button className="btn btn--secondary btn--lg">Explore projects</button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  const cols = [
    { h: "Platform", items: ["Discover projects", "For founders", "For investors", "Readiness signals"] },
    { h: "Company", items: ["About", "Trust & verification", "Careers", "Contact"] },
    { h: "Resources", items: ["Help center", "Guides", "Privacy", "Terms"] },
  ];
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer__grid">
          <div>
            <img className="footer__logo" src="assets/logo-wordmark-inverse.svg" alt="Vestra Connect" />
            <p className="footer__about">Jordan's trusted network for projects, founders, and investors. Built on verification, readiness, and warm introductions.</p>
            <span className="footer__loc"><Icon name="map-pin" />Amman, Jordan</span>
          </div>
          {cols.map((c) => (
            <div key={c.h}>
              <h4>{c.h}</h4>
              <ul>{c.items.map((i) => <li key={i}><a href="#">{i}</a></li>)}</ul>
            </div>
          ))}
        </div>
        <div className="footer__bar">
          <span>© 2026 Vestra Connect. Amman, Jordan.</span>
          <span>Built on trust, opportunity, and credibility.</span>
        </div>
      </div>
    </footer>
  );
}

function FeatureRows() {
  return (
    <section className="section section--warm">
      <div className="wrap">
        <Reveal as="div" className="section__head">
          <span className="eyebrow eyebrow--center">Built on trust</span>
          <h2>The mechanics that make it credible.</h2>
          <p>Two signature systems do the quiet work behind every connection — verification you can rely on, and introductions you actually want.</p>
        </Reveal>
        {FEATURE_ROWS.map((r) => (
          <Reveal key={r.slot} className={`frow ${r.flip ? "frow--flip" : ""}`}>
            <div className="frow__copy">
              <span className="eyebrow">{r.eyebrow}</span>
              <h2>{r.h}</h2>
              <p>{r.p}</p>
              <div className="frow__list">
                {r.li.map((x) => (
                  <div className="frow__li" key={x}><Icon name="check-circle-2" />{x}</div>
                ))}
              </div>
              <a className="frow__cta" href="#">{r.cta}<Icon name="arrow-right" /></a>
            </div>
            <div className="frow__media">
              <div className="frow__frame">
                <image-slot id={r.slot} shape="rect" placeholder={`Drop a screenshot — ${r.eyebrow.toLowerCase()}`}></image-slot>
              </div>
              <div className={`frow__badge frow__badge--${r.badge.pos}`}>
                <div className={`ic ${r.badge.grad}`}><Icon name={r.badge.ic} /></div>
                <div><div className="t">{r.badge.t}</div><div className="s">{r.badge.s}</div></div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

Object.assign(window, { Categories, HowItWorks, FeatureRows, ReadinessExplainer, InvestorBand, Featured, FinalCTA, Footer });

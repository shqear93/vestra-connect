/* Vestra Connect premium landing — sections part 1 (nav, hero, proof, stats) */

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <div className="wrap nav__in">
        <a href="#top" aria-label="Vestra Connect home">
          <img className="nav__logo" src="assets/logo-wordmark.svg" alt="Vestra Connect" />
        </a>
        <nav className="nav__links">
          <a href="#categories">For founders</a>
          <a href="#investors">For investors</a>
          <a href="#how">How it works</a>
          <a href="#readiness">Readiness</a>
        </nav>
        <div className="nav__cta">
          <a className="nav__signin" href="#">Sign in</a>
          <button className="btn btn--primary">Get started</button>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  const [ref, shown] = useReveal({ threshold: 0.2 });
  // fill the mini dimension bars after reveal
  useEffect(() => {
    if (!shown) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const fills = ref.current.querySelectorAll(".dim__fill");
    const apply = () => fills.forEach((f) => { f.style.width = f.dataset.w + "%"; });
    if (reduce) apply(); else setTimeout(apply, 350);
  }, [shown]);

  const miniDims = [
    { l: "Team", v: 90 }, { l: "Traction", v: 78 }, { l: "Verification", v: 100 },
  ];

  return (
    <section className="hero" id="top" ref={ref}>
      <div className="hero__glow"></div>
      <div className="wrap hero__grid">
        <div className={shown ? "in" : ""}>
          <div className="hero__badge reveal in" data-d="0">
            <span className="pill"><Icon name="shield-check" />Verified network</span>
            <span>Jordan's trusted home for <b>projects &amp; opportunity</b></span>
          </div>
          <h1 className="reveal in" data-d="1">
            Where Jordan's projects meet <span className="accent">opportunity</span>.
          </h1>
          <p className="hero__lead reveal in" data-d="2">
            A trusted network connecting verified projects with the investors and partners who can move them forward — built on readiness, not noise.
          </p>
          <div className="hero__cta reveal in" data-d="3">
            <button className="btn btn--primary btn--lg"><Icon name="arrow-right" />Showcase your project</button>
            <button className="btn btn--secondary btn--lg">Explore projects</button>
          </div>
          <div className="hero__trust reveal in" data-d="4">
            <div className="ti"><Icon name="shield-check" /><span>Every project verified</span></div>
            <div className="ti"><Icon name="gauge" /><span>Structured readiness signals</span></div>
            <div className="ti"><Icon name="handshake" /><span>Warm introductions</span></div>
          </div>
        </div>

        <div className="hero__visual reveal in" data-d="2">
          <div className="hero__stage">
            <div className="hcard">
              <div className="hcard__head">
                <div className="hcard__logo">B</div>
                <div style={{ flex: 1 }}>
                  <div className="hcard__cat">Small business · Agri-food</div>
                  <div className="hcard__name">Baladi olive cooperative</div>
                </div>
              </div>
              <span className="vbadge"><Icon name="shield-check" />Verified project</span>
              <div className="hcard__ring">
                <div className="ring">
                  <ProgressRing size={96} stroke={8} value={88} run={shown} duration={1600} />
                  <div className="ring__val">
                    <span className="ring__num">{useCountUp(88, shown, { duration: 1600 })}</span>
                    <span className="ring__lbl">Ready</span>
                  </div>
                </div>
                <div className="hcard__dims">
                  {miniDims.map((d) => (
                    <div className="dim" key={d.l}>
                      <span className="dim__l">{d.l}</span>
                      <span className="dim__v">{d.v}</span>
                      <div className="dim__track"><div className="dim__fill" data-w={d.v}></div></div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="hcard__foot">
                <div><div className="n">JOD 120K</div><div className="l">Funding ask</div></div>
                <div style={{ textAlign: "right" }}><div className="n">JOD 310K</div><div className="l">Annual revenue</div></div>
              </div>
            </div>

            <div className="float-chip float-chip--intro">
              <div className="float-chip__ic"><Icon name="sparkles" /></div>
              <div>
                <div className="t">New introduction</div>
                <div className="s">An accredited investor wants to connect</div>
              </div>
            </div>
            <div className="float-chip float-chip--verify">
              <div className="float-chip__ic"><Icon name="badge-check" /></div>
              <div>
                <div className="t">Identity verified</div>
                <div className="s">Business details confirmed by Vestra</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProofStrip() {
  return (
    <section className="proof wrap">
      <Reveal className="proof__label">Trusted by innovative teams across Jordan</Reveal>
      <Reveal className="proof__row" delay="1">
        {PROOF.map((p) => (
          <div className="proof__item" key={p.t}><Icon name={p.ic} />{p.t}</div>
        ))}
      </Reveal>
    </section>
  );
}

function HeroShot() {
  const [ref, shown] = useReveal({ threshold: 0.12 });
  return (
    <section className="wrap heroshot" ref={ref}>
      <div className="heroshot__glow"></div>
      <Reveal className="heroshot__frame">
        <div className="heroshot__bar">
          <span className="heroshot__dot heroshot__dot--r"></span>
          <span className="heroshot__dot heroshot__dot--y"></span>
          <span className="heroshot__dot heroshot__dot--g"></span>
          <span className="heroshot__url">app.vestraconnect.com/discover</span>
        </div>
        <image-slot id="hero-shot" shape="rect"
          placeholder="Drop your product screenshot (the discover / dashboard view)"></image-slot>
      </Reveal>
    </section>
  );
}

function StatNumber({ stat, run, cls }) {
  const decimals = stat.n < 100 && stat.suffix === "M" ? 0 : 0;
  const val = useCountUp(stat.n, run, { duration: 1700, decimals });
  return (
    <div className={cls || "stat__n"}>
      {stat.prefix && <span className="u">{stat.prefix}</span>}
      {val}
      {stat.suffix && <span className="s">{stat.suffix}</span>}
    </div>
  );
}

function StatsBand({ statStyle = "material" }) {
  const [ref, shown] = useReveal({ threshold: 0.3 });
  return (
    <section className="wrap stats">
      <div className="stats__panel" ref={ref}>
        <div className="stats__head">
          <span className="eyebrow eyebrow--gold eyebrow--center">By the numbers</span>
          <h2>A network measured in trust, not hype.</h2>
        </div>
        <div className="stats__grid">
          {STATS.map((s) => (
            statStyle === "gradient" ? (
              <div className="stat" key={s.l}>
                <div className="stat__ic"><Icon name={s.icon} /></div>
                <StatNumber stat={s} run={shown} cls="stat__n" />
                <div className="stat__l">{s.l}</div>
              </div>
            ) : (
              <div className={`mstat mstat--${s.variant}`} key={s.l}>
                <div className="mstat__top">
                  <div className={`mstat__chip g-${s.variant}`}><Icon name={s.icon} /></div>
                  <div className="mstat__meta">
                    <div className="mstat__label">{s.l}</div>
                    <StatNumber stat={s} run={shown} cls="mstat__num" />
                  </div>
                </div>
                <div className="mstat__foot">
                  <span className="mstat__trend"><Icon name="arrow-up-right" />{s.trend}</span>
                  <span>{s.trendNote}</span>
                </div>
              </div>
            )
          ))}
        </div>
        <div className="stats__note">Figures are representative of the Vestra Connect network concept.</div>
      </div>
    </section>
  );
}

Object.assign(window, { Nav, Hero, ProofStrip, HeroShot, StatsBand });

/* Vestra Connect premium landing — app root + Tweaks */
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "#1A73E8",
  "statStyle": "material",
  "motion": true,
  "floatingCards": true
}/*EDITMODE-END*/;

function shade(hex, amt) {
  // amt: positive = lighter toward white, negative = darker toward black
  return amt >= 0
    ? `color-mix(in srgb, ${hex}, white ${amt}%)`
    : `color-mix(in srgb, ${hex}, black ${-amt}%)`;
}

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  // apply accent
  useEffect(() => {
    const root = document.documentElement.style;
    const c = t.accent;
    root.setProperty("--accent", c);
    root.setProperty("--accent-hover", shade(c, -14));
    root.setProperty("--accent-press", shade(c, -26));
    root.setProperty("--grad-emerald", `linear-gradient(135deg, ${shade(c, 16)} 0%, ${c} 48%, ${shade(c, -16)} 100%)`);
    root.setProperty("--shadow-emerald", `0 16px 40px -10px color-mix(in srgb, ${c}, transparent 56%)`);
    root.setProperty("--glow-emerald", `radial-gradient(circle, color-mix(in srgb, ${c}, transparent 84%), transparent 62%)`);
  }, [t.accent]);

  // motion + texture body classes
  useEffect(() => {
    document.body.classList.toggle("no-motion", !t.motion);
  }, [t.motion]);
  useEffect(() => {
    document.body.classList.toggle("no-float", !t.floatingCards);
  }, [t.floatingCards]);

  return (
    <React.Fragment>
      <Nav />
      <main>
        <Hero />
        <HeroShot />
        <ProofStrip />
        <StatsBand statStyle={t.statStyle} />
        <Categories />
        <HowItWorks />
        <FeatureRows />
        <ReadinessExplainer />
        <InvestorBand />
        <Featured />
        <FinalCTA />
      </main>
      <Footer />

      <TweaksPanel>
        <TweakSection label="Stat cards" />
        <TweakRadio label="Card style" value={t.statStyle}
          options={[{ label: "Material chip", value: "material" }, { label: "Gradient fill", value: "gradient" }]}
          onChange={(v) => setTweak("statStyle", v)} />
        <TweakSection label="Brand accent" />
        <TweakColor label="Accent color" value={t.accent}
          options={["#1A73E8", "#1257B5", "#0E988E", "#D81B60"]}
          onChange={(v) => setTweak("accent", v)} />
        <TweakSection label="Motion" />
        <TweakToggle label="Reveal animations" value={t.motion}
          onChange={(v) => setTweak("motion", v)} />
        <TweakToggle label="Floating hero cards" value={t.floatingCards}
          onChange={(v) => setTweak("floatingCards", v)} />
      </TweaksPanel>
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);

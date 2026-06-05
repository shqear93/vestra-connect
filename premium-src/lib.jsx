/* Vestra Connect premium landing — shared lib (hooks + helpers) */
const { useState, useEffect, useRef, useCallback } = React;

/* Lucide icon — re-render after mount so data-lucide gets replaced */
function Icon({ name, className, style }) {
  const ref = useRef(null);
  useEffect(() => {
    if (window.lucide && ref.current) {
      try { window.lucide.createIcons({ icons: window.lucide.icons, nameAttr: "data-lucide", attrs: {} }); } catch (e) {}
    }
  });
  return <i ref={ref} data-lucide={name} className={className} style={style}></i>;
}

/* Reveal-on-scroll — adds .in when the element enters the viewport */
function useReveal(options) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const fire = () => { el.classList.add("in"); setShown(true); };
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) { fire(); return; }
    // If the element is already in (or near) the viewport on mount — e.g. the
    // above-the-fold hero — reveal right away rather than waiting on a scroll.
    const r = el.getBoundingClientRect();
    const vh = window.innerHeight || document.documentElement.clientHeight;
    if (r.top < vh * 0.85 && r.bottom > 0) { fire(); return; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { fire(); io.unobserve(el); }
      });
    }, { threshold: 0.18, rootMargin: "0px 0px -8% 0px", ...(options || {}) });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return [ref, shown];
}

/* Count-up — animates a number from 0 to target once `run` is true */
function useCountUp(target, run, opts) {
  const { duration = 1400, decimals = 0 } = opts || {};
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!run) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) { setVal(target); return; }
    let raf, start, done = false;
    const ease = (t) => 1 - Math.pow(1 - t, 3); // ease-out cubic
    const step = (ts) => {
      if (start == null) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      setVal(target * ease(p));
      if (p < 1) raf = requestAnimationFrame(step);
      else { done = true; setVal(target); }
    };
    raf = requestAnimationFrame(step);
    // Safety net: rAF is throttled in offscreen/background frames, which can
    // leave the count stuck at 0. Guarantee it lands on the target value.
    const safety = setTimeout(() => { if (!done) setVal(target); }, duration + 250);
    return () => { cancelAnimationFrame(raf); clearTimeout(safety); };
  }, [run, target]);
  const factor = Math.pow(10, decimals);
  return Math.round(val * factor) / factor;
}

/* Section wrapper that reveals its children on scroll */
function Reveal({ as: Tag = "div", delay, className = "", children, ...rest }) {
  const [ref] = useReveal();
  return (
    <Tag ref={ref} className={`reveal ${className}`} data-d={delay} {...rest}>
      {children}
    </Tag>
  );
}

/* Animated SVG progress ring */
function ProgressRing({ size = 96, stroke = 8, value = 0, run = true, color = "var(--accent)", track = "var(--paper-200)", duration = 1500 }) {
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const animated = useCountUp(value, run, { duration });
  const offset = c - (animated / 100) * c;
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke={track} strokeWidth={stroke} />
      <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke={color} strokeWidth={stroke}
        strokeLinecap="round" strokeDasharray={c} strokeDashoffset={offset} />
    </svg>
  );
}

Object.assign(window, { Icon, useReveal, useCountUp, Reveal, ProgressRing });

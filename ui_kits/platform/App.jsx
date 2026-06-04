/* Vestra Connect — platform app root */
function App() {
  const [tab, setTab] = React.useState('discover');
  const [active, setActive] = React.useState(null); // open project
  const [intro, setIntro] = React.useState(false);

  // (re)render Lucide icons after every render
  React.useEffect(() => { if (window.lucide) window.lucide.createIcons(); });

  const open = (p) => { setActive(p); window.scrollTo({ top: 0 }); };
  const back = () => setActive(null);

  return (
    <div className="app">
      <TopNav tab={tab} onTab={(t) => { setTab(t); setActive(null); }} />
      {active
        ? <Profile p={active} onBack={back} onIntro={() => setIntro(true)} />
        : <Feed projects={window.VC_PROJECTS} onOpen={open} />}
      {intro && active && <IntroModal p={active} onClose={() => setIntro(false)} />}
    </div>
  );
}
ReactDOM.createRoot(document.getElementById('root')).render(<App />);

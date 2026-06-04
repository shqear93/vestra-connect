/* VESTRA CONNECT — landing page composition */
function Landing() {
  useLucide();
  return (
    <React.Fragment>
      <MarketingNav />
      <Hero />
      <TrustStrip />
      <Problem />
      <Solution />
      <Marketplace />
      <ForEntrepreneurs />
      <ForInvestors />
      <HowItWorks />
      <Features />
      <DashboardPreview />
      <Testimonials />
      <Pricing />
      <FinalCTA />
      <MarketingFooter />
    </React.Fragment>
  );
}
ReactDOM.createRoot(document.getElementById('root')).render(<Landing />);

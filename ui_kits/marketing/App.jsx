/* Vestra Connect — marketing app root */
function Site() {
  React.useEffect(() => { if (window.lucide) window.lucide.createIcons(); });
  return (
    <React.Fragment>
      <MNav />
      <Hero />
      <TrustBand />
      <Categories />
      <HowItWorks />
      <InvestorBand />
      <FinalCTA />
      <Footer />
    </React.Fragment>
  );
}
ReactDOM.createRoot(document.getElementById('root')).render(<Site />);

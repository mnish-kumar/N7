import CoreBankingSection from "./components/CoreBankingSection";
import DigitalBankingSection from "./components/DigitalBankingSection";
import EfficiencySection from "./components/EfficiencySection";
import Hero from "./components/Hero";
import InsightsSection from "./components/InsightsSection";
import Navbar from "./components/Navbar";
import PaperSection from "./components/PaperSection";
import SolutionCard from "./components/SolutionCard";
import TickerSection from "./components/TickerSection";
import CaseStudiesSection from "./components/CaseStudiesSection";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <div className="bg-[var(--bg-primary)] px-4 sm:px-8 md:px-15 flex flex-col overflow-x-hidden">
        <div className="flex justify-center">
          <Navbar />
        </div>
        <Hero />
        <SolutionCard />
        <CoreBankingSection />
        <EfficiencySection />
        
      </div>

      {/* no padding */}
      <TickerSection />
      <DigitalBankingSection />

      <InsightsSection />
      <CaseStudiesSection />
      <Footer />
    </>
  );
};

export default App;

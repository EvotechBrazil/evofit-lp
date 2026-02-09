import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import TechStackSection from "@/components/TechStackSection";
import ProcessSection from "@/components/ProcessSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import DifferentialsSection from "@/components/DifferentialsSection";
import ROICalculator from "@/components/ROICalculator";
import FAQSection from "@/components/FAQSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import { LeadModalProvider } from "@/components/LeadCaptureModal";

const Index = () => {
  return (
    <LeadModalProvider>
      <div className="min-h-screen">
        <Hero />
        <ProblemSection />
        <SolutionSection />
        <TechStackSection />
        <ProcessSection />
        <CaseStudiesSection />
        <DifferentialsSection />
        <ROICalculator />
        <FAQSection />
        <FinalCTA />
        <Footer />
      </div>
    </LeadModalProvider>
  );
};

export default Index;

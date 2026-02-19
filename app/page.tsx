import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { ProblemSection } from "@/components/problem-section";
import { SolutionSection } from "@/components/solution-section";
import { ServicesSection } from "@/components/services-section";
import { ResultsSection } from "@/components/results-section";
import { ProcessSection } from "@/components/process-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { CtaSection } from "@/components/cta-section";
import { Footer } from "@/components/footer";
import { NeuralNetworkBg } from "@/components/neural-network-bg";
import { WhatsAppFab } from "@/components/whatsapp-fab";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <NeuralNetworkBg />
      <Navbar />
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <ServicesSection />
      <ResultsSection />
      <ProcessSection />
      <TestimonialsSection />
      <CtaSection />
      <Footer />
      <WhatsAppFab />
    </main>
  );
}

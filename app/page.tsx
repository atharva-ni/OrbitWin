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
import { WhatsAppFab } from "@/components/whatsapp-fab";
import dynamic from "next/dynamic";

const NeuralNetworkBg = dynamic(
  () => import("@/components/neural-network-bg").then((mod) => mod.NeuralNetworkBg),
  { ssr: false }
);

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

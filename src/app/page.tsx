import { MainContainer } from "@/components/layout/main-container";
import { AboutSection } from "@/components/sections/about-section";
import { CtaSection } from "@/components/sections/cta-section";
import { FaqSection } from "@/components/sections/faq-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ProcessSection } from "@/components/sections/process-section";
import { ServicesSection } from "@/components/sections/services-section";

export default function HomePage() {
  return (
    <MainContainer>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ProcessSection />
      <FaqSection />
      <CtaSection />
    </MainContainer>
  );
}

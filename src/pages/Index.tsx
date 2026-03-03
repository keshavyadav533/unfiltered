import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import ParallaxDivider from "@/components/ParallaxDivider";
import FloatingParticles from "@/components/FloatingParticles";
import { ScrollProgressBar, SectionReveal } from "@/components/ScrollEffects";
import parallaxDivider1 from "@/assets/parallax-divider.jpg";
import parallaxDivider2 from "@/assets/parallax-divider-2.jpg";

const Index = () => {
  return (
    <div className="bg-background relative">
      <ScrollProgressBar />
      <FloatingParticles />
      <Navbar />
      <HeroSection />

      <SectionReveal>
        <ServicesSection />
      </SectionReveal>

      <ParallaxDivider
        image={parallaxDivider1}
        quote="Every space tells a story. We help you write yours."
        author="Unfiltered Design Studio"
      />

      <SectionReveal>
        <PortfolioSection />
      </SectionReveal>

      <ParallaxDivider
        image={parallaxDivider2}
        quote="Where creativity meets craftsmanship, extraordinary spaces are born."
      />

      <SectionReveal>
        <WhyChooseSection />
      </SectionReveal>

      <SectionReveal>
        <TestimonialsSection />
      </SectionReveal>

      <ContactSection />
    </div>
  );
};

export default Index;

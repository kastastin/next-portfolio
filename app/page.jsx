import CTASection from "@/components/sections/CTASection";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import WorksSection from "@/components/sections/WorksSection";
import ReviewsSection from "@/components/sections/ReviewsSection";
import ServicesSection from "@/components/sections/ServicesSection";

const HomePage = () => (
  <main>
    <HeroSection />
    <AboutSection />
    <ServicesSection />
    <WorksSection />
    <ReviewsSection />
    <CTASection />
  </main>
);

export default HomePage;

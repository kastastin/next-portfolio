import Cta from "@/components/Cta";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WorksSection from "@/components/sections/WorksSection";
import ReviewsSection from "@/components/sections/ReviewsSection";
import ServicesSection from "@/components/sections/ServicesSection";

const HomePage = () => (
  <main>
    <Hero />
    <About />
    <ServicesSection />
    <WorksSection />
    <ReviewsSection />
    <Cta />
  </main>
);

export default HomePage;

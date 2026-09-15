import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectsSection";
import CapabilitiesSection from "./components/CapabilitiesSection";
import Experience from "./components/Experience";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ProjectsSection />
      <CapabilitiesSection />
      <Experience />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

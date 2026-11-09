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
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Navigation />
      <main id="main-content" tabIndex={-1}>
        <HeroSection />
        <ProjectsSection />
        <CapabilitiesSection />
        <Experience />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

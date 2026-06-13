/*
 * MIDNIGHT DATA LAB — Home Page
 * Assembles all portfolio sections
 */
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import Awards from "@/components/Awards";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen" style={{ background: "#050A14" }}>
      {/* Noise texture overlay */}
      <div className="noise-overlay" />

      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Certifications />
      <Awards />
      <Contact />
      <Footer />
    </div>
  );
}

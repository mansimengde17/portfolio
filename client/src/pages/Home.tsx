/*
 * PORTFOLIO — Home Page
 * Assembles all sections in order
 */
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import ShippedSystems from "@/components/ShippedSystems";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import Awards from "@/components/Awards";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div style={{ background: "#F6F4EE", minHeight: "100vh" }}>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <ShippedSystems />
      <Projects />
      <Skills />
      <Certifications />
      <Awards />
      <Contact />
      <Footer />
    </div>
  );
}

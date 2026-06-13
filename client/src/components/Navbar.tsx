/*
 * MIDNIGHT DATA LAB — Navbar
 * Transparent → frosted glass on scroll
 * Signature: Electric Cyan #00D4FF
 */
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Certifications", href: "#certifications" },
  { label: "Awards", href: "#awards" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );
    navLinks.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled
            ? "rgba(5, 10, 20, 0.9)"
            : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(0, 212, 255, 0.1)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
              className="flex items-center gap-2 group"
            >
              <div className="w-8 h-8 rounded-sm overflow-hidden flex-shrink-0">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663753984391/cDgtwTJsWKHZodyaYRSVef/logo-icon-MfLNQ99bHArveiBfNXM94K.webp"
                  alt="MM Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <span
                className="font-mono text-sm font-semibold tracking-wider"
                style={{ color: "#00D4FF" }}
              >
                mansi.dev
              </span>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map(({ label, href }) => {
                const sectionId = href.replace("#", "");
                const isActive = activeSection === sectionId;
                return (
                  <button
                    key={href}
                    onClick={() => handleNavClick(href)}
                    className="relative px-3 py-2 text-sm font-medium transition-colors duration-150"
                    style={{
                      color: isActive ? "#00D4FF" : "#6B8FAB",
                      fontFamily: "'DM Sans', sans-serif",
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) (e.target as HTMLElement).style.color = "#E8F4FD";
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) (e.target as HTMLElement).style.color = "#6B8FAB";
                    }}
                  >
                    {label}
                    {isActive && (
                      <motion.div
                        layoutId="nav-indicator"
                        className="absolute bottom-0 left-0 right-0 h-0.5"
                        style={{
                          background: "#00D4FF",
                          boxShadow: "0 0 8px rgba(0, 212, 255, 0.6)",
                        }}
                      />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* CTA Button */}
            <a
              href="mailto:mansimengde17@gmail.com"
              className="hidden md:flex btn-cyber text-xs py-2 px-4"
            >
              Hire Me
            </a>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden p-2 rounded-md"
              style={{ color: "#00D4FF" }}
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 md:hidden"
            style={{
              background: "rgba(5, 10, 20, 0.97)",
              backdropFilter: "blur(20px)",
              borderBottom: "1px solid rgba(0, 212, 255, 0.15)",
            }}
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {navLinks.map(({ label, href }, i) => (
                <motion.button
                  key={href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => handleNavClick(href)}
                  className="text-left px-3 py-3 rounded-md text-sm font-medium transition-colors"
                  style={{
                    color: "#E8F4FD",
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  <span style={{ color: "#00D4FF", fontFamily: "monospace", marginRight: "8px" }}>
                    {String(i + 1).padStart(2, "0")}.
                  </span>
                  {label}
                </motion.button>
              ))}
              <div className="mt-3 pt-3" style={{ borderTop: "1px solid rgba(0, 212, 255, 0.1)" }}>
                <a href="mailto:mansimengde17@gmail.com" className="btn-cyan w-full justify-center text-sm">
                  Hire Me
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

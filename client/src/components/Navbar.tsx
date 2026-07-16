/*
 * PORTFOLIO — Navbar
 * Professional neutral palette, no emojis, scroll-aware background
 */
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "About", href: "#about-detail" },
  { label: "Experience", href: "#experience" },
  { label: "AI Systems", href: "#systems" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Certifications", href: "#certifications" },
  { label: "Recognition", href: "#awards" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`navbar ${scrolled ? "scrolled" : ""}`}
      style={{ padding: "0" }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "64px",
        }}
      >
        {/* Logo / Name */}
        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          style={{
            fontFamily: "'Space Grotesk', system-ui, sans-serif",
            fontSize: "1.15rem",
            fontWeight: 700,
            color: "#14120E",
            textDecoration: "none",
            letterSpacing: "-0.01em",
          }}
        >
          Mansi Mengde
          <span
            style={{
              display: "inline-block",
              width: "5px",
              height: "5px",
              borderRadius: "50%",
              background: "var(--gold)",
              marginLeft: "4px",
              verticalAlign: "middle",
            }}
          />
        </motion.a>

        {/* Desktop nav */}
        <nav className="hidden md:flex" style={{ gap: "0" }}>
          {NAV_LINKS.map(({ label, href }, i) => (
            <motion.button
              key={href}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 + i * 0.04 }}
              onClick={() => scrollTo(href)}
              style={{
                background: "none",
                border: "none",
                padding: "0 0.85rem",
                height: "64px",
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.8rem",
                fontWeight: 600,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "rgba(20,18,14,0.75)",
                cursor: "pointer",
                transition: "color 150ms ease",
                position: "relative",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(20,18,14,0.75)")}
            >
              {label}
            </motion.button>
          ))}
        </nav>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{
            background: "none",
            border: "none",
            color: "var(--slate)",
            padding: "0.5rem",
          }}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          style={{
            background: "rgba(246, 244, 238, 0.98)",
            borderTop: "1px solid rgba(79, 70, 229, 0.1)",
            padding: "1rem",
          }}
        >
          {NAV_LINKS.map(({ label, href }) => (
            <button
              key={href}
              onClick={() => scrollTo(href)}
              className="nav-mobile-item"
              style={{
                display: "block",
                width: "100%",
                textAlign: "left",
                background: "none",
                border: "none",
                padding: "0.75rem 0",
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.8rem",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--slate)",
                borderBottom: "1px solid rgba(79, 70, 229, 0.06)",
                cursor: "pointer",
              }}
            >
              {label}
            </button>
          ))}
        </motion.div>
      )}
    </header>
  );
}

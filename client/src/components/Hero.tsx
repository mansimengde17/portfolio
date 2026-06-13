/*
 * PORTFOLIO — Hero Section
 * Graduation photo beside name with animated reveal
 * Headshot card on right column
 * No hyphens, no emojis, SF Bay Area
 */
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, MapPin, Download } from "lucide-react";

const ROLES = ["Data Engineer", "Cloud Architect", "Software Engineer"];

function useTypewriter(words: string[], speed = 80, pause = 2000) {
  const [display, setDisplay] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const timeout = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    const word = words[wordIdx];
    if (!deleting && charIdx < word.length) {
      timeout.current = setTimeout(() => setCharIdx((c) => c + 1), speed);
    } else if (!deleting && charIdx === word.length) {
      timeout.current = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIdx > 0) {
      timeout.current = setTimeout(() => setCharIdx((c) => c - 1), speed / 2);
    } else if (deleting && charIdx === 0) {
      setDeleting(false);
      setWordIdx((i) => (i + 1) % words.length);
    }
    setDisplay(word.slice(0, charIdx));
    return () => clearTimeout(timeout.current);
  }, [charIdx, deleting, wordIdx, words, speed, pause]);

  return display;
}

const STATS = [
  { value: "5M+", label: "Events Processed Daily" },
  { value: "99.9%", label: "Pipeline Uptime" },
  { value: "2x", label: "Hackathon Winner" },
  { value: "AWS", label: "Certified Architect" },
];

/* Floating sparkle particle */
function Sparkle({ x, y, delay }: { x: string; y: string; delay: number }) {
  return (
    <motion.div
      style={{
        position: "absolute",
        left: x,
        top: y,
        width: "4px",
        height: "4px",
        borderRadius: "50%",
        background: "var(--gold)",
        pointerEvents: "none",
      }}
      animate={{
        opacity: [0, 1, 0],
        scale: [0.5, 1.4, 0.5],
        y: [0, -18, 0],
      }}
      transition={{
        duration: 2.4,
        repeat: Infinity,
        delay,
        ease: "easeInOut",
      }}
    />
  );
}

export default function Hero() {
  const role = useTypewriter(ROLES);
  const sparkles = [
    { x: "8%", y: "12%", delay: 0 },
    { x: "82%", y: "8%", delay: 0.6 },
    { x: "92%", y: "55%", delay: 1.1 },
    { x: "5%", y: "70%", delay: 0.3 },
    { x: "50%", y: "5%", delay: 0.9 },
    { x: "70%", y: "90%", delay: 1.5 },
    { x: "20%", y: "88%", delay: 0.7 },
  ];

  return (
    <section
      id="about"
      style={{
        minHeight: "100vh",
        background: "#0D1117",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        paddingTop: "80px",
        paddingBottom: "5rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background grid */}
      <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(201,168,76,0.022) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.022) 1px, transparent 1px)", backgroundSize: "100px 100px", pointerEvents: "none" }} />
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 80% 60% at 50% 50%, transparent 40%, #0D1117 100%)", pointerEvents: "none" }} />

      {/* Floating sparkles */}
      {sparkles.map((s, i) => (
        <Sparkle key={i} x={s.x} y={s.y} delay={s.delay} />
      ))}

      <div className="container relative" style={{ zIndex: 1 }}>
        {/* Main two-column layout */}
        <div className="hero-grid" style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "3rem", alignItems: "center" }}>
          {/* Left: Text content */}
          <div style={{ minWidth: 0 }}>
            {/* Overline label */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              style={{
                fontFamily: "'Courier New', monospace",
                fontSize: "0.68rem",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "var(--gold)",
                marginBottom: "1.2rem",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              <MapPin size={11} />
              San Francisco Bay Area, CA
            </motion.div>

            {/* Name */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{ marginBottom: "0.75rem" }}
            >
              <h1
                style={{
                  fontFamily: "'Times New Roman', Times, serif",
                  fontSize: "clamp(2.4rem, 5vw, 4.5rem)",
                  fontWeight: 700,
                  color: "#F5F0E8",
                  letterSpacing: "-0.03em",
                  lineHeight: 1.08,
                  margin: 0,
                }}
              >
                Mansi Mengde
              </h1>
            </motion.div>

            {/* Animated role title */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              style={{
                height: "2.5rem",
                display: "flex",
                alignItems: "center",
                marginBottom: "1.5rem",
                overflow: "hidden",
              }}
            >
              <span
                style={{
                  fontFamily: "'Times New Roman', Times, serif",
                  fontSize: "clamp(1.1rem, 2.2vw, 1.6rem)",
                  fontStyle: "italic",
                  color: "var(--gold)",
                  letterSpacing: "-0.01em",
                  whiteSpace: "nowrap",
                }}
              >
                {role}
              </span>
              <span className="cursor-blink" />
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              style={{
                maxWidth: "520px",
                color: "#B8C8D8",
                fontFamily: "'Georgia', serif",
                fontSize: "1rem",
                lineHeight: 1.8,
                margin: "0 0 2.5rem",
              }}
            >
              Four years designing data systems that process millions of events daily.
              AWS Certified Solutions Architect. I build infrastructure that operations
              teams, security analysts, and executives rely on.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65 }}
              style={{ display: "flex", gap: "1rem", flexWrap: "wrap", alignItems: "center", marginBottom: "2rem" }}
            >
              <a
                href="#contact"
                className="btn-primary"
                onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}
              >
                Let's Connect
              </a>
              <a
                href="#projects"
                className="btn-ghost"
                onClick={(e) => { e.preventDefault(); document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" }); }}
              >
                View Work
              </a>
              <a
                href="/manus-storage/mansi-mengde-resume_113f1d54.pdf"
                download="Mansi_Mengde_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.45rem",
                  padding: "0.65rem 1.4rem",
                  fontFamily: "'Courier New', monospace",
                  fontSize: "0.68rem",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "var(--gold)",
                  border: "1px solid rgba(201,168,76,0.4)",
                  borderRadius: "1px",
                  textDecoration: "none",
                  transition: "all 180ms ease",
                  background: "transparent",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(201,168,76,0.08)";
                  e.currentTarget.style.borderColor = "rgba(201,168,76,0.8)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.borderColor = "rgba(201,168,76,0.4)";
                }}
              >
                <Download size={13} />
                Resume
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              style={{ display: "flex", gap: "1.5rem", alignItems: "center", flexWrap: "wrap" }}
            >
              {[
                { icon: <Github size={16} />, href: "https://github.com/mansimengde17", label: "GitHub" },
                { icon: <Linkedin size={16} />, href: "https://www.linkedin.com/in/mansi-mengde-b5b2951a2/", label: "LinkedIn" },
                { icon: <Mail size={16} />, href: "mailto:mansimengde17@gmail.com", label: "Email" },
              ].map(({ icon, href, label }) => (
                <a
                  key={href}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.4rem",
                    fontFamily: "'Courier New', monospace",
                    fontSize: "0.68rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "var(--slate)",
                    textDecoration: "none",
                    transition: "color 150ms ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--slate)")}
                >
                  {icon}
                  {label}
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right: Graduation photo card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{ flexShrink: 0 }}
            className="hidden md:block"
          >
            <div
              style={{
                width: "280px",
                border: "1px solid rgba(201, 168, 76, 0.25)",
                borderRadius: "2px",
                overflow: "hidden",
                position: "relative",
                background: "#0D1117",
              }}
            >
              <img
                src="/manus-storage/graduation-hero_d7b38a9a.webp"
                alt="Mansi Mengde at CSULB graduation — M.S. Information Systems"
                style={{ width: "100%", height: "auto", display: "block", objectFit: "contain" }}
              />
              <div
                style={{
                  padding: "0.85rem 1rem",
                  background: "rgba(13,17,23,0.97)",
                  borderTop: "1px solid rgba(201,168,76,0.18)",
                }}
              >
                <p style={{ fontFamily: "'Courier New', monospace", fontSize: "0.58rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--gold)", margin: 0 }}>
                  M.S. Information Systems · CSULB
                </p>
                <p style={{ fontFamily: "'Georgia', serif", fontSize: "0.75rem", color: "#F5F0E8", margin: "3px 0 0" }}>
                  Graduated May 2026
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="hero-stats-grid"
          style={{ marginTop: "4rem", display: "grid", gridTemplateColumns: "repeat(4, 1fr)",
            borderTop: "1px solid rgba(201, 168, 76, 0.12)",
            borderLeft: "1px solid rgba(201, 168, 76, 0.12)",
          }}
        >
          {STATS.map(({ value, label }, i) => (
            <div
              key={label}
              style={{
                padding: "1.5rem",
                borderRight: "1px solid rgba(201, 168, 76, 0.12)",
                borderBottom: "1px solid rgba(201, 168, 76, 0.12)",
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0 + i * 0.08 }}
              >
                <div style={{ fontFamily: "'Times New Roman', Times, serif", fontSize: "2rem", fontWeight: 700, color: "var(--gold)", lineHeight: 1 }}>
                  {value}
                </div>
                <div style={{ fontFamily: "'Courier New', monospace", fontSize: "0.6rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--slate)", marginTop: "0.4rem" }}>
                  {label}
                </div>
              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.4rem",
        }}
      >
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>
          <ArrowDown size={14} style={{ color: "var(--slate)" }} />
        </motion.div>
        <span style={{ fontFamily: "'Courier New', monospace", fontSize: "0.58rem", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--slate)" }}>
          Scroll
        </span>
      </motion.div>
    </section>
  );
}

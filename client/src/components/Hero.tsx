/*
 * PORTFOLIO — Hero Section
 * Animated rotating roles, graduation photo, professional neutral palette, no emojis
 */
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

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
  { value: "4+", label: "Years of Experience" },
  { value: "5M+", label: "Events Processed Daily" },
  { value: "99.9%", label: "Pipeline Uptime" },
  { value: "2x", label: "Hackathon Winner" },
];

export default function Hero() {
  const role = useTypewriter(ROLES);

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
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(201,168,76,0.022) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.022) 1px, transparent 1px)", backgroundSize: "100px 100px", pointerEvents: "none" }} />
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 80% 60% at 50% 50%, transparent 40%, #0D1117 100%)", pointerEvents: "none" }} />

      <div className="container relative" style={{ zIndex: 1 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "4rem", alignItems: "center" }}>
          <div>
            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
              style={{ fontFamily: "'Courier New', monospace", fontSize: "0.68rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "1.2rem" }}>
              M.S. Information Systems · CSULB, May 2026
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
              style={{ fontFamily: "'Times New Roman', Times, serif", fontSize: "clamp(2.8rem, 5.5vw, 5rem)", fontWeight: 700, color: "#F5F0E8", letterSpacing: "-0.03em", lineHeight: 1.08, margin: 0 }}>
              Mansi Mengde
            </motion.h1>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
              style={{ marginTop: "0.75rem", height: "2.8rem", display: "flex", alignItems: "center" }}>
              <span style={{ fontFamily: "'Times New Roman', Times, serif", fontSize: "clamp(1.2rem, 2.5vw, 1.75rem)", fontStyle: "italic", color: "var(--gold)", letterSpacing: "-0.01em" }}>
                {role}
              </span>
              <span className="cursor-blink" />
            </motion.div>

            <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.6 }}
              style={{ marginTop: "1.5rem", maxWidth: "520px", color: "var(--slate)", fontFamily: "'Georgia', serif", fontSize: "1rem", lineHeight: 1.75 }}>
              Four years designing data systems that process millions of events daily.
              AWS Certified Solutions Architect — Professional. I build infrastructure
              that operations teams, security analysts, and executives rely on.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.65 }}
              style={{ marginTop: "2.5rem", display: "flex", gap: "1rem", flexWrap: "wrap", alignItems: "center" }}>
              <a href="#contact" className="btn-primary" onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}>
                Let's Connect
              </a>
              <a href="#projects" className="btn-ghost" onClick={(e) => { e.preventDefault(); document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" }); }}>
                View Work
              </a>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
              style={{ marginTop: "2rem", display: "flex", gap: "1.5rem", alignItems: "center" }}>
              {[
                { icon: <Github size={17} />, href: "https://github.com/mansimengde17", label: "GitHub" },
                { icon: <Linkedin size={17} />, href: "https://www.linkedin.com/in/mansi-mengde-b5b2951a2/", label: "LinkedIn" },
                { icon: <Mail size={17} />, href: "mailto:mansimengde17@gmail.com", label: "Email" },
              ].map(({ icon, href, label }) => (
                <a key={href} href={href} target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  style={{ display: "flex", alignItems: "center", gap: "0.4rem", fontFamily: "'Courier New', monospace", fontSize: "0.68rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--slate)", textDecoration: "none", transition: "color 150ms ease" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--slate)")}>
                  {icon}
                  {label}
                </a>
              ))}
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.3 }}
            style={{ flexShrink: 0 }} className="hidden md:block">
            <div style={{ width: "280px", height: "400px", border: "1px solid rgba(201, 168, 76, 0.25)", borderRadius: "2px", overflow: "hidden", position: "relative" }}>
              <img src="/manus-storage/graduation-banner_305f96de.jpg" alt="Mansi Mengde — CSULB Graduation, May 2026"
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }} />
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "1.5rem 1rem 1rem", background: "linear-gradient(to top, rgba(13,17,23,0.92) 0%, transparent 100%)" }}>
                <p style={{ fontFamily: "'Courier New', monospace", fontSize: "0.6rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--gold)", margin: 0 }}>M.S. Information Systems</p>
                <p style={{ fontFamily: "'Georgia', serif", fontSize: "0.75rem", color: "#F5F0E8", margin: "2px 0 0", opacity: 0.85 }}>California State University, Long Beach — May 2026</p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9, duration: 0.6 }}
          style={{ marginTop: "4rem", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", borderTop: "1px solid rgba(201, 168, 76, 0.12)", borderLeft: "1px solid rgba(201, 168, 76, 0.12)" }}>
          {STATS.map(({ value, label }, i) => (
            <div key={label} style={{ padding: "1.5rem", borderRight: "1px solid rgba(201, 168, 76, 0.12)", borderBottom: "1px solid rgba(201, 168, 76, 0.12)" }}>
              <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.0 + i * 0.08 }}>
                <div style={{ fontFamily: "'Times New Roman', Times, serif", fontSize: "2rem", fontWeight: 700, color: "var(--gold)", lineHeight: 1 }}>{value}</div>
                <div style={{ fontFamily: "'Courier New', monospace", fontSize: "0.6rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--slate)", marginTop: "0.4rem" }}>{label}</div>
              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }}
        style={{ position: "absolute", bottom: "2rem", left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: "0.4rem" }}>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>
          <ArrowDown size={14} style={{ color: "var(--slate)" }} />
        </motion.div>
        <span style={{ fontFamily: "'Courier New', monospace", fontSize: "0.58rem", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--slate)" }}>Scroll</span>
      </motion.div>
    </section>
  );
}

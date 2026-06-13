/*
 * MIDNIGHT DATA LAB — Hero Section
 * Typewriter effect, animated stats, profile photo
 * Background: hero-bg.webp with overlay
 */
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download, ChevronDown } from "lucide-react";

const TYPEWRITER_STRINGS = [
  "Data Engineer",
  "Cloud Architect",
  "ML Pipeline Builder",
  "AWS Certified",
];

function useTypewriter(strings: string[], speed = 80, pause = 1800) {
  const [displayed, setDisplayed] = useState("");
  const [idx, setIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = strings[idx];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && charIdx < current.length) {
      timeout = setTimeout(() => setCharIdx((c) => c + 1), speed);
    } else if (!deleting && charIdx === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => setCharIdx((c) => c - 1), speed / 2);
    } else if (deleting && charIdx === 0) {
      setDeleting(false);
      setIdx((i) => (i + 1) % strings.length);
    }

    setDisplayed(current.slice(0, charIdx));
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, idx, strings, speed, pause]);

  return displayed;
}

const stats = [
  { value: "4+", label: "Years Experience" },
  { value: "5M+", label: "Events/Day Processed" },
  { value: "99.9%", label: "Data Accuracy" },
  { value: "2x", label: "Hackathon Winner" },
];

export default function Hero() {
  const role = useTypewriter(TYPEWRITER_STRINGS);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "#050A14" }}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/310519663753984391/cDgtwTJsWKHZodyaYRSVef/hero-bg-LpudKxrmFWZhd7XRmAzRXK.webp)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.35,
        }}
      />
      {/* Gradient overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(5,10,20,0.95) 0%, rgba(5,10,20,0.7) 50%, rgba(5,10,20,0.9) 100%)",
        }}
      />
      {/* Animated grid lines */}
      <div
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,212,255,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,212,255,0.3) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          animation: "gridMove 20s linear infinite",
        }}
      />
      <style>{`
        @keyframes gridMove {
          0% { background-position: 0 0; }
          100% { background-position: 60px 60px; }
        }
      `}</style>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="section-label">
                &gt;_ Hello, World
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
              className="mt-4 text-5xl lg:text-7xl font-bold leading-tight"
              style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#E8F4FD" }}
            >
              Mansi{" "}
              <span className="gradient-text">Mengde</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-4 flex items-center gap-2 text-2xl lg:text-3xl font-semibold"
              style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#E8F4FD" }}
            >
              <span style={{ color: "#00D4FF" }}>{role}</span>
              <span
                className="cursor-blink inline-block w-0.5 h-8 ml-1"
                style={{ background: "#00D4FF" }}
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-6 text-base lg:text-lg leading-relaxed max-w-lg"
              style={{ color: "#6B8FAB", fontFamily: "'DM Sans', sans-serif" }}
            >
              4 years building production data pipelines that run at{" "}
              <span style={{ color: "#00D4FF" }}>5M+ events/day</span>. AWS Certified.
              M.S. Information Systems, CSULB. I design systems that operations teams,
              security analysts, and executives actually rely on.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <a href="#contact" className="btn-cyan" onClick={(e) => {
                e.preventDefault();
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}>
                Let's Work Together
              </a>
              <a
                href="https://github.com/mansimengde17"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cyber"
              >
                <Github size={16} />
                GitHub
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-6 flex items-center gap-4"
            >
              {[
                { icon: <Github size={18} />, href: "https://github.com/mansimengde17", label: "GitHub" },
                { icon: <Linkedin size={18} />, href: "https://www.linkedin.com/in/mansi-mengde-b5b2951a2/", label: "LinkedIn" },
                { icon: <Mail size={18} />, href: "mailto:mansimengde17@gmail.com", label: "Email" },
              ].map(({ icon, href, label }) => (
                <a
                  key={href}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-2 text-sm transition-colors duration-150"
                  style={{ color: "#6B8FAB" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#00D4FF")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#6B8FAB")}
                >
                  {icon}
                  <span style={{ fontFamily: "'DM Sans', sans-serif" }}>{label}</span>
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right: Profile card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.23, 1, 0.32, 1] }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Glow ring */}
              <div
                className="absolute -inset-4 rounded-2xl opacity-30 blur-xl"
                style={{ background: "radial-gradient(circle, rgba(0,212,255,0.4) 0%, transparent 70%)" }}
              />
              {/* Profile card */}
              <div
                className="relative glow-card rounded-2xl p-1 float-anim"
                style={{ width: "320px" }}
              >
                <div className="rounded-xl overflow-hidden" style={{ height: "380px" }}>
                  <img
                    src="/manus-storage/profile-photo_015d6fb5.webp"
                    alt="Mansi Mengde"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                {/* Card overlay info */}
                <div
                  className="absolute bottom-0 left-0 right-0 p-4 rounded-b-xl"
                  style={{
                    background: "linear-gradient(to top, rgba(5,10,20,0.95) 0%, transparent 100%)",
                  }}
                >
                  <p className="font-bold text-lg" style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#E8F4FD" }}>
                    Mansi Mengde
                  </p>
                  <p className="text-sm" style={{ color: "#00D4FF", fontFamily: "'JetBrains Mono', monospace" }}>
                    Data Engineer · AWS Certified
                  </p>
                  <p className="text-xs mt-1" style={{ color: "#6B8FAB" }}>
                    📍 Los Angeles, CA
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.0 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {stats.map(({ value, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 + i * 0.1 }}
              className="glow-card rounded-xl p-4 text-center"
            >
              <div
                className="text-3xl font-bold"
                style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#00D4FF" }}
              >
                {value}
              </div>
              <div className="text-xs mt-1" style={{ color: "#6B8FAB", fontFamily: "'DM Sans', sans-serif" }}>
                {label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="flex justify-center mt-12 pb-8"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-1 cursor-pointer"
            onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })}
          >
            <span className="text-xs" style={{ color: "#6B8FAB", fontFamily: "'JetBrains Mono', monospace" }}>
              scroll
            </span>
            <ChevronDown size={16} style={{ color: "#00D4FF" }} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

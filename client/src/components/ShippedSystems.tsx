/*
 * PORTFOLIO — Shipped AI Systems Section
 * Dedicated showcase for production AI systems with live demos
 * No emojis, no hyphens in prose
 */
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Github, Activity, Cpu, Zap } from "lucide-react";

const SYSTEMS = [
  {
    title: "Real Time Financial Intelligence Platform",
    status: "Live in Production",
    description:
      "A production AI system for real time financial intelligence. Streams market signals through an event driven pipeline, applies ML driven anomaly detection, and serves insights through a live analytics interface. Designed, built and shipped end to end as a working system, not a demo notebook.",
    live: "https://mansimengde17.github.io/Real-Time-Financial-Intelligence-Platform/",
    github: "https://github.com/mansimengde17/Real-Time-Financial-Intelligence-Platform",
    tags: ["Python", "Streaming", "ML Anomaly Detection", "Event Driven Pipeline", "AI Systems"],
    metrics: [
      { icon: <Activity size={14} />, label: "Real time signal processing" },
      { icon: <Cpu size={14} />, label: "ML inference in the loop" },
      { icon: <Zap size={14} />, label: "Live interactive dashboard" },
    ],
  },
];

export default function ShippedSystems() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="systems" ref={ref} style={{ padding: "6rem 0", background: "#0B0E22", position: "relative", overflow: "hidden" }}>
      {/* Subtle animated glow */}
      <motion.div
        animate={{ opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute",
          top: "20%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "600px",
          height: "300px",
          background: "radial-gradient(ellipse, rgba(139,92,246,0.12) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: "3.5rem" }}
        >
          <span className="section-label">03. Shipped AI Systems</span>
          <h2
            style={{
              fontFamily: "'Space Grotesk', system-ui, sans-serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 700,
              color: "#F2F5FF",
              marginTop: "0.5rem",
              letterSpacing: "-0.02em",
            }}
          >
            AI Systems Running{" "}
            <span className="gradient-text">in Production</span>
          </h2>
          <p style={{ marginTop: "0.75rem", maxWidth: "560px", color: "var(--slate)", fontFamily: "'Inter', system-ui, sans-serif", fontSize: "1rem", lineHeight: 1.75 }}>
            Beyond pipelines and dashboards, these are complete AI systems I have designed,
            built and shipped, running live for anyone to try.
          </p>
        </motion.div>

        {SYSTEMS.map((sys, i) => (
          <motion.div
            key={sys.title}
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15 + i * 0.1, duration: 0.6 }}
            className="card-gold"
            style={{ padding: "2.5rem", position: "relative", overflow: "hidden" }}
          >
            {/* Status badge */}
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem" }}>
              <motion.span
                animate={{ opacity: [1, 0.4, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#4ADE80", display: "inline-block" }}
              />
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.74rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "#4ADE80" }}>
                {sys.status}
              </span>
            </div>

            <h3 style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif", fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)", fontWeight: 700, color: "#F2F5FF", margin: "0 0 1rem", letterSpacing: "-0.01em" }}>
              {sys.title}
            </h3>

            <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: "0.95rem", color: "var(--slate)", lineHeight: 1.8, maxWidth: "680px", margin: "0 0 1.5rem" }}>
              {sys.description}
            </p>

            {/* Metrics row */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1.5rem", marginBottom: "1.5rem" }}>
              {sys.metrics.map((m) => (
                <div key={m.label} style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--gold)" }}>
                  {m.icon}
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.76rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--slate)" }}>
                    {m.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Tags */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "2rem" }}>
              {sys.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "0.8rem",
                    letterSpacing: "0.08em",
                    padding: "0.18rem 0.55rem",
                    background: "rgba(139, 92, 246, 0.06)",
                    border: "1px solid rgba(139, 92, 246, 0.18)",
                    borderRadius: "12px",
                    color: "var(--gold)",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* CTA buttons */}
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <a href={sys.live} target="_blank" rel="noopener noreferrer" className="btn-primary">
                <ExternalLink size={14} />
                Open Live System
              </a>
              <a href={sys.github} target="_blank" rel="noopener noreferrer" className="btn-ghost">
                <Github size={14} />
                View Source
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/*
 * PORTFOLIO — Entry Screen
 * Cinematic animated intro that transitions into the portfolio
 * Click or press any key to enter
 */
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface EntryScreenProps {
  onEnter: () => void;
}

export default function EntryScreen({ onEnter }: EntryScreenProps) {
  const [phase, setPhase] = useState<"idle" | "growing" | "text" | "ready">("idle");
  const [exiting, setExiting] = useState(false);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Start line growth after brief pause
    const t1 = setTimeout(() => setPhase("growing"), 400);
    const t2 = setTimeout(() => setPhase("text"), 1200);
    const t3 = setTimeout(() => setPhase("ready"), 2200);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  const handleEnter = () => {
    if (phase !== "ready") return;
    setExiting(true);
    setTimeout(onEnter, 900);
  };

  useEffect(() => {
    const onKey = () => handleEnter();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [phase]);

  return (
    <AnimatePresence>
      {!exiting ? (
        <motion.div
          key="entry"
          className="entry-screen"
          onClick={handleEnter}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.77, 0, 0.175, 1] }}
          style={{ background: "#0D1117" }}
        >
          {/* Subtle grid lines */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage:
                "linear-gradient(rgba(201,168,76,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.03) 1px, transparent 1px)",
              backgroundSize: "80px 80px",
              pointerEvents: "none",
            }}
          />

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "2rem",
              position: "relative",
              zIndex: 10,
              width: "100%",
              maxWidth: "600px",
              padding: "0 2rem",
            }}
          >
            {/* Vertical line that grows */}
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={phase !== "idle" ? { height: 80, opacity: 1 } : {}}
              transition={{ duration: 1.0, ease: [0.23, 1, 0.32, 1] }}
              style={{ width: 1, background: "var(--gold)", flexShrink: 0 }}
            />

            {/* Name */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={phase === "text" || phase === "ready" ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
              style={{ textAlign: "center" }}
            >
              <h1
                style={{
                  fontFamily: "'Times New Roman', Times, serif",
                  fontSize: "clamp(2.4rem, 6vw, 4.5rem)",
                  fontWeight: 700,
                  letterSpacing: "-0.03em",
                  color: "#F5F0E8",
                  margin: 0,
                  lineHeight: 1.1,
                }}
              >
                Mansi Mengde
              </h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={phase === "ready" ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.1 }}
                style={{
                  fontFamily: "'Times New Roman', Times, serif",
                  fontSize: "clamp(0.9rem, 2vw, 1.05rem)",
                  fontStyle: "italic",
                  color: "var(--gold)",
                  marginTop: "0.75rem",
                  lineHeight: 1.5,
                }}
              >
                Data Engineer &nbsp;·&nbsp; Cloud Architect &nbsp;·&nbsp; Software Engineer
              </motion.p>
            </motion.div>

            {/* Bottom line */}
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={phase !== "idle" ? { height: 80, opacity: 1 } : {}}
              transition={{ duration: 1.0, ease: [0.23, 1, 0.32, 1] }}
              style={{ width: 1, background: "var(--gold)", flexShrink: 0 }}
            />

            {/* Enter prompt */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={phase === "ready" ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              style={{ textAlign: "center" }}
            >
              <button
                onClick={handleEnter}
                className="btn-primary"
                style={{ letterSpacing: "0.22em", padding: "0.7rem 2.5rem", fontSize: "0.68rem" }}
              >
                Enter Portfolio
              </button>
              <p style={{ fontFamily: "'Courier New', monospace", fontSize: "0.58rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--slate)", opacity: 0.5, marginTop: "0.75rem" }}>
                M.S. Information Systems &nbsp;·&nbsp; CSULB &nbsp;·&nbsp; May 2026
              </p>
            </motion.div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

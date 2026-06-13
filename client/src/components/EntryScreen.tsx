/*
 * PORTFOLIO — Entry Screen
 * Cinematic: paper plane flies in trailing sparkles, lands on name, bursts into gold particles
 * Then "Enter Portfolio" button fades in
 */
import { useEffect, useRef, useState } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";

function rand(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

function PaperPlane({ style }: { style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "52px", height: "52px", ...style }}>
      <polygon points="4,32 60,4 44,60" fill="#C9A84C" opacity="0.95" />
      <polygon points="4,32 44,60 32,38" fill="#8A6A20" opacity="0.7" />
      <line x1="4" y1="32" x2="60" y2="4" stroke="#F5F0E8" strokeWidth="1.2" opacity="0.5" />
    </svg>
  );
}

interface TrailParticle {
  id: number;
  x: number;
  y: number;
  size: number;
}

interface BurstParticle {
  id: number;
  angle: number;
  distance: number;
  size: number;
}

interface EntryScreenProps {
  onEnter: () => void;
}

export default function EntryScreen({ onEnter }: EntryScreenProps) {
  const [phase, setPhase] = useState<"idle" | "flying" | "burst" | "ready">("idle");
  const [trail, setTrail] = useState<TrailParticle[]>([]);
  const [burst, setBurst] = useState<BurstParticle[]>([]);
  const planeControls = useAnimation();
  const nameControls = useAnimation();
  const btnControls = useAnimation();
  const trailTimer = useRef<ReturnType<typeof setInterval> | null>(null);
  const particleId = useRef(0);

  const generateBurst = () => {
    const particles: BurstParticle[] = Array.from({ length: 28 }, (_, i) => ({
      id: i,
      angle: (i / 28) * 360 + rand(-8, 8),
      distance: rand(60, 160),
      size: rand(3, 7),
    }));
    setBurst(particles);
  };

  useEffect(() => {
    const startDelay = setTimeout(() => setPhase("flying"), 600);
    return () => clearTimeout(startDelay);
  }, []);

  useEffect(() => {
    if (phase !== "flying") return;

    trailTimer.current = setInterval(() => {
      setTrail((prev) => [
        ...prev.slice(-30),
        { id: particleId.current++, x: rand(20, 80), y: rand(20, 70), size: rand(2, 5) },
      ]);
    }, 80);

    planeControls.start({
      x: [300, 160, 60, 0],
      y: [-120, -60, 20, 0],
      rotate: ["-30deg", "-20deg", "-10deg", "0deg"],
      scale: [0.5, 0.8, 1.1, 1],
      opacity: [0, 1, 1, 1],
      transition: { duration: 1.8, ease: [0.22, 1, 0.36, 1] },
    }).then(() => {
      planeControls.start({
        scale: [1, 1.25, 0.9, 1.15, 0],
        opacity: [1, 1, 1, 1, 0],
        transition: { duration: 0.55, ease: "easeOut" },
      });
      if (trailTimer.current) clearInterval(trailTimer.current);
      setTrail([]);
      generateBurst();
      setPhase("burst");
      nameControls.start({
        textShadow: [
          "0 0 0px rgba(201,168,76,0)",
          "0 0 28px rgba(201,168,76,0.95)",
          "0 0 8px rgba(201,168,76,0.4)",
          "0 0 0px rgba(201,168,76,0)",
        ],
        transition: { duration: 1.2, ease: "easeOut" },
      });
      setTimeout(() => {
        setBurst([]);
        setPhase("ready");
        btnControls.start({ opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } });
      }, 1000);
    });

    return () => { if (trailTimer.current) clearInterval(trailTimer.current); };
  }, [phase, planeControls, nameControls, btnControls]);

  const handleEnter = () => {
    if (phase !== "ready") return;
    onEnter();
  };

  useEffect(() => {
    const onKey = () => handleEnter();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  return (
    <motion.div
      key="entry"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.04 }}
      transition={{ duration: 0.6, ease: "easeIn" }}
      style={{
        position: "fixed",
        inset: 0,
        background: "#0D1117",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
        overflow: "hidden",
      }}
    >
      {/* Background grid */}
      <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(201,168,76,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.025) 1px, transparent 1px)", backgroundSize: "80px 80px", pointerEvents: "none" }} />

      {/* Ambient glow */}
      <motion.div
        animate={{ opacity: [0.08, 0.18, 0.08] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        style={{ position: "absolute", width: "600px", height: "600px", borderRadius: "50%", background: "radial-gradient(circle, rgba(201,168,76,0.18) 0%, transparent 70%)", pointerEvents: "none" }}
      />

      {/* Ambient twinkling stars */}
      {Array.from({ length: 18 }).map((_, i) => (
        <motion.div
          key={`star-${i}`}
          style={{ position: "absolute", left: `${rand(5, 95)}%`, top: `${rand(5, 95)}%`, width: `${rand(1.5, 3)}px`, height: `${rand(1.5, 3)}px`, borderRadius: "50%", background: i % 4 === 0 ? "var(--gold)" : "rgba(245,240,232,0.4)", pointerEvents: "none" }}
          animate={{ opacity: [0.1, rand(0.5, 1), 0.1], scale: [0.8, 1.3, 0.8] }}
          transition={{ duration: rand(2, 4.5), repeat: Infinity, delay: rand(0, 3), ease: "easeInOut" }}
        />
      ))}

      {/* Trail particles */}
      <AnimatePresence>
        {trail.map((p) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0.9, scale: 1 }}
            animate={{ opacity: 0, scale: 0 }}
            exit={{}}
            transition={{ duration: 0.7, ease: "easeOut" }}
            style={{ position: "absolute", left: `${p.x}%`, top: `${p.y}%`, width: `${p.size}px`, height: `${p.size}px`, borderRadius: "50%", background: "var(--gold)", pointerEvents: "none" }}
          />
        ))}
      </AnimatePresence>

      {/* Burst particles */}
      <AnimatePresence>
        {burst.map((p) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 1, scale: 1, x: 0, y: 0 }}
            animate={{ opacity: 0, scale: 0.3, x: Math.cos((p.angle * Math.PI) / 180) * p.distance, y: Math.sin((p.angle * Math.PI) / 180) * p.distance }}
            exit={{}}
            transition={{ duration: 0.85, ease: "easeOut" }}
            style={{ position: "absolute", width: `${p.size}px`, height: `${p.size}px`, borderRadius: "50%", background: p.id % 3 === 0 ? "#F5F0E8" : "var(--gold)", pointerEvents: "none" }}
          />
        ))}
      </AnimatePresence>

      {/* Center content */}
      <div style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem" }}>

        {/* Paper plane */}
        {phase !== "ready" && (
          <motion.div
            animate={planeControls}
            style={{ position: "absolute", top: "-60px", right: "-80px", zIndex: 10, transformOrigin: "center center" }}
          >
            <PaperPlane />
          </motion.div>
        )}

        {/* Top decorative line */}
        <motion.div
          initial={{ scaleY: 0, opacity: 0 }}
          animate={{ scaleY: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ width: "1px", height: "60px", background: "linear-gradient(to bottom, transparent, rgba(201,168,76,0.4))", marginBottom: "0.5rem" }}
        />

        {/* Name */}
        <motion.h1
          animate={nameControls}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          style={{ fontFamily: "'Times New Roman', Times, serif", fontSize: "clamp(2.8rem, 8vw, 5.5rem)", fontWeight: 700, color: "#F5F0E8", letterSpacing: "-0.03em", lineHeight: 1, textAlign: "center", margin: 0 }}
        >
          Mansi Mengde
        </motion.h1>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          style={{ fontFamily: "'Courier New', monospace", fontSize: "0.65rem", letterSpacing: "0.28em", textTransform: "uppercase", color: "var(--gold)", marginTop: "0.6rem", display: "flex", gap: "1rem", alignItems: "center" }}
        >
          <span>Data Engineer</span>
          <span style={{ opacity: 0.4 }}>·</span>
          <span>Cloud Architect</span>
          <span style={{ opacity: 0.4 }}>·</span>
          <span>Software Engineer</span>
        </motion.div>

        {/* Credential */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          style={{ fontFamily: "'Courier New', monospace", fontSize: "0.6rem", letterSpacing: "0.18em", color: "var(--slate)", textTransform: "uppercase", marginTop: "0.3rem" }}
        >
          M.S. Information Systems · CSULB · May 2026
        </motion.p>

        {/* Bottom decorative line */}
        <motion.div
          initial={{ scaleY: 0, opacity: 0 }}
          animate={{ scaleY: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          style={{ width: "1px", height: "60px", background: "linear-gradient(to bottom, rgba(201,168,76,0.4), transparent)", marginTop: "0.5rem" }}
        />

        {/* Enter button */}
        <motion.button
          initial={{ opacity: 0, y: 16 }}
          animate={btnControls}
          onClick={handleEnter}
          style={{ marginTop: "1.5rem", padding: "0.85rem 2.8rem", background: "var(--gold)", color: "#0D1117", fontFamily: "'Courier New', monospace", fontSize: "0.68rem", letterSpacing: "0.22em", textTransform: "uppercase", fontWeight: 700, border: "none", borderRadius: "1px", cursor: "pointer", position: "relative", overflow: "hidden" }}
          whileHover={{ scale: 1.04, boxShadow: "0 0 24px rgba(201,168,76,0.45)" }}
          whileTap={{ scale: 0.97 }}
        >
          <motion.span
            style={{ position: "absolute", inset: 0, background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.25) 50%, transparent 60%)", backgroundSize: "200% 100%" }}
            animate={{ backgroundPosition: ["200% 0", "-200% 0"] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "linear" }}
          />
          Enter Portfolio
        </motion.button>
      </div>
    </motion.div>
  );
}

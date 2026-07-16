/*
 * PORTFOLIO — Hero Section
 * 3D data constellation background (three.js), typewriter roles,
 * 3D tilt photo card and stat cells. No hyphens, no emojis.
 */
import { useState, useEffect, useRef, useMemo } from "react";
import { motion } from "framer-motion";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { ArrowDown, Github, Linkedin, Mail, MapPin, Download } from "lucide-react";

const ROLES = ["AI Systems Engineer", "Data Engineer", "Software Engineer"];

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
  { value: "99.2%", label: "F1 Score on Production PII Redaction AI" },
  { value: "5M+", label: "Sensor Readings Ingested Every Day" },
  { value: "60s", label: "Security Event Latency, Down From 48 Hours" },
  { value: "500+", label: "Enterprise Environments Served Solo" },
];

/* ---------- 3D data constellation ---------- */

function Constellation() {
  const NODES = 130;
  const group = useRef<THREE.Group>(null);
  const pointsRef = useRef<THREE.Points>(null);
  const { pointer } = useThree();

  const { nodePositions, linePositions, seeds } = useMemo(() => {
    const nodePositions = new Float32Array(NODES * 3);
    const seeds = new Float32Array(NODES);
    const pts: THREE.Vector3[] = [];
    for (let i = 0; i < NODES; i++) {
      const r = 14 + Math.random() * 10;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const v = new THREE.Vector3(
        r * Math.sin(phi) * Math.cos(theta),
        r * Math.sin(phi) * Math.sin(theta) * 0.55,
        r * Math.cos(phi)
      );
      pts.push(v);
      nodePositions[i * 3] = v.x;
      nodePositions[i * 3 + 1] = v.y;
      nodePositions[i * 3 + 2] = v.z;
      seeds[i] = Math.random();
    }
    // connect near neighbours
    const lines: number[] = [];
    for (let i = 0; i < NODES; i++) {
      for (let j = i + 1; j < NODES; j++) {
        if (pts[i].distanceTo(pts[j]) < 6.5) {
          lines.push(pts[i].x, pts[i].y, pts[i].z, pts[j].x, pts[j].y, pts[j].z);
        }
      }
    }
    return { nodePositions, linePositions: new Float32Array(lines), seeds };
  }, []);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (group.current) {
      group.current.rotation.y = t * 0.045 + pointer.x * 0.25;
      group.current.rotation.x = Math.sin(t * 0.08) * 0.06 - pointer.y * 0.15;
    }
    if (pointsRef.current) {
      const mat = pointsRef.current.material as THREE.PointsMaterial;
      mat.size = 0.22 + Math.sin(t * 1.4) * 0.045;
    }
  });

  return (
    <group ref={group}>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[nodePositions, 3]} />
        </bufferGeometry>
        <pointsMaterial size={0.22} color="#C9A84C" transparent opacity={0.85} sizeAttenuation depthWrite={false} blending={THREE.AdditiveBlending} />
      </points>
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[linePositions, 3]} />
        </bufferGeometry>
        <lineBasicMaterial color="#C9A84C" transparent opacity={0.1} />
      </lineSegments>
      {/* orbiting data packets */}
      <Packets seeds={seeds} />
    </group>
  );
}

function Packets({ seeds }: { seeds: Float32Array }) {
  const N = 24;
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => new Float32Array(N * 3), []);
  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    const pos = ref.current.geometry.attributes.position.array as Float32Array;
    for (let i = 0; i < N; i++) {
      const s = seeds[i % seeds.length];
      const a = t * (0.25 + s * 0.35) + s * Math.PI * 2;
      const r = 12 + s * 11;
      pos[i * 3] = Math.cos(a) * r;
      pos[i * 3 + 1] = Math.sin(a * 1.4 + s * 5) * 4.5;
      pos[i * 3 + 2] = Math.sin(a) * r;
    }
    ref.current.geometry.attributes.position.needsUpdate = true;
  });
  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.34} color="#F5F0E8" transparent opacity={0.9} sizeAttenuation depthWrite={false} blending={THREE.AdditiveBlending} />
    </points>
  );
}

function HeroCanvas() {
  const [ok, setOk] = useState(true);
  useEffect(() => {
    try {
      const c = document.createElement("canvas");
      if (!c.getContext("webgl2") && !c.getContext("webgl")) setOk(false);
    } catch {
      setOk(false);
    }
  }, []);
  if (!ok) return null;
  return (
    <Canvas
      camera={{ position: [0, 0, 26], fov: 55 }}
      dpr={[1, 1.6]}
      gl={{ antialias: false, powerPreference: "high-performance", alpha: true }}
      style={{ position: "absolute", inset: 0, pointerEvents: "none" }}
    >
      <Constellation />
    </Canvas>
  );
}

/* ---------- 3D tilt wrapper ---------- */

function Tilt({ children, max = 10, style }: { children: React.ReactNode; max?: number; style?: React.CSSProperties }) {
  const ref = useRef<HTMLDivElement>(null);
  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(800px) rotateY(${px * max}deg) rotateX(${-py * max}deg) translateZ(6px)`;
  };
  const onLeave = () => {
    const el = ref.current;
    if (el) el.style.transform = "perspective(800px) rotateY(0deg) rotateX(0deg) translateZ(0)";
  };
  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ transition: "transform 200ms ease", transformStyle: "preserve-3d", willChange: "transform", ...style }}
    >
      {children}
    </div>
  );
}

/* ---------- Hero ---------- */

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
        paddingBottom: "5rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* 3D constellation background */}
      <HeroCanvas />
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 75% 65% at 50% 45%, transparent 30%, #0D1117 95%)", pointerEvents: "none" }} />

      <div className="container relative" style={{ zIndex: 1 }}>
        {/* Main two-column layout */}
        <div className="hero-grid" style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "3rem", alignItems: "center" }}>
          {/* Left: Text content */}
          <div style={{ minWidth: 0 }}>
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

            {/* Name with per-letter reveal */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.15 }}
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
                  display: "flex",
                  flexWrap: "wrap",
                }}
              >
                {"Mansi Mengde".split("").map((ch, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 30, rotateX: 90 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{ delay: 0.25 + i * 0.045, duration: 0.55, ease: [0.23, 1, 0.32, 1] }}
                    style={{ display: "inline-block", whiteSpace: "pre", transformOrigin: "bottom" }}
                  >
                    {ch}
                  </motion.span>
                ))}
              </h1>
            </motion.div>

            {/* Animated role title */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              style={{ height: "2.5rem", display: "flex", alignItems: "center", marginBottom: "1.5rem", overflow: "hidden" }}
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
              transition={{ delay: 0.7, duration: 0.6 }}
              style={{
                maxWidth: "520px",
                color: "#B8C8D8",
                fontFamily: "'Georgia', serif",
                fontSize: "1rem",
                lineHeight: 1.8,
                margin: "0 0 2.5rem",
              }}
            >
              One package of AI, Data and Software Engineering. Four years building
              agentic AI workflows, streaming data platforms and production software
              that enterprises, analysts and executives rely on every day.
              AWS Certified Solutions Architect.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85 }}
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
                href="#systems"
                className="btn-ghost"
                onClick={(e) => { e.preventDefault(); document.querySelector("#systems")?.scrollIntoView({ behavior: "smooth" }); }}
              >
                View Work
              </a>
              <a
                href="assets/Mansi_Mengde_Resume.pdf"
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
              transition={{ delay: 1 }}
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

          {/* Right: Graduation photo card with 3D tilt */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{ flexShrink: 0 }}
            className="hidden md:block"
          >
            <Tilt max={12}>
              <div
                style={{
                  width: "280px",
                  border: "1px solid rgba(201, 168, 76, 0.25)",
                  borderRadius: "2px",
                  overflow: "hidden",
                  position: "relative",
                  background: "#0D1117",
                  boxShadow: "0 24px 60px rgba(0,0,0,0.5), 0 0 40px rgba(201,168,76,0.08)",
                }}
              >
                <img
                  src="assets/graduation-hero_d7b38a9a.webp"
                  alt="Mansi Mengde at CSULB graduation, M.S. Information Systems"
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
            </Tilt>
          </motion.div>
        </div>

        {/* Stats row with 3D tilt cells */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="hero-stats-grid"
          style={{
            marginTop: "4rem",
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "1px",
            background: "rgba(201, 168, 76, 0.12)",
            border: "1px solid rgba(201, 168, 76, 0.12)",
          }}
        >
          {STATS.map(({ value, label }, i) => (
            <Tilt key={label} max={7} style={{ background: "#0D1117" }}>
              <div style={{ padding: "1.5rem", height: "100%" }}>
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 + i * 0.08 }}
                >
                  <div style={{ fontFamily: "'Times New Roman', Times, serif", fontSize: "2rem", fontWeight: 700, color: "var(--gold)", lineHeight: 1 }}>
                    {value}
                  </div>
                  <div style={{ fontFamily: "'Courier New', monospace", fontSize: "0.6rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--slate)", marginTop: "0.4rem" }}>
                    {label}
                  </div>
                </motion.div>
              </div>
            </Tilt>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
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

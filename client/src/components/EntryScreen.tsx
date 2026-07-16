/*
 * PORTFOLIO — 3D Entry Screen
 * Thousands of gold particles swirl in from deep space and assemble into the name.
 * WebGL via three.js / react-three-fiber. No emojis.
 */
import { useMemo, useRef, useState, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { motion, AnimatePresence } from "framer-motion";

/* Sample "MANSI MENGDE" text pixels into 3D target positions */
function sampleTextPoints(text: string, count: number): Float32Array {
  const canvas = document.createElement("canvas");
  const W = 900;
  const H = 220;
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext("2d")!;
  ctx.fillStyle = "#000";
  ctx.fillRect(0, 0, W, H);
  ctx.fillStyle = "#fff";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.font = "700 120px 'Space Grotesk', system-ui, sans-serif";
  const measured = ctx.measureText(text).width;
  const fontSize = Math.floor(120 * Math.min(1, (W * 0.94) / measured));
  ctx.font = `700 ${fontSize}px 'Space Grotesk', system-ui, sans-serif`;
  ctx.fillText(text, W / 2, H / 2);
  const data = ctx.getImageData(0, 0, W, H).data;
  const pts: number[] = [];
  for (let y = 0; y < H; y += 2) {
    for (let x = 0; x < W; x += 2) {
      if (data[(y * W + x) * 4] > 128) pts.push(x, y);
    }
  }
  const out = new Float32Array(count * 3);
  const scale = 0.045;
  for (let i = 0; i < count; i++) {
    const j = (Math.floor(Math.random() * (pts.length / 2)) * 2) % pts.length;
    out[i * 3] = (pts[j] - W / 2) * scale;
    out[i * 3 + 1] = -(pts[j + 1] - H / 2) * scale;
    out[i * 3 + 2] = (Math.random() - 0.5) * 0.6;
  }
  return out;
}

function ParticleName({ onFormed }: { onFormed: () => void }) {
  const COUNT = 6500;
  const ref = useRef<THREE.Points>(null);
  const group = useRef<THREE.Group>(null);
  const progress = useRef(0);
  const formed = useRef(false);
  const { pointer } = useThree();

  const { start, target, seeds } = useMemo(() => {
    const target = sampleTextPoints("MANSI MENGDE", COUNT);
    const start = new Float32Array(COUNT * 3);
    const seeds = new Float32Array(COUNT);
    for (let i = 0; i < COUNT; i++) {
      const r = 45 + Math.random() * 55;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      start[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      start[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      start[i * 3 + 2] = r * Math.cos(phi) - 30;
      seeds[i] = Math.random();
    }
    return { start, target, seeds };
  }, []);

  const positions = useMemo(() => new Float32Array(start), [start]);
  const colors = useMemo(() => {
    const c = new Float32Array(COUNT * 3);
    const gold = new THREE.Color("#8B5CF6");
    const cream = new THREE.Color("#F2F5FF");
    const amber = new THREE.Color("#22D3EE");
    for (let i = 0; i < COUNT; i++) {
      const pick = seeds[i] < 0.72 ? gold : seeds[i] < 0.92 ? amber : cream;
      c[i * 3] = pick.r;
      c[i * 3 + 1] = pick.g;
      c[i * 3 + 2] = pick.b;
    }
    return c;
  }, [seeds]);

  useFrame((state, delta) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    progress.current = Math.min(1, progress.current + delta * (0.12 + progress.current * 0.55));
    const p = progress.current;
    const ease = 1 - Math.pow(1 - p, 3);
    const pos = ref.current.geometry.attributes.position.array as Float32Array;
    for (let i = 0; i < COUNT; i++) {
      const i3 = i * 3;
      const lag = 0.65 + seeds[i] * 0.35;
      const e = Math.min(1, ease / lag);
      const swirl = (1 - e) * 6;
      const a = t * 0.8 + seeds[i] * Math.PI * 2;
      const wx = Math.sin(a) * swirl;
      const wy = Math.cos(a * 0.9) * swirl;
      const jitter = e > 0.995 ? Math.sin(t * 2 + seeds[i] * 20) * 0.06 : 0;
      pos[i3] = start[i3] + (target[i3] - start[i3]) * e + wx * (1 - e) + jitter;
      pos[i3 + 1] = start[i3 + 1] + (target[i3 + 1] - start[i3 + 1]) * e + wy * (1 - e) + jitter;
      pos[i3 + 2] = start[i3 + 2] + (target[i3 + 2] - start[i3 + 2]) * e;
    }
    ref.current.geometry.attributes.position.needsUpdate = true;
    if (group.current) {
      group.current.rotation.y += (pointer.x * 0.22 - group.current.rotation.y) * 0.05;
      group.current.rotation.x += (-pointer.y * 0.12 - group.current.rotation.x) * 0.05;
      const s = Math.min(1, (state.viewport.width * 0.88) / 41);
      group.current.scale.setScalar(s);
    }
    if (!formed.current && p > 0.92) {
      formed.current = true;
      onFormed();
    }
  });

  return (
    <group ref={group}>
      <points ref={ref}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
          <bufferAttribute attach="attributes-color" args={[colors, 3]} />
        </bufferGeometry>
        <pointsMaterial
          size={0.16}
          vertexColors
          transparent
          opacity={0.95}
          sizeAttenuation
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>
    </group>
  );
}

/* Slow drifting background dust */
function Dust() {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const n = 700;
    const arr = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 120;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 70;
      arr[i * 3 + 2] = -20 - Math.random() * 60;
    }
    return arr;
  }, []);
  useFrame((state) => {
    if (ref.current) ref.current.rotation.z = state.clock.elapsedTime * 0.012;
  });
  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.09} color="#B9C4E8" transparent opacity={0.35} sizeAttenuation depthWrite={false} />
    </points>
  );
}

export default function EntryScreen({ onEnter }: { onEnter: () => void }) {
  const [formed, setFormed] = useState(false);
  const [webglOk, setWebglOk] = useState(true);

  useEffect(() => {
    try {
      const c = document.createElement("canvas");
      if (!c.getContext("webgl2") && !c.getContext("webgl")) setWebglOk(false);
    } catch {
      setWebglOk(false);
    }
  }, []);

  useEffect(() => {
    if (!webglOk) setFormed(true);
  }, [webglOk]);

  return (
    <motion.div
      exit={{ opacity: 0, scale: 1.04 }}
      transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
      style={{
        position: "fixed",
        inset: 0,
        background: "#0B0E22",
        zIndex: 100,
        overflow: "hidden",
      }}
    >
      {webglOk ? (
        <Canvas
          camera={{ position: [0, 0, 34], fov: 50 }}
          dpr={[1, 1.8]}
          gl={{ antialias: false, powerPreference: "high-performance" }}
          style={{ position: "absolute", inset: 0 }}
        >
          <Dust />
          <ParticleName onFormed={() => setFormed(true)} />
        </Canvas>
      ) : (
        <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <h1 style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif", fontSize: "clamp(2rem, 7vw, 4.5rem)", color: "#F2F5FF", fontWeight: 700, letterSpacing: "-0.02em" }}>
            Mansi Mengde
          </h1>
        </div>
      )}

      {/* Vignette */}
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 70% 60% at 50% 45%, transparent 50%, rgba(11,14,34,0.9) 100%)", pointerEvents: "none" }} />

      {/* Overlay content */}
      <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-end", paddingBottom: "13vh", pointerEvents: "none" }}>
        <AnimatePresence>
          {formed && (
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.23, 1, 0.32, 1] }}
              style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1.6rem", pointerEvents: "auto", textAlign: "center", padding: "0 1.5rem" }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.9rem" }}>
                <span style={{ width: "44px", height: "1px", background: "linear-gradient(to right, transparent, #8B5CF6)" }} />
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.78rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "#8B5CF6", whiteSpace: "nowrap" }}>
                  AI · Data · Software Engineer
                </span>
                <span style={{ width: "44px", height: "1px", background: "linear-gradient(to left, transparent, #8B5CF6)" }} />
              </div>
              <motion.button
                onClick={onEnter}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.95rem",
                  letterSpacing: "0.24em",
                  textTransform: "uppercase",
                  color: "#0B0E22",
                  background: "linear-gradient(120deg, #8B5CF6, #22D3EE 50%, #8B5CF6)",
                  backgroundSize: "200% 100%",
                  border: "none",
                  padding: "0.95rem 2.6rem",
                  cursor: "pointer",
                  borderRadius: "12px",
                  fontWeight: 700,
                  boxShadow: "0 0 34px rgba(139,92,246,0.35)",
                  animation: "entryShimmer 2.5s linear infinite",
                }}
              >
                Enter Portfolio
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <style>{`@keyframes entryShimmer { 0% { background-position: 0% 0; } 100% { background-position: 200% 0; } }`}</style>
    </motion.div>
  );
}

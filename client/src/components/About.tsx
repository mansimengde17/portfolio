/*
 * PORTFOLIO — About Section
 * Correct education: B.Tech IT from IIIT, Diploma from MSBTE
 * Location: San Francisco Bay Area, CA
 * No hyphens in words
 */
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, GraduationCap, Award } from "lucide-react";

const education = [
  {
    degree: "M.S. Information Systems",
    school: "California State University, Long Beach",
    period: "Aug 2024 — May 2026",
    note: "Graduated May 2026 · College of Business",
    highlight: true,
  },
  {
    degree: "B.Tech in Information Technology",
    school: "International Institute of Information Technology, Pune",
    period: "Dec 2021 — Jul 2024",
    note: "First Class with Distinction",
    highlight: false,
  },
  {
    degree: "High School Diploma in Information Technology",
    school: "Maharashtra State Board of Technical Education",
    period: "Jun 2018 — Aug 2021",
    note: "Top of Class",
    highlight: false,
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="about-detail"
      ref={ref}
      style={{ padding: "6rem 0", background: "var(--charcoal)", position: "relative" }}
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: "3.5rem" }}
        >
          <span className="section-label">01. About</span>
          <h2
            style={{
              fontFamily: "'Times New Roman', Times, serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 700,
              color: "#F5F0E8",
              marginTop: "0.5rem",
              letterSpacing: "-0.02em",
            }}
          >
            Building Data Systems{" "}
            <span className="gradient-text">That Scale</span>
          </h2>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "start" }}>
          {/* Left: Bio + graduation photos */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <p style={{ color: "var(--slate)", fontFamily: "'Georgia', serif", fontSize: "1rem", lineHeight: 1.8, marginBottom: "1.5rem" }}>
              I am a Data Engineer and AWS Certified Solutions Architect with four years of
              experience building production grade data infrastructure. My work spans real time
              event processing, cloud native architectures, and machine learning pipelines.
            </p>
            <p style={{ color: "var(--slate)", fontFamily: "'Georgia', serif", fontSize: "1rem", lineHeight: 1.8, marginBottom: "2rem" }}>
              In May 2026, I completed my Master of Science in Information Systems at California
              State University, Long Beach — where I also received the AWS All Builders Welcome
              Grant to present research at AWS re:Invent 2025 in Las Vegas.
            </p>

            {/* Graduation photos grid */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
              <div className="photo-frame" style={{ height: "220px" }}>
                <img
                  src="/manus-storage/graduation-banner_305f96de.jpg"
                  alt="Mansi Ganesh Mengde — M.S. Information Systems, CSULB graduation banner"
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }}
                />
              </div>
              <div className="photo-frame" style={{ height: "220px" }}>
                <img
                  src="/manus-storage/graduation-diploma_80ae49dd.jpg"
                  alt="Mansi Mengde holding CSULB diploma at graduation ceremony"
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }}
                />
              </div>
            </div>

            <div style={{ marginTop: "1.5rem", display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", color: "var(--slate)", fontFamily: "'Courier New', monospace", fontSize: "0.72rem" }}>
                <MapPin size={13} style={{ color: "var(--gold)" }} />
                San Francisco Bay Area, CA
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", color: "var(--slate)", fontFamily: "'Courier New', monospace", fontSize: "0.72rem" }}>
                <Award size={13} style={{ color: "var(--gold)" }} />
                AWS Certified Solutions Architect
              </div>
            </div>
          </motion.div>

          {/* Right: Education timeline */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3
              style={{
                fontFamily: "'Times New Roman', Times, serif",
                fontSize: "1.1rem",
                fontWeight: 700,
                color: "#F5F0E8",
                marginBottom: "2rem",
                letterSpacing: "-0.01em",
              }}
            >
              Education
            </h3>
            <div style={{ position: "relative", paddingLeft: "1.5rem" }}>
              <div className="timeline-line" />
              {education.map(({ degree, school, period, note, highlight }, i) => (
                <motion.div
                  key={degree}
                  initial={{ opacity: 0, y: 12 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.12 }}
                  style={{
                    marginBottom: "2rem",
                    paddingBottom: "2rem",
                    borderBottom: i < education.length - 1 ? "1px solid rgba(201,168,76,0.08)" : "none",
                    position: "relative",
                  }}
                >
                  {/* Timeline dot */}
                  <div
                    style={{
                      position: "absolute",
                      left: "-1.5rem",
                      top: "4px",
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background: highlight ? "var(--gold)" : "var(--slate)",
                      border: "1px solid var(--charcoal)",
                    }}
                  />
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.3rem" }}>
                    <GraduationCap size={14} style={{ color: highlight ? "var(--gold)" : "var(--slate)", flexShrink: 0 }} />
                    <span
                      style={{
                        fontFamily: "'Courier New', monospace",
                        fontSize: "0.62rem",
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        color: highlight ? "var(--gold)" : "var(--slate)",
                      }}
                    >
                      {period}
                    </span>
                  </div>
                  <h4
                    style={{
                      fontFamily: "'Times New Roman', Times, serif",
                      fontSize: "1rem",
                      fontWeight: 700,
                      color: "#F5F0E8",
                      margin: "0 0 0.2rem",
                    }}
                  >
                    {degree}
                  </h4>
                  <p style={{ color: "var(--slate)", fontFamily: "'Georgia', serif", fontSize: "0.85rem", margin: "0 0 0.2rem" }}>{school}</p>
                  <p style={{ color: highlight ? "var(--gold)" : "var(--slate)", fontFamily: "'Courier New', monospace", fontSize: "0.68rem", margin: 0, opacity: 0.8 }}>{note}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

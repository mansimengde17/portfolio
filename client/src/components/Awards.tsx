/*
 * PORTFOLIO — Awards & Recognition Section
 * Real photos, professional neutral palette, no emojis
 */
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const awards = [
  {
    title: "AWS All Builders Welcome Grant",
    event: "AWS re:Invent 2025, Las Vegas",
    year: "2025",
    description: "Selected by Amazon Web Services to receive the All Builders Welcome Grant, covering full attendance at AWS re:Invent 2025 — the world's largest cloud computing conference.",
    photo: "/manus-storage/aws-reinvent-grant_c973280e.webp",
    groupPhoto: "/manus-storage/aws-reinvent-group_4cba1dab.jpeg",
    featured: true,
  },
  {
    title: "SoCal Datathon — First Place",
    event: "CSUF College of Business and Economics",
    year: "2024",
    description: "Won first place and a cash prize at the SoCal Datathon, competing against teams from across Southern California. Delivered a predictive analytics solution for a real-world business dataset.",
    photo: "/manus-storage/datathon-win_609b4038.webp",
    groupPhoto: null,
    featured: true,
  },
  {
    title: "Code FIESTA — Excellence Award",
    event: "National Technical Competition",
    year: "2023",
    description: "Received the Excellence Award at Code FIESTA for outstanding performance in the national technical competition, recognized for innovation in software development and data engineering.",
    photo: "/manus-storage/code-fiesta-award_1f64a80c.webp",
    groupPhoto: null,
    featured: false,
  },
  {
    title: "CSULB ITSC Chairperson",
    event: "Information Technology Student Council",
    year: "2024 — 2026",
    description: "Elected Chairperson of the CSULB Information Technology Student Council, leading initiatives connecting students with industry professionals and organizing technical workshops.",
    photo: null,
    groupPhoto: null,
    featured: false,
  },
];

export default function Awards() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="awards" ref={ref} style={{ padding: "6rem 0", background: "#0D1117" }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: "3.5rem" }}
        >
          <span className="section-label">06. Recognition</span>
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
            Recognition &{" "}
            <span className="gradient-text">Achievements</span>
          </h2>
        </motion.div>

        <div style={{ display: "grid", gap: "2rem" }}>
          {awards.map((award, i) => (
            <motion.div
              key={award.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              className={award.featured ? "card-gold" : "card-neutral"}
              style={{
                padding: "2rem",
                display: "grid",
                gridTemplateColumns: award.photo ? "1fr auto" : "1fr",
                gap: "2rem",
                alignItems: "start",
              }}
            >
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.5rem", flexWrap: "wrap" }}>
                  <span
                    style={{
                      fontFamily: "'Courier New', monospace",
                      fontSize: "0.62rem",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: award.featured ? "var(--gold)" : "var(--slate)",
                    }}
                  >
                    {award.year}
                  </span>
                  <span style={{ width: "1px", height: "12px", background: "rgba(201, 168, 76, 0.2)" }} />
                  <span
                    style={{
                      fontFamily: "'Courier New', monospace",
                      fontSize: "0.62rem",
                      letterSpacing: "0.08em",
                      color: "var(--slate)",
                      opacity: 0.7,
                    }}
                  >
                    {award.event}
                  </span>
                </div>
                <h3
                  style={{
                    fontFamily: "'Times New Roman', Times, serif",
                    fontSize: "1.15rem",
                    fontWeight: 700,
                    color: "#F5F0E8",
                    margin: "0 0 0.75rem",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {award.title}
                </h3>
                <p
                  style={{
                    fontFamily: "'Georgia', serif",
                    fontSize: "0.92rem",
                    color: "var(--slate)",
                    lineHeight: 1.75,
                    margin: 0,
                  }}
                >
                  {award.description}
                </p>

                {/* Group photo if available */}
                {award.groupPhoto && (
                  <div style={{ marginTop: "1.5rem" }}>
                    <div className="photo-frame" style={{ maxWidth: "480px", height: "200px" }}>
                      <img
                        src={award.groupPhoto}
                        alt={award.title}
                        style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
                      />
                    </div>
                    <p style={{ fontFamily: "'Courier New', monospace", fontSize: "0.62rem", color: "var(--slate)", marginTop: "0.5rem", opacity: 0.6, letterSpacing: "0.08em" }}>
                      AWS re:Invent 2025 — Las Vegas, NV
                    </p>
                  </div>
                )}
              </div>

              {/* Main photo */}
              {award.photo && (
                <div
                  className="photo-frame hidden md:block"
                  style={{ width: "220px", height: "160px", flexShrink: 0 }}
                >
                  <img
                    src={award.photo}
                    alt={award.title}
                    style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
                  />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

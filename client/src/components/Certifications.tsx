/*
 * PORTFOLIO — Certifications Section
 * AWS badges first, real Credly badge images, professional neutral palette
 */
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Award } from "lucide-react";

const certifications = [
  {
    title: "AWS Certified Solutions Architect — Professional",
    issuer: "Amazon Web Services",
    date: "May 28, 2026",
    expires: "May 28, 2029",
    level: "Advanced",
    badgeImg: "/manus-storage/aws-sap-badge_9d9c70fc.png",
    credlyUrl: "https://www.credly.com/badges/d74ecdc0-447f-4c88-94aa-ffa3ba935694/public_url",
    featured: true,
  },
  {
    title: "AWS Certified Solutions Architect — Associate",
    issuer: "Amazon Web Services",
    date: "October 17, 2025",
    expires: "May 28, 2029",
    level: "Intermediate",
    badgeImg: "/manus-storage/aws-saa-badge_3de03e45.png",
    credlyUrl: "https://www.credly.com/badges/a85800f5-df2a-40dd-b51d-adabb07368f2/linked_in",
    featured: true,
  },
  {
    title: "Certified Data Scientist",
    issuer: "IBM / Coursera",
    date: "2024",
    expires: null,
    level: "Professional",
    badgeImg: null,
    credlyUrl: null,
    featured: false,
  },
  {
    title: "DevOps Engineering Professional",
    issuer: "AWS / Coursera",
    date: "2024",
    expires: null,
    level: "Professional",
    badgeImg: null,
    credlyUrl: null,
    featured: false,
  },
  {
    title: "Google Data Analytics",
    issuer: "Google / Coursera",
    date: "2023",
    expires: null,
    level: "Professional",
    badgeImg: null,
    credlyUrl: null,
    featured: false,
  },
  {
    title: "Machine Learning Specialization",
    issuer: "Stanford / Coursera",
    date: "2023",
    expires: null,
    level: "Specialization",
    badgeImg: null,
    credlyUrl: null,
    featured: false,
  },
];

export default function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="certifications" ref={ref} style={{ padding: "6rem 0", background: "var(--charcoal)" }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: "3.5rem" }}
        >
          <span className="section-label">05. Certifications</span>
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
            Credentials &{" "}
            <span className="gradient-text">Certifications</span>
          </h2>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1.5rem" }}>
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.07 }}
              className={cert.featured ? "card-gold" : "card-neutral"}
              style={{ padding: "1.75rem", display: "flex", gap: "1.25rem", alignItems: "flex-start" }}
            >
              {/* Badge or icon */}
              <div style={{ flexShrink: 0 }}>
                {cert.badgeImg ? (
                  <img
                    src={cert.badgeImg}
                    alt={cert.title}
                    className="badge-img"
                    style={{ width: "72px", height: "72px" }}
                  />
                ) : (
                  <div
                    style={{
                      width: "72px",
                      height: "72px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: "rgba(201, 168, 76, 0.08)",
                      border: "1px solid rgba(201, 168, 76, 0.2)",
                      borderRadius: "2px",
                    }}
                  >
                    <Award size={28} style={{ color: "var(--gold)" }} />
                  </div>
                )}
              </div>

              {/* Content */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "0.5rem", marginBottom: "0.3rem" }}>
                  <span
                    style={{
                      fontFamily: "'Courier New', monospace",
                      fontSize: "0.6rem",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: cert.featured ? "var(--gold)" : "var(--slate)",
                      background: cert.featured ? "rgba(201, 168, 76, 0.1)" : "rgba(138, 155, 176, 0.08)",
                      border: `1px solid ${cert.featured ? "rgba(201, 168, 76, 0.25)" : "rgba(138, 155, 176, 0.15)"}`,
                      padding: "0.15rem 0.5rem",
                      borderRadius: "2px",
                    }}
                  >
                    {cert.level}
                  </span>
                  {cert.credlyUrl && (
                    <a
                      href={cert.credlyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "var(--slate)", transition: "color 150ms ease", flexShrink: 0 }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold)")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "var(--slate)")}
                    >
                      <ExternalLink size={13} />
                    </a>
                  )}
                </div>
                <h3
                  style={{
                    fontFamily: "'Times New Roman', Times, serif",
                    fontSize: "0.95rem",
                    fontWeight: 700,
                    color: "#F5F0E8",
                    margin: "0 0 0.2rem",
                    letterSpacing: "-0.01em",
                    lineHeight: 1.3,
                  }}
                >
                  {cert.title}
                </h3>
                <p style={{ fontFamily: "'Georgia', serif", fontSize: "0.82rem", color: "var(--slate)", margin: "0 0 0.3rem" }}>
                  {cert.issuer}
                </p>
                <p style={{ fontFamily: "'Courier New', monospace", fontSize: "0.65rem", color: "var(--slate)", margin: 0, opacity: 0.7 }}>
                  Issued {cert.date}{cert.expires ? ` · Expires ${cert.expires}` : ""}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

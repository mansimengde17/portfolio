/*
 * PORTFOLIO — Certifications Section
 * AWS certs first with official badge images and correct dates
 * Non-AWS certs: text only, no badge images
 * No emojis, professional neutral palette
 */
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink } from "lucide-react";

const CERTIFICATIONS = [
  {
    name: "AWS Certified Solutions Architect Professional (SAP-C02)",
    issuer: "Amazon Web Services (AWS)",
    issued: "May 2026",
    expires: "May 2029",
    badge: "assets/aws-sap-badge_926e6c51.png",
    credlyUrl: "https://www.credly.com/badges/d74ecdc0-447f-4c88-94aa-ffa3ba935694/public_url",
    color: "#FF9900",
    highlight: true,
  },
  {
    name: "AWS Certified Solutions Architect Associate",
    issuer: "Amazon Web Services (AWS)",
    issued: "Oct 2025",
    expires: "Oct 2028",
    badge: "assets/aws-saa-badge-user_eb425035.png",
    credlyUrl: "https://www.credly.com/badges/a85800f5-df2a-40dd-b51d-adabb07368f2/linked_in",
    color: "#FF9900",
    highlight: true,
  },
  {
    name: "Certified Data Scientist",
    issuer: "DataCamp",
    issued: "2023",
    expires: null,
    badge: null,
    credlyUrl: null,
    color: "#8A9BB0",
    highlight: false,
  },
  {
    name: "Machine Learning Specialization",
    issuer: "DeepLearning.AI / Stanford University",
    issued: "2023",
    expires: null,
    badge: null,
    credlyUrl: null,
    color: "#8A9BB0",
    highlight: false,
  },
  {
    name: "Google Data Analytics Professional Certificate",
    issuer: "Google / Coursera",
    issued: "2022",
    expires: null,
    badge: null,
    credlyUrl: null,
    color: "#4285F4",
    highlight: false,
  },
  {
    name: "DevOps Engineer Professional",
    issuer: "Amazon Web Services (AWS)",
    issued: "2024",
    expires: null,
    badge: null,
    credlyUrl: null,
    color: "#FF9900",
    highlight: false,
  },
];

export default function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="certifications"
      ref={ref}
      style={{ padding: "6rem 0", background: "#0D1117", position: "relative" }}
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: "3.5rem" }}
        >
          <span className="section-label">06. Credentials</span>
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
            Certifications &amp;{" "}
            <span className="gradient-text">Credentials</span>
          </h2>
        </motion.div>

        {/* AWS Certs — featured with badges */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(340px, 100%), 1fr))", gap: "1.25rem", marginBottom: "1.25rem" }}>
          {CERTIFICATIONS.filter((c) => c.highlight).map((cert, i) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08 }}
              className="card-neutral"
              style={{
                padding: "1.75rem",
                display: "flex",
                gap: "1.5rem",
                alignItems: "flex-start",
                border: `1px solid ${cert.color}35`,
                background: "rgba(255,153,0,0.03)",
                transition: "border-color 200ms ease, transform 200ms ease",
              }}
              whileHover={{ y: -3 }}
            >
              <img
                src={cert.badge!}
                alt={cert.name}
                style={{
                  width: "88px",
                  height: "88px",
                  objectFit: "contain",
                  flexShrink: 0,
                  borderRadius: "4px",
                  filter: "drop-shadow(0 2px 8px rgba(255,153,0,0.2))",
                }}
              />
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "0.5rem" }}>
                  <h3
                    style={{
                      fontFamily: "'Times New Roman', Times, serif",
                      fontSize: "1rem",
                      fontWeight: 700,
                      color: "#F5F0E8",
                      margin: "0 0 0.4rem",
                      letterSpacing: "-0.01em",
                      lineHeight: 1.35,
                    }}
                  >
                    {cert.name}
                  </h3>
                  {cert.credlyUrl && (
                    <a
                      href={cert.credlyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "var(--slate)", flexShrink: 0, transition: "color 150ms ease", marginTop: "2px" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = cert.color)}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "var(--slate)")}
                      title="View credential on Credly"
                    >
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>
                <p
                  style={{
                    fontFamily: "'Georgia', serif",
                    fontSize: "0.84rem",
                    color: "var(--slate)",
                    margin: "0 0 0.5rem",
                  }}
                >
                  {cert.issuer}
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.2rem" }}>
                  <span
                    style={{
                      fontFamily: "'Courier New', monospace",
                      fontSize: "0.62rem",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: cert.color,
                    }}
                  >
                    Issued {cert.issued}
                  </span>
                  {cert.expires && (
                    <span
                      style={{
                        fontFamily: "'Courier New', monospace",
                        fontSize: "0.6rem",
                        letterSpacing: "0.06em",
                        color: "var(--slate)",
                        opacity: 0.6,
                      }}
                    >
                      Expires {cert.expires}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Certs — text only, no badge images */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(280px, 100%), 1fr))", gap: "1rem" }}>
          {CERTIFICATIONS.filter((c) => !c.highlight).map((cert, i) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.06 }}
              className="card-neutral"
              style={{
                padding: "1.25rem 1.5rem",
                border: "1px solid rgba(255,255,255,0.06)",
                transition: "border-color 200ms ease, transform 200ms ease",
              }}
              whileHover={{ y: -2 }}
            >
              <div
                style={{
                  width: "3px",
                  height: "28px",
                  background: cert.color,
                  borderRadius: "2px",
                  marginBottom: "0.85rem",
                  opacity: 0.7,
                }}
              />
              <h3
                style={{
                  fontFamily: "'Times New Roman', Times, serif",
                  fontSize: "0.92rem",
                  fontWeight: 700,
                  color: "#F5F0E8",
                  margin: "0 0 0.3rem",
                  lineHeight: 1.35,
                }}
              >
                {cert.name}
              </h3>
              <p
                style={{
                  fontFamily: "'Georgia', serif",
                  fontSize: "0.8rem",
                  color: "var(--slate)",
                  margin: "0 0 0.4rem",
                }}
              >
                {cert.issuer}
              </p>
              <span
                style={{
                  fontFamily: "'Courier New', monospace",
                  fontSize: "0.58rem",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: cert.color,
                  opacity: 0.8,
                }}
              >
                Issued {cert.issued}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/*
 * PORTFOLIO — Certifications Section
 * AWS certs first (Associate + Professional full names), then others
 * Official badge images, no emojis, professional neutral palette
 */
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink } from "lucide-react";

const CERTIFICATIONS = [
  {
    name: "AWS Certified Solutions Architect — Professional",
    fullName: "AWS Certified Solutions Architect — Professional (SAP-C02)",
    issuer: "Amazon Web Services",
    date: "2024",
    badge: "/manus-storage/aws-sap-badge_b2e4c7a1.png",
    badgeFallback: "/manus-storage/aws-saa-badge-official_78d1c578.png",
    credlyUrl: "https://www.credly.com/badges/d74ecdc0-447f-4c88-94aa-ffa3ba935694/public_url",
    color: "#FF9900",
    highlight: true,
  },
  {
    name: "AWS Certified Solutions Architect — Associate",
    fullName: "AWS Certified Solutions Architect — Associate (SAA-C03)",
    issuer: "Amazon Web Services",
    date: "2023",
    badge: "/manus-storage/aws-associate-badge_f93e2f63.png",
    badgeFallback: "/manus-storage/aws-saa-badge-official_78d1c578.png",
    credlyUrl: "https://www.credly.com/badges/a85800f5-df2a-40dd-b51d-adabb07368f2/linked_in",
    color: "#FF9900",
    highlight: true,
  },
  {
    name: "Certified Data Scientist",
    fullName: "Certified Data Scientist",
    issuer: "DataCamp",
    date: "2023",
    badge: null,
    badgeFallback: null,
    credlyUrl: null,
    color: "#8A9BB0",
    highlight: false,
  },
  {
    name: "DevOps Engineer — Professional",
    fullName: "DevOps Engineer — Professional",
    issuer: "Amazon Web Services",
    date: "2024",
    badge: null,
    badgeFallback: null,
    credlyUrl: null,
    color: "#FF9900",
    highlight: false,
  },
  {
    name: "Machine Learning Specialization",
    fullName: "Machine Learning Specialization",
    issuer: "DeepLearning.AI / Stanford",
    date: "2023",
    badge: null,
    badgeFallback: null,
    credlyUrl: null,
    color: "#8A9BB0",
    highlight: false,
  },
  {
    name: "Google Data Analytics Certificate",
    fullName: "Google Data Analytics Professional Certificate",
    issuer: "Google / Coursera",
    date: "2022",
    badge: null,
    badgeFallback: null,
    credlyUrl: null,
    color: "#4285F4",
    highlight: false,
  },
];

function BadgePlaceholder({ color, initials }: { color: string; initials: string }) {
  return (
    <div
      style={{
        width: "80px",
        height: "80px",
        borderRadius: "8px",
        background: `${color}15`,
        border: `1px solid ${color}30`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
      }}
    >
      <span
        style={{
          fontFamily: "'Courier New', monospace",
          fontSize: "0.65rem",
          fontWeight: 700,
          color: color,
          letterSpacing: "0.06em",
          textAlign: "center",
          lineHeight: 1.2,
        }}
      >
        {initials}
      </span>
    </div>
  );
}

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
          <span className="section-label">05. Credentials</span>
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
            Certifications and{" "}
            <span className="gradient-text">Credentials</span>
          </h2>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: "1.25rem" }}>
          {CERTIFICATIONS.map((cert, i) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.07 }}
              className="card-neutral"
              style={{
                padding: "1.5rem",
                display: "flex",
                gap: "1.25rem",
                alignItems: "flex-start",
                border: cert.highlight ? `1px solid ${cert.color}30` : "1px solid rgba(255,255,255,0.06)",
                transition: "border-color 200ms ease, transform 200ms ease",
              }}
              whileHover={{ y: -3 }}
            >
              {/* Badge image or placeholder */}
              {cert.badge ? (
                <img
                  src={cert.badge}
                  alt={cert.name}
                  style={{ width: "80px", height: "80px", objectFit: "contain", flexShrink: 0, borderRadius: "4px" }}
                  onError={(e) => {
                    const img = e.currentTarget;
                    if (cert.badgeFallback && img.src !== cert.badgeFallback) {
                      img.src = cert.badgeFallback;
                    }
                  }}
                />
              ) : (
                <BadgePlaceholder
                  color={cert.color}
                  initials={cert.issuer.split(" ").map((w) => w[0]).join("").slice(0, 3)}
                />
              )}

              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "0.5rem" }}>
                  <div>
                    <h3
                      style={{
                        fontFamily: "'Times New Roman', Times, serif",
                        fontSize: "0.95rem",
                        fontWeight: 700,
                        color: "#F5F0E8",
                        margin: "0 0 0.25rem",
                        letterSpacing: "-0.01em",
                        lineHeight: 1.3,
                      }}
                    >
                      {cert.fullName}
                    </h3>
                    <p
                      style={{
                        fontFamily: "'Georgia', serif",
                        fontSize: "0.82rem",
                        color: "var(--slate)",
                        margin: "0 0 0.35rem",
                      }}
                    >
                      {cert.issuer}
                    </p>
                    <span
                      style={{
                        fontFamily: "'Courier New', monospace",
                        fontSize: "0.6rem",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: cert.color,
                        opacity: 0.85,
                      }}
                    >
                      Issued {cert.date}
                    </span>
                  </div>
                  {cert.credlyUrl && (
                    <a
                      href={cert.credlyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "var(--slate)", flexShrink: 0, transition: "color 150ms ease", marginTop: "2px" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = cert.color)}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "var(--slate)")}
                      title="View on Credly"
                    >
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

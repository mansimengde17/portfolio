/*
 * PORTFOLIO — Experience Section
 * Data from Experience.docx — correct titles, dates, companies, descriptions
 * Company logos via SVG/initials, animated timeline, no emojis, no hyphens in text
 */
import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronDown, MapPin } from "lucide-react";

const EXPERIENCES = [
  {
    title: "Cloud Data Engineer",
    company: "California State University, Long Beach",
    companyShort: "CSULB",
    period: "Sep 2024 — May 2026",
    location: "Long Beach, CA",
    logoColor: "#003DA5",
    logoBg: "#003DA515",
    logoImg: "/manus-storage/logo-csulb-official_58b580b1.png",
    highlights: [
      "Optimized SQL data models and ETL workflows across 10+ datasets, reducing dashboard latency by 45% and achieving 99.9% data accuracy delivering near real time student performance insights to 12 academic departments and 300+ faculty advisors.",
      "Designed and deployed a Power BI and PostgreSQL analytics platform with RBAC, encryption, and FERPA/PII compliance controls, enabling self service data access for 150+ institutional users across student affairs and academic planning teams.",
      "Built automated ETL pipelines eliminating approximately 15 hours per week of manual data preparation across student engagement and performance reporting workflows, freeing analysts for higher order analysis.",
    ],
    skills: ["Power BI", "PostgreSQL", "ETL Pipelines", "FERPA Compliance", "KPI Dashboards"],
  },
  {
    title: "Data and ML Pipeline Engineer",
    company: "Amazon Web Services (AWS)",
    companyShort: "AWS",
    period: "May 2025 — Jun 2025",
    location: "Philadelphia, PA",
    logoColor: "#FF9900",
    logoBg: "#FF990015",
    faviconDomain: "aws.amazon.com",
    highlights: [
      "Deployed a serverless data pipeline using AWS Lambda and CloudWatch that automated end to end incident response workflows, reducing mitigation triage time by 40%. Selected as one of approximately 50 early career engineers nationally for the All Builders Welcome Grant.",
      "Built an AI augmented anomaly detection model on Amazon SageMaker and Bedrock, applying distributed ML inference to security event streams within a zero trust, compliance first cloud architecture.",
    ],
    skills: ["Cloud Security", "Amazon Web Services", "Amazon SageMaker", "AWS Lambda"],
  },
  {
    title: "Data and Analytics Fellow",
    company: "McKinsey and Company",
    companyShort: "McK",
    period: "Apr 2025 — Jun 2025",
    location: "United States",
    logoColor: "#4A90D9",
    logoBg: "#4A90D920",
    logoImg: "/manus-storage/logo-atkins-official_2a2e6283.png",
    highlights: [
      "Applied structured problem solving frameworks to a digital transformation case study in financial services operations, collaborating with a cross functional team of 6 to deliver data backed recommendations.",
    ],
    skills: ["Data Analytics", "Problem Solving", "Digital Transformation"],
  },
  {
    title: "Data Engineer",
    company: "AtkinsRéalis",
    companyShort: "AR",
    period: "Nov 2023 — May 2024",
    location: "Pimpri Chinchwad, India",
    logoColor: "#E31837",
    logoBg: "#E3183715",
    logoImg: "/manus-storage/logo-mckinsey-official_9ac08f6c.png",
    highlights: [
      "Built and automated Python and SQL data pipelines ingesting 5M+ telemetry events per day, reducing false positive alerts by 35% and cutting SOC triage time by 30% through Grafana dashboards and AWS CloudWatch alerting.",
      "Designed an event driven AWS Lambda and API Gateway ingestion framework aligned to NIST and CIS benchmarks, improving incident response visibility across 15+ data sources and 3 production service environments.",
      "Implemented data quality validation and anomaly detection workflows across production pipeline infrastructure, saving the SOC team approximately 20 hours per week in manual investigation overhead.",
    ],
    skills: ["AWS", "Amazon RDS", "Grafana", "Python", "SQL", "NIST"],
  },
  {
    title: "Data Engineer, ML Pipelines",
    company: "AlgoSec",
    companyShort: "AS",
    period: "Dec 2022 — Aug 2023",
    location: "Pune, India",
    logoColor: "#0066CC",
    logoBg: "#0066CC15",
    logoImg: "/manus-storage/logo-algosec-official_35c93e9f.png",
    highlights: [
      "Designed real time telemetry pipelines with Grafana to monitor model drift and inference performance across 1.2M+ user behavior logs, cutting drift detection latency from 24 hours to 2 minutes.",
      "Built and deployed Python and scikit learn ML models for churn prediction and anomaly detection at 86% accuracy, flagging approximately 2,500 at risk accounts per month and directly informing retention outreach by the customer success team.",
      "Automated incremental data ingestion and model retraining workflows, reducing compute costs by 25% while scaling pipeline throughput from 1.2M to 2M+ monthly log ingestion without infrastructure changes.",
    ],
    skills: ["Machine Learning", "Data Science", "Python", "scikit-learn", "Grafana"],
  },
  {
    title: "Data Engineer, Industrial Analytics",
    company: "HYT Engineering Company",
    companyShort: "HYT",
    period: "Jun 2021 — Nov 2022",
    location: "Pimpri Chinchwad, India",
    logoColor: "#2D6A4F",
    logoBg: "#2D6A4F15",
    faviconDomain: "hytengineering.com",
    highlights: [
      "Integrated IoT telemetry from legacy CNC systems across 4 manufacturing plants into unified data pipelines, enabling real time fault detection that increased machine uptime by 35% and reduced unplanned downtime by 25%.",
      "Built predictive Tableau dashboards processing equipment telemetry from 80+ CNC machines and 200+ sensors, cutting anomaly investigation time by 20% for operations and maintenance teams across all sites.",
      "Designed SQL based alerting thresholds and automated maintenance triggers, eliminating approximately 30 hours per week of manual monitoring across the plant network and standardizing fault analysis workflows across 4 sites.",
    ],
    skills: ["Python", "Tableau", "SQL", "IoT Analytics", "Predictive Maintenance"],
  },
];

function CompanyLogo({ short, color, bg, faviconDomain, logoImg }: { short: string; color: string; bg: string; faviconDomain?: string; logoImg?: string }) {
  const [imgFailed, setImgFailed] = useState(false);
  const src = logoImg || (faviconDomain ? `https://www.google.com/s2/favicons?domain=${faviconDomain}&sz=32` : null);
  const isLarge = !!logoImg;
  return (
    <div
      style={{
        width: "44px",
        height: "44px",
        borderRadius: "4px",
        background: bg,
        border: `1px solid ${color}30`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        overflow: "hidden",
        padding: isLarge ? "3px" : "0",
      }}
    >
      {src && !imgFailed ? (
        <img
          src={src}
          alt={short}
          onError={() => setImgFailed(true)}
          style={{ width: isLarge ? "38px" : "24px", height: isLarge ? "38px" : "24px", objectFit: "contain" }}
        />
      ) : (
        <span
          style={{
            fontFamily: "'Courier New', monospace",
            fontSize: short.length > 3 ? "0.5rem" : "0.65rem",
            fontWeight: 700,
            color: color,
            letterSpacing: "0.04em",
            textAlign: "center",
            lineHeight: 1,
          }}
        >
          {short}
        </span>
      )}
    </div>
  );
}

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [expanded, setExpanded] = useState<number | null>(0);

  return (
    <section
      id="experience"
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
          <span className="section-label">03. Experience</span>
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
            Professional{" "}
            <span className="gradient-text">Journey</span>
          </h2>
        </motion.div>

        <div style={{ position: "relative" }}>
          {/* Timeline line */}
          <div
            style={{
              position: "absolute",
              left: "21px",
              top: "22px",
              bottom: "22px",
              width: "1px",
              background: "linear-gradient(to bottom, rgba(201,168,76,0.4) 0%, rgba(201,168,76,0.08) 100%)",
            }}
          />

          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {EXPERIENCES.map((exp, i) => (
              <motion.div
                key={exp.company + exp.period}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                style={{ display: "flex", gap: "1.5rem", alignItems: "flex-start" }}
              >
                {/* Timeline dot */}
                <div
                  style={{
                    width: "44px",
                    flexShrink: 0,
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "center",
                    paddingTop: "14px",
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  <motion.div
                    animate={expanded === i ? { scale: 1.2, backgroundColor: exp.logoColor } : { scale: 1, backgroundColor: "rgba(201,168,76,0.3)" }}
                    transition={{ duration: 0.2 }}
                    style={{
                      width: "10px",
                      height: "10px",
                      borderRadius: "50%",
                      border: `1px solid ${exp.logoColor}60`,
                      background: "rgba(201,168,76,0.3)",
                    }}
                  />
                </div>

                {/* Card */}
                <div
                  className="card-neutral"
                  style={{
                    flex: 1,
                    overflow: "hidden",
                    border: expanded === i ? `1px solid ${exp.logoColor}25` : "1px solid rgba(255,255,255,0.06)",
                    transition: "border-color 200ms ease",
                  }}
                >
                  {/* Header — always visible */}
                  <button
                    onClick={() => setExpanded(expanded === i ? null : i)}
                    className="exp-card-btn"
                    style={{
                      width: "100%",
                      padding: "1.25rem 1.5rem",
                      background: "transparent",
                      border: "none",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      gap: "1rem",
                      textAlign: "left",
                    }}
                  >
                    <CompanyLogo short={exp.companyShort} color={exp.logoColor} bg={exp.logoBg} faviconDomain={(exp as any).faviconDomain} logoImg={(exp as any).logoImg} />

                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ display: "flex", alignItems: "baseline", gap: "0.5rem", flexWrap: "wrap" }}>
                        <h3
                          style={{
                            fontFamily: "'Times New Roman', Times, serif",
                            fontSize: "1rem",
                            fontWeight: 700,
                            color: "#F5F0E8",
                            margin: 0,
                            letterSpacing: "-0.01em",
                          }}
                        >
                          {exp.title}
                        </h3>

                      </div>
                      <p
                        style={{
                          fontFamily: "'Georgia', serif",
                          fontSize: "0.85rem",
                          color: "var(--slate)",
                          margin: "0.15rem 0 0",
                        }}
                      >
                        {exp.company}
                      </p>
                      <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginTop: "0.25rem", flexWrap: "wrap" }}>
                        <span
                          style={{
                            fontFamily: "'Courier New', monospace",
                            fontSize: "0.6rem",
                            letterSpacing: "0.08em",
                            color: "var(--slate)",
                            opacity: 0.7,
                          }}
                        >
                          {exp.period}
                        </span>
<span style={{ color: "rgba(138,155,176,0.3)", fontSize: "0.6rem" }}>|</span>
                        <span
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "3px",
                            fontFamily: "'Courier New', monospace",
                            fontSize: "0.6rem",
                            letterSpacing: "0.08em",
                            color: "var(--slate)",
                            opacity: 0.6,
                          }}
                        >
                          <MapPin size={9} />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    <motion.div
                      animate={{ rotate: expanded === i ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      style={{ color: "var(--slate)", flexShrink: 0 }}
                    >
                      <ChevronDown size={16} />
                    </motion.div>
                  </button>

                  {/* Expanded content */}
                  <AnimatePresence initial={false}>
                    {expanded === i && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
                        style={{ overflow: "hidden" }}
                      >
                        <div style={{ padding: "0 1.5rem 1.5rem", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
                          <ul style={{ margin: "1.25rem 0 1.25rem", padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                            {exp.highlights.map((h, hi) => (
                              <motion.li
                                key={hi}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: hi * 0.05 }}
                                style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}
                              >
                                <span
                                  style={{
                                    width: "4px",
                                    height: "4px",
                                    borderRadius: "50%",
                                    background: exp.logoColor,
                                    flexShrink: 0,
                                    marginTop: "0.55rem",
                                  }}
                                />
                                <p
                                  style={{
                                    fontFamily: "'Georgia', serif",
                                    fontSize: "0.88rem",
                                    color: "var(--slate)",
                                    lineHeight: 1.75,
                                    margin: 0,
                                  }}
                                >
                                  {h}
                                </p>
                              </motion.li>
                            ))}
                          </ul>
                          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                            {exp.skills.map((s) => (
                              <span
                                key={s}
                                style={{
                                  fontFamily: "'Courier New', monospace",
                                  fontSize: "0.58rem",
                                  letterSpacing: "0.08em",
                                  textTransform: "uppercase",
                                  color: exp.logoColor,
                                  border: `1px solid ${exp.logoColor}25`,
                                  padding: "2px 7px",
                                  borderRadius: "2px",
                                }}
                              >
                                {s}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

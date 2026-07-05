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
    title: "Research Assistant, AI Systems and Agentic Workflows",
    company: "California State University, Long Beach",
    companyShort: "CSULB",
    period: "Sep 2024 to May 2026",
    location: "Long Beach, CA",
    logoColor: "#003DA5",
    logoBg: "#003DA515",
    logoImg: "assets/logo-csulb-official_58b580b1.png",
    highlights: [
      "Owned full data platform architecture for institutional analytics, designing BI oriented schemas, ETL pipelines and warehouse structures in Python, SQL and PostgreSQL, standardizing raw admissions, financial aid and academic records pulled from Excel exports, PDF reports and 25 upstream source systems into trusted, audit ready datasets for 2K+ non technical stakeholders, cutting analyst turnaround from 5 days to same day.",
      "Established data governance, integrity and standardization framework tracking schema drift, pipeline freshness and data quality across 25 source systems, implemented GitHub Actions CI/CD with automated test gates as deployment blockers before data reached production, and drove tool selection decisions that raised platform reliability to 99.9% accuracy across 3 reporting cycles.",
      "Built end to end data ingestion and structuring pipeline converting unstructured PDF records and raw text into queryable, governed datasets using automated extraction and validation, achieving 99.2% F1 score on PII redaction and improving downstream data accuracy from 61% to 89% through structured testing across 3 staged production releases.",
    ],
    skills: ["Python", "SQL", "PostgreSQL", "ETL Pipelines", "GitHub Actions CI/CD", "Data Governance"],
  },
  {
    title: "Data & ML Pipeline Engineer",
    company: "Amazon Web Services (AWS)",
    companyShort: "AWS",
    period: "May 2025 to Jun 2025",
    location: "Philadelphia, PA",
    logoColor: "#FF9900",
    logoBg: "#FF990015",
    faviconDomain: "aws.amazon.com",
    highlights: [
      "Deployed a serverless data pipeline using AWS Lambda and CloudWatch that automated end to end incident response workflows, reducing mitigation triage time by 40%. Selected as one of approximately 50 early career engineers nationally for the All Builders Welcome Grant.",
      "Built an AI augmented anomaly detection model on Amazon SageMaker and Bedrock, applying distributed ML inference to security event streams within a zero trust, compliance first cloud architecture.",
    ],
    skills: ["AWS Lambda", "CloudWatch", "Amazon SageMaker", "Amazon Bedrock", "Cloud Security"],
  },
  {
    title: "Data & Analytics Fellow",
    company: "McKinsey & Company",
    companyShort: "McK",
    period: "Apr 2025 to Jun 2025",
    location: "United States, Remote",
    logoColor: "#4A90D9",
    logoBg: "#4A90D920",
    logoImg: "assets/logo-atkins-official_2a2e6283.png",
    highlights: [
      "Applied structured problem solving frameworks to a digital transformation case study in financial services operations, collaborating with a cross functional team of 6 to deliver data backed recommendations.",
    ],
    skills: ["Data Analytics", "Problem Solving", "Digital Transformation"],
  },
  {
    title: "Software Development Engineer I",
    company: "AtkinsRéalis",
    companyShort: "AR",
    period: "Nov 2023 to May 2024",
    location: "Core Team: Mission Critical Asset Automation Group",
    logoColor: "#E31837",
    logoBg: "#E3183715",
    logoImg: "assets/logo-mckinsey-official_9ac08f6c.png",
    highlights: [
      "Architected and owned scalable data platform and ETL pipeline orchestration using PySpark on Databricks and AWS S3, ingesting 5M+ sensor readings per day from 20 source systems, driving schema design, data modeling and partition tuning decisions that cut pipeline runtime by 40% and sustained zero data outages over 6 months across nuclear and energy infrastructure reporting.",
      "Modernized data observability and quality standards for asset pipelines using Prometheus and Grafana, implemented anomaly detection via Isolation Forest over PySpark cutting false alerts by 28%, and provisioned pipeline infrastructure as code via Terraform and Jenkins CI/CD, enforcing governance gates across distributed engineering teams transitioning legacy systems to owned infrastructure.",
      "Optimized SQL query performance and relational data access layers via Hibernate, JPA and advanced indexing for enterprise asset management, cutting API latency by 24%, and built data structuring pipeline for unstructured logs that ingested raw text into standardized formats, cutting reporting time from 48 hours to under 1 hour.",
    ],
    skills: ["PySpark", "Databricks", "AWS S3", "Prometheus", "Grafana", "Terraform", "Jenkins CI/CD"],
  },
  {
    title: "Software Development Engineer Intern & Co-op",
    company: "AtkinsRéalis",
    companyShort: "AR",
    period: "Nov 2022 to Nov 2023",
    location: "Hybrid",
    logoColor: "#E31837",
    logoBg: "#E3183715",
    logoImg: "assets/logo-mckinsey-official_9ac08f6c.png",
    highlights: [
      "Pioneered data quality and observability standards for global asset pipelines, partnering with senior engineers to deploy machine learning driven anomaly detection via Isolation Forest over PySpark, successfully mitigating false telemetry alerts by 28%.",
      "Provisioned and managed distributed pipeline environments using Terraform and Jenkins CI/CD, establishing strict automated validation gates that served as compliance blockers for international deployment squads.",
      "Optimized relational data access layers and complex SQL database schemas using Hibernate and JPA for the core asset management system, successfully decreasing API response latency by 24% for concurrent international clients.",
    ],
    skills: ["PySpark", "Terraform", "Jenkins CI/CD", "Hibernate", "JPA", "SQL"],
  },
  {
    title: "Data Engineer Intern",
    company: "AlgoSec",
    companyShort: "AS",
    period: "Aug 2022 to Nov 2022",
    location: "Pune, India",
    logoColor: "#0066CC",
    logoBg: "#0066CC15",
    logoImg: "assets/logo-algosec-official_35c93e9f.png",
    highlights: [
      "Flagship Platform Ownership: Single handedly architected and managed the core data engine underpinning AlgoSec Horizon, serving as the sole engineer scaling real time application dependency mapping and zero touch security policy automation across 500+ global enterprise client environments.",
      "High Throughput Streaming Engine: Independently engineered a high velocity event streaming pipeline using Apache Kafka to ingest and process 1.2M+ multi cloud firewall and network security events daily, slashing micro segmentation analytical latency from 48 hours to under 60 seconds.",
      "GenAI Ready Orchestration: Built and managed an end to end self healing ingestion framework using Python, dbt, and Apache Airflow to structure raw multi format security policies into unified, AI consumable PostgreSQL schemas at a flawless 99.9% pipeline runtime.",
      "SaaS Revenue Impact: Acted as the sole technical decision maker for database schema strategies and feature engineering, enabling instant extraction of tenant behavioral signals that surfaced risk anomalies 3 weeks ahead of schedule to drive a 15% increase in enterprise SaaS contract retention.",
    ],
    skills: ["Apache Kafka", "Python", "dbt", "Apache Airflow", "PostgreSQL"],
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
            Work{" "}
            <span className="gradient-text">Experience</span>
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

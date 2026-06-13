/*
 * PORTFOLIO — Experience Section
 * Professional timeline, neutral palette, no emojis
 */
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronDown, ChevronUp, ExternalLink } from "lucide-react";

const jobs = [
  {
    title: "Data & BI Pipeline Engineer",
    company: "AWS Fellowship — McKinsey & Company",
    period: "Jan 2025 — May 2025",
    location: "Los Angeles, CA",
    tags: ["AWS", "Kafka", "Spark", "Python", "Tableau"],
    bullets: [
      "Designed and deployed end-to-end cloud data platform on AWS (S3, Glue, Athena, Redshift) processing 5M+ events/day",
      "Built real-time Kafka streaming pipelines with 99.9% uptime for operational dashboards",
      "Reduced data processing latency by 40% through optimized Spark transformations",
      "Delivered executive-level Tableau dashboards adopted by 3 business units",
    ],
  },
  {
    title: "Data Analytics Fellow",
    company: "McKinsey & Company",
    period: "Aug 2024 — Dec 2024",
    location: "Los Angeles, CA",
    tags: ["Python", "SQL", "Power BI", "Pandas"],
    bullets: [
      "Conducted advanced analytics on supply chain datasets for Fortune 500 clients",
      "Automated reporting pipelines reducing manual effort by 60%",
      "Presented data-driven insights to senior stakeholders",
    ],
  },
  {
    title: "Cloud Data Engineer",
    company: "California State University, Long Beach",
    period: "Aug 2024 — May 2026",
    location: "Long Beach, CA",
    tags: ["AWS", "Python", "PostgreSQL", "Docker"],
    bullets: [
      "Architected cloud-native data solutions for academic research projects",
      "Mentored graduate students in data engineering best practices",
      "Built ETL pipelines integrating multiple institutional data sources",
    ],
  },
  {
    title: "Cloud Data Engineer",
    company: "AtkinsRéalis",
    period: "Jun 2023 — Jul 2024",
    location: "Remote",
    tags: ["Azure", "Databricks", "PySpark", "SQL Server"],
    bullets: [
      "Migrated on-premise data warehouse to Azure Databricks, reducing costs by 35%",
      "Implemented Delta Lake architecture for ACID-compliant data operations",
      "Built CI/CD pipelines for automated data quality validation",
    ],
  },
  {
    title: "Data Engineer — Cloud Streaming",
    company: "AlgoSec",
    period: "Jan 2023 — May 2023",
    location: "Remote",
    tags: ["AWS", "Kinesis", "Lambda", "DynamoDB"],
    bullets: [
      "Developed real-time security event streaming pipeline using AWS Kinesis",
      "Reduced alert processing time from 15 minutes to under 30 seconds",
      "Implemented anomaly detection using IsolationForest on streaming data",
    ],
  },
  {
    title: "Data Engineer — Industrial Analytics",
    company: "HYT Engineering",
    period: "Jun 2022 — Dec 2022",
    location: "Pune, India",
    tags: ["Python", "MySQL", "Power BI", "REST APIs"],
    bullets: [
      "Built data collection system for IoT sensor data from manufacturing equipment",
      "Designed Power BI dashboards for real-time production monitoring",
      "Reduced data reporting cycle from weekly to daily",
    ],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [expanded, setExpanded] = useState<number | null>(0);

  return (
    <section id="experience" ref={ref} style={{ padding: "6rem 0", background: "#0D1117" }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: "3.5rem" }}
        >
          <span className="section-label">02. Experience</span>
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
            Where I've{" "}
            <span className="gradient-text">Built Things</span>
          </h2>
        </motion.div>

        <div style={{ position: "relative", paddingLeft: "2rem" }}>
          <div className="timeline-line" />
          {jobs.map((job, i) => (
            <motion.div
              key={job.title + job.company}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08 }}
              style={{ marginBottom: "1.5rem", position: "relative" }}
            >
              {/* Timeline dot */}
              <div
                style={{
                  position: "absolute",
                  left: "-2rem",
                  top: "1.25rem",
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: i === 0 ? "var(--gold)" : "var(--slate)",
                  border: "1px solid #0D1117",
                  zIndex: 1,
                }}
              />

              <div
                className="card-neutral"
                style={{ padding: "1.5rem", cursor: "pointer" }}
                onClick={() => setExpanded(expanded === i ? null : i)}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "1rem" }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", flexWrap: "wrap", marginBottom: "0.3rem" }}>
                      <span style={{ fontFamily: "'Courier New', monospace", fontSize: "0.62rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--gold)" }}>
                        {job.period}
                      </span>
                      <span style={{ fontFamily: "'Courier New', monospace", fontSize: "0.62rem", color: "var(--slate)", opacity: 0.6 }}>
                        {job.location}
                      </span>
                    </div>
                    <h3 style={{ fontFamily: "'Times New Roman', Times, serif", fontSize: "1.05rem", fontWeight: 700, color: "#F5F0E8", margin: "0 0 0.2rem", letterSpacing: "-0.01em" }}>
                      {job.title}
                    </h3>
                    <p style={{ fontFamily: "'Georgia', serif", fontSize: "0.88rem", color: "var(--slate)", margin: "0 0 0.75rem" }}>
                      {job.company}
                    </p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                      {job.tags.map((tag) => (
                        <span
                          key={tag}
                          style={{
                            fontFamily: "'Courier New', monospace",
                            fontSize: "0.62rem",
                            letterSpacing: "0.08em",
                            padding: "0.2rem 0.6rem",
                            background: "rgba(201, 168, 76, 0.08)",
                            border: "1px solid rgba(201, 168, 76, 0.2)",
                            borderRadius: "2px",
                            color: "var(--gold)",
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div style={{ color: "var(--slate)", flexShrink: 0, marginTop: "0.25rem" }}>
                    {expanded === i ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </div>
                </div>

                {expanded === i && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.25 }}
                    style={{ marginTop: "1.25rem", paddingTop: "1.25rem", borderTop: "1px solid rgba(201, 168, 76, 0.08)" }}
                  >
                    <ul style={{ margin: 0, paddingLeft: "1.2rem", listStyle: "none" }}>
                      {job.bullets.map((b, bi) => (
                        <li
                          key={bi}
                          style={{
                            fontFamily: "'Georgia', serif",
                            fontSize: "0.9rem",
                            color: "var(--slate)",
                            lineHeight: 1.7,
                            marginBottom: "0.5rem",
                            paddingLeft: "0.5rem",
                            position: "relative",
                          }}
                        >
                          <span style={{ position: "absolute", left: "-0.8rem", color: "var(--gold)" }}>—</span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

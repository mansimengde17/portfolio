/*
 * MIDNIGHT DATA LAB — Experience Section
 * Vertical timeline with animated connector dots
 */
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, ChevronDown, ChevronUp } from "lucide-react";

const experiences = [
  {
    title: "Data & ML Pipeline Engineer",
    company: "Amazon Web Services (AWS)",
    period: "May 2025 – Jun 2025",
    location: "Philadelphia, PA",
    type: "Fellowship",
    badge: "AWS",
    badgeColor: "#F59E0B",
    highlights: [
      "Selected nationally as one of ~50 early career engineers for the All Builders Welcome Grant",
      "Deployed a serverless data pipeline using AWS Lambda and CloudWatch that automated end-to-end incident response workflows, reducing mitigation triage time by 40%",
      "Built an AI-augmented anomaly detection model on Amazon SageMaker + Bedrock, applying distributed ML inference to security event streams within a zero-trust, compliance-first cloud architecture",
    ],
    tech: ["AWS Lambda", "CloudWatch", "SageMaker", "Bedrock", "Zero-Trust Architecture"],
  },
  {
    title: "Data & Analytics Fellow",
    company: "McKinsey & Company",
    period: "Apr 2025 – Jun 2025",
    location: "United States",
    type: "Fellowship",
    badge: "McKinsey",
    badgeColor: "#8B5CF6",
    highlights: [
      "Applied structured problem solving frameworks to a digital transformation case study in financial services operations",
      "Collaborated with a cross-functional team of 6 to deliver data-backed recommendations",
    ],
    tech: ["Data Analytics", "Problem Solving", "Financial Services", "Digital Transformation"],
  },
  {
    title: "Cloud Data Engineer",
    company: "Office of Institutional Research & Analytics, CSULB",
    period: "Sep 2024 – May 2026",
    location: "Long Beach, CA",
    type: "Full-time",
    badge: "CSULB",
    badgeColor: "#00D4FF",
    highlights: [
      "Designed and built scalable ETL and ELT pipelines in Python, SQL, and dbt ingesting data from 10+ source systems into PostgreSQL and Amazon Redshift, achieving 99.9% data accuracy across all federal compliance submissions",
      "Built a production data platform on AWS (S3, Glue, Lambda, Redshift, Kinesis) with Apache Airflow orchestration, GitHub Actions CI/CD, and Terraform IaC",
      "Implemented data quality frameworks using Great Expectations and dbt schema tests as automated blocking gates",
      "Integrated Python, pgvector, and Claude API semantic search layer preparing the platform for AI/ML workloads, cutting ad hoc requests by 70% for 200 stakeholders",
      "Delivered analytics-ready datasets and Power BI dashboards; cut report preparation from 3 weeks to 3 days",
    ],
    tech: ["Python", "dbt", "AWS", "Airflow", "Redshift", "PostgreSQL", "Power BI", "Terraform", "Great Expectations"],
  },
  {
    title: "Data Engineer, Cloud & Streaming",
    company: "AtkinsRéalis",
    period: "Nov 2023 – May 2024",
    location: "Pune, India",
    type: "Full-time",
    badge: "AtkinsRéalis",
    badgeColor: "#00D4FF",
    highlights: [
      "Architected and scaled Spark and PySpark ETL pipelines on AWS (Glue, S3, Kinesis, Lambda, Redshift) and Databricks ingesting 5M+ events/day from 20 source systems",
      "Achieved same-day data delivery from a 5-day manual cycle through Spark execution plan tuning, broadcast joins, and partition optimization",
      "Implemented data models, schemas, and integrations on Azure and AWS Redshift platforms; maintained zero unplanned outages over 6 months on regulated nuclear and defence contracts",
      "Cut mean time to recovery by 60% through Python automation",
    ],
    tech: ["PySpark", "Databricks", "AWS Glue", "Kinesis", "Terraform", "Docker", "Grafana", "NIST/CIS"],
  },
  {
    title: "Data Engineer – ML Pipelines",
    company: "AlgoSec",
    period: "Dec 2022 – Aug 2023",
    location: "Pune, India",
    type: "Full-time",
    badge: "AlgoSec",
    badgeColor: "#00D4FF",
    highlights: [
      "Built Apache Kafka and PySpark streaming platform on Databricks with Snowflake as cloud data warehouse; cut compliance report delivery from 48 hours to under 1 hour for 500 enterprise accounts",
      "Applied Great Expectations data quality frameworks, Prometheus and Grafana observability; detected data regressions within 2 minutes",
      "Built Python ML pipelines using Scikit-learn and Pandas for churn prediction at 86% AUC, flagging ~2,500 at-risk accounts per month",
      "Reduced malformed records reaching analytics by 40%",
    ],
    tech: ["Kafka", "PySpark", "Snowflake", "dbt", "Scikit-learn", "FastAPI", "pgvector", "Prometheus", "Grafana"],
  },
  {
    title: "Data Engineer – Industrial Analytics",
    company: "HYT Engineering Company",
    period: "Jun 2021 – Nov 2022",
    location: "Pimpri Chinchwad, India",
    type: "Full-time",
    badge: "HYT",
    badgeColor: "#6B8FAB",
    highlights: [
      "Integrated IoT telemetry from legacy CNC systems across 4 manufacturing plants into unified data pipelines, enabling real-time fault detection that increased machine uptime by 35%",
      "Built predictive Tableau dashboards processing equipment telemetry from 80+ CNC machines and 200+ sensors",
      "Designed SQL-based alerting thresholds and automated maintenance triggers, eliminating ~30 hours/week of manual monitoring",
    ],
    tech: ["IoT", "SQL", "Tableau", "Python", "CNC Systems", "Predictive Analytics"],
  },
];

function ExperienceCard({ exp, index }: { exp: typeof experiences[0]; index: number }) {
  const [expanded, setExpanded] = useState(index < 2);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.23, 1, 0.32, 1] }}
      className="relative pl-8"
    >
      {/* Timeline dot */}
      <div
        className="absolute left-0 top-6 timeline-dot"
        style={{ transform: "translateX(-50%)" }}
      />

      <div className="glow-card rounded-xl p-5 mb-6">
        {/* Header */}
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <span
                className="text-xs font-mono px-2 py-0.5 rounded"
                style={{
                  background: `${exp.badgeColor}20`,
                  border: `1px solid ${exp.badgeColor}40`,
                  color: exp.badgeColor,
                }}
              >
                {exp.badge}
              </span>
              <span
                className="text-xs px-2 py-0.5 rounded"
                style={{
                  background: "rgba(107, 143, 171, 0.1)",
                  border: "1px solid rgba(107, 143, 171, 0.2)",
                  color: "#6B8FAB",
                  fontFamily: "'JetBrains Mono', monospace",
                }}
              >
                {exp.type}
              </span>
            </div>
            <h3
              className="mt-2 text-lg font-bold"
              style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#E8F4FD" }}
            >
              {exp.title}
            </h3>
            <p className="text-sm mt-0.5" style={{ color: "#00D4FF" }}>{exp.company}</p>
            <p className="text-xs mt-0.5" style={{ color: "#6B8FAB", fontFamily: "'JetBrains Mono', monospace" }}>
              {exp.period} · {exp.location}
            </p>
          </div>
          <button
            onClick={() => setExpanded(!expanded)}
            className="p-1.5 rounded-lg transition-colors"
            style={{ color: "#6B8FAB", background: "rgba(107, 143, 171, 0.1)" }}
          >
            {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
        </div>

        {/* Expandable content */}
        <motion.div
          initial={false}
          animate={{ height: expanded ? "auto" : 0, opacity: expanded ? 1 : 0 }}
          transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
          style={{ overflow: "hidden" }}
        >
          <ul className="mt-4 space-y-2">
            {exp.highlights.map((h, i) => (
              <li key={i} className="flex gap-2 text-sm" style={{ color: "#6B8FAB", fontFamily: "'DM Sans', sans-serif" }}>
                <span style={{ color: "#00D4FF", flexShrink: 0, marginTop: "2px" }}>▸</span>
                <span>{h}</span>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-wrap gap-2">
            {exp.tech.map((t) => (
              <span key={t} className="skill-tag text-xs">{t}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 relative" style={{ background: "#050A14" }}>
      <div className="section-divider max-w-4xl mb-16" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="section-label">// 02. work experience</span>
          <h2
            className="mt-3 text-4xl lg:text-5xl font-bold"
            style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#E8F4FD" }}
          >
            Where I've{" "}
            <span className="gradient-text">Built Things</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div
          className="relative"
          style={{
            borderLeft: "1px solid rgba(0, 212, 255, 0.2)",
            paddingLeft: "2rem",
          }}
        >
          {experiences.map((exp, i) => (
            <ExperienceCard key={exp.company + exp.period} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

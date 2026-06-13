/*
 * PORTFOLIO — Skills Section
 * Bubble/floating animations, comprehensive FAANG-level skills
 * Broad categories: Data Engineering, Cloud, ML/AI, Languages, DevOps, Databases
 */
import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

interface SkillBubble {
  name: string;
  size: number;
  x: number;
  y: number;
  delay: number;
  category: string;
}

const SKILL_CATEGORIES = [
  {
    label: "Data Engineering",
    color: "#C9A84C",
    skills: ["Apache Spark", "Apache Kafka", "Apache Airflow", "dbt", "ETL Pipelines", "Data Modeling", "Streaming", "Batch Processing", "Data Warehousing", "Delta Lake", "Apache Flink", "Data Quality"],
  },
  {
    label: "Cloud Platforms",
    color: "#8A9BB0",
    skills: ["AWS", "Amazon S3", "AWS Glue", "Amazon Redshift", "AWS Lambda", "Amazon SageMaker", "Amazon Bedrock", "CloudWatch", "API Gateway", "AWS IAM", "Cloud WAN", "Azure", "GCP"],
  },
  {
    label: "Machine Learning and AI",
    color: "#A8C5DA",
    skills: ["scikit-learn", "TensorFlow", "PyTorch", "Anomaly Detection", "Churn Prediction", "NLP", "Generative AI", "LLMs", "Prompt Engineering", "Model Drift Detection", "MLOps", "Feature Engineering"],
  },
  {
    label: "Languages and Frameworks",
    color: "#C9A84C",
    skills: ["Python", "SQL", "PySpark", "Scala", "Java", "Bash", "TypeScript", "JavaScript", "REST APIs", "GraphQL", "FastAPI", "Flask"],
  },
  {
    label: "Databases and Storage",
    color: "#8A9BB0",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "DynamoDB", "Amazon RDS", "Redis", "Elasticsearch", "Snowflake", "BigQuery", "Cassandra", "ClickHouse", "Apache Hive"],
  },
  {
    label: "DevOps and Observability",
    color: "#A8C5DA",
    skills: ["Docker", "Kubernetes", "Terraform", "CI/CD", "GitHub Actions", "Grafana", "Prometheus", "Datadog", "Splunk", "Git", "Agile", "JIRA"],
  },
  {
    label: "Analytics and Visualization",
    color: "#C9A84C",
    skills: ["Tableau", "Power BI", "Looker", "Matplotlib", "Seaborn", "Plotly", "Pandas", "NumPy", "Excel", "Google Analytics", "Metabase", "Apache Superset"],
  },
  {
    label: "Security and Compliance",
    color: "#8A9BB0",
    skills: ["NIST Framework", "CIS Benchmarks", "Zero Trust", "FERPA", "PII Compliance", "RBAC", "IAM Policies", "GuardDuty", "CloudTrail", "Threat Detection", "SOC Workflows", "Encryption"],
  },
];

function FloatingBubble({ skill, color, delay, x, y, size }: { skill: string; color: string; delay: number; x: number; y: number; size: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{
        opacity: [0, 1, 1, 0.85],
        scale: [0.6, 1, 1.03, 1],
        y: [y, y - 8, y + 4, y - 6, y],
      }}
      transition={{
        opacity: { duration: 0.5, delay },
        scale: { duration: 0.5, delay },
        y: {
          duration: 4 + Math.random() * 2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: delay + Math.random() * 2,
        },
      }}
      whileHover={{ scale: 1.12, zIndex: 10 }}
      style={{
        position: "absolute",
        left: `${x}%`,
        top: `${y}%`,
        transform: "translate(-50%, -50%)",
        padding: `${size * 0.18}rem ${size * 0.32}rem`,
        background: `rgba(13,17,23,0.85)`,
        border: `1px solid ${color}40`,
        borderRadius: "100px",
        fontFamily: "'Courier New', monospace",
        fontSize: `${0.55 + size * 0.012}rem`,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        color: color,
        whiteSpace: "nowrap",
        cursor: "default",
        backdropFilter: "blur(8px)",
        boxShadow: `0 0 ${size * 0.4}px ${color}18, inset 0 1px 0 ${color}15`,
        zIndex: 1,
      }}
    >
      {skill}
    </motion.div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [activeCategory, setActiveCategory] = useState(0);

  const currentCat = SKILL_CATEGORIES[activeCategory];

  // Generate bubble positions for the current category
  const bubbles = currentCat.skills.map((skill, i) => {
    const cols = 4;
    const rows = Math.ceil(currentCat.skills.length / cols);
    const col = i % cols;
    const row = Math.floor(i / cols);
    const jitterX = (Math.sin(i * 2.3) * 8);
    const jitterY = (Math.cos(i * 1.7) * 8);
    return {
      skill,
      x: 12 + col * 22 + jitterX,
      y: 15 + row * (70 / rows) + jitterY,
      size: 40 + (skill.length * 1.5),
      delay: i * 0.06,
      color: currentCat.color,
    };
  });

  return (
    <section
      id="skills"
      ref={ref}
      style={{ padding: "6rem 0", background: "var(--charcoal)", position: "relative", overflow: "hidden" }}
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: "3rem" }}
        >
          <span className="section-label">04. Skills</span>
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
            Technical{" "}
            <span className="gradient-text">Expertise</span>
          </h2>
          <p style={{ color: "var(--slate)", fontFamily: "'Georgia', serif", fontSize: "0.95rem", marginTop: "0.75rem", maxWidth: "540px", lineHeight: 1.7 }}>
            A comprehensive stack spanning data engineering, cloud architecture, machine learning, and full software delivery — aligned with what FAANG and top tier engineering teams look for.
          </p>
        </motion.div>

        {/* Category tabs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "2.5rem" }}
        >
          {SKILL_CATEGORIES.map((cat, i) => (
            <button
              key={cat.label}
              onClick={() => setActiveCategory(i)}
              style={{
                fontFamily: "'Courier New', monospace",
                fontSize: "0.62rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                padding: "0.4rem 0.9rem",
                borderRadius: "2px",
                border: `1px solid ${i === activeCategory ? cat.color : "rgba(138,155,176,0.2)"}`,
                background: i === activeCategory ? `${cat.color}15` : "transparent",
                color: i === activeCategory ? cat.color : "var(--slate)",
                cursor: "pointer",
                transition: "all 180ms ease",
              }}
              onMouseEnter={(e) => {
                if (i !== activeCategory) {
                  e.currentTarget.style.borderColor = `${cat.color}60`;
                  e.currentTarget.style.color = cat.color;
                }
              }}
              onMouseLeave={(e) => {
                if (i !== activeCategory) {
                  e.currentTarget.style.borderColor = "rgba(138,155,176,0.2)";
                  e.currentTarget.style.color = "var(--slate)";
                }
              }}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Bubble field */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          style={{
            position: "relative",
            height: "380px",
            border: "1px solid rgba(201,168,76,0.08)",
            borderRadius: "4px",
            overflow: "hidden",
            background: "rgba(13,17,23,0.5)",
          }}
        >
          {/* Subtle radial glow */}
          <div style={{
            position: "absolute",
            inset: 0,
            background: `radial-gradient(ellipse 60% 50% at 50% 50%, ${currentCat.color}08 0%, transparent 70%)`,
            pointerEvents: "none",
          }} />

          {bubbles.map((b) => (
            <FloatingBubble
              key={b.skill}
              skill={b.skill}
              color={b.color}
              delay={b.delay}
              x={b.x}
              y={b.y}
              size={b.size}
            />
          ))}

          {/* Category label watermark */}
          <div style={{
            position: "absolute",
            bottom: "1rem",
            right: "1.25rem",
            fontFamily: "'Times New Roman', Times, serif",
            fontSize: "0.7rem",
            color: `${currentCat.color}30`,
            letterSpacing: "0.06em",
            fontStyle: "italic",
            pointerEvents: "none",
          }}>
            {currentCat.label}
          </div>
        </motion.div>

        {/* All skills flat list for SEO / accessibility */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          style={{ marginTop: "2.5rem" }}
        >
          <p style={{ fontFamily: "'Courier New', monospace", fontSize: "0.6rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--slate)", marginBottom: "1rem", opacity: 0.6 }}>
            All Technologies
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
            {SKILL_CATEGORIES.flatMap((cat) =>
              cat.skills.map((s) => (
                <span
                  key={s + cat.label}
                  style={{
                    fontFamily: "'Courier New', monospace",
                    fontSize: "0.6rem",
                    letterSpacing: "0.06em",
                    color: "var(--slate)",
                    border: "1px solid rgba(138,155,176,0.15)",
                    padding: "2px 7px",
                    borderRadius: "2px",
                    opacity: 0.75,
                  }}
                >
                  {s}
                </span>
              ))
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

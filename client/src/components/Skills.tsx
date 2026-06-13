/*
 * PORTFOLIO — Skills Section
 * Professional neutral palette, no emojis
 */
import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

const skillGroups = [
  {
    category: "Data Engineering",
    skills: [
      { name: "Apache Kafka", level: 90 },
      { name: "Apache Spark / PySpark", level: 88 },
      { name: "Apache Airflow", level: 82 },
      { name: "dbt (Data Build Tool)", level: 78 },
      { name: "Apache Iceberg", level: 75 },
    ],
  },
  {
    category: "Cloud Platforms",
    skills: [
      { name: "AWS (S3, Glue, Athena, Redshift, Kinesis)", level: 92 },
      { name: "Azure (Databricks, Data Factory)", level: 80 },
      { name: "Docker / Kubernetes", level: 75 },
      { name: "Terraform", level: 70 },
    ],
  },
  {
    category: "Programming",
    skills: [
      { name: "Python", level: 95 },
      { name: "SQL (PostgreSQL, MySQL, Redshift)", level: 90 },
      { name: "Scala", level: 65 },
      { name: "Java", level: 60 },
    ],
  },
  {
    category: "Machine Learning",
    skills: [
      { name: "scikit-learn", level: 82 },
      { name: "PyTorch", level: 70 },
      { name: "Pandas / NumPy", level: 92 },
      { name: "Feature Engineering", level: 85 },
    ],
  },
  {
    category: "Data Visualization",
    skills: [
      { name: "Tableau", level: 85 },
      { name: "Power BI", level: 88 },
      { name: "Grafana", level: 78 },
      { name: "Matplotlib / Seaborn", level: 80 },
    ],
  },
  {
    category: "Data Architecture",
    skills: [
      { name: "Data Warehouse Design", level: 85 },
      { name: "Data Lake Architecture", level: 82 },
      { name: "ETL / ELT Pipelines", level: 92 },
      { name: "Real-Time Streaming", level: 88 },
    ],
  },
];

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !animated) {
      const t = setTimeout(() => setAnimated(true), delay * 1000);
      return () => clearTimeout(t);
    }
  }, [isInView, animated, delay]);

  return (
    <div ref={ref} style={{ marginBottom: "0.9rem" }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.3rem" }}>
        <span style={{ fontFamily: "'Georgia', serif", fontSize: "0.85rem", color: "#F5F0E8" }}>{name}</span>
        <span style={{ fontFamily: "'Courier New', monospace", fontSize: "0.65rem", color: "var(--gold)" }}>{level}%</span>
      </div>
      <div className="skill-bar-track">
        <div
          className={`skill-bar-fill ${animated ? "animate" : ""}`}
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" ref={ref} style={{ padding: "6rem 0", background: "#0D1117" }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: "3.5rem" }}
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
            My{" "}
            <span className="gradient-text">Tech Stack</span>
          </h2>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "2rem" }}>
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: gi * 0.08 }}
              className="card-neutral"
              style={{ padding: "1.75rem" }}
            >
              <h3
                style={{
                  fontFamily: "'Courier New', monospace",
                  fontSize: "0.78rem",
                  fontWeight: 700,
                  color: "var(--gold)",
                  marginBottom: "1.5rem",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                }}
              >
                {group.category}
              </h3>
              {group.skills.map((skill, si) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} delay={gi * 0.1 + si * 0.05} />
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

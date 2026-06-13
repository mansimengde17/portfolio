/*
 * MIDNIGHT DATA LAB — Skills Section
 * Categorized skill tags with animated entrance
 */
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    category: "Languages",
    icon: "⌨️",
    color: "#00D4FF",
    skills: ["Python", "SQL", "PySpark", "Scala", "Bash", "TypeScript", "JavaScript"],
  },
  {
    category: "Data Engineering",
    icon: "🔧",
    color: "#8B5CF6",
    skills: ["Apache Spark", "Databricks", "Apache Kafka", "Apache Airflow", "dbt", "ETL/ELT Pipelines", "Data Modeling", "Dimensional Design", "Data Quality", "Data Lineage", "Great Expectations"],
  },
  {
    category: "Cloud & Infrastructure",
    icon: "☁️",
    color: "#00D4FF",
    skills: ["AWS (S3, Glue, Redshift, Lambda, Kinesis, EMR, SageMaker)", "Azure (Data Factory, Data Lake)", "GCP (BigQuery)", "Snowflake", "PostgreSQL", "DynamoDB", "Terraform", "Docker", "GitHub Actions CI/CD"],
  },
  {
    category: "Machine Learning & AI",
    icon: "🤖",
    color: "#10B981",
    skills: ["Scikit-learn", "LightGBM", "PyTorch", "Pandas", "NumPy", "pgvector", "Amazon Bedrock", "Churn Prediction", "Anomaly Detection", "Semantic Search"],
  },
  {
    category: "Analytics & BI",
    icon: "📊",
    color: "#F59E0B",
    skills: ["Power BI", "Tableau", "DAX", "Power Query (M)", "Grafana", "Prometheus", "Datadog"],
  },
  {
    category: "Security & Compliance",
    icon: "🔒",
    color: "#EF4444",
    skills: ["RBAC", "FERPA Compliance", "PII Protection", "NIST Benchmarks", "CIS Benchmarks", "Zero-Trust Architecture", "Data Governance", "Access Controls"],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 relative" style={{ background: "#050A14" }}>
      <div className="section-divider max-w-4xl mb-16" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="section-label">// 04. technical skills</span>
          <h2
            className="mt-3 text-4xl lg:text-5xl font-bold"
            style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#E8F4FD" }}
          >
            My{" "}
            <span className="gradient-text">Tech Stack</span>
          </h2>
          <p className="mt-4 text-base max-w-2xl" style={{ color: "#6B8FAB", fontFamily: "'DM Sans', sans-serif" }}>
            The tools and technologies I use to build production-grade data systems.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, catIdx) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: catIdx * 0.1 }}
              className="glow-card rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{cat.icon}</span>
                <h3
                  className="font-bold text-base"
                  style={{ fontFamily: "'Space Grotesk', sans-serif", color: cat.color }}
                >
                  {cat.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, i) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: catIdx * 0.1 + i * 0.04 }}
                    className="text-xs px-2.5 py-1 rounded-full transition-all duration-150 cursor-default"
                    style={{
                      background: `${cat.color}10`,
                      border: `1px solid ${cat.color}25`,
                      color: "#E8F4FD",
                      fontFamily: "'DM Sans', sans-serif",
                    }}
                    onMouseEnter={(e) => {
                      (e.target as HTMLElement).style.background = `${cat.color}20`;
                      (e.target as HTMLElement).style.borderColor = `${cat.color}50`;
                      (e.target as HTMLElement).style.color = cat.color;
                    }}
                    onMouseLeave={(e) => {
                      (e.target as HTMLElement).style.background = `${cat.color}10`;
                      (e.target as HTMLElement).style.borderColor = `${cat.color}25`;
                      (e.target as HTMLElement).style.color = "#E8F4FD";
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Proficiency bars for key skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-12 glow-card rounded-2xl p-6"
        >
          <h3
            className="font-bold text-lg mb-6"
            style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#E8F4FD" }}
          >
            Core Proficiencies
          </h3>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-4">
            {[
              { skill: "Python & SQL", level: 95 },
              { skill: "Apache Spark / PySpark", level: 90 },
              { skill: "AWS Cloud Services", level: 92 },
              { skill: "Apache Kafka", level: 85 },
              { skill: "dbt & Data Modeling", level: 88 },
              { skill: "Snowflake / Redshift", level: 87 },
              { skill: "Apache Airflow", level: 85 },
              { skill: "Terraform / Docker", level: 82 },
            ].map(({ skill, level }, i) => (
              <div key={skill}>
                <div className="flex justify-between mb-1.5">
                  <span className="text-sm" style={{ color: "#E8F4FD", fontFamily: "'DM Sans', sans-serif" }}>
                    {skill}
                  </span>
                  <span className="text-xs font-mono" style={{ color: "#00D4FF" }}>{level}%</span>
                </div>
                <div
                  className="h-1.5 rounded-full overflow-hidden"
                  style={{ background: "rgba(0, 212, 255, 0.1)" }}
                >
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${level}%` } : {}}
                    transition={{ duration: 1, delay: 0.7 + i * 0.08, ease: [0.23, 1, 0.32, 1] }}
                    className="h-full rounded-full"
                    style={{
                      background: "linear-gradient(90deg, #00D4FF, #8B5CF6)",
                      boxShadow: "0 0 8px rgba(0, 212, 255, 0.4)",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

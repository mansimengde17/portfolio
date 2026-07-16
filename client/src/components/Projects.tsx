/*
 * PORTFOLIO — Projects Section
 * Latest first, professional neutral palette, no emojis
 */
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Satellite Network Analytics Platform",
    subtitle: "Production Grade Data Engineering",
    description: "Production grade data engineering platform mirroring Starlink's WiFi analytics stack. Built with Kafka, Spark Structured Streaming, Python OOP transforms, IsolationForest anomaly detection, Apache Iceberg on S3, and Grafana dashboards.",
    tags: ["Kafka", "Spark", "Apache Iceberg", "S3", "Grafana", "Python", "scikit-learn"],
    github: "https://github.com/mansimengde17/satellite-network-analytics",
    year: "2026",
    featured: true,
  },
  {
    title: "FraudShield",
    subtitle: "Real Time Fraud Detection System",
    description: "End to end fraud detection pipeline with real time scoring, feature engineering on transaction streams, and automated alerting. Processes thousands of transactions per second with sub-100ms latency.",
    tags: ["Python", "Kafka", "ML", "FastAPI", "PostgreSQL"],
    github: "https://github.com/mansimengde17/FraudShield",
    year: "2025",
    featured: true,
  },
  {
    title: "Diabetes Risk Prediction ML",
    subtitle: "Machine Learning · Healthcare",
    description: "Machine learning system predicting diabetes risk using CDC BRFSS 2015 dataset. Includes data preprocessing, EDA, model training, hyperparameter tuning, and a deployed Streamlit web application.",
    tags: ["Python", "scikit-learn", "Streamlit", "Pandas", "XGBoost"],
    github: "https://github.com/mansimengde17/Machine-Learning-Project",
    year: "2025",
    featured: false,
  },
  {
    title: "Smart Task Reminder Dashboard",
    subtitle: "Power BI · Productivity Analytics",
    description: "Intelligent Power BI dashboard for measuring focus, analyzing distractions, and delivering automated weekly productivity reports with trend analysis and actionable insights.",
    tags: ["Power BI", "DAX", "Python", "SQL", "Excel"],
    github: "https://github.com/mansimengde17/Smart-Task-Reminder",
    year: "2025",
    featured: false,
  },
  {
    title: "SoCal Datathon 2025",
    subtitle: "Award Winning Data Analysis",
    description: "First place winning submission at the SoCal Datathon hosted by CSUF. Analyzed real world business datasets and delivered actionable insights with predictive modeling under a 24 hour constraint.",
    tags: ["Python", "Pandas", "Matplotlib", "ML", "Tableau"],
    github: "https://github.com/mansimengde17/DATATHON-LMU-2025",
    year: "2025",
    featured: false,
  },
  {
    title: "GPT Model from Scratch",
    subtitle: "Deep Learning · NLP",
    description: "Simplified GPT implementation from scratch for IS640 coursework. Includes data handling, transformer architecture, training logic, and text generation, built without high level ML frameworks.",
    tags: ["Python", "PyTorch", "Transformers", "NLP"],
    github: "https://github.com/mansimengde17/is-640-gpt",
    year: "2024",
    featured: false,
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" ref={ref} style={{ padding: "6rem 0", background: "var(--charcoal)" }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: "3.5rem" }}
        >
          <span className="section-label">04. Projects</span>
          <h2
            style={{
              fontFamily: "'Space Grotesk', system-ui, sans-serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 700,
              color: "#F2F5FF",
              marginTop: "0.5rem",
              letterSpacing: "-0.02em",
            }}
          >
            Things I've{" "}
            <span className="gradient-text">Built and Shipped</span>
          </h2>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: "1.5rem" }}>
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.07 }}
              className={project.featured ? "card-gold" : "card-neutral"}
              style={{ padding: "1.75rem", display: "flex", flexDirection: "column", gap: "1rem" }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <div>
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.74rem", letterSpacing: "0.12em", textTransform: "uppercase", color: project.featured ? "var(--gold)" : "var(--slate)" }}>
                    {project.year} {project.featured ? "· Featured" : ""}
                  </span>
                  <h3 style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif", fontSize: "1.05rem", fontWeight: 700, color: "#F2F5FF", margin: "0.3rem 0 0.15rem", letterSpacing: "-0.01em" }}>
                    {project.title}
                  </h3>
                  <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.78rem", color: "var(--slate)", margin: 0, letterSpacing: "0.06em" }}>
                    {project.subtitle}
                  </p>
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "var(--slate)", transition: "color 150ms ease", flexShrink: 0 }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--slate)")}
                >
                  <Github size={17} />
                </a>
              </div>

              <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: "0.97rem", color: "var(--slate)", lineHeight: 1.78, margin: 0, flex: 1 }}>
                {project.description}
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "0.8rem",
                      letterSpacing: "0.08em",
                      padding: "0.18rem 0.55rem",
                      background: "rgba(139, 92, 246, 0.06)",
                      border: "1px solid rgba(139, 92, 246, 0.18)",
                      borderRadius: "12px",
                      color: "var(--gold)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div style={{ display: "flex", gap: "1.25rem", marginTop: "auto", flexWrap: "wrap" }}>
                {(project as any).live && (
                  <a
                    href={(project as any).live}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.4rem",
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "0.78rem",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "var(--gold)",
                      textDecoration: "none",
                      transition: "color 150ms ease",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#F2F5FF")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "var(--gold)")}
                  >
                    <ExternalLink size={13} />
                    Live Demo
                  </a>
                )}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.4rem",
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "0.78rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "var(--slate)",
                    textDecoration: "none",
                    transition: "color 150ms ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--slate)")}
                >
                  <ExternalLink size={13} />
                  View on GitHub
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          style={{ marginTop: "2.5rem", textAlign: "center" }}
        >
          <a
            href="https://github.com/mansimengde17"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
          >
            <Github size={15} />
            View All on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}

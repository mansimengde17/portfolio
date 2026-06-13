/*
 * MIDNIGHT DATA LAB — Projects Section
 * Glassmorphism cards with hover glow, GitHub links
 */
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Github, ExternalLink, Star, GitFork } from "lucide-react";

const projects = [
  {
    title: "End-to-End Cloud Data Platform",
    subtitle: "Production-grade modern data stack",
    description:
      "Built a production data platform covering the full modern data engineering stack: Apache Kafka streams real-time events; PySpark on Databricks processes batch and streaming ETL/ELT; Snowflake and Redshift serve as cloud data warehouses with dbt dimensional models; Apache Airflow orchestrates all pipelines with SLA monitoring; AWS, Azure, and GCP provide multi-cloud storage and compute.",
    tech: ["Python", "PySpark", "Databricks", "Kafka", "Snowflake", "AWS", "Azure", "GCP", "dbt", "Airflow", "Terraform"],
    highlights: ["99.9% accuracy", "Sub-30s latency", "Multi-cloud"],
    github: "https://github.com/mansimengde17",
    featured: true,
    category: "Data Engineering",
  },
  {
    title: "FraudShield",
    subtitle: "ML-powered fraud detection system",
    description:
      "Complete ML workflow for the IEEE-CIS fraud dataset: clean raw CSVs, engineer high-signal features, train a LightGBM model, and explore results through a Streamlit dashboard. Includes preprocessing pipeline, feature engineering, model training with class-imbalance handling, and interactive demo dashboard.",
    tech: ["Python", "LightGBM", "Scikit-learn", "Streamlit", "Pandas", "NumPy", "Docker"],
    highlights: ["IEEE-CIS Dataset", "LightGBM", "Streamlit Dashboard"],
    github: "https://github.com/mansimengde17/FraudShield",
    featured: true,
    category: "Machine Learning",
  },
  {
    title: "Diabetes Risk Prediction ML",
    subtitle: "CDC BRFSS 2015 dataset analysis",
    description:
      "Leverages machine learning models to predict an individual's risk of developing diabetes using health and lifestyle indicators from the CDC's BRFSS 2015 dataset. Includes data preprocessing, EDA, model training, hyperparameter tuning, evaluation, and a deployed web application built with Streamlit.",
    tech: ["Python", "Jupyter", "Scikit-learn", "Streamlit", "Pandas", "EDA"],
    highlights: ["CDC Dataset", "Deployed App", "Hyperparameter Tuning"],
    github: "https://github.com/mansimengde17/Machine-Learning-Project",
    stars: 1,
    featured: false,
    category: "Machine Learning",
  },
  {
    title: "Smart Task Reminder Dashboard",
    subtitle: "Power BI productivity analytics system",
    description:
      "A data-driven productivity analytics system that transforms behavioral and calendar data into actionable insights on digital focus and distraction patterns. Features Intelligent Focus Scoring Engine, Cognitive Distraction Analytics, Calendar-Aware Workload Mapping, and Automated Weekly Insight Reporting.",
    tech: ["Power BI", "Power Query (M)", "DAX", "Excel/CSV", "Python", "GitHub Actions"],
    highlights: ["Focus Scoring Engine", "Pareto Analysis", "PDF Reports"],
    github: "https://github.com/mansimengde17/Smart-Task-Reminder",
    featured: false,
    category: "Analytics",
  },
  {
    title: "SoCal Datathon 2025",
    subtitle: "Winning data science competition entry",
    description:
      "Competition entry for the SoCal Datathon 2025 (LMU). Applied advanced data analysis, machine learning, and visualization techniques to solve real-world data challenges. Winner of the SoCal Datathon using Alteryx.",
    tech: ["Python", "Alteryx", "Data Analysis", "Visualization", "Machine Learning"],
    highlights: ["🏆 Winner", "LMU 2025", "Alteryx"],
    github: "https://github.com/mansimengde17/DATATHON-LMU-2025",
    featured: false,
    category: "Competition",
  },
  {
    title: "GPT Model from Scratch",
    subtitle: "IS640 Neural Networks Project",
    description:
      "Built a simplified GPT model from scratch for IS640 Project 2. Includes data.py (data handling), model.py (model architecture), and training pipeline. Demonstrates deep understanding of transformer architecture and language model training.",
    tech: ["Python", "PyTorch", "Transformers", "NLP", "Deep Learning"],
    highlights: ["GPT Architecture", "From Scratch", "CSULB IS640"],
    github: "https://github.com/mansimengde17/is-640-gpt",
    featured: false,
    category: "AI/ML",
  },
];

const categoryColors: Record<string, string> = {
  "Data Engineering": "#00D4FF",
  "Machine Learning": "#8B5CF6",
  "Analytics": "#F59E0B",
  "Competition": "#EF4444",
  "AI/ML": "#10B981",
};

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const color = categoryColors[project.category] || "#00D4FF";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.23, 1, 0.32, 1] }}
      className={`glow-card rounded-2xl p-6 flex flex-col h-full`}
      style={project.featured ? { outline: `1px solid ${color}40` } : {}}
    >
      {/* Category badge */}
      <div className="flex items-center justify-between mb-4">
        <span
          className="text-xs font-mono px-2.5 py-1 rounded-full"
          style={{
            background: `${color}15`,
            border: `1px solid ${color}30`,
            color: color,
          }}
        >
          {project.category}
        </span>
        {project.featured && (
          <span
            className="text-xs font-mono px-2 py-0.5 rounded"
            style={{ background: "rgba(245, 158, 11, 0.1)", border: "1px solid rgba(245, 158, 11, 0.3)", color: "#F59E0B" }}
          >
            ★ Featured
          </span>
        )}
      </div>

      {/* Title */}
      <h3
        className="text-xl font-bold"
        style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#E8F4FD" }}
      >
        {project.title}
      </h3>
      <p className="text-sm mt-1" style={{ color: color }}>{project.subtitle}</p>

      {/* Description */}
      <p className="mt-3 text-sm leading-relaxed flex-1" style={{ color: "#6B8FAB", fontFamily: "'DM Sans', sans-serif" }}>
        {project.description}
      </p>

      {/* Highlights */}
      <div className="mt-4 flex flex-wrap gap-2">
        {project.highlights.map((h) => (
          <span
            key={h}
            className="text-xs px-2 py-0.5 rounded"
            style={{
              background: "rgba(107, 143, 171, 0.08)",
              border: "1px solid rgba(107, 143, 171, 0.2)",
              color: "#E8F4FD",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            {h}
          </span>
        ))}
      </div>

      {/* Tech stack */}
      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.tech.slice(0, 6).map((t) => (
          <span key={t} className="skill-tag text-xs">{t}</span>
        ))}
        {project.tech.length > 6 && (
          <span className="skill-tag text-xs">+{project.tech.length - 6}</span>
        )}
      </div>

      {/* Footer */}
      <div className="mt-5 pt-4 flex items-center justify-between" style={{ borderTop: "1px solid rgba(0, 212, 255, 0.1)" }}>
        <div className="flex items-center gap-3">
          {project.stars && (
            <span className="flex items-center gap-1 text-xs" style={{ color: "#6B8FAB" }}>
              <Star size={12} /> {project.stars}
            </span>
          )}
        </div>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm font-medium transition-colors duration-150"
          style={{ color: "#6B8FAB" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#00D4FF")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#6B8FAB")}
        >
          <Github size={16} />
          View Code
        </a>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 relative" style={{ background: "#0D1B2A" }}>
      <div className="section-divider max-w-4xl mb-16" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="section-label">// 03. projects</span>
          <h2
            className="mt-3 text-4xl lg:text-5xl font-bold"
            style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#E8F4FD" }}
          >
            Things I've{" "}
            <span className="gradient-text">Built & Shipped</span>
          </h2>
          <p className="mt-4 text-base max-w-2xl" style={{ color: "#6B8FAB", fontFamily: "'DM Sans', sans-serif" }}>
            From production data pipelines handling millions of events to ML models predicting fraud and health outcomes.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-10 text-center"
        >
          <a
            href="https://github.com/mansimengde17"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cyber inline-flex"
          >
            <Github size={16} />
            View All on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}

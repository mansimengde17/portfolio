/*
 * MIDNIGHT DATA LAB — Certifications Section
 * Amber glow cards with certification badges
 */
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Award, CheckCircle } from "lucide-react";

const certifications = [
  {
    name: "AWS Certified Solutions Architect – Professional",
    issuer: "Amazon Web Services",
    code: "SAP-C02",
    year: "2024",
    icon: "☁️",
    color: "#F59E0B",
    description: "Advanced cloud architecture design, high availability, fault tolerance, and cost optimization across AWS services.",
    link: "https://www.linkedin.com/in/mansi-mengde-b5b2951a2/",
    featured: true,
  },
  {
    name: "Certified Data Scientist",
    issuer: "Professional Certification",
    code: "CDS",
    year: "2023",
    icon: "🔬",
    color: "#8B5CF6",
    description: "Data science methodologies, statistical analysis, machine learning, and data-driven decision making.",
    link: "https://www.linkedin.com/in/mansi-mengde-b5b2951a2/",
    featured: false,
  },
  {
    name: "DevOps Development",
    issuer: "Professional Certification",
    code: "DevOps",
    year: "2023",
    icon: "⚙️",
    color: "#10B981",
    description: "CI/CD pipelines, containerization with Docker, infrastructure as code with Terraform, and automated deployments.",
    link: "https://www.linkedin.com/in/mansi-mengde-b5b2951a2/",
    featured: false,
  },
  {
    name: "jQuery Course",
    issuer: "Professional Certification",
    code: "jQuery",
    year: "2022",
    icon: "💻",
    color: "#00D4FF",
    description: "JavaScript library for DOM manipulation, event handling, animations, and AJAX interactions.",
    link: "https://www.linkedin.com/in/mansi-mengde-b5b2951a2/",
    featured: false,
  },
  {
    name: "Significance of Data Structures in IT",
    issuer: "Professional Certification",
    code: "DSA",
    year: "2022",
    icon: "🧮",
    color: "#EF4444",
    description: "Fundamental data structures, algorithms, time complexity analysis, and their practical applications in software engineering.",
    link: "https://www.linkedin.com/in/mansi-mengde-b5b2951a2/",
    featured: false,
  },
  {
    name: "All Builders Welcome Grant",
    issuer: "AWS re:Inforce 2025",
    code: "AWS Grant",
    year: "2025",
    icon: "🏆",
    color: "#F59E0B",
    description: "Selected as one of ~50 early career engineers nationally for the AWS All Builders Welcome Grant at re:Inforce 2025.",
    link: "https://www.linkedin.com/in/mansi-mengde-b5b2951a2/",
    featured: true,
  },
];

export default function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certifications" className="py-24 relative" style={{ background: "#0D1B2A" }}>
      <div className="section-divider max-w-4xl mb-16" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="section-label">// 05. certifications</span>
          <h2
            className="mt-3 text-4xl lg:text-5xl font-bold"
            style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#E8F4FD" }}
          >
            Credentials &{" "}
            <span className="amber-gradient-text">Certifications</span>
          </h2>
          <p className="mt-4 text-base max-w-2xl" style={{ color: "#6B8FAB", fontFamily: "'DM Sans', sans-serif" }}>
            Verified expertise across cloud architecture, data science, and software engineering.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="cert-badge flex flex-col h-full group"
            >
              {/* Header */}
              <div className="flex items-start gap-3">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                  style={{ background: `${cert.color}15`, border: `1px solid ${cert.color}30` }}
                >
                  {cert.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span
                      className="text-xs font-mono px-1.5 py-0.5 rounded"
                      style={{
                        background: `${cert.color}15`,
                        border: `1px solid ${cert.color}30`,
                        color: cert.color,
                      }}
                    >
                      {cert.code}
                    </span>
                    {cert.featured && (
                      <CheckCircle size={14} style={{ color: "#F59E0B" }} />
                    )}
                  </div>
                  <h3
                    className="mt-1.5 font-bold text-sm leading-tight"
                    style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#E8F4FD" }}
                  >
                    {cert.name}
                  </h3>
                </div>
              </div>

              {/* Issuer & year */}
              <div className="mt-3 flex items-center justify-between">
                <span className="text-xs" style={{ color: cert.color }}>{cert.issuer}</span>
                <span
                  className="text-xs font-mono"
                  style={{ color: "#6B8FAB" }}
                >
                  {cert.year}
                </span>
              </div>

              {/* Description */}
              <p className="mt-2 text-xs leading-relaxed flex-1" style={{ color: "#6B8FAB", fontFamily: "'DM Sans', sans-serif" }}>
                {cert.description}
              </p>

              {/* Link */}
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex items-center gap-1.5 text-xs transition-colors duration-150"
                style={{ color: "#6B8FAB" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = cert.color)}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#6B8FAB")}
              >
                <ExternalLink size={12} />
                View on LinkedIn
              </a>
            </motion.div>
          ))}
        </div>

        {/* AWS Badge highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7 }}
          className="mt-10 glow-card rounded-2xl p-6 flex flex-col md:flex-row items-center gap-6"
          style={{ borderColor: "rgba(245, 158, 11, 0.3)" }}
        >
          <div
            className="w-20 h-20 rounded-2xl flex items-center justify-center text-4xl flex-shrink-0"
            style={{ background: "rgba(245, 158, 11, 0.1)", border: "1px solid rgba(245, 158, 11, 0.3)" }}
          >
            ☁️
          </div>
          <div>
            <div className="flex items-center gap-2">
              <Award size={16} style={{ color: "#F59E0B" }} />
              <span className="text-xs font-mono" style={{ color: "#F59E0B" }}>AWS CERTIFIED</span>
            </div>
            <h3
              className="mt-1 text-xl font-bold"
              style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#E8F4FD" }}
            >
              AWS Solutions Architect – Professional (SAP-C02)
            </h3>
            <p className="mt-1 text-sm" style={{ color: "#6B8FAB", fontFamily: "'DM Sans', sans-serif" }}>
              The highest-level AWS architecture certification, validating expertise in designing distributed systems,
              multi-tier architectures, and enterprise cloud solutions on AWS.
            </p>
          </div>
          <a
            href="https://www.linkedin.com/in/mansi-mengde-b5b2951a2/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cyber flex-shrink-0 text-sm"
            style={{ borderColor: "#F59E0B", color: "#F59E0B" }}
          >
            <ExternalLink size={14} />
            Verify
          </a>
        </motion.div>
      </div>
    </section>
  );
}

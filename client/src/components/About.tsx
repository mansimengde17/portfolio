/*
 * MIDNIGHT DATA LAB — About Section
 * Split layout: text left, data pipeline art right
 */
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, GraduationCap, Briefcase, Award } from "lucide-react";

const highlights = [
  { icon: <MapPin size={16} />, text: "Los Angeles, CA" },
  { icon: <GraduationCap size={16} />, text: "M.S. Information Systems, CSULB '26" },
  { icon: <Briefcase size={16} />, text: "4+ Years Production Experience" },
  { icon: <Award size={16} />, text: "AWS Certified (SAP-C02)" },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative" style={{ background: "#050A14" }}>
      <div className="section-divider max-w-4xl mb-16" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <span className="section-label">// 01. about me</span>
              <h2
                className="mt-3 text-4xl lg:text-5xl font-bold"
                style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#E8F4FD" }}
              >
                Building Data Systems{" "}
                <span className="gradient-text">That Scale</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-6 space-y-4 text-base leading-relaxed"
              style={{ color: "#6B8FAB", fontFamily: "'DM Sans', sans-serif" }}
            >
              <p>
                Most data engineers inherit pipelines. I have built them from scratch under
                conditions where the data does not wait for you. I design and ship production
                data pipelines, ETL systems, and BI infrastructure — the kind that runs at{" "}
                <span style={{ color: "#00D4FF" }}>millions of events per day</span> and that
                operations teams, security analysts, and executives actually rely on.
              </p>
              <p>
                At <span style={{ color: "#E8F4FD" }}>AtkinsRéalis</span>, I wrote Python and SQL
                pipelines ingesting 5M+ telemetry events daily, built AWS Lambda and API Gateway
                detection frameworks aligned to NIST and CIS benchmarks, and cut investigation time
                by 30% through automated Grafana monitoring.
              </p>
              <p>
                At <span style={{ color: "#E8F4FD" }}>CSULB</span>, I built a Power BI and
                PostgreSQL analytics platform serving institutional stakeholders, with full RBAC,
                PII and FERPA compliance, and query optimization that dropped latency by 45%.
              </p>
              <p>
                The security engineering background is deliberate. I understand what happens
                downstream when data quality fails, access controls are wrong, or pipelines drop
                events silently.{" "}
                <span style={{ color: "#E8F4FD" }}>I build accordingly.</span>
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3"
            >
              {highlights.map(({ icon, text }, i) => (
                <motion.div
                  key={text}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.08 }}
                  className="flex items-center gap-3 glow-card rounded-lg p-3"
                >
                  <span style={{ color: "#00D4FF" }}>{icon}</span>
                  <span className="text-sm" style={{ color: "#E8F4FD", fontFamily: "'DM Sans', sans-serif" }}>
                    {text}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right: Data pipeline art + education */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
            className="space-y-6"
          >
            {/* Pipeline art */}
            <div className="glow-card rounded-2xl overflow-hidden" style={{ height: "240px" }}>
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663753984391/cDgtwTJsWKHZodyaYRSVef/data-pipeline-art-EMRP6mFhEm26UwZXAUspRq.webp"
                alt="Data Pipeline Visualization"
                className="w-full h-full object-cover"
              />
              <div
                className="absolute inset-0 flex items-end p-4"
                style={{ background: "linear-gradient(to top, rgba(5,10,20,0.8) 0%, transparent 60%)" }}
              >
                <span className="text-xs font-mono" style={{ color: "#00D4FF" }}>
                  // production data pipeline — 5M events/day
                </span>
              </div>
            </div>

            {/* Education cards */}
            <div className="space-y-3">
              <p className="section-label">// education</p>
              {[
                {
                  degree: "M.S. Information Systems",
                  school: "California State University, Long Beach",
                  period: "Aug 2024 – May 2026",
                  icon: "🎓",
                },
                {
                  degree: "B.E. Information Technology",
                  school: "I Square IT (IIIT Pune)",
                  period: "Dec 2021 – Jul 2024",
                  icon: "🏛️",
                },
                {
                  degree: "Diploma, Information Technology",
                  school: "SVERI College of Engineering",
                  period: "Jun 2018 – Aug 2021",
                  icon: "📚",
                },
              ].map((edu, i) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, y: 15 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="glow-card rounded-xl p-4 flex gap-4 items-start"
                >
                  <span className="text-2xl">{edu.icon}</span>
                  <div>
                    <p className="font-semibold text-sm" style={{ color: "#E8F4FD", fontFamily: "'Space Grotesk', sans-serif" }}>
                      {edu.degree}
                    </p>
                    <p className="text-xs mt-0.5" style={{ color: "#00D4FF" }}>{edu.school}</p>
                    <p className="text-xs mt-0.5" style={{ color: "#6B8FAB", fontFamily: "'JetBrains Mono', monospace" }}>
                      {edu.period}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

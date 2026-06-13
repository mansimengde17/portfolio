/*
 * MIDNIGHT DATA LAB — Awards & Achievements Section
 * Amber glow cards with awards background
 */
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, Star, Zap } from "lucide-react";

const awards = [
  {
    title: "All Builders Welcome Grant",
    org: "AWS re:Inforce 2025",
    year: "2025",
    icon: "🏆",
    color: "#F59E0B",
    description:
      "Selected as one of ~50 early career engineers nationally for the AWS All Builders Welcome Grant. Deployed serverless data pipelines and built AI-augmented anomaly detection models on Amazon SageMaker + Bedrock within a zero-trust, compliance-first cloud architecture.",
    impact: "~50 engineers selected nationally",
    featured: true,
  },
  {
    title: "SoCal Datathon Winner",
    org: "SoCal Datathon — Alteryx",
    year: "2025",
    icon: "🥇",
    color: "#F59E0B",
    description:
      "Won the SoCal Datathon competition using Alteryx for advanced data analysis and visualization. Applied machine learning and data science techniques to solve real-world challenges in a competitive environment.",
    impact: "1st Place — Alteryx Award",
    featured: true,
  },
  {
    title: "1st Ranker — Hackathon Winner",
    org: "Code FIESTA",
    year: "2023",
    icon: "🥇",
    color: "#00D4FF",
    description:
      "Ranked 1st in the Code FIESTA hackathon competition. Demonstrated exceptional problem-solving, rapid prototyping, and technical execution under time pressure.",
    impact: "1st Place",
    featured: true,
  },
  {
    title: "ITSC Committee Chairperson Award",
    org: "Information Technology Student Committee",
    year: "2023",
    icon: "🎖️",
    color: "#8B5CF6",
    description:
      "Recognized for outstanding leadership and contributions as Chairperson of the Information Technology Student Committee. Led initiatives, organized events, and mentored fellow students.",
    impact: "Leadership Recognition",
    featured: false,
  },
];

export default function Awards() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="awards"
      className="py-24 relative overflow-hidden"
      style={{ background: "#050A14" }}
    >
      {/* Background art */}
      <div
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/310519663753984391/cDgtwTJsWKHZodyaYRSVef/awards-bg-AHsmLxrkbx5fnvxGMQCNRQ.webp)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div
        className="absolute inset-0 z-0"
        style={{ background: "linear-gradient(135deg, rgba(5,10,20,0.95) 0%, rgba(5,10,20,0.85) 100%)" }}
      />

      <div className="section-divider max-w-4xl mb-16 relative z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="section-label">// 06. honors & awards</span>
          <h2
            className="mt-3 text-4xl lg:text-5xl font-bold"
            style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#E8F4FD" }}
          >
            Recognition &{" "}
            <span className="amber-gradient-text">Achievements</span>
          </h2>
          <p className="mt-4 text-base max-w-2xl" style={{ color: "#6B8FAB", fontFamily: "'DM Sans', sans-serif" }}>
            Awards, hackathon wins, and recognition from the industry and academic community.
          </p>
        </motion.div>

        {/* Featured awards - large cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {awards.filter(a => a.featured).map((award, i) => (
            <motion.div
              key={award.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="amber-card rounded-2xl p-6 relative overflow-hidden"
            >
              {/* Glow effect */}
              <div
                className="absolute top-0 right-0 w-32 h-32 opacity-10 rounded-full blur-2xl"
                style={{ background: award.color }}
              />

              <div className="flex items-start gap-4">
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center text-3xl flex-shrink-0"
                  style={{ background: `${award.color}15`, border: `1px solid ${award.color}30` }}
                >
                  {award.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <Trophy size={14} style={{ color: award.color }} />
                    <span className="text-xs font-mono" style={{ color: award.color }}>
                      {award.impact}
                    </span>
                  </div>
                  <h3
                    className="mt-1.5 text-xl font-bold"
                    style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#E8F4FD" }}
                  >
                    {award.title}
                  </h3>
                  <p className="text-sm mt-0.5" style={{ color: award.color }}>{award.org}</p>
                </div>
                <span
                  className="text-xs font-mono flex-shrink-0"
                  style={{ color: "#6B8FAB" }}
                >
                  {award.year}
                </span>
              </div>

              <p className="mt-4 text-sm leading-relaxed" style={{ color: "#6B8FAB", fontFamily: "'DM Sans', sans-serif" }}>
                {award.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Other awards */}
        <div className="grid md:grid-cols-2 gap-5">
          {awards.filter(a => !a.featured).map((award, i) => (
            <motion.div
              key={award.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
              className="glow-card rounded-xl p-5 flex gap-4 items-start"
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center text-xl flex-shrink-0"
                style={{ background: `${award.color}15`, border: `1px solid ${award.color}30` }}
              >
                {award.icon}
              </div>
              <div>
                <h3
                  className="font-bold text-sm"
                  style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#E8F4FD" }}
                >
                  {award.title}
                </h3>
                <p className="text-xs mt-0.5" style={{ color: award.color }}>{award.org}</p>
                <p className="text-xs mt-2 leading-relaxed" style={{ color: "#6B8FAB", fontFamily: "'DM Sans', sans-serif" }}>
                  {award.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-10 amber-card rounded-2xl p-6 flex flex-wrap justify-around gap-6"
        >
          {[
            { icon: <Trophy size={20} />, value: "2x", label: "Hackathon Winner" },
            { icon: <Star size={20} />, value: "AWS", label: "Grant Recipient" },
            { icon: <Zap size={20} />, value: "4+", label: "Industry Awards" },
          ].map(({ icon, value, label }) => (
            <div key={label} className="flex items-center gap-3">
              <span style={{ color: "#F59E0B" }}>{icon}</span>
              <div>
                <div className="text-2xl font-bold" style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#F59E0B" }}>
                  {value}
                </div>
                <div className="text-xs" style={{ color: "#6B8FAB" }}>{label}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

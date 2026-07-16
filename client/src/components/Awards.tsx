/*
 * PORTFOLIO — Honors & Awards Section
 * Data from Honors&Awards.docx — correct names, dates, issuers, photos
 * No emojis, professional neutral palette, photos not cropped
 */
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const AWARDS = [
  {
    title: "Cloud Security Research Fellowship",
    subtitle: "AWS All Builders Welcome Grant at AWS re:Invent 2025",
    issuer: "Amazon Web Services",
    date: "December 2025",
    location: "Las Vegas, NV",
    description: "Selected as an All Builders Welcome Grant Recipient at AWS re:Invent 2025, a global conference, to present research on cloud security, AI driven threat detection, and resilience engineering. Engaged in labs exploring AI augmented SOC workflows, identity protection, and zero trust automation. Built and deployed an AI augmented threat detection model using Amazon SageMaker and Bedrock, and a serverless incident response architecture with AWS Lambda, API Gateway, and CloudWatch, automating detection to mitigation pipelines and reducing triage time by 40%.",
    photo: "assets/aws-reinvent-group_3a85b289.jpeg",
    photoAlt: "Mansi Mengde and team at AWS re:Invent 2025, Las Vegas",
    photoCaption: "AWS re:Invent 2025, Las Vegas",
    color: "#FF9900",
    tag: "AWS",
  },
  {
    title: "All Builders Welcome Grant",
    subtitle: "AWS re:Inforce 2025",
    issuer: "Amazon Web Services",
    date: "June 2025",
    location: "Philadelphia, PA",
    description: "Selected from a competitive pool of applicants for the All Builders Welcome Grant, awarded to emerging talent in cloud and cybersecurity. As a grant recipient, participated in AWS re:Inforce 2025, a global summit focused on cloud security innovation, threat detection, and AI enhanced defense. Engaged in real time security simulations, built ML models using Amazon SageMaker, and explored AI powered incident response with tools like GuardDuty and CloudTrail.",
    photo: "assets/aws-reinvent-grant_1efb973f.webp",
    photoAlt: "AWS All Builders Welcome Grant confirmation email",
    photoCaption: "AWS All Builders Welcome Grant, June 2025",
    color: "#FF9900",
    tag: "AWS",
  },
  {
    title: "SoCal Datathon Winner",
    subtitle: "2nd Place, $6,000 Prize",
    issuer: "SoCal Datathon · Alteryx · CSU Fullerton",
    date: "October 2024",
    location: "Fullerton, CA",
    description: "2nd Place Winner at the Alteryx SoCal Datathon with a $6,000 prize. Worked with the team to forecast travel demand between 2016 and 2045 using a data driven storytelling approach. Cleaned datasets in Alteryx, created impactful visualizations in Tableau, and supplemented analysis with external data from SCAG. The win was about transforming data into a compelling narrative that showcased real world implications of the findings.",
    photo: "assets/datathon-win_8d0c11a5.webp",
    photoAlt: "Mansi Mengde and team receiving the SoCal Datathon winner check at CSUF",
    photoCaption: "SoCal Datathon, CSUF, October 2024",
    color: "#C9A84C",
    tag: "Datathon",
  },
  {
    title: "1st Rank, Code FIESTA Hackathon",
    subtitle: "Code Chronicles 3.0 · Smart India Hackathon",
    issuer: "Smart India Hackathon · I Square IT",
    date: "March 2023",
    location: "India",
    description: "Secured 1st Rank at Smart India Hackathon in the prestigious Code Chronicles 3.0 during the Code Fiesta Competition. Recognized for outstanding technical innovation and problem solving in a national level competitive hackathon.",
    photo: "assets/code-fiesta-award_e29a5068.webp",
    photoAlt: "Mansi Mengde receiving the Code FIESTA Excellence Award",
    photoCaption: "Code FIESTA, 1st Rank, March 2023",
    color: "#C9A84C",
    tag: "Hackathon",
  },

];

export default function Awards() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="awards"
      ref={ref}
      style={{ padding: "6rem 0", background: "var(--charcoal)", position: "relative" }}
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: "3.5rem" }}
        >
          <span className="section-label">07. Recognition</span>
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
            Honors &amp;{" "}
            <span className="gradient-text">Awards</span>
          </h2>
        </motion.div>

        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          {AWARDS.map((award, i) => (
            <motion.div
              key={award.title}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="card-neutral"
              style={{
                padding: 0,
                overflow: "hidden",
                border: `1px solid ${award.color}20`,
              }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: i % 2 === 0 ? "1fr 360px" : "360px 1fr",
                }}
                className="awards-grid award-card-grid"
              >
                {/* Text content — always first in DOM for accessibility */}
                <div
                  style={{
                    padding: "2rem",
                    order: i % 2 === 0 ? 1 : 2,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  {/* Tag + date */}
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem", flexWrap: "wrap" }}>
                    <span
                      style={{
                        fontFamily: "'Courier New', monospace",
                        fontSize: "0.58rem",
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        color: award.color,
                        border: `1px solid ${award.color}35`,
                        padding: "2px 8px",
                        borderRadius: "2px",
                      }}
                    >
                      {award.tag}
                    </span>
                    <span
                      style={{
                        fontFamily: "'Courier New', monospace",
                        fontSize: "0.6rem",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: "var(--slate)",
                        opacity: 0.7,
                      }}
                    >
                      {award.date} · {award.location}
                    </span>
                  </div>

                  <h3
                    style={{
                      fontFamily: "'Times New Roman', Times, serif",
                      fontSize: "1.2rem",
                      fontWeight: 700,
                      color: "#F5F0E8",
                      margin: "0 0 0.3rem",
                      letterSpacing: "-0.01em",
                      lineHeight: 1.25,
                    }}
                  >
                    {award.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'Georgia', serif",
                      fontSize: "0.88rem",
                      color: award.color,
                      margin: "0 0 0.5rem",
                      fontStyle: "italic",
                    }}
                  >
                    {award.subtitle}
                  </p>
                  <p
                    style={{
                      fontFamily: "'Courier New', monospace",
                      fontSize: "0.62rem",
                      letterSpacing: "0.06em",
                      color: "var(--slate)",
                      margin: "0 0 1rem",
                      opacity: 0.7,
                    }}
                  >
                    Issued by {award.issuer}
                  </p>
                  <p
                    style={{
                      fontFamily: "'Georgia', serif",
                      fontSize: "0.88rem",
                      color: "var(--slate)",
                      lineHeight: 1.75,
                      margin: 0,
                    }}
                  >
                    {award.description}
                  </p>
                </div>

                {/* Photo */}
                <div
                  style={{
                    order: i % 2 === 0 ? 2 : 1,
                    position: "relative",
                    overflow: "hidden",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "rgba(0,0,0,0.3)",
                    minHeight: "320px",
                  }}
                >
                  <img
                    src={award.photo}
                    alt={award.photoAlt}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                      objectPosition: "center",
                      display: "block",
                      maxHeight: "420px",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: `linear-gradient(${i % 2 === 0 ? "to right" : "to left"}, rgba(13,17,23,0.25) 0%, transparent 50%)`,
                      pointerEvents: "none",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      bottom: "0.75rem",
                      left: "0.75rem",
                      right: "0.75rem",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'Courier New', monospace",
                        fontSize: "0.58rem",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: "rgba(245,240,232,0.7)",
                        background: "rgba(13,17,23,0.6)",
                        padding: "3px 8px",
                        borderRadius: "2px",
                      }}
                    >
                      {award.photoCaption}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

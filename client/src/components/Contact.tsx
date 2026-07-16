/*
 * PORTFOLIO — Contact Section
 * Professional neutral palette, no emojis, calendar + email + phone
 */
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Phone, Calendar, Github, Linkedin, Send, MapPin, ArrowRight } from "lucide-react";

const CALENDLY_URL = "https://calendly.com/mansimengde17/15min";

const contactOptions = [
  {
    icon: <Calendar size={20} />,
    title: "Book a 15 Minute Call",
    description: "Pick a slot on the live calendar below",
    action: "Book Now",
    href: CALENDLY_URL,
    featured: true,
  },
  {
    icon: <Phone size={20} />,
    title: "Connect on a Call",
    description: "Call directly at +1 (562) 738-8473",
    action: "Call Now",
    href: "tel:+15627388473",
    featured: false,
  },
  {
    icon: <Mail size={20} />,
    title: "Send an Email",
    description: "mansimengde17@gmail.com",
    action: "Compose Email",
    href: "mailto:mansimengde17@gmail.com",
    featured: false,
  },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.open(`mailto:mansimengde17@gmail.com?subject=${subject}&body=${body}`);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const inputStyle = {
    width: "100%",
    padding: "0.75rem 1rem",
    background: "rgba(11, 14, 34, 0.8)",
    border: "1px solid rgba(139, 92, 246, 0.18)",
    borderRadius: "12px",
    color: "#F2F5FF",
    fontFamily: "'Inter', system-ui, sans-serif",
    fontSize: "0.97rem",
    outline: "none",
    transition: "border-color 150ms ease",
  };

  return (
    <section id="contact" ref={ref} style={{ padding: "6rem 0", background: "var(--charcoal)" }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: "3.5rem" }}
        >
          <span className="section-label">08. Contact</span>
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
            Let's{" "}
            <span className="gradient-text">Get in Touch</span>
          </h2>
          <p style={{ marginTop: "0.75rem", maxWidth: "520px", color: "var(--slate)", fontFamily: "'Inter', system-ui, sans-serif", fontSize: "1rem", lineHeight: 1.75 }}>
            If you are building AI systems, data platforms or production software at a company
            doing something meaningful, I want to hear about the hard problems. Book 15 minutes
            on the live calendar and let us talk.
          </p>
        </motion.div>

        <div className="contact-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "start" }}>
          {/* Left: Contact options */}
          <div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "2rem" }}>
              {contactOptions.map((opt, i) => (
                <motion.a
                  key={opt.title}
                  href={opt.href}
                  target={opt.href.startsWith("http") ? "_blank" : undefined}
                  rel={opt.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: i * 0.1 }}
                  className={opt.featured ? "card-gold" : "card-neutral"}
                  style={{
                    padding: "1.25rem 1.5rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    textDecoration: "none",
                    transition: "transform 180ms ease, border-color 180ms ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = "translateX(4px)")}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "translateX(0)")}
                >
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: "rgba(139, 92, 246, 0.08)",
                      border: "1px solid rgba(139, 92, 246, 0.2)",
                      borderRadius: "12px",
                      color: "var(--gold)",
                      flexShrink: 0,
                    }}
                  >
                    {opt.icon}
                  </div>
                  <div style={{ flex: 1 }}>
                    <h4 style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif", fontSize: "0.95rem", fontWeight: 700, color: "#F2F5FF", margin: "0 0 0.15rem" }}>
                      {opt.title}
                    </h4>
                    <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: "0.92rem", color: "var(--slate)", margin: 0 }}>
                      {opt.description}
                    </p>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.3rem", fontFamily: "'JetBrains Mono', monospace", fontSize: "0.74rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--gold)", flexShrink: 0 }}>
                    {opt.action}
                    <ArrowRight size={12} />
                  </div>
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4 }}
              style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.5rem" }}
            >
              <MapPin size={13} style={{ color: "var(--gold)" }} />
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.78rem", letterSpacing: "0.1em", color: "var(--slate)" }}>
                San Francisco Bay Area, CA. Open to Remote and Hybrid
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5 }}
              style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}
            >
              {[
                { icon: <Github size={16} />, href: "https://github.com/mansimengde17", label: "GitHub" },
                { icon: <Linkedin size={16} />, href: "https://www.linkedin.com/in/mansi-mengde-b5b2951a2/", label: "LinkedIn" },
              ].map(({ icon, href, label }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost"
                  style={{ fontSize: "0.78rem", padding: "0.45rem 1rem", gap: "0.4rem" }}
                >
                  {icon}
                  {label}
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right: Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="card-neutral"
            style={{ padding: "2rem" }}
          >
            <h3 style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif", fontSize: "1.1rem", fontWeight: 700, color: "#F2F5FF", marginBottom: "1.5rem", letterSpacing: "-0.01em" }}>
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              <div>
                <label style={{ display: "block", fontFamily: "'JetBrains Mono', monospace", fontSize: "0.74rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "0.4rem" }}>
                  Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your name"
                  style={inputStyle}
                  onFocus={(e) => (e.target.style.borderColor = "rgba(139, 92, 246, 0.5)")}
                  onBlur={(e) => (e.target.style.borderColor = "rgba(139, 92, 246, 0.18)")}
                />
              </div>
              <div>
                <label style={{ display: "block", fontFamily: "'JetBrains Mono', monospace", fontSize: "0.74rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "0.4rem" }}>
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your@email.com"
                  style={inputStyle}
                  onFocus={(e) => (e.target.style.borderColor = "rgba(139, 92, 246, 0.5)")}
                  onBlur={(e) => (e.target.style.borderColor = "rgba(139, 92, 246, 0.18)")}
                />
              </div>
              <div>
                <label style={{ display: "block", fontFamily: "'JetBrains Mono', monospace", fontSize: "0.74rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "0.4rem" }}>
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about the role or project..."
                  style={{ ...inputStyle, resize: "none" }}
                  onFocus={(e) => (e.target.style.borderColor = "rgba(139, 92, 246, 0.5)")}
                  onBlur={(e) => (e.target.style.borderColor = "rgba(139, 92, 246, 0.18)")}
                />
              </div>
              <button type="submit" className="btn-primary" style={{ justifyContent: "center" }}>
                {submitted ? "Opening Email Client..." : (
                  <>
                    <Send size={14} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>

        {/* Live booking calendar */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.35, duration: 0.6 }}
          style={{ marginTop: "4rem" }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
            <Calendar size={16} style={{ color: "var(--gold)" }} />
            <h3 style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif", fontSize: "1.15rem", fontWeight: 700, color: "#F2F5FF", margin: 0, letterSpacing: "-0.01em" }}>
              Book a 15 Minute Call
            </h3>
          </div>
          <div
            className="card-neutral"
            style={{ padding: "0", overflow: "hidden", border: "1px solid rgba(139,92,246,0.2)" }}
          >
            <iframe
              src={`${CALENDLY_URL}?hide_gdpr_banner=1&background_color=0d1117&text_color=f5f0e8&primary_color=c9a84c`}
              title="Book a 15 minute call with Mansi Mengde"
              style={{ width: "100%", height: "660px", border: "none", display: "block", background: "#0B0E22" }}
              loading="lazy"
            />
          </div>
          <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: "0.8rem", color: "var(--slate)", marginTop: "0.75rem" }}>
            If the calendar does not load,{" "}
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" style={{ color: "var(--gold)" }}>
              open the booking page directly
            </a>
            .
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/*
 * MIDNIGHT DATA LAB — Contact Section
 * "Let's Get in Touch" with calendar, email, phone links
 */
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, Calendar, Github, Linkedin, Send, MapPin, ArrowRight } from "lucide-react";

const contactOptions = [
  {
    icon: <Calendar size={22} />,
    title: "Schedule a Call",
    description: "Book a 30-minute intro call to discuss opportunities",
    action: "Open Calendar",
    href: "https://calendly.com/mansimengde17",
    color: "#8B5CF6",
    primary: true,
  },
  {
    icon: <Mail size={22} />,
    title: "Send an Email",
    description: "mansimengde17@gmail.com",
    action: "Send Email",
    href: "mailto:mansimengde17@gmail.com",
    color: "#00D4FF",
    primary: false,
  },
  {
    icon: <Phone size={22} />,
    title: "Call Directly",
    description: "+1 (562) 738-8473",
    action: "Call Now",
    href: "tel:+15627388473",
    color: "#10B981",
    primary: false,
  },
];

const socialLinks = [
  {
    icon: <Github size={20} />,
    label: "GitHub",
    href: "https://github.com/mansimengde17",
    username: "@mansimengde17",
  },
  {
    icon: <Linkedin size={20} />,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mansi-mengde-b5b2951a2/",
    username: "mansi-mengde",
  },
  {
    icon: <Mail size={20} />,
    label: "Email",
    href: "mailto:mansimengde17@gmail.com",
    username: "mansimengde17@gmail.com",
  },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.open(`mailto:mansimengde17@gmail.com?subject=${subject}&body=${body}`);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden" style={{ background: "#0D1B2A" }}>
      {/* Background glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 opacity-10 blur-3xl rounded-full"
        style={{ background: "radial-gradient(circle, #00D4FF, transparent)" }}
      />

      <div className="section-divider max-w-4xl mb-16 relative z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label">// 07. contact</span>
          <h2
            className="mt-3 text-4xl lg:text-6xl font-bold"
            style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#E8F4FD" }}
          >
            Let's{" "}
            <span className="gradient-text">Get in Touch</span>
          </h2>
          <p className="mt-4 text-base max-w-2xl mx-auto" style={{ color: "#6B8FAB", fontFamily: "'DM Sans', sans-serif" }}>
            If you're working on data infrastructure at a company doing something real — autonomous vehicles,
            AI systems, or supply chain at scale — I want to hear about the hard parts.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Contact options */}
          <div className="space-y-5">
            {contactOptions.map((opt, i) => (
              <motion.a
                key={opt.title}
                href={opt.href}
                target={opt.href.startsWith("http") ? "_blank" : undefined}
                rel={opt.href.startsWith("http") ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="flex items-center gap-5 p-5 rounded-2xl group transition-all duration-200 block"
                style={{
                  background: opt.primary
                    ? `linear-gradient(135deg, ${opt.color}15, ${opt.color}08)`
                    : "rgba(13, 27, 42, 0.8)",
                  border: `1px solid ${opt.color}${opt.primary ? "40" : "20"}`,
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = `${opt.color}60`;
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 0 24px ${opt.color}15`;
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = `${opt.color}${opt.primary ? "40" : "20"}`;
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `${opt.color}15`, border: `1px solid ${opt.color}30`, color: opt.color }}
                >
                  {opt.icon}
                </div>
                <div className="flex-1">
                  <h3
                    className="font-bold text-base"
                    style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#E8F4FD" }}
                  >
                    {opt.title}
                  </h3>
                  <p className="text-sm mt-0.5" style={{ color: "#6B8FAB", fontFamily: "'DM Sans', sans-serif" }}>
                    {opt.description}
                  </p>
                </div>
                <div
                  className="flex items-center gap-1 text-sm font-medium transition-transform group-hover:translate-x-1"
                  style={{ color: opt.color }}
                >
                  {opt.action}
                  <ArrowRight size={14} />
                </div>
              </motion.a>
            ))}

            {/* Location */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-3 px-5 py-3 rounded-xl"
              style={{ background: "rgba(107, 143, 171, 0.05)", border: "1px solid rgba(107, 143, 171, 0.1)" }}
            >
              <MapPin size={16} style={{ color: "#6B8FAB" }} />
              <span className="text-sm" style={{ color: "#6B8FAB", fontFamily: "'DM Sans', sans-serif" }}>
                Los Angeles, CA · Open to Remote & Hybrid
              </span>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-3 pt-2"
            >
              {socialLinks.map(({ icon, label, href, username }) => (
                <a
                  key={href}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm transition-all duration-150"
                  style={{
                    background: "rgba(0, 212, 255, 0.06)",
                    border: "1px solid rgba(0, 212, 255, 0.15)",
                    color: "#6B8FAB",
                    fontFamily: "'DM Sans', sans-serif",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "#00D4FF";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(0, 212, 255, 0.35)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "#6B8FAB";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(0, 212, 255, 0.15)";
                  }}
                >
                  {icon}
                  <span>{username}</span>
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right: Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="glow-card rounded-2xl p-6"
          >
            <h3
              className="text-xl font-bold mb-6"
              style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#E8F4FD" }}
            >
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  className="block text-xs mb-1.5 font-mono"
                  style={{ color: "#00D4FF" }}
                >
                  name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all duration-150"
                  style={{
                    background: "rgba(5, 10, 20, 0.8)",
                    border: "1px solid rgba(0, 212, 255, 0.2)",
                    color: "#E8F4FD",
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "rgba(0, 212, 255, 0.5)")}
                  onBlur={(e) => (e.target.style.borderColor = "rgba(0, 212, 255, 0.2)")}
                />
              </div>

              <div>
                <label
                  className="block text-xs mb-1.5 font-mono"
                  style={{ color: "#00D4FF" }}
                >
                  email
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all duration-150"
                  style={{
                    background: "rgba(5, 10, 20, 0.8)",
                    border: "1px solid rgba(0, 212, 255, 0.2)",
                    color: "#E8F4FD",
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "rgba(0, 212, 255, 0.5)")}
                  onBlur={(e) => (e.target.style.borderColor = "rgba(0, 212, 255, 0.2)")}
                />
              </div>

              <div>
                <label
                  className="block text-xs mb-1.5 font-mono"
                  style={{ color: "#00D4FF" }}
                >
                  message
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about the role or project..."
                  className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all duration-150 resize-none"
                  style={{
                    background: "rgba(5, 10, 20, 0.8)",
                    border: "1px solid rgba(0, 212, 255, 0.2)",
                    color: "#E8F4FD",
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "rgba(0, 212, 255, 0.5)")}
                  onBlur={(e) => (e.target.style.borderColor = "rgba(0, 212, 255, 0.2)")}
                />
              </div>

              <button
                type="submit"
                className="btn-cyan w-full justify-center text-sm"
              >
                {submitted ? (
                  "✓ Opening Email Client..."
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </button>
            </form>

            <p className="mt-4 text-xs text-center" style={{ color: "#6B8FAB" }}>
              This will open your email client with the message pre-filled.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

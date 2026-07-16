/*
 * PORTFOLIO — Footer
 * Professional neutral, no emojis
 */
import { Github, Linkedin, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer
      style={{
        padding: "2.5rem 0",
        background: "#0B0E22",
        borderTop: "1px solid rgba(139, 92, 246, 0.08)",
      }}
    >
      <div className="container">
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1.5rem" }}>
          <div style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
            {[
              { icon: <Github size={17} />, href: "https://github.com/mansimengde17" },
              { icon: <Linkedin size={17} />, href: "https://www.linkedin.com/in/mansi-mengde-b5b2951a2/" },
              { icon: <Mail size={17} />, href: "mailto:mansimengde17@gmail.com" },
              { icon: <Phone size={17} />, href: "tel:+15627388473" },
            ].map(({ icon, href }) => (
              <a
                key={href}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                style={{ color: "var(--slate)", transition: "color 150ms ease" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--slate)")}
              >
                {icon}
              </a>
            ))}
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <span style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif", fontSize: "0.95rem", fontWeight: 700, color: "#F2F5FF" }}>
              Mansi Mengde
            </span>
            <span style={{ width: "1px", height: "12px", background: "rgba(139, 92, 246, 0.2)" }} />
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.74rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--gold)" }}>
              Data Engineer · AWS Certified
            </span>
          </div>
          <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.74rem", letterSpacing: "0.1em", color: "var(--slate)", opacity: 0.5, margin: 0 }}>
            2026. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

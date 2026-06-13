/*
 * MIDNIGHT DATA LAB — Footer
 */
import { Github, Linkedin, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="py-10 relative"
      style={{ background: "#050A14", borderTop: "1px solid rgba(0, 212, 255, 0.1)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-sm overflow-hidden">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663753984391/cDgtwTJsWKHZodyaYRSVef/logo-icon-MfLNQ99bHArveiBfNXM94K.webp"
                alt="MM"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <p className="font-bold text-sm" style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#E8F4FD" }}>
                Mansi Mengde
              </p>
              <p className="text-xs font-mono" style={{ color: "#00D4FF" }}>
                Data Engineer · AWS Certified
              </p>
            </div>
          </div>

          {/* Links */}
          <div className="flex items-center gap-4">
            {[
              { icon: <Github size={18} />, href: "https://github.com/mansimengde17" },
              { icon: <Linkedin size={18} />, href: "https://www.linkedin.com/in/mansi-mengde-b5b2951a2/" },
              { icon: <Mail size={18} />, href: "mailto:mansimengde17@gmail.com" },
              { icon: <Phone size={18} />, href: "tel:+15627388473" },
            ].map(({ icon, href }) => (
              <a
                key={href}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="p-2 rounded-lg transition-colors duration-150"
                style={{ color: "#6B8FAB" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#00D4FF")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#6B8FAB")}
              >
                {icon}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-xs" style={{ color: "#6B8FAB", fontFamily: "'JetBrains Mono', monospace" }}>
            © 2025 Mansi Mengde · Built with ❤️
          </p>
        </div>
      </div>
    </footer>
  );
}

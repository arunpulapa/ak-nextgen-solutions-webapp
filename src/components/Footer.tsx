import { Github, Linkedin, Twitter } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const services = [
    { label: "Web Applications", href: "#services" },
    { label: "Mobile Applications", href: "#services" },
    { label: "Backend APIs", href: "#services" },
    { label: "UI/UX Design", href: "#services" },
    { label: "DevOps & Deployment", href: "#services" },
  ];

  const quickLinks = [
    { label: "About Us", href: "#about" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Pricing", href: "#pricing" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="border-t border-border/40 bg-background/95">
      {/* thin top glow line */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="container mx-auto px-4 py-10">
        <div className="max-w-6xl mx-auto">
          {/* top content */}
          <div className="grid gap-10 md:grid-cols-[2fr,1fr,1fr] mb-10">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl from-primary to-secondary flex items-center justify-center shadow-md">
                  <span className="">
                    <img src={logo} alt="Logo" className="rounded-xl" />
                  </span>
                </div>
                <div>
                  <p className="text-base font-semibold">NextGen Solutions</p>
                  <p className="text-xs text-muted-foreground">
                    Product engineering & consulting
                  </p>
                </div>
              </div>

              <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
                I help teams design, build and ship reliable web & mobile
                products — from first MVP to production scale.
              </p>

              <div className="flex gap-3 mt-5">
                {/* GitHub */}
                <a
                  href="https://instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-lg border border-border/50 bg-background/60 flex items-center justify-center hover:border-primary/60 hover:bg-primary/10 transition-colors"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-lg border border-border/50 bg-background/60 flex items-center justify-center hover:border-primary/60 hover:bg-primary/10 transition-colors"
                >
                  <Github size={18} />
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/company/aknextgensolutions/"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-lg border border-border/50 bg-background/60 flex items-center justify-center hover:border-primary/60 hover:bg-primary/10 transition-colors"
                >
                  <Linkedin size={18} />
                </a>

                {/* Twitter / X */}
                <a
                  href="https://x.com/AkNextgen"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-lg border border-border/50 bg-background/60 flex items-center justify-center hover:border-primary/60 hover:bg-primary/10 transition-colors"
                >
                  <Twitter size={18} />
                </a>

                {/* Instagram */}


                {/* Gmail */}
                <a
                  href="mailto:aknextgensolutions@gmail.com"
                  className="w-9 h-9 rounded-lg border border-border/50 bg-background/60 flex items-center justify-center hover:border-primary/60 hover:bg-primary/10 transition-colors"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 13L2 6.76V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6.76L12 13zm10-9H2l10 6 10-6z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-xs font-semibold tracking-[0.15em] uppercase text-muted-foreground mb-3">
                Services
              </h3>
              <ul className="space-y-2">
                {services.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xs font-semibold tracking-[0.15em] uppercase text-muted-foreground mb-3">
                Quick Links
              </h3>
              <ul className="space-y-2">
                {quickLinks.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* bottom bar */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-5 border-t border-border/40">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} AK NextGen Solutions. All rights reserved.
            </p>
            <div className="flex gap-5 text-xs">
              <a
                href="/privacy"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

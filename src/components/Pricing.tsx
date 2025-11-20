import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Pricing = () => {
  const sectionRef = useScrollReveal();

  const plans = [
    {
      name: "Starter",
      badge: "For MVPs",
      description: "Designed for small features, prototypes and early validation.",
      note: "Typical timeline: 1–2 weeks",
      features: [
        "Up to 3 screens or features",
        "Clean UI implementation",
        "Frontend development",
        "Simple backend or mock APIs",
        "Deployment to one environment",
        "Email support during build",
        "Handover + documentation",
        "Source code ownership",
      ],
      cta: "Start Small Project",
      highlight: false,
    },
    {
      name: "Growth",
      badge: "Most Popular",
      description: "Ideal for full features, integrations and production builds.",
      note: "Typical timeline: 3–6 weeks",
      features: [
        "Full web or mobile application",
        "Custom UI/UX based on your brand",
        "Frontend + Backend development",
        "API design & integrations",
        "Authentication & role management",
        "Manual QA testing",
        "CI/CD setup",
        "Post-launch support options",
      ],
      cta: "Build Full Product",
      highlight: true,
    },
    {
      name: "Product Partner",
      badge: "Retainer",
      description: "For companies needing continuous development & improvements.",
      note: "Flexible monthly contract",
      features: [
        "Fixed hours per month",
        "Roadmap support & planning",
        "Feature development",
        "Bug fixing & improvements",
        "Performance optimization",
        "Monitoring & alerts",
        "Priority responses",
        "Weekly or bi-weekly calls",
      ],
      cta: "Start Partnership",
      highlight: false,
    },
  ];

  // Primary: go to contact section or page
  const goToContact = () => {
    const contactEl = document.getElementById("contact");
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: "smooth" });
    } else {
      // fallback if separate contact page exists
      window.location.href = "/contact";
    }
  };

  // Secondary: open WhatsApp
  const openWhatsApp = () => {
    const phone = "919123456789"; // <- replace with your number (without +)
    const text =
      "Hi, I am interested in starting a project. Please get in touch.";
    const url =
      "https://wa.me/" + phone + "?text=" + encodeURIComponent(text);
    window.open(url, "_blank");
  };

  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-4">
        <div
          ref={sectionRef}
          className="text-center max-w-3xl mx-auto mb-16 scroll-reveal"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Engagement Plans
          </h2>
          <p className="text-xl text-muted-foreground">
            Flexible collaboration designed for founders, startups and growing teams.
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            No fixed pricing — every project receives a custom quote after a free consultation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => {
            const cardRef = useScrollReveal();
            const highlight = plan.highlight;

            return (
              <div
                key={plan.name}
                ref={cardRef}
                style={{ transitionDelay: `${index * 100}ms` }}
                className={`
                  relative rounded-2xl border bg-card p-8 scroll-reveal
                  transition-all duration-300
                  hover:-translate-y-2 hover:shadow-xl hover:border-primary/40
                  ${highlight ? "ring-2 ring-primary/40 shadow-lg" : ""}
                `}
              >
                {plan.badge && (
                  <div
                    className={`
                      absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1
                      rounded-full text-[11px] font-semibold
                      ${
                        highlight
                          ? "bg-gradient-to-r from-primary to-secondary text-primary-foreground"
                          : "bg-muted text-muted-foreground border"
                      }
                    `}
                  >
                    {plan.badge}
                  </div>
                )}

                <div className="text-center mb-6 mt-2">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    {plan.description}
                  </p>
                  <p className="text-xs text-muted-foreground">{plan.note}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check
                        className="text-primary mt-1 flex-shrink-0"
                        size={16}
                      />
                      <span className="text-sm text-muted-foreground">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Primary + Secondary actions */}
                <div className="flex flex-col gap-3">
                  <Button
                    className="w-full"
                    variant={highlight ? "default" : "outline"}
                    onClick={goToContact}
                  >
                    {plan.cta}
                  </Button>

               
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12 space-y-4">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="px-8"
              onClick={goToContact}
            >
              Contact Us
            </Button>

          </div>

          <p className="text-sm text-muted-foreground">
            Tell me what you're building — you’ll receive a proposal, timeline and estimate.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

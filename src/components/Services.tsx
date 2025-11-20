import { Layers, Code, Smartphone, Server, TestTube, Rocket } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Services = () => {
  const sectionRef = useScrollReveal();
  const services = [
    {
      icon: Layers,
      title: "Design (UI/UX)",
      description: "User-centered design that converts and delights",
      features: [
        "Figma prototypes & design systems",
        "Responsive layouts for all devices",
        "Accessibility & user testing",
      ],
    },
    {
      icon: Code,
      title: "Web Development",
      description: "Modern, performant web applications",
      features: [
        "Angular & React SPA/SSR apps",
        "Progressive Web Apps (PWA)",
        "Real-time dashboards & admin panels",
      ],
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description: "Native-feel cross-platform mobile solutions",
      features: [
        "React Native & Ionic development",
        "Offline support & GPS capabilities",
        "App Store & Play Store deployment",
      ],
    },
    {
      icon: Server,
      title: "Backend & APIs",
      description: "Scalable, secure backend infrastructure",
      features: [
        "Node.js & .NET microservices",
        "RESTful & GraphQL APIs",
        "MySQL & SQL Server databases",
      ],
    },
    {
      icon: TestTube,
      title: "QA & Testing",
      description: "Comprehensive quality assurance",
      features: [
        "Automated & manual testing",
        "Performance & security audits",
        "Continuous integration testing",
      ],
    },
    {
      icon: Rocket,
      title: "DevOps & Deployment",
      description: "CI/CD pipelines & production management",
      features: [
        "AWS/Azure/GCP deployments",
        "Domain setup & SSL automation",
        "Monitoring, backups & rollback",
      ],
    },
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <div ref={sectionRef} className="text-center max-w-3xl mx-auto mb-16 scroll-reveal">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">What We Do</h2>
          <p className="text-xl text-muted-foreground">
            End-to-end services to take your product from concept to scale
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            const cardRef = useScrollReveal();
            return (
              <div
                key={service.title}
                ref={cardRef}
                className="glass-card p-6 neon-border group scroll-reveal"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4 group-hover:glow-cyan transition-all">
                  <Icon className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="text-sm text-muted-foreground flex items-start gap-2"
                    >
                      <span className="text-primary mt-1">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;

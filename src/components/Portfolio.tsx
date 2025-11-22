import { Badge } from "@/components/ui/badge";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  Users,
  CalendarClock,
  CreditCard,
  BarChart2,
  Settings,
  FileText,
  Briefcase,
  ShieldCheck,
} from "lucide-react";
import type { LucideIcon } from "lucide-react"; // ✅ important

type Module = {
  title: string;
  category: string;
  desc: string;
  icon: LucideIcon; // ✅ correct type for lucide icons
};

const modules: Module[] = [
  {
    title: "Workforce Management",
    category: "Core HR",
    desc: "Unified employee profiles, org chart, roles and departments in one place.",
    icon: Users,
  },
  {
    title: "Attendance & Shifts",
    category: "Time",
    desc: "Biometric & web check-ins, shift planning, overtime and scheduling.",
    icon: CalendarClock,
  },
  {
    title: "Payroll & Compliance",
    category: "Finance",
    desc: "Automated payroll, payslips, taxes and statutory compliance rules.",
    icon: CreditCard,
  },
  {
    title: "Performance & OKRs",
    category: "Growth",
    desc: "Goals, OKRs, reviews and 360° feedback for continuous tracking.",
    icon: BarChart2,
  },
  {
    title: "Self-Service Portal",
    category: "Employee Experience",
    desc: "Employees manage leaves, requests and documents from any device.",
    icon: FileText,
  },
  {
    title: "Recruitment & Onboarding",
    category: "Talent",
    desc: "Hiring pipeline, offer rollout and smooth digital onboarding.",
    icon: Briefcase,
  },
  {
    title: "Policy & Asset Control",
    category: "Operations",
    desc: "Track company assets and policy acknowledgements with full visibility.",
    icon: Settings,
  },
  {
    title: "Security & Audit Trail",
    category: "Security",
    desc: "Role-based access, detailed logs and complete audit-ready history.",
    icon: ShieldCheck,
  },
];

const ModuleCard = ({ module, index }: { module: Module; index: number }) => {
  const cardRef = useScrollReveal();
  const Icon = module.icon;

  return (
    <div
      ref={cardRef}
      style={{ transitionDelay: `${index * 80}ms` }}
      className="scroll-reveal h-full rounded-2xl border bg-background/95 p-4 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 flex flex-col"
    >
      <div className="flex items-start gap-2.5 mb-2.5">
        <div className="w-9 h-9 rounded-xl border flex items-center justify-center">
          {/* LucideIcon accepts size: string | number */}
          <Icon size={18} />
        </div>
        <div>
          <p className="text-[11px] uppercase tracking-wide text-primary mb-0.5">
            {module.category}
          </p>
          <h4 className="font-semibold text-sm lg:text-[15px]">
            {module.title}
          </h4>
        </div>
      </div>
      <p className="text-xs lg:text-sm text-muted-foreground leading-snug">
        {module.desc}
      </p>
    </div>
  );
};

const Portfolio = () => {
  const sectionRef = useScrollReveal();
  const mockupRef = useScrollReveal();

  return (
    <section
      id="portfolio"
      className="py-16 bg-background relative overflow-hidden"
    >
      {/* subtle decorative background */}
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute -left-32 top-10 w-72 h-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute right-0 bottom-0 w-80 h-80 rounded-full bg-cyan-500/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Top text block */}
        <div
          ref={sectionRef}
          className="scroll-reveal max-w-4xl mx-auto text-center mb-12"
        >
          <Badge variant="outline" className="mb-3">
            Our Flagship Product
          </Badge>

          <h2 className="text-3xl lg:text-4xl font-bold mb-3">
            HRM Suite – Intelligent Human Resource Management Platform
          </h2>

          <p className="text-base lg:text-lg text-muted-foreground">
            A single, unified platform that streamlines everything from hiring
            and attendance to payroll, performance and compliance – built for
            modern, fast-growing teams.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-4 text-xs lg:text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              60% faster payroll processing
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              40% lower HR admin workload
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              Real-time workforce visibility
            </span>
          </div>
        </div>

        {/* Main layout */}
        <div className="grid lg:grid-cols-[1.05fr,1.4fr] gap-10 items-stretch">
          {/* Left: product mockup */}
          <div
            ref={mockupRef}
            className="scroll-reveal flex items-center justify-center lg:justify-start"
          >
            <div className="w-full max-w-lg rounded-3xl border border-border bg-card shadow-xl overflow-hidden transition-colors">
              {/* Window header */}
              <div className="h-10 bg-gradient-to-r from-primary/80 to-cyan-500/70 dark:from-primary/80 dark:to-primary/50 flex items-center px-4">
                <div className="flex gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-red-400/90 dark:bg-red-400" />
                  <span className="w-2 h-2 rounded-full bg-yellow-400/90 dark:bg-yellow-300" />
                  <span className="w-2 h-2 rounded-full bg-green-400/90 dark:bg-green-400" />
                </div>
                <span className="ml-3 text-[11px] text-primary-foreground/90 tracking-wide">
                  HRM Suite • Live Dashboard
                </span>
              </div>

              {/* Animated loading skeleton */}
              <div className="p-5 space-y-4">
                {/* top row: chart + stats */}
                <div className="flex gap-4">
                  <div className="flex-1 h-24 rounded-xl bg-muted/70 dark:bg-muted/60 animate-pulse" />

                  <div className="flex-1 space-y-2.5">
                    <div
                      className="h-5 rounded-md bg-muted/70 dark:bg-muted/60 animate-pulse"
                      style={{ animationDelay: "0.1s" }}
                    />
                    <div
                      className="h-5 rounded-md bg-muted/70 dark:bg-muted/60 animate-pulse"
                      style={{ animationDelay: "0.2s" }}
                    />
                    <div
                      className="h-5 rounded-md bg-muted/70 dark:bg-muted/60 animate-pulse"
                      style={{ animationDelay: "0.3s" }}
                    />
                  </div>
                </div>

                {/* bottom grid: quick widgets */}
                <div className="grid grid-cols-4 gap-3">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <div
                      key={i}
                      className="h-9 rounded-lg bg-muted/60 dark:bg-muted/50 animate-pulse"
                      style={{ animationDelay: `${0.05 * i}s` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right: modules grid */}
          <div className="lg:pl-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
              {modules.map((module, index) => (
                <ModuleCard key={module.title} module={module} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

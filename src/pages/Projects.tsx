// src/pages/Projects.tsx
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { useScrollReveal } from "@/hooks/useScrollReveal";

type Project = {
  title: string;
  industry: string;
  stack: string[];
  problem: string;
  solution: string;
  impact: string[];
};

const projects: Project[] = [
  {
    title: "HRM Suite",
    industry: "Human Resource Management",
    stack: ["Angular", "ASP.NET Core", "SQL", "Azure"],
    problem:
      "Manual attendance, payroll mismatches, and fragmented employee data.",
    solution:
      "Centralized HR system with attendance tracking, leave management, payroll automation, and analytics dashboard.",
    impact: [
      "60% faster payroll processing",
      "Unified employee lifecycle management",
      "Reduced admin workload by 40%",
    ],
  },
  {
    title: "CRM Workflow Engine",
    industry: "Customer Relationship Management",
    stack: ["React", "Node.js", "MongoDB", "AWS"],
    problem:
      "No unified pipeline for lead tracking, communication, and deal flow.",
    solution:
      "End-to-end CRM with automated pipelines, activity logging, reminders, and communication insights.",
    impact: [
      "3x improvement in lead conversion",
      "Real-time pipeline visibility",
      "Automated follow-ups boosting productivity",
    ],
  },
  {
    title: "TaxOps Admin Dashboard",
    industry: "Tax & Finance",
    stack: ["Vue.js", "Node.js", "PostgreSQL", "Docker"],
    problem:
      "Clients lacked visibility into tax filing status, document uploads, refunds, and payment history.",
    solution:
      "A secure dashboard with client management, filing workflows, auto-generated reports, and compliance tracking.",
    impact: [
      "Centralized operations for 10,000+ filings",
      "Instant audit trails",
      "Admin efficiency improved by 55%",
    ],
  },
  {
    title: "Icontax Client Suite",
    industry: "Tax Services Platform",
    stack: ["Next.js", "Express", "MySQL", "AWS S3"],
    problem:
      "Clients relied on calls/emails for tax queries, document sharing, and status updates.",
    solution:
      "A self-service portal with dashboards, uploads, notifications, and secure messaging.",
    impact: [
      "80% reduction in client support overhead",
      "Real-time status updates",
      "Improved customer experience & visibility",
    ],
  },
  {
    title: "AI Image Generator",
    industry: "AI & Creative Tools",
    stack: ["React", "Python FastAPI", "Stable Diffusion", "GPU Cloud"],
    problem:
      "Businesses needed a fast, on-demand way to generate images for marketing and branding.",
    solution:
      "AI-powered image generator with prompts, styles, variations, and HD export.",
    impact: [
      "200k+ images generated",
      "Reduced design workload by 70%",
      "Instant creative workflows",
    ],
  },
  {
    title: "AI Chat Board",
    industry: "AI Productivity",
    stack: ["Next.js", "OpenAI", "Redis", "Firebase"],
    problem:
      "Teams needed an intelligent assistant for chat, summaries, and automation.",
    solution:
      "Smart AI chat board with memory, threads, file reading, and automated actions.",
    impact: [
      "50% faster communication",
      "AI summaries reduce meeting time",
      "Used daily by 5000+ users",
    ],
  },
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const cardRef = useScrollReveal();

  return (
    <div
      ref={cardRef}
      style={{ transitionDelay: `${index * 100}ms` }}
      className="
        p-6 rounded-2xl border bg-card scroll-reveal
        transition-all duration-300
        hover:shadow-xl hover:-translate-y-2 hover:border-primary/40
        hover:bg-black hover:bg-opacity-40 hover:scale-[1.02]
      "
    >
      <div className="space-y-4">
        {/* Industry Tag + Title */}
        <div>
          <Badge variant="outline" className="mb-3 text-xs">
            {project.industry}
          </Badge>
          <h3 className="text-2xl font-semibold mb-2">
            {project.title}
          </h3>
        </div>

        {/* Stack Badges */}
        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <Badge key={tech} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>

        {/* Problem / Solution / Impact */}
        <div className="space-y-3">
          <div>
            <h4 className="text-sm font-semibold text-primary mb-1">
              Challenge
            </h4>
            <p className="text-sm text-muted-foreground">
              {project.problem}
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-primary mb-1">
              Solution
            </h4>
            <p className="text-sm text-muted-foreground">
              {project.solution}
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-2">Impact</h4>
            <ul className="space-y-1">
              {project.impact.map((metric) => (
                <li
                  key={metric}
                  className="text-sm text-muted-foreground flex items-start gap-2"
                >
                  <span className="text-primary mt-1">•</span>
                  {metric}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const sectionRef = useScrollReveal();

  // Auto scroll to top when visiting /projects
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 pt-24 pb-20 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Hero / heading */}
          <div
            ref={sectionRef}
            className="max-w-3xl mb-12 scroll-reveal"
          >
            <p className="text-sm text-primary mb-2">Projects</p>
            <h1 className="text-3xl lg:text-4xl font-bold mb-3">
              Selected projects & product work
            </h1>
            <p className="text-muted-foreground text-sm lg:text-base">
              Real implementations of HR, CRM, tax and AI platforms we have
              architected, built and shipped — focused on solving concrete
              business problems with measurable impact.
            </p>
          </div>

          {/* Projects grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
              />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Projects;

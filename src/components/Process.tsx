import React from "react";
import {
  Search,
  Palette,
  Code2,
  TestTube2,
  Rocket,
  DollarSign,
  Clock,
  Users,
  UserCheck,
  RefreshCw,
} from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Process: React.FC = () => {
  const sectionRef = useScrollReveal();

  const steps = [
    {
      title: "Discover",
      description:
        "We listen first — clarify goals, constraints and success metrics, then define a pragmatic plan and sensible platform choices.",
      accent: "from-emerald-400 to-teal-400",
    },
    {
      title: "Design",
      description:
        "Fast, testable designs and a lightweight design system so decisions are quick and the product stays consistent as it grows.",
      accent: "from-violet-400 to-pink-400",
    },
    {
      title: "Build",
      description:
        "Short, focused sprints with clear ownership, code review and regular demonstrations so you always see progress and shape the outcome.",
      accent: "from-sky-400 to-indigo-400",
    },
    {
      title: "Test",
      description:
        "Automated checks and targeted manual testing that catches the important problems early — performance, usability and security focused.",
      accent: "from-yellow-400 to-amber-500",
    },
    {
      title: "Deploy & Run",
      description:
        "Safe releases, production monitoring and a simple operations plan so the product stays healthy and predictable after launch.",
      accent: "from-rose-400 to-red-400",
    },
  ];

  const engagementModels = [
    {
      title: "Fixed Price",
      description:
        "We agree a clear scope and timeline up front — good for well-defined small-to-medium projects.",
      Icon: DollarSign,
    },
    {
      title: "Time & Material",
      description:
        "Flexible engagement when discovery is ongoing — you pay for the work delivered and we adapt priorities together.",
      Icon: Clock,
    },
    {
      title: "Dedicated Team",
      description:
        "A small, focused team embedded with you — ideal for long-term roadmaps and continuous product improvement.",
      Icon: Users,
    },
    {
      title: "Short-term Specialists",
      description:
        "Bring in experienced specialists for a defined task — QA, performance tuning or launch support without long-term overhead.",
      Icon: UserCheck,
    },
  ];

  return (
    <section ref={sectionRef} className="py-20" aria-labelledby="process-heading">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 id="process-heading" className="text-4xl lg:text-5xl font-extrabold tracking-tight mb-3">
            How we work — a practical approach
          </h2>
          <p className="text-lg text-muted-foreground">
            A collaborative, transparent workflow designed to reduce risk and deliver value steadily.
          </p>
        </div>

        {/* Timeline / steps */}
        <div className="relative mb-12">
          {/* Horizontal track for lg */}
          <div className="hidden lg:block absolute left-6 right-6 top-1/2 -translate-y-1/2" aria-hidden="true">
            <div className="h-1 relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/5 to-transparent" />
              <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-8 pointer-events-none">
                {Array.from({ length: steps.length }).map((_, i) => (
                  <div key={i} className="w-1/5 px-2">
                    <div className="h-1 rounded-full bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-60" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Scrollable row on small screens, grid on large */}
          <div className="overflow-x-auto lg:overflow-visible pb-6" role="list" aria-label="Process steps">
            <div className="min-w-[760px] lg:min-w-0 grid grid-flow-col lg:grid-cols-5 gap-8 lg:gap-6 items-stretch">
              {steps.map((step, idx) => {
                const cardRef = useScrollReveal();
                return (
                  <div key={step.title} ref={cardRef} className="flex justify-center" role="listitem">
                    <div className="relative w-80 lg:w-full">
                      <div className="rounded-2xl p-6 shadow-xl transform transition-all duration-300 hover:-translate-y-3 bg-gradient-to-b from-white/3 to-white/6 border border-white/6">
                        <div className="flex items-start gap-4">
                          <div className="flex-1 text-left">
                            <div className="text-xs text-primary font-semibold">STEP {idx + 1}</div>
                            <h3 className="text-xl font-semibold mt-1">{step.title}</h3>
                            <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{step.description}</p>
                          </div>
                        </div>
                      </div>

                      <div className="absolute -top-3 right-3" aria-hidden="true">
                        <div
                          className="w-9 h-9 rounded-full bg-gradient-to-br from-black/20 to-white/6 flex items-center justify-center text-sm font-semibold text-white shadow"
                          title={`Step ${idx + 1}`}
                        >
                          {/* Work circle: workflow icon instead of plain number */}
                          <RefreshCw size={14} />
                        </div>
                      </div>

                      {idx < steps.length - 1 && (
                        <div className="hidden lg:block absolute top-1/2 right-[-40%] translate-y-[-50%] w-[40%]" aria-hidden="true">
                          <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-white/8 to-transparent rounded" />
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Engagement Models */}
        <div className="rounded-2xl p-8 border border-white/6 bg-gradient-to-b from-white/6 to-white/4 shadow-2xl">
          <h3 className="text-2xl font-bold mb-8 text-center">Engagement models that work</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {engagementModels.map((m, i) => {
              const Icon = m.Icon;
              return (
                <div
                  key={m.title}
                  className="relative p-6 rounded-xl overflow-hidden border border-white/20 bg-gradient-to-b from-transparent to-white/20 hover:scale-[1.02] transition-transform duration-300 shadow-lg"
                  role="article"
                  aria-labelledby={`engage-${i}`}
                >
                  <div className="absolute -left-8 -top-8 w-36 h-36 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 opacity-40 filter blur-md" />
                  <div className="relative z-10 text-center">
                    <div className="flex items-center justify-center mb-4">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center shadow-inner">
                        <Icon size={18} className="text-primary" />
                      </div>
                    </div>
                    <h4 id={`engage-${i}`} className="font-semibold mb-2">{m.title}</h4>
                    <p className="text-sm text-muted-foreground">{m.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        /* polished horizontal scroll */
        .min-w-[760px]::-webkit-scrollbar { height: 8px; }
        .min-w-[760px]::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.06); border-radius: 999px; }
        .min-w-[760px]::-webkit-scrollbar-track { background: transparent; }

        .glass-card { background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01)); backdrop-filter: blur(6px); }
      `}</style>
    </section>
  );
};

export default Process;

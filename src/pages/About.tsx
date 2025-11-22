// src/pages/About.tsx
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";

const About = () => {
  // Auto scroll to top when user lands on this page
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 pt-24 pb-16 bg-background">
        <div className="container mx-auto px-4 max-w-6xl space-y-12">
          {/* Top hero / intro */}
          <section className="grid lg:grid-cols-[1.4fr,1fr] gap-8 items-center">
            <div>
              <Badge variant="outline" className="mb-3">
                About AK NextGen Solutions
              </Badge>
              <h1 className="text-3xl lg:text-4xl font-bold mb-4">
                We design, build and scale reliable digital products for modern businesses.
              </h1>
              <p className="text-muted-foreground text-sm lg:text-base mb-5">
                AK NextGen Solutions is a product-focused software development company
                helping startups and enterprises turn ideas into scalable web and mobile
                applications. From architecture and UX to deployment and ongoing support,
                we act as an extended tech team for our clients.
              </p>

              <div className="grid sm:grid-cols-3 gap-4 text-sm">
                <div className="rounded-2xl border px-4 py-3">
                  <p className="text-xs uppercase tracking-wide text-muted-foreground mb-1">
                    Projects Delivered
                  </p>
                  <p className="text-xl font-semibold">20+ </p>
                </div>
                <div className="rounded-2xl border px-4 py-3">
                  <p className="text-xs uppercase tracking-wide text-muted-foreground mb-1">
                    Domains
                  </p>
                  <p className="text-xl font-semibold">HR, CRM, Tax, AI</p>
                </div>
                <div className="rounded-2xl border px-4 py-3">
                  <p className="text-xs uppercase tracking-wide text-muted-foreground mb-1">
                    Tech Stack
                  </p>
                  <p className="text-xl font-semibold">Full-stack</p>
                </div>
              </div>
            </div>

            {/* Right side info block */}
            <div className="rounded-3xl border bg-card/60 p-6 space-y-3">
              <h2 className="text-lg font-semibold mb-1">What we focus on</h2>
              <p className="text-sm text-muted-foreground">
                We specialise in end-to-end product development – from early idea, wireframes
                and clickable prototypes to production-ready applications with CI/CD,
                monitoring and long-term maintenance.
              </p>
              <p className="text-sm text-muted-foreground">
                Our team works with modern technologies like React, Next.js, Angular, .NET,
                Node.js, SQL/NoSQL and cloud-native infrastructures to deliver solutions
                that are secure, scalable and easy to evolve.
              </p>
            </div>
          </section>

          {/* Three columns: what we do / how we work / tech */}
          <section>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="rounded-2xl border p-5 bg-card/40">
                <h3 className="font-semibold mb-2">What we do</h3>
                <p className="text-sm text-muted-foreground">
                  Product consulting, UI/UX, web and mobile development, API design,
                  cloud setup, QA and maintenance. We help you ship reliable products
                  faster with a clear roadmap.
                </p>
              </div>

              <div className="rounded-2xl border p-5 bg-card/40">
                <h3 className="font-semibold mb-2">How we work</h3>
                <p className="text-sm text-muted-foreground">
                  We follow an iterative, sprint-based approach with transparent communication,
                  frequent demos and measurable milestones – so you always know what is being
                  built and why.
                </p>
              </div>

              <div className="rounded-2xl border p-5 bg-card/40">
                <h3 className="font-semibold mb-2">Tech we love</h3>
                <p className="text-sm text-muted-foreground">
                  React, Next.js, Angular, React Native, .NET, Node.js, SQL Server, MySQL,
                  MongoDB, Azure, AWS and modern DevOps practices tailored for your business
                  and scale.
                </p>
              </div>
            </div>
          </section>

          {/* Vision / closing */}
          <section className="rounded-3xl border bg-card/60 p-6 lg:p-8 flex flex-col lg:flex-row gap-6 items-center justify-between">
            <div className="max-w-2xl">
              <h2 className="text-xl lg:text-2xl font-semibold mb-2">
                Our vision
              </h2>
              <p className="text-sm lg:text-base text-muted-foreground">
                We want to be the technology partner that founders and business leaders
                can trust for long-term product evolution – not just quick releases.
                Clean architecture, maintainable code and clear documentation are at
                the core of everything we build.
              </p>
            </div>
            <div className="text-sm text-muted-foreground">
              <p className="font-medium mb-1">
                Looking for a team to own your next product?
              </p>
              <p>Reach out through our contact section and let&apos;s discuss your idea.</p>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;

import { useScrollReveal } from "@/hooks/useScrollReveal";



const Technologies = () => {
  const sectionRef = useScrollReveal();
const techList = [
  { name: "Angular", icon: "devicon-angularjs-plain colored" },
  { name: "React", icon: "devicon-react-original colored" },
  { name: "Next.js", icon: "devicon-nextjs-original" },
  { name: "Tailwind CSS", icon: "devicon-tailwindcss-original colored" },
  { name: "TypeScript", icon: "devicon-typescript-plain colored" },

  { name: "Node.js", icon: "devicon-nodejs-plain colored" },
  { name: "Express", icon: "devicon-express-original" },
  { name: "NestJS", icon: "devicon-nestjs-plain colored" },
  { name: ".NET", icon: "devicon-dotnetcore-plain colored" },
  { name: "GraphQL", icon: "devicon-graphql-plain colored" },

  { name: "MySQL", icon: "devicon-mysql-plain colored" },
  { name: "PostgreSQL", icon: "devicon-postgresql-plain colored" },
  { name: "MongoDB", icon: "devicon-mongodb-plain colored" },

  { name: "Docker", icon: "devicon-docker-plain colored" },
  { name: "Kubernetes", icon: "devicon-kubernetes-plain colored" },
  { name: "GitHub Actions", icon: "devicon-github-original" },

  { name: "AWS", icon: "devicon-amazonwebservices-original colored" },
  { name: "Azure", icon: "devicon-azure-plain colored" },
  { name: "Google Cloud", icon: "devicon-googlecloud-plain colored" },

  { name: "React Native", icon: "devicon-react-original colored" }
];
  return (
    <section
      id="technologies"
      ref={sectionRef}
      className="py-20 bg-background relative overflow-hidden"
    >
      <div className="container mx-auto px-4 text-center mb-12">
        <h2 className="text-4xl font-bold">Technology Stack</h2>
        <p className="text-muted-foreground mt-2 max-w-xl mx-auto">
          Modern, scalable, enterprise-grade tools used to deliver world-class
          solutions.
        </p>
      </div>

      {/* Fade edges */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-28 bg-gradient-to-r from-background to-transparent z-20"></div>
      <div className="pointer-events-none absolute right-0 top-0 h-full w-28 bg-gradient-to-l from-background to-transparent z-20"></div>

      <div className="relative w-full overflow-hidden">
        <div
          className="flex items-center gap-12 animate-marquee"
          style={{ animationDuration: "45s" }}
        >
          {[...techList, ...techList].map((tech, i) => (
            <div
              key={i}
              className="min-w-[120px] flex flex-col items-center opacity-90 hover:opacity-100 transition"
            >
              <i className={`${tech.icon} text-5xl`}></i>
              <p className="text-xs mt-2 text-muted-foreground">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee linear infinite;
          white-space: nowrap;
        }
      `}</style>
    </section>
  );
};


export default Technologies;
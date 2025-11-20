import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Play, Code2, Smartphone, Server, Zap } from "lucide-react";
import { useEffect, useRef } from "react";

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let particles: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
    }[] = [];

    const createParticles = () => {
      const count = Math.max(20, Math.floor((canvas.width * canvas.height) / (1200 * 800) * 50));
      particles = [];
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.6,
          vy: (Math.random() - 0.5) * 0.6,
          size: Math.random() * 2 + 0.2,
        });
      }
    };

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = Math.max(300, Math.round(rect.width * dpr));
      canvas.height = Math.max(200, Math.round(rect.height * dpr));
      canvas.style.width = `${Math.round(rect.width)}px`;
      canvas.style.height = `${Math.round(rect.height)}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      createParticles();
    };

    resize();
    window.addEventListener("resize", resize);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "rgba(0, 229, 255, 0.04)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.fillStyle = "rgba(0,229,255,0.9)";
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 90) {
            const alpha = 0.09 * (1 - dist / 90);
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(0,229,255,${alpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      animRef.current = requestAnimationFrame(animate);
    };

    animRef.current = requestAnimationFrame(animate);

    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", resize);
    };
  }, []);

  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    window.location.hash = id;
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden">
      {/* Animated Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-30"
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <Badge variant="outline" className="neon-border text-primary px-4 py-2 text-sm animate-in fade-in slide-in-from-bottom duration-700">
                <Zap className="w-4 h-4 mr-2 inline" />
                From idea to launch — we help build it right
              </Badge>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] animate-in fade-in slide-in-from-bottom duration-700 delay-100">
                We build things people enjoy using.
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed animate-in fade-in slide-in-from-bottom duration-700 delay-200">
                We partner with you to design, build, test and run web and mobile apps — clear communication, practical solutions, and honest timelines.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 animate-in fade-in slide-in-from-bottom duration-700 delay-300">
              <Button
                size="lg"
                className="glow-cyan pulse-glow group text-lg px-8 py-6"
                onClick={() => scrollToId("contact")}
                aria-label="Get in touch"
              >
                Let’s talk
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="neon-border text-lg px-8 py-6 hover:bg-primary/10"
                onClick={() => scrollToId("services")}
                aria-label="See what we do"
              >
                <Play className="mr-2" size={20} />
                See what we do
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-6 animate-in fade-in slide-in-from-bottom duration-700 delay-400">
              <div className="glass-card p-6 neon-border glow-cyan text-center hover:scale-105 transition-transform">
                <div className="text-4xl font-bold text-primary mb-2">10+</div>
                <div className="text-sm text-muted-foreground">Happy clients</div>
              </div>
              <div className="glass-card p-6 neon-border glow-purple text-center hover:scale-105 transition-transform">
                <div className="text-4xl font-bold text-secondary mb-2">20+</div>
                <div className="text-sm text-muted-foreground">Projects shipped</div>
              </div>
              <div className="glass-card p-6 neon-border glow-cyan text-center hover:scale-105 transition-transform">
                <div className="text-4xl font-bold text-primary mb-2">99%</div>
                <div className="text-sm text-muted-foreground">On-time delivery</div>
              </div>
            </div>
          </div>

          {/* Right - Friendly visual */}
          <div className="relative h-[560px] sm:h-[640px] animate-in fade-in zoom-in duration-1000 delay-500">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-secondary/20 to-primary/30 rounded-3xl blur-3xl animate-pulse" />

            <div className="relative h-full flex items-center justify-center">
              <div className="grid grid-cols-2 gap-4 w-full max-w-md">
                <div className="glass-card p-6 neon-border glow-cyan float-animation">
                  <Code2 className="w-10 h-10 text-primary mb-3" />
                  <div className="text-sm font-semibold">Web Apps</div>
                  <div className="text-xs text-muted-foreground mt-1">Built for real users</div>
                </div>

                <div className="glass-card p-6 neon-border glow-purple float-animation" style={{ animationDelay: "0.5s" }}>
                  <Smartphone className="w-10 h-10 text-secondary mb-3" />
                  <div className="text-sm font-semibold">Mobile Apps</div>
                  <div className="text-xs text-muted-foreground mt-1">Simple and smooth</div>
                </div>

                <div className="glass-card p-6 neon-border glow-purple float-animation" style={{ animationDelay: "1s" }}>
                  <Server className="w-10 h-10 text-secondary mb-3" />
                  <div className="text-sm font-semibold">Backends</div>
                  <div className="text-xs text-muted-foreground mt-1">Reliable and easy to maintain</div>
                </div>

                <div className="glass-card p-6 neon-border glow-cyan float-animation" style={{ animationDelay: "1.5s" }}>
                  <Zap className="w-10 h-10 text-primary mb-3" />
                  <div className="text-sm font-semibold">Operations</div>
                  <div className="text-xs text-muted-foreground mt-1">Smooth deployments and monitoring</div>
                </div>
              </div>

              {/* Center Glow */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary/50 to-secondary/50 blur-3xl pulse-glow" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
    </section>
  );
};

export default Hero;

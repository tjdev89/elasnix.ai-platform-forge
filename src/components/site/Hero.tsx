import { Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedBackdrop } from "./AnimatedBackdrop";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <AnimatedBackdrop />
      <div className="container mx-auto px-6 pt-24 pb-32 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-mono uppercase tracking-wider mb-8 animate-fade-up">
            <Sparkles className="w-3 h-3 text-primary" />
            <span className="text-muted-foreground">AI-Native Engineering for the Enterprise</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <span className="text-gradient">Engineering Intelligent</span>
            <br />
            <span className="text-gradient-primary">Enterprise Platforms</span>
            <br />
            <span className="text-gradient">with AI, Cloud & Automation</span>
          </h1>

          <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fade-up" style={{ animationDelay: "0.2s" }}>
            elasnix.ai helps organizations build, secure, automate, and scale modern digital
            platforms using Agentic AI, DevOps, Kubernetes, cybersecurity, and cloud-native engineering.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Button asChild size="lg" className="bg-gradient-primary border-0 shadow-glow hover:opacity-90 h-12 px-7">
              <Link to="/contact">
                Book a Consultation <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-12 px-7 glass border-border/60">
              <Link to="/contact">Talk to an Expert</Link>
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: "0.4s" }}>
            {[
              { v: "9+", l: "Practice areas" },
              { v: "100%", l: "Cloud-native" },
              { v: "24/7", l: "SRE-grade ops" },
              { v: "0-trust", l: "Security model" },
            ].map((s) => (
              <div key={s.l} className="glass rounded-xl p-4">
                <div className="text-2xl font-display font-bold text-gradient-primary">{s.v}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

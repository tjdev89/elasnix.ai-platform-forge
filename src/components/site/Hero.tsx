import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedBackdrop } from "./AnimatedBackdrop";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <AnimatedBackdrop />
      <div className="container mx-auto px-6 pt-28 pb-28 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border/60 bg-secondary/40 text-xs font-medium text-muted-foreground mb-8 animate-fade-up">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            AI-Native Engineering for the Enterprise
          </div>

          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.1] animate-fade-up text-gradient" style={{ animationDelay: "0.1s" }}>
            Engineering intelligent
            <br />
            enterprise platforms with
            <br />
            <span className="text-gradient-aurora">AI, cloud & automation.</span>
          </h1>

          <p className="mt-7 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fade-up" style={{ animationDelay: "0.2s" }}>
            elasnix.ai helps organizations build, secure, automate, and scale modern digital
            platforms using Agentic AI, DevOps, Kubernetes, cybersecurity, and cloud-native engineering.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row gap-3 justify-center animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Button asChild size="lg" className="bg-gradient-primary border-0 hover:opacity-95 h-11 px-6">
              <Link to="/contact">
                Book a Consultation <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-11 px-6 bg-secondary/40 border-border/60 hover:bg-secondary/60">
              <Link to="/contact">Talk to an Expert</Link>
            </Button>
          </div>

          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-border/40 rounded-xl overflow-hidden border border-border/40 max-w-3xl mx-auto animate-fade-up shadow-card" style={{ animationDelay: "0.4s" }}>
            {[
              { v: "9+", l: "Practice areas" },
              { v: "100%", l: "Cloud-native" },
              { v: "24/7", l: "SRE-grade ops" },
              { v: "0-trust", l: "Security model" },
            ].map((s) => (
              <div key={s.l} className="bg-card/70 p-5 backdrop-blur-sm relative group transition-colors hover:bg-card/90">
                <div className="text-2xl font-display font-semibold text-gradient">{s.v}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

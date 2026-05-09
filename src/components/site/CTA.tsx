import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section className="container mx-auto px-6 py-24">
      <div className="relative bg-card/70 border border-border/60 rounded-2xl p-10 md:p-14 overflow-hidden shadow-elevated">
        {/* Aurora ambient lighting */}
        <div className="absolute inset-0 bg-gradient-mesh opacity-80 pointer-events-none" />
        <div
          className="absolute -top-32 -left-20 w-[420px] h-[320px] rounded-full blur-[100px] animate-aurora pointer-events-none"
          style={{ background: "radial-gradient(circle, var(--aurora-blue), transparent 60%)", opacity: 0.35 }}
        />
        <div
          className="absolute -bottom-32 -right-20 w-[420px] h-[320px] rounded-full blur-[100px] animate-aurora-slow pointer-events-none"
          style={{ background: "radial-gradient(circle, var(--aurora-violet), transparent 60%)", opacity: 0.3, animationDelay: "-8s" }}
        />
        <div className="absolute inset-0 grid-pattern-fine opacity-50 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_80%)] pointer-events-none" />

        <div className="relative max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight leading-tight">
            <span className="text-foreground">Build your next intelligent platform with </span>
            <span className="text-gradient-aurora">elasnix.ai</span>
          </h2>
          <p className="mt-4 text-base md:text-lg text-muted-foreground max-w-2xl">
            From AI agents to Kubernetes platforms — we engineer the systems that move your
            organization forward. Let's discuss your roadmap.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Button asChild size="lg" className="bg-gradient-primary border-0 h-11 px-6 shadow-glow hover:opacity-95">
              <Link to="/contact">Book a Consultation <ArrowRight className="ml-1 w-4 h-4" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-11 px-6 bg-secondary/40 border-border/60 hover:bg-secondary/60">
              <Link to="/contact">Talk to an Expert</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

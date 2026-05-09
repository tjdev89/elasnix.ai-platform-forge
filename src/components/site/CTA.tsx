import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section className="container mx-auto px-6 py-24">
      <div className="relative glass-strong rounded-3xl p-10 md:p-16 overflow-hidden border-gradient">
        <div className="absolute inset-0 bg-gradient-hero opacity-60 pointer-events-none" />
        <div className="relative max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-bold text-gradient leading-tight">
            Build your next intelligent platform with elasnix.ai
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            From AI agents to Kubernetes platforms — we engineer the systems that move your
            organization forward. Let's discuss your roadmap.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Button asChild size="lg" className="bg-gradient-primary border-0 shadow-glow h-12 px-7">
              <Link to="/contact">Book a Consultation <ArrowRight className="ml-1 w-4 h-4" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-12 px-7 glass border-border/60">
              <Link to="/contact">Talk to an Expert</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

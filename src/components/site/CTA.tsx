import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section className="container mx-auto px-6 py-24">
      <div className="relative bg-card/70 border border-border/60 rounded-2xl p-10 md:p-14 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-50 pointer-events-none" />
        <div className="relative max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground leading-tight">
            Build your next intelligent platform with elasnix.ai
          </h2>
          <p className="mt-4 text-base md:text-lg text-muted-foreground max-w-2xl">
            From AI agents to Kubernetes platforms — we engineer the systems that move your
            organization forward. Let's discuss your roadmap.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Button asChild size="lg" className="bg-gradient-primary border-0 h-11 px-6">
              <Link to="/contact">Book a Consultation <ArrowRight className="ml-1 w-4 h-4" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-11 px-6 bg-secondary/40 border-border/60">
              <Link to="/contact">Talk to an Expert</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

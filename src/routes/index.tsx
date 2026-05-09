import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { Hero } from "@/components/site/Hero";
import { ServicesGrid } from "@/components/site/ServicesGrid";
import { TechStack } from "@/components/site/TechStack";
import { ProcessTimeline } from "@/components/site/ProcessTimeline";
import { SectionHeading } from "@/components/site/SectionHeading";
import { CTA } from "@/components/site/CTA";
import { Button } from "@/components/ui/button";
import { ArrowRight, Layers, ShieldCheck, Zap, Cpu } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "elasnix.ai — Engineering Intelligent Digital Platforms" },
      { name: "description", content: "AI-native enterprise engineering: Agentic AI, Kubernetes, DevOps, cloud-native, cybersecurity, and AIOps for SaaS, startups, and enterprises." },
      { property: "og:title", content: "elasnix.ai — Engineering Intelligent Digital Platforms" },
      { property: "og:description", content: "AI-native software engineering, cloud, DevOps, and cybersecurity for the modern enterprise." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <SiteLayout>
      <Hero />

      {/* Pillars */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-4 gap-4">
          {[
            { icon: Cpu, title: "AI-Native", desc: "Agentic systems built into the platform layer." },
            { icon: Layers, title: "Cloud-Native", desc: "Kubernetes-first across AWS, Azure, GCP." },
            { icon: Zap, title: "Automated", desc: "GitOps, CI/CD, and AIOps end to end." },
            { icon: ShieldCheck, title: "Secure by Default", desc: "Zero Trust and DevSecOps from day one." },
          ].map((p, i) => (
            <div
              key={p.title}
              className="group relative bg-card/60 border border-border/50 rounded-xl p-6 card-hover hover:border-primary/40 overflow-hidden"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-mesh" />
              <div className="relative">
                <div className="w-9 h-9 rounded-lg bg-secondary/80 border border-border/60 flex items-center justify-center mb-4 group-hover:border-primary/40 transition-colors">
                  <p.icon className="w-4 h-4 text-primary" />
                </div>
                <h3 className="font-semibold mb-1">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="container mx-auto px-6 py-20">
        <SectionHeading
          eyebrow="Capabilities"
          title="Nine practice areas. One engineering partner."
          description="From Agentic AI to Kubernetes platforms — we cover the full stack of modern enterprise engineering."
        />
        <div className="mt-14">
          <ServicesGrid />
        </div>
        <div className="mt-10 text-center">
          <Button asChild variant="outline" className="glass border-border/60">
            <Link to="/services">Explore all services <ArrowRight className="ml-1 w-4 h-4" /></Link>
          </Button>
        </div>
      </section>

      {/* Process */}
      <section className="container mx-auto px-6 py-20">
        <SectionHeading
          eyebrow="How we engage"
          title="A proven engineering process"
          description="Discover, design, build, and operate — alongside your teams."
        />
        <div className="mt-14">
          <ProcessTimeline />
        </div>
      </section>

      {/* Tech */}
      <section className="container mx-auto px-6 py-20">
        <SectionHeading
          eyebrow="Technology"
          title="The stack we engineer with"
          description="Battle-tested, cloud-native, and AI-ready."
        />
        <div className="mt-14">
          <TechStack />
        </div>
      </section>

      <CTA />
    </SiteLayout>
  );
}

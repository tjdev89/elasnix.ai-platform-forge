import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { SectionHeading } from "@/components/site/SectionHeading";
import { CTA } from "@/components/site/CTA";
import { solutions } from "@/lib/site-data";

export const Route = createFileRoute("/solutions")({
  head: () => ({
    meta: [
      { title: "Solutions — elasnix.ai" },
      { name: "description", content: "Agentic AI platforms, cloud-native modernization, Zero Trust security, AIOps, and internal developer platforms." },
      { property: "og:title", content: "Solutions — elasnix.ai" },
      { property: "og:description", content: "Outcome-driven enterprise solutions across AI, cloud, security, and platform engineering." },
    ],
  }),
  component: SolutionsPage,
});

function SolutionsPage() {
  return (
    <SiteLayout>
      <section className="container mx-auto px-6 pt-20 pb-12">
        <SectionHeading
          eyebrow="Solutions"
          title="Outcome-driven solutions, not generic deliverables"
          description="Reference architectures and platform blueprints proven across enterprise environments."
        />
      </section>
      <section className="container mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {solutions.map((s, i) => (
            <div key={s.title} className="glass rounded-2xl p-7 hover:shadow-elevated transition-all hover:-translate-y-1 border-gradient">
              <div className="font-mono text-xs text-muted-foreground mb-3">0{i + 1}</div>
              <h3 className="text-xl font-semibold mb-3 text-gradient">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <CTA />
    </SiteLayout>
  );
}

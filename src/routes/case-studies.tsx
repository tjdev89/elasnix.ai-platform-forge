import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { SectionHeading } from "@/components/site/SectionHeading";
import { CTA } from "@/components/site/CTA";

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: [
      { title: "Case Studies — elasnix.ai" },
      { name: "description", content: "Selected engineering engagements across AI, Kubernetes, DevOps, and security." },
      { property: "og:title", content: "Case Studies — elasnix.ai" },
      { property: "og:description", content: "Selected engineering engagements." },
    ],
  }),
  component: CaseStudies,
});

const cases = [
  { sector: "Enterprise SaaS", title: "Agentic AI copilot for a B2B SaaS platform", outcome: "40% reduction in support load via autonomous agents." },
  { sector: "FinTech", title: "Multi-region Kubernetes platform on AWS", outcome: "99.99% availability with GitOps-driven delivery." },
  { sector: "HealthTech", title: "Zero Trust security baseline & compliance automation", outcome: "Audit-ready posture with continuous compliance." },
  { sector: "Retail", title: "AIOps-driven incident automation", outcome: "MTTR cut by 65% with predictive remediation." },
];

function CaseStudies() {
  return (
    <SiteLayout>
      <section className="container mx-auto px-6 pt-20 pb-12">
        <SectionHeading
          eyebrow="Case Studies"
          title="Engineering outcomes that compound"
          description="A preview of the engagements we'll publish in detail. Reach out for a deep-dive walkthrough."
        />
      </section>
      <section className="container mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-2 gap-5 max-w-5xl mx-auto">
          {cases.map((c) => (
            <div key={c.title} className="glass rounded-2xl p-7 border-gradient hover:shadow-elevated transition-all">
              <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-3">{c.sector}</div>
              <h3 className="text-xl font-semibold mb-3 text-gradient">{c.title}</h3>
              <p className="text-sm text-muted-foreground">{c.outcome}</p>
            </div>
          ))}
        </div>
      </section>
      <CTA />
    </SiteLayout>
  );
}

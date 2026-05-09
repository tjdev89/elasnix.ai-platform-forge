import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { SectionHeading } from "@/components/site/SectionHeading";
import { CTA } from "@/components/site/CTA";
import { Check } from "lucide-react";

const reasons = [
  { t: "AI-native by default", d: "Agentic systems and AI copilots embedded across the platform layer — not bolted on." },
  { t: "Cloud-native expertise", d: "Kubernetes-first engineering across AWS, Azure, GCP, and Alibaba Cloud." },
  { t: "Security-first engineering", d: "Zero Trust, DevSecOps, and compliance baked into every pipeline." },
  { t: "End-to-end ownership", d: "From discovery to 24/7 SRE — one accountable engineering partner." },
  { t: "Automation obsession", d: "GitOps, CI/CD, and AIOps reduce toil and increase velocity." },
  { t: "Enterprise-grade delivery", d: "Reference architectures, threat models, and SLOs from day one." },
];

export const Route = createFileRoute("/why")({
  head: () => ({
    meta: [
      { title: "Why elasnix.ai" },
      { name: "description", content: "Why CTOs and engineering leaders choose elasnix.ai for AI, cloud, and platform engineering." },
      { property: "og:title", content: "Why elasnix.ai" },
      { property: "og:description", content: "AI-native, cloud-native, security-first — end-to-end engineering ownership." },
    ],
  }),
  component: WhyPage,
});

function WhyPage() {
  return (
    <SiteLayout>
      <section className="container mx-auto px-6 pt-20 pb-12">
        <SectionHeading
          eyebrow="Why elasnix.ai"
          title="Engineering partners — not a staffing shop"
          description="We bring opinionated reference architectures, deep cloud-native expertise, and an AI-native delivery model."
        />
      </section>
      <section className="container mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((r) => (
            <div key={r.t} className="glass rounded-2xl p-7 hover:shadow-elevated transition-all">
              <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center shadow-glow mb-4">
                <Check className="w-5 h-5 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{r.t}</h3>
              <p className="text-sm text-muted-foreground">{r.d}</p>
            </div>
          ))}
        </div>
      </section>
      <CTA />
    </SiteLayout>
  );
}

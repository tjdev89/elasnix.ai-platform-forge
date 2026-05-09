import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { SectionHeading } from "@/components/site/SectionHeading";
import { TechStack } from "@/components/site/TechStack";
import { CTA } from "@/components/site/CTA";
import { technologies } from "@/lib/site-data";

export const Route = createFileRoute("/technologies")({
  head: () => ({
    meta: [
      { title: "Technologies — elasnix.ai" },
      { name: "description", content: "AWS, Azure, GCP, Kubernetes, Terraform, ArgoCD, Prometheus, Grafana, OpenAI, and more." },
      { property: "og:title", content: "Technologies — elasnix.ai" },
      { property: "og:description", content: "The cloud-native and AI stack we engineer with." },
    ],
  }),
  component: TechPage,
});

function TechPage() {
  const grouped = technologies.reduce<Record<string, string[]>>((acc, t) => {
    (acc[t.category] ||= []).push(t.name);
    return acc;
  }, {});

  return (
    <SiteLayout>
      <section className="container mx-auto px-6 pt-20 pb-12">
        <SectionHeading
          eyebrow="Technologies"
          title="The stack we engineer with"
          description="Production-grade tools across cloud, containers, CI/CD, observability, and AI."
        />
      </section>
      <section className="container mx-auto px-6 pb-12">
        <TechStack />
      </section>
      <section className="container mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {Object.entries(grouped).map(([cat, items]) => (
            <div key={cat} className="glass rounded-2xl p-6">
              <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-3">{cat}</div>
              <div className="flex flex-wrap gap-2">
                {items.map((n) => (
                  <span key={n} className="px-2.5 py-1 rounded-md text-xs bg-secondary/60 border border-border/60">{n}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      <CTA />
    </SiteLayout>
  );
}

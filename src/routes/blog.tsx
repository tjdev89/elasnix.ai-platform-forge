import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { SectionHeading } from "@/components/site/SectionHeading";
import { CTA } from "@/components/site/CTA";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — elasnix.ai" },
      { name: "description", content: "Insights on Agentic AI, Kubernetes, DevOps, cloud-native engineering, and cybersecurity." },
      { property: "og:title", content: "Blog — elasnix.ai" },
      { property: "og:description", content: "Engineering insights from the elasnix.ai team." },
    ],
  }),
  component: BlogPage,
});

const placeholders = [
  { title: "Engineering Agentic AI for the Enterprise", tag: "AI", date: "Coming soon" },
  { title: "GitOps at Scale: ArgoCD Patterns That Actually Work", tag: "DevOps", date: "Coming soon" },
  { title: "Zero Trust on Kubernetes — A Practical Blueprint", tag: "Security", date: "Coming soon" },
  { title: "AIOps in Production: From Alerts to Auto-Remediation", tag: "AIOps", date: "Coming soon" },
];

function BlogPage() {
  return (
    <SiteLayout>
      <section className="container mx-auto px-6 pt-20 pb-12">
        <SectionHeading
          eyebrow="Blog"
          title="Engineering notes from the field"
          description="Deep dives on AI, cloud, DevOps, and security. New posts publishing soon."
        />
      </section>
      <section className="container mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-2 gap-5 max-w-5xl mx-auto">
          {placeholders.map((p) => (
            <article key={p.title} className="glass rounded-2xl p-7 border-gradient hover:shadow-elevated transition-all">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-2 py-0.5 rounded-md text-xs bg-secondary/60 font-mono">{p.tag}</span>
                <span className="text-xs text-muted-foreground">{p.date}</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground">A long-form article from the elasnix.ai engineering team. Subscribe to be notified at launch.</p>
            </article>
          ))}
        </div>
      </section>
      <CTA />
    </SiteLayout>
  );
}

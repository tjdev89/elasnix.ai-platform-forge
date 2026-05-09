import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { SectionHeading } from "@/components/site/SectionHeading";
import { CTA } from "@/components/site/CTA";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — elasnix.ai" },
      { name: "description", content: "elasnix.ai is an AI-native engineering company building intelligent, scalable, and secure enterprise platforms." },
      { property: "og:title", content: "About — elasnix.ai" },
      { property: "og:description", content: "An AI-native engineering company for the modern enterprise." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      <section className="container mx-auto px-6 pt-20 pb-12">
        <SectionHeading
          eyebrow="About"
          title="An AI-native engineering company"
          description="We help CTOs, engineering leaders, and enterprises ship intelligent platforms — built on Agentic AI, Kubernetes, and modern DevOps."
        />
      </section>
      <section className="container mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-2 gap-5 max-w-5xl mx-auto">
          {[
            { t: "Our mission", d: "Engineer the intelligent digital platforms that power the next generation of enterprise software." },
            { t: "Our approach", d: "Hands-on engineering — not slideware. We embed with your teams and ship production systems." },
            { t: "Who we serve", d: "CTOs, engineering leaders, startups scaling fast, and enterprises modernizing core platforms." },
            { t: "What we believe", d: "AI-native, cloud-native, security-first. Automation is the only way to scale safely." },
          ].map((b) => (
            <div key={b.t} className="glass rounded-2xl p-7 border-gradient">
              <h3 className="text-xl font-semibold mb-3 text-gradient">{b.t}</h3>
              <p className="text-muted-foreground">{b.d}</p>
            </div>
          ))}
        </div>
      </section>
      <CTA />
    </SiteLayout>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { ServicesGrid } from "@/components/site/ServicesGrid";
import { SectionHeading } from "@/components/site/SectionHeading";
import { CTA } from "@/components/site/CTA";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — elasnix.ai" },
      { name: "description", content: "Agentic AI, DevOps, Kubernetes, cybersecurity, observability, AIOps, and enterprise software engineering." },
      { property: "og:title", content: "Services — elasnix.ai" },
      { property: "og:description", content: "Nine practice areas covering the full stack of modern enterprise engineering." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <SiteLayout>
      <section className="container mx-auto px-6 pt-20 pb-12">
        <SectionHeading
          eyebrow="Services"
          title="Engineering services for the AI-native enterprise"
          description="Hands-on engineering across Agentic AI, cloud infrastructure, DevOps, security, and intelligent operations."
        />
      </section>
      <section className="container mx-auto px-6 pb-20">
        <ServicesGrid />
      </section>
      <CTA />
    </SiteLayout>
  );
}

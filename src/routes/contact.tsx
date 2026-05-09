import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MessageSquare, MapPin } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — elasnix.ai" },
      { name: "description", content: "Book a consultation or talk to an elasnix.ai engineering expert about your AI, cloud, or platform initiative." },
      { property: "og:title", content: "Contact — elasnix.ai" },
      { property: "og:description", content: "Book a consultation with an elasnix.ai expert." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <SiteLayout>
      <section className="container mx-auto px-6 pt-20 pb-12">
        <SectionHeading
          eyebrow="Contact"
          title="Let's talk about your platform"
          description="Book a consultation, scope a project, or get an architecture review. We respond within one business day."
        />
      </section>
      <section className="container mx-auto px-6 pb-24">
        <div className="grid lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          <div className="lg:col-span-2 space-y-4">
            {[
              { icon: Mail, title: "Email", value: "hello@elasnix.ai" },
              { icon: MessageSquare, title: "Consulting", value: "Architecture & engineering reviews" },
              { icon: MapPin, title: "Engagements", value: "Global — remote-first" },
            ].map((c) => (
              <div key={c.title} className="glass rounded-2xl p-5 flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center shrink-0">
                  <c.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <div className="font-semibold">{c.title}</div>
                  <div className="text-sm text-muted-foreground">{c.value}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="lg:col-span-3 glass-strong rounded-2xl p-8 border-gradient">
            {sent ? (
              <div className="py-12 text-center">
                <h3 className="text-2xl font-semibold text-gradient mb-2">Message received</h3>
                <p className="text-muted-foreground">We'll be in touch within one business day.</p>
              </div>
            ) : (
              <form
                className="space-y-4"
                onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" required className="mt-1.5 bg-input/50" />
                  </div>
                  <div>
                    <Label htmlFor="company">Company</Label>
                    <Input id="company" className="mt-1.5 bg-input/50" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email">Work email</Label>
                  <Input id="email" type="email" required className="mt-1.5 bg-input/50" />
                </div>
                <div>
                  <Label htmlFor="message">What are you building?</Label>
                  <Textarea id="message" rows={5} required className="mt-1.5 bg-input/50" />
                </div>
                <Button type="submit" size="lg" className="w-full bg-gradient-primary border-0 shadow-glow">
                  Book a Consultation
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

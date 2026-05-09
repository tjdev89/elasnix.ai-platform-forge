import { services } from "@/lib/site-data";
import { ArrowUpRight } from "lucide-react";

export function ServicesGrid({ limit }: { limit?: number }) {
  const items = limit ? services.slice(0, limit) : services;
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
      {items.map((s, i) => (
        <div
          key={s.title}
          className="group relative bg-card/60 border border-border/50 rounded-xl p-6 card-hover hover:border-primary/50 overflow-hidden"
          style={{ animationDelay: `${i * 60}ms` }}
        >
          {/* Aurora glow on hover */}
          <div
            className="absolute -inset-px rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            style={{
              background:
                "radial-gradient(400px circle at var(--mx,50%) var(--my,0%), oklch(0.7 0.18 258 / 14%), transparent 60%)",
            }}
          />
          <div className="relative">
            <div className="flex items-start justify-between mb-5">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-secondary/80 border border-border/60 group-hover:border-primary/40 transition-colors">
                <s.icon className="w-5 h-5 text-primary" />
              </div>
              <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </div>
            <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground mb-4">{s.tagline}</p>
            <ul className="space-y-1.5">
              {s.bullets.map((b) => (
                <li key={b} className="text-xs text-muted-foreground flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-gradient-aurora" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

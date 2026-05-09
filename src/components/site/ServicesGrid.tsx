import { services } from "@/lib/site-data";
import { ArrowUpRight } from "lucide-react";

export function ServicesGrid({ limit }: { limit?: number }) {
  const items = limit ? services.slice(0, limit) : services;
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
      {items.map((s, i) => (
        <div
          key={s.title}
          className="group relative glass rounded-2xl p-6 border-gradient hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
          style={{ animationDelay: `${i * 60}ms` }}
        >
          <div className="flex items-start justify-between mb-5">
            <div className="w-11 h-11 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow">
              <s.icon className="w-5 h-5 text-primary-foreground" />
            </div>
            <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
          </div>
          <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
          <p className="text-sm text-muted-foreground mb-4">{s.tagline}</p>
          <ul className="space-y-1.5">
            {s.bullets.map((b) => (
              <li key={b} className="text-xs text-muted-foreground flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-primary" />
                {b}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

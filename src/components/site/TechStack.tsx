import { technologies } from "@/lib/site-data";

export function TechStack() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
      {technologies.map((t) => (
        <div
          key={t.name}
          className="glass rounded-xl p-4 text-center hover:border-primary/40 transition-colors group"
        >
          <div className="text-sm font-semibold group-hover:text-gradient-primary">{t.name}</div>
          <div className="text-[10px] uppercase tracking-wider text-muted-foreground mt-1 font-mono">{t.category}</div>
        </div>
      ))}
    </div>
  );
}

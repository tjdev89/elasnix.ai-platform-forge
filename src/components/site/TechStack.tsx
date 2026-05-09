import { technologies } from "@/lib/site-data";

export function TechStack() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
      {technologies.map((t) => (
        <div
          key={t.name}
          className="bg-card/50 border border-border/50 rounded-lg p-4 text-center hover:border-primary/40 hover:bg-card/80 transition-colors"
        >
          <div className="text-sm font-medium text-foreground">{t.name}</div>
          <div className="text-[10px] uppercase tracking-wider text-muted-foreground mt-1 font-mono">{t.category}</div>
        </div>
      ))}
    </div>
  );
}

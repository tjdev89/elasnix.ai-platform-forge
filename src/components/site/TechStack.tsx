import { technologies } from "@/lib/site-data";

export function TechStack() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
      {technologies.map((t, i) => (
        <div
          key={t.name}
          className="group relative bg-card/50 border border-border/50 rounded-lg p-4 text-center card-hover hover:border-primary/40 overflow-hidden"
          style={{ animationDelay: `${i * 30}ms` }}
        >
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.7 0.18 258 / 10%), oklch(0.65 0.2 295 / 8%))",
            }}
          />
          <div className="relative">
            <div className="text-sm font-medium text-foreground">{t.name}</div>
            <div className="text-[10px] uppercase tracking-wider text-muted-foreground mt-1 font-mono">
              {t.category}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

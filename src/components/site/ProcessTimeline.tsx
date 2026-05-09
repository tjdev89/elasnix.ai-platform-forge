import { process } from "@/lib/site-data";

export function ProcessTimeline() {
  return (
    <div className="grid md:grid-cols-4 gap-5 relative">
      <div
        className="hidden md:block absolute top-8 left-[12%] right-[12%] h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, oklch(0.7 0.18 258 / 50%), oklch(0.65 0.2 295 / 50%), oklch(0.72 0.13 190 / 50%), transparent)",
        }}
      />
      {process.map((p, i) => (
        <div
          key={p.step}
          className="relative bg-card/60 border border-border/50 rounded-xl p-6 card-hover hover:border-primary/40"
          style={{ animationDelay: `${i * 80}ms` }}
        >
          <div className="font-mono text-xs text-muted-foreground mb-3">{p.step}</div>
          <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center mb-4 shadow-glow">
            <span className="font-display font-semibold text-primary-foreground">{p.step.slice(1)}</span>
          </div>
          <h3 className="font-semibold mb-2">{p.title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
        </div>
      ))}
    </div>
  );
}

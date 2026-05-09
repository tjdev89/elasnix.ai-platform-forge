import { process } from "@/lib/site-data";

export function ProcessTimeline() {
  return (
    <div className="grid md:grid-cols-4 gap-5 relative">
      <div className="hidden md:block absolute top-8 left-[12%] right-[12%] h-px bg-border/60" />
      {process.map((p) => (
        <div key={p.step} className="relative bg-card/60 border border-border/50 rounded-xl p-6">
          <div className="font-mono text-xs text-muted-foreground mb-3">{p.step}</div>
          <div className="w-10 h-10 rounded-lg bg-secondary/80 border border-border/50 flex items-center justify-center mb-4">
            <span className="font-display font-semibold text-primary">{p.step.slice(1)}</span>
          </div>
          <h3 className="font-semibold mb-2">{p.title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
        </div>
      ))}
    </div>
  );
}

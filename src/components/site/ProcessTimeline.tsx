import { process } from "@/lib/site-data";

export function ProcessTimeline() {
  return (
    <div className="grid md:grid-cols-4 gap-5 relative">
      <div className="hidden md:block absolute top-8 left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      {process.map((p) => (
        <div key={p.step} className="relative glass rounded-2xl p-6">
          <div className="font-mono text-xs text-muted-foreground mb-3">{p.step}</div>
          <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center shadow-glow mb-4">
            <span className="font-display font-bold text-primary-foreground">{p.step.slice(1)}</span>
          </div>
          <h3 className="font-semibold mb-2">{p.title}</h3>
          <p className="text-sm text-muted-foreground">{p.desc}</p>
        </div>
      ))}
    </div>
  );
}

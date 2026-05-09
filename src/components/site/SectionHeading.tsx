export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
}) {
  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs font-mono uppercase tracking-wider text-muted-foreground mb-5">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-glow" />
          {eyebrow}
        </div>
      )}
      <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gradient">{title}</h2>
      {description && <p className="mt-4 text-lg text-muted-foreground">{description}</p>}
    </div>
  );
}

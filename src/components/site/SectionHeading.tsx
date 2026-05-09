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
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border/60 bg-secondary/40 text-xs font-medium uppercase tracking-wider text-muted-foreground mb-5">
          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
          {eyebrow}
        </div>
      )}
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">{title}</h2>
      {description && <p className="mt-4 text-base md:text-lg text-muted-foreground">{description}</p>}
    </div>
  );
}

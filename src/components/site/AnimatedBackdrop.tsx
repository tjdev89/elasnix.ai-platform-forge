export function AnimatedBackdrop() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 grid-pattern opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]" />
      <div className="absolute -top-40 -left-32 w-[500px] h-[500px] rounded-full bg-[var(--neon-blue)] opacity-20 blur-[120px] animate-glow" />
      <div className="absolute top-20 -right-32 w-[500px] h-[500px] rounded-full bg-[var(--neon-purple)] opacity-20 blur-[120px] animate-glow" style={{ animationDelay: "1.5s" }} />
    </div>
  );
}

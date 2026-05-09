export function AnimatedBackdrop() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 grid-pattern opacity-60 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)]" />
      <div className="absolute -top-32 left-1/4 w-[600px] h-[400px] rounded-full bg-[var(--neon-blue)] opacity-[0.07] blur-[120px]" />
      <div className="absolute top-40 right-0 w-[500px] h-[400px] rounded-full bg-[var(--neon-purple)] opacity-[0.06] blur-[120px]" />
    </div>
  );
}

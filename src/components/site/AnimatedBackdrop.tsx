export function AnimatedBackdrop({ variant = "hero" }: { variant?: "hero" | "subtle" }) {
  const intense = variant === "hero";
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Mesh gradient base */}
      <div className="absolute inset-0 bg-gradient-mesh" />

      {/* Aurora blobs */}
      <div
        className="absolute -top-32 -left-20 w-[640px] h-[520px] rounded-full blur-[120px] animate-aurora will-change-transform"
        style={{
          background: "radial-gradient(circle, var(--aurora-blue) 0%, transparent 60%)",
          opacity: intense ? 0.32 : 0.18,
        }}
      />
      <div
        className="absolute top-10 right-[-120px] w-[560px] h-[480px] rounded-full blur-[120px] animate-aurora-slow will-change-transform"
        style={{
          background: "radial-gradient(circle, var(--aurora-violet) 0%, transparent 60%)",
          opacity: intense ? 0.28 : 0.16,
          animationDelay: "-6s",
        }}
      />
      <div
        className="absolute bottom-[-160px] left-1/3 w-[600px] h-[460px] rounded-full blur-[130px] animate-aurora will-change-transform"
        style={{
          background: "radial-gradient(circle, var(--aurora-teal) 0%, transparent 60%)",
          opacity: intense ? 0.22 : 0.12,
          animationDelay: "-12s",
        }}
      />
      {intense && (
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[300px] rounded-full blur-[100px] animate-pulse-soft"
          style={{
            background: "radial-gradient(circle, var(--aurora-magenta) 0%, transparent 65%)",
            opacity: 0.12,
          }}
        />
      )}

      {/* Animated grid */}
      <div className="absolute inset-0 grid-pattern opacity-70 animate-grid-drift [mask-image:radial-gradient(ellipse_at_center,black_15%,transparent_75%)]" />

      {/* Floating particles */}
      {intense && (
        <div className="absolute inset-0">
          {Array.from({ length: 18 }).map((_, i) => {
            const left = (i * 53) % 100;
            const delay = (i * 1.3) % 20;
            const duration = 18 + (i % 6) * 2;
            const size = 2 + (i % 3);
            return (
              <span
                key={i}
                className="absolute bottom-0 rounded-full animate-particle"
                style={{
                  left: `${left}%`,
                  width: size,
                  height: size,
                  background: i % 3 === 0
                    ? "var(--aurora-cyan)"
                    : i % 3 === 1
                    ? "var(--aurora-violet)"
                    : "var(--aurora-blue)",
                  boxShadow: "0 0 12px currentColor",
                  color: "var(--aurora-cyan)",
                  animationDelay: `-${delay}s`,
                  animationDuration: `${duration}s`,
                  opacity: 0,
                }}
              />
            );
          })}
        </div>
      )}

      {/* Top vignette to fade into page */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-background" />
    </div>
  );
}

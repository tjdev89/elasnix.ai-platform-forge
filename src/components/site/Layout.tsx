import { Header } from "./Header";
import { Footer } from "./Footer";

export function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Global ambient lighting */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div
          className="absolute top-[20%] -left-32 w-[500px] h-[500px] rounded-full blur-[140px] animate-aurora-slow"
          style={{ background: "radial-gradient(circle, var(--aurora-blue), transparent 60%)", opacity: 0.1 }}
        />
        <div
          className="absolute top-[60%] -right-32 w-[500px] h-[500px] rounded-full blur-[140px] animate-aurora"
          style={{ background: "radial-gradient(circle, var(--aurora-violet), transparent 60%)", opacity: 0.09, animationDelay: "-10s" }}
        />
        <div
          className="absolute bottom-[5%] left-1/3 w-[420px] h-[420px] rounded-full blur-[140px] animate-aurora-slow"
          style={{ background: "radial-gradient(circle, var(--aurora-teal), transparent 60%)", opacity: 0.07, animationDelay: "-16s" }}
        />
      </div>
      <Header />
      <main className="flex-1 pt-16">{children}</main>
      <Footer />
    </div>
  );
}

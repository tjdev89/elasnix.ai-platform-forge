import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const nav = [
  { to: "/services", label: "Services" },
  { to: "/solutions", label: "Solutions" },
  { to: "/technologies", label: "Technologies" },
  { to: "/why", label: "Why elasnix" },
  { to: "/about", label: "About" },
  { to: "/blog", label: "Blog" },
  { to: "/case-studies", label: "Case Studies" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="bg-background/75 backdrop-blur-md border-b border-border/60">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="relative">
              <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-primary-foreground" />
              </div>
            </div>
            <span className="font-display font-semibold text-lg tracking-tight">
              elasnix<span className="text-gradient-primary">.ai</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-md"
                activeProps={{ className: "px-3 py-2 text-sm text-foreground rounded-md bg-secondary/60" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-2">
            <Button asChild variant="ghost" size="sm">
              <Link to="/contact">Talk to an Expert</Link>
            </Button>
            <Button asChild size="sm" className="bg-gradient-primary border-0 hover:opacity-95">
              <Link to="/contact">Book a Consultation</Link>
            </Button>
          </div>

          <button className="lg:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {open && (
          <div className="lg:hidden border-t border-border/40 px-6 py-4 space-y-1 animate-fade-up">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="block py-2 text-sm text-muted-foreground hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-2 flex gap-2">
              <Button asChild size="sm" className="bg-gradient-primary border-0 flex-1">
                <Link to="/contact" onClick={() => setOpen(false)}>Book a Consultation</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

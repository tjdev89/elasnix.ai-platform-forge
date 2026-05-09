import { Link } from "@tanstack/react-router";
import { Sparkles, Github, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/40 mt-32">
      <div className="container mx-auto px-6 py-16 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="font-display font-semibold text-lg">
              elasnix<span className="text-gradient-primary">.ai</span>
            </span>
          </Link>
          <p className="mt-4 text-sm text-muted-foreground max-w-md">
            Engineering intelligent digital platforms with Agentic AI, cloud-native
            infrastructure, DevOps, and cybersecurity.
          </p>
          <div className="flex gap-3 mt-6">
            {[Github, Linkedin, Twitter].map((Icon, i) => (
              <a key={i} href="#" className="w-9 h-9 rounded-md glass flex items-center justify-center hover:text-primary transition-colors">
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/about" className="hover:text-foreground">About</Link></li>
            <li><Link to="/why" className="hover:text-foreground">Why elasnix</Link></li>
            <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
            <li><Link to="/case-studies" className="hover:text-foreground">Case Studies</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-4">Capabilities</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/services" className="hover:text-foreground">Services</Link></li>
            <li><Link to="/solutions" className="hover:text-foreground">Solutions</Link></li>
            <li><Link to="/technologies" className="hover:text-foreground">Technologies</Link></li>
            <li><Link to="/blog" className="hover:text-foreground">Blog</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/40">
        <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row justify-between text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} elasnix.ai — All rights reserved.</p>
          <p>Engineering Intelligent Digital Platforms.</p>
        </div>
      </div>
    </footer>
  );
}

import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { LogoMark } from "@/components/site/Logo";
import { ThemeToggle } from "@/components/site/ThemeProvider";

const NAV = [
  { to: "/services/social-media-marketing-mumbai", label: "Services" },
  { to: "/industries/restaurants", label: "Industries" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/packages", label: "Packages" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-[color:var(--color-hairline)] bg-background/70 backdrop-blur-xl">
      <div className="container-x flex h-16 items-center justify-between md:h-20">
        <Link to="/" className="flex items-center gap-3 group">
          <LogoMark className="h-8 w-8 text-foreground transition-transform group-hover:rotate-[8deg]" />
          <span className="logotype text-xl md:text-[1.4rem] leading-none">
            CloutNine
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              activeProps={{ className: "text-foreground" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link
            to="/contact"
            className="glass hidden md:inline-flex h-10 items-center rounded-full px-5 text-sm font-medium text-foreground"
          >
            Free Audit →
          </Link>
          <button
            onClick={() => setOpen((s) => !s)}
            className="glass lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full"
            aria-label="Menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-[color:var(--color-hairline)] bg-background">
          <div className="container-x py-6 flex flex-col gap-4">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="text-lg text-foreground/90"
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="glass mt-2 inline-flex h-11 items-center justify-center rounded-full px-5 text-sm font-medium text-foreground"
            >
              Get Your Free Audit
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

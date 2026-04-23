import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const NAV = [
  { to: "/services/social-media-marketing-mumbai", label: "Services" },
  { to: "/industries/restaurants", label: "Industries" },
  { to: "/locations/andheri", label: "Locations" },
  { to: "/case-studies", label: "Work" },
  { to: "/pricing", label: "Pricing" },
  { to: "/blog", label: "Insights" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-[color:var(--color-hairline)] bg-background/80 backdrop-blur-xl">
      <div className="container-x flex h-16 items-center justify-between md:h-20">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="display text-2xl md:text-3xl tracking-tight">
            Clout<span className="text-primary">Nine</span>
          </span>
          <span className="hidden md:inline text-[10px] uppercase tracking-[0.25em] text-muted-foreground border-l border-border pl-2 ml-1">
            Mumbai
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
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
          <Link
            to="/contact"
            className="hidden md:inline-flex h-10 items-center rounded-full bg-primary px-5 text-sm font-medium text-primary-foreground hover:opacity-90 transition"
          >
            Free Audit →
          </Link>
          <button
            onClick={() => setOpen((s) => !s)}
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center border border-border rounded-full"
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
              className="mt-2 inline-flex h-11 items-center justify-center rounded-full bg-primary px-5 text-sm font-medium text-primary-foreground"
            >
              Get Your Free Audit
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

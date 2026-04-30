import { Link } from "@tanstack/react-router";
import { SITE } from "@/lib/seo";
import { LogoMark } from "@/components/site/Logo";

const SERVICES = [
  { to: "/services/social-media-marketing-mumbai", label: "Social Media Marketing" },
  { to: "/services/instagram-marketing-mumbai", label: "Instagram Marketing" },
  { to: "/services/meta-ads-management-mumbai", label: "Meta Ads" },
  { to: "/services/website-development-mumbai", label: "Website Development" },
  { to: "/services/whatsapp-marketing-mumbai", label: "WhatsApp Marketing" },
] as const;

const LOCATIONS = [
  { to: "/locations/andheri", label: "Andheri" },
  { to: "/locations/bandra", label: "Bandra" },
  { to: "/locations/powai", label: "Powai" },
  { to: "/locations/thane", label: "Thane" },
] as const;

const INDUSTRIES = [
  { to: "/industries/restaurants", label: "Restaurants" },
  { to: "/industries/d2c-brands", label: "D2C Brands" },
  { to: "/industries/fitness", label: "Fitness" },
  { to: "/industries/real-estate", label: "Real Estate" },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-[color:var(--color-hairline)] mt-32">
      <div className="container-x py-20">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
          <div className="col-span-2">
            <div className="flex items-center gap-3">
              <LogoMark className="h-9 w-9 text-foreground" />
              <div className="display text-3xl">CloutNine</div>
            </div>
            <p className="mt-4 text-sm text-muted-foreground max-w-xs">
              A performance-driven social media agency in Mumbai. We turn content
              into qualified leads using paid distribution and conversion systems.
            </p>
            <Link
              to="/contact"
              className="glass mt-6 inline-flex h-11 items-center rounded-full px-5 text-sm font-medium text-foreground"
            >
              Get Your Free Audit →
            </Link>
          </div>

          <FooterCol title="Services" items={SERVICES} />
          <FooterCol title="Locations" items={LOCATIONS} />
          <FooterCol title="Industries" items={INDUSTRIES} />
        </div>

        <div className="mt-16 hairline pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} {SITE.name}. Built in Mumbai.</p>
          <div className="flex flex-wrap gap-6">
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            <a href={`tel:${SITE.phone}`}>{SITE.phone}</a>
            <span>Mumbai</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  items,
}: {
  title: string;
  items: readonly { to: string; label: string }[];
}) {
  return (
    <div>
      <h4 className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
        {title}
      </h4>
      <ul className="mt-5 space-y-3">
        {items.map((i) => (
          <li key={i.to}>
            <Link
              to={i.to}
              className="text-sm text-foreground/80 hover:text-foreground transition-colors"
            >
              {i.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

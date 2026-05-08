import { Link } from "@tanstack/react-router";
import { Linkedin, Facebook, Instagram } from "lucide-react";
import { SITE } from "@/lib/seo";
import { LogoMark } from "@/components/site/Logo";

const SOCIALS = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/cloutnine-in/?viewAsMember=true",
    Icon: Linkedin,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/people/cloutninein/61576100464851/",
    Icon: Facebook,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/cloutnine.in/",
    Icon: Instagram,
  },
] as const;

const SERVICES = [
  { to: "/services/social-media-marketing-mumbai", label: "Social Media Marketing" },
  { to: "/services/instagram-marketing-mumbai", label: "Instagram Marketing" },
  { to: "/services/meta-ads-management-mumbai", label: "Meta Ads" },
  { to: "/services/website-development-mumbai", label: "Website Development" },
  { to: "/services/whatsapp-marketing-mumbai", label: "WhatsApp Marketing" },
] as const;

const RESOURCES = [
  { to: "/social-media-marketing-cost-mumbai", label: "Social Media Marketing Cost" },
  { to: "/how-to-choose-social-media-agency-mumbai", label: "How to Choose an Agency" },
  { to: "/social-media-marketing-for-restaurants-mumbai", label: "For Restaurants" },
  { to: "/instagram-marketing-agency-mumbai-guide", label: "Instagram Agency Guide" },
  { to: "/social-media-agency-vs-inhouse-vs-freelancer-mumbai", label: "Agency vs In-house vs Freelancer" },
] as const;


export function Footer() {
  return (
    <footer className="border-t border-[color:var(--color-hairline)] mt-32">
      <div className="container-x py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
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
          <FooterCol title="Resources" items={RESOURCES} />
        </div>

        <div className="mt-16 hairline pt-8 flex flex-col gap-6 md:flex-row md:items-center md:justify-between text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} {SITE.name}. Built in Mumbai.</p>
          <div className="flex flex-wrap items-center gap-6">
            <a href={`mailto:${SITE.email}`} className="hover:text-foreground transition-colors">{SITE.email}</a>
            <a href={`tel:${SITE.phone}`} className="hover:text-foreground transition-colors">{SITE.phone}</a>
            <span>Mumbai</span>
            <div className="flex items-center gap-2 md:ml-2">
              {SOCIALS.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  title={label}
                  className="glass inline-flex h-9 w-9 items-center justify-center rounded-full text-foreground/80 hover:text-foreground"
                >
                  <Icon className="h-4 w-4" strokeWidth={1.75} />
                </a>
              ))}
            </div>
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

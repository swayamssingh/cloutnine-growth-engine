import { createFileRoute, Link } from "@tanstack/react-router";
import { Section } from "@/components/site/Section";
import { Check } from "lucide-react";

export const Route = createFileRoute("/packages")({
  head: () => ({
    meta: [
      { title: "Packages & Pricing | CloutNine — Social Media & Website Plans" },
      {
        name: "description",
        content:
          "Transparent CloutNine packages for social media management and website builds. Starter, Growth, Scale, Launch, Premium and Enterprise — plus custom scopes.",
      },
      { property: "og:title", content: "CloutNine Packages — Social Media & Websites" },
      {
        property: "og:description",
        content:
          "Three social media retainers and three website tiers, plus custom scope. Monochrome, transparent pricing.",
      },
    ],
  }),
  component: PackagesPage,
});

type Group = { label: string; items: string[] };
type SocialPkg = {
  name: string;
  price: string;
  sub: string;
  growth: string;
  featured?: boolean;
  groups: Group[];
};
type WebPkg = {
  name: string;
  price: string;
  sub: string;
  featured?: boolean;
  features: string[];
};

const SOCIAL: SocialPkg[] = [
  {
    name: "Starter",
    price: "₹15,000",
    sub: "/month",
    growth: "Expected growth: foundation + first traction",
    groups: [
      {
        label: "Content",
        items: [
          "8 posts / month (reels + carousels)",
          "Posted on Instagram + Facebook",
          "Caption copywriting",
          "Hashtag strategy",
        ],
      },
      {
        label: "Identity & Setup",
        items: [
          "Instagram + Facebook bio optimisation",
          "Google Business Profile setup",
          "WhatsApp Business setup",
          "Linktree setup",
        ],
      },
      {
        label: "Ads",
        items: ["1 Meta ad campaign (₹2,000 ad budget included)"],
      },
      {
        label: "Reporting",
        items: ["Monthly performance report"],
      },
    ],
  },
  {
    name: "Growth",
    price: "₹25,000",
    sub: "/month",
    featured: true,
    growth: "Expected growth: consistent reach + qualified leads",
    groups: [
      {
        label: "Content",
        items: [
          "12 posts / month (reels + carousels)",
          "Instagram + Facebook + YouTube Shorts",
          "4 story templates / month",
          "Caption copywriting",
          "Hashtag + audio strategy",
        ],
      },
      {
        label: "Identity & Setup",
        items: [
          "Full channel optimisation (IG, FB, YT, WhatsApp)",
          "Google Business Profile setup + management",
          "Highlights + bio + Linktree",
        ],
      },
      {
        label: "Ads",
        items: [
          "1 Meta ad campaign (₹3,000 ad budget included)",
          "Audience targeting + creative",
        ],
      },
      {
        label: "Reporting",
        items: ["Bi-weekly report + ad insights", "WhatsApp support"],
      },
    ],
  },
  {
    name: "Scale",
    price: "₹40,000",
    sub: "/month",
    growth: "Expected growth: category presence + scaled pipeline",
    groups: [
      {
        label: "Content",
        items: [
          "16 posts / month (reels + carousels + static)",
          "Instagram + Facebook + YouTube Shorts",
          "8 story templates / month",
          "Caption copywriting + content calendar",
        ],
      },
      {
        label: "Identity & Setup",
        items: [
          "Full channel optimisation + monthly refresh",
          "Google Business — posts + review management",
        ],
      },
      {
        label: "Ads",
        items: [
          "2 Meta ad campaigns (₹5,000 ad budget included)",
          "A/B creative testing",
          "Retargeting setup",
        ],
      },
      {
        label: "Reporting",
        items: [
          "Weekly report + strategy call",
          "Dedicated WhatsApp + priority support",
        ],
      },
    ],
  },
];

const WEBSITES: WebPkg[] = [
  {
    name: "Launch",
    price: "₹15,000",
    sub: "one-time",
    features: [
      "3–5 page website",
      "Mobile responsive",
      "No-code platform",
      "Menu / gallery section",
      "WhatsApp click-to-chat",
      "Google Maps embed",
      "1 round of revisions",
    ],
  },
  {
    name: "Premium",
    price: "₹25,000",
    sub: "one-time",
    featured: true,
    features: [
      "5–8 page website",
      "Custom design + animations",
      "No-code or custom HTML/CSS",
      "Instagram feed integration",
      "WhatsApp + booking integration",
      "Basic SEO setup",
      "Google Analytics",
      "2 rounds of revisions",
    ],
  },
  {
    name: "Enterprise",
    price: "₹45,000+",
    sub: "one-time",
    features: [
      "Full custom build",
      "E-commerce or ordering system",
      "Custom animations + UI",
      "Full SEO + performance audit",
      "CMS integration",
      "3 rounds of revisions",
      "30-day post-launch support",
    ],
  },
];

function FeaturedBadge() {
  return (
    <span className="inline-flex items-center rounded-full border border-[color:var(--color-border-strong)] px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-foreground/80">
      Most Popular
    </span>
  );
}

function SocialCard({ p }: { p: SocialPkg }) {
  return (
    <div
      className={
        "relative flex flex-col rounded-md p-8 md:p-10 bg-surface transition-colors " +
        (p.featured
          ? "border border-[color:var(--color-border-strong)]"
          : "border border-[color:var(--color-hairline)] hover:border-[color:var(--color-border-strong)]")
      }
    >
      <div className="flex items-start justify-between gap-4">
        <h3 className="display text-3xl">{p.name}</h3>
        {p.featured && <FeaturedBadge />}
      </div>

      <div className="mt-6 flex items-baseline gap-2">
        <span className="display text-5xl">{p.price}</span>
        <span className="text-muted-foreground text-sm">{p.sub}</span>
      </div>

      <div className="mt-8 space-y-6 flex-1">
        {p.groups.map((g) => (
          <div key={g.label}>
            <div className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
              {g.label}
            </div>
            <ul className="mt-3 space-y-2">
              {g.items.map((it) => (
                <li key={it} className="flex items-start gap-3 text-sm">
                  <Check className="mt-0.5 h-4 w-4 text-foreground/70 shrink-0" />
                  <span className="text-foreground/90">{it}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <span className="inline-flex items-center rounded-full bg-[color:var(--color-glass)] border border-[color:var(--color-hairline)] px-3 py-1 text-[11px] text-muted-foreground">
          {p.growth}
        </span>
      </div>

      <Link
        to="/contact"
        className={
          "mt-8 inline-flex h-11 w-full items-center justify-center rounded-full px-6 text-sm font-medium transition " +
          (p.featured
            ? "bg-primary text-primary-foreground hover:bg-primary/90"
            : "border border-[color:var(--color-border-strong)] hover:bg-[color:var(--color-glass)]")
        }
      >
        Start with {p.name}
      </Link>
    </div>
  );
}

function WebsiteCard({ p }: { p: WebPkg }) {
  return (
    <div
      className={
        "relative flex flex-col rounded-md p-8 md:p-10 bg-surface transition-colors " +
        (p.featured
          ? "border border-[color:var(--color-border-strong)]"
          : "border border-[color:var(--color-hairline)] hover:border-[color:var(--color-border-strong)]")
      }
    >
      <div className="flex items-start justify-between gap-4">
        <h3 className="display text-3xl">{p.name}</h3>
        {p.featured && <FeaturedBadge />}
      </div>

      <div className="mt-6 flex items-baseline gap-2">
        <span className="display text-5xl">{p.price}</span>
        <span className="text-muted-foreground text-sm">{p.sub}</span>
      </div>

      <ul className="mt-8 space-y-3 flex-1">
        {p.features.map((f) => (
          <li key={f} className="flex items-start gap-3 text-sm">
            <Check className="mt-0.5 h-4 w-4 text-foreground/70 shrink-0" />
            <span className="text-foreground/90">{f}</span>
          </li>
        ))}
      </ul>

      <Link
        to="/contact"
        className={
          "mt-10 inline-flex h-11 w-full items-center justify-center rounded-full px-6 text-sm font-medium transition " +
          (p.featured
            ? "bg-primary text-primary-foreground hover:bg-primary/90"
            : "border border-[color:var(--color-border-strong)] hover:bg-[color:var(--color-glass)]")
        }
      >
        Choose {p.name}
      </Link>
    </div>
  );
}

function CustomCard({
  label,
  body,
}: {
  label: string;
  body: string;
}) {
  return (
    <div className="rounded-md border border-[color:var(--color-hairline)] bg-surface p-8 md:p-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
      <div className="max-w-2xl">
        <div className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
          {label}
        </div>
        <p className="mt-3 text-lg text-foreground/90">{body}</p>
      </div>
      <Link
        to="/contact"
        className="inline-flex h-11 items-center justify-center rounded-full border border-[color:var(--color-border-strong)] px-6 text-sm font-medium hover:bg-[color:var(--color-glass)] transition shrink-0"
      >
        Let's Talk →
      </Link>
    </div>
  );
}

function PackagesPage() {
  return (
    <>
      <section className="border-b border-[color:var(--color-hairline)] grain">
        <div className="container-x pt-20 pb-16">
          <span className="eyebrow">Packages</span>
          <h1 className="display-xl mt-8 max-w-[18ch]">
            Our Packages.<br />
            <span className="text-muted-foreground">Built to scale with you.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
            Two clear tracks — social media retainers and one-time website
            builds. Pick a tier, or scope a custom mix on a call.
          </p>
        </div>
      </section>

      {/* SOCIAL MEDIA PACKAGES */}
      <Section
        eyebrow="Social Media Packages"
        title="Content, identity, ads — productised."
      >
        <div className="grid md:grid-cols-3 gap-5">
          {SOCIAL.map((p) => (
            <SocialCard key={p.name} p={p} />
          ))}
        </div>

        <div className="mt-5">
          <CustomCard
            label="Custom"
            body="For businesses that need a tailored mix — different volumes, multiple platforms, or campaign-specific work. Priced on scope."
          />
        </div>
      </Section>

      {/* WEBSITE PACKAGES */}
      <Section
        eyebrow="Website Packages"
        title="Conversion-first websites, fixed scope."
      >
        <div className="grid md:grid-cols-3 gap-5">
          {WEBSITES.map((p) => (
            <WebsiteCard key={p.name} p={p} />
          ))}
        </div>

        <div className="mt-5">
          <CustomCard
            label="Custom Website"
            body="Specific integrations, multilingual sites, web apps, or bundled social + web retainers. Scoped on a call."
          />
        </div>
      </Section>
    </>
  );
}

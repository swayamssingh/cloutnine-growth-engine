import { createFileRoute, Link } from "@tanstack/react-router";
import { Section, FAQ } from "@/components/site/Section";
import { faqSchema, jsonLd } from "@/lib/seo";
import { Check } from "lucide-react";

const FAQS = [
  { q: "Are these prices final?", a: "Retainers are. Ad spend is separate and you control it. We don't mark up media spend — ever." },
  { q: "Is there a setup fee?", a: "Yes — a one-time ₹35,000–₹75,000 onboarding (audit, account setup, tracking, first creative batch). Waived on 6-month engagements." },
  { q: "What if we want to stop?", a: "30 days written notice. No annual lock-in. You keep all assets, accounts and data." },
  { q: "Do you do project work or only retainers?", a: "Websites and audits are project-based. Marketing is always retainer — performance compounds, one-off projects don't." },
];

const TIERS = [
  {
    name: "Launch",
    price: "₹65,000",
    sub: "/month",
    blurb: "For founders ready to stop posting from their phone.",
    features: [
      "8 posts + 4 Reels / month",
      "1 monthly shoot day",
      "Community management",
      "Monthly Loom + report",
      "WhatsApp support line",
    ],
  },
  {
    name: "Scale",
    price: "₹1,45,000",
    sub: "/month",
    blurb: "Our most-picked. Content + Meta Ads as one engine.",
    featured: true,
    features: [
      "12 posts + 8 Reels / month",
      "Meta Ads management (up to ₹3L spend)",
      "Landing page A/B testing",
      "WhatsApp automation setup",
      "Weekly Loom + dashboard",
      "Bi-weekly strategy call",
    ],
  },
  {
    name: "Dominate",
    price: "₹2,85,000",
    sub: "/month",
    blurb: "For brands chasing category leadership in Mumbai.",
    features: [
      "20+ assets/month, multi-shoot",
      "Meta + Google Ads (up to ₹10L spend)",
      "Conversion-rate optimisation",
      "Influencer + PR layer",
      "WhatsApp + email retention",
      "Weekly strategy with founder",
    ],
  },
];

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Social Media Agency Pricing in Mumbai | CloutNine Plans" },
      { name: "description", content: "Transparent pricing for Mumbai's performance social media agency. Retainers from ₹65,000/month — content, Meta Ads, WhatsApp." },
      { property: "og:title", content: "CloutNine Pricing | Mumbai Social Media Agency" },
      { property: "og:description", content: "Three tiers, transparent retainers, no media-spend mark-up." },
    ],
    scripts: [jsonLd(faqSchema(FAQS))],
  }),
  component: Pricing,
});

function Pricing() {
  return (
    <>
      <section className="border-b border-[color:var(--color-hairline)] grain">
        <div className="container-x pt-20 pb-16">
          <span className="eyebrow">Pricing</span>
          <h1 className="display-xl mt-8 max-w-[16ch]">
            Transparent. <span className="text-primary">No mark-up.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
            Three tiers. You pick based on ambition, not negotiation. Ad spend
            is yours and unmarked. Stop with 30 days notice.
          </p>
        </div>
      </section>

      <Section className="!py-20">
        <div className="grid md:grid-cols-3 gap-px bg-[color:var(--color-hairline)] border border-[color:var(--color-hairline)]">
          {TIERS.map((t) => (
            <div
              key={t.name}
              className={
                "p-8 md:p-10 " +
                (t.featured ? "bg-surface" : "bg-background")
              }
            >
              <div className="flex items-baseline justify-between">
                <h3 className="display text-3xl">{t.name}</h3>
                {t.featured && (
                  <span className="text-[10px] uppercase tracking-[0.22em] text-primary">
                    Most picked
                  </span>
                )}
              </div>
              <div className="mt-8 flex items-baseline gap-2">
                <span className="display text-6xl">{t.price}</span>
                <span className="text-muted-foreground">{t.sub}</span>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">{t.blurb}</p>
              <ul className="mt-8 space-y-3">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <Check className="mt-0.5 h-4 w-4 text-primary shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className={
                  "mt-10 inline-flex h-12 w-full items-center justify-center rounded-full px-6 text-sm font-medium transition " +
                  (t.featured
                    ? "bg-primary text-primary-foreground"
                    : "border border-border-strong hover:bg-surface")
                }
              >
                Start with {t.name}
              </Link>
            </div>
          ))}
        </div>

        <p className="mt-8 text-sm text-muted-foreground max-w-2xl">
          Need a one-off website, audit or campaign? See{" "}
          <Link to="/services/website-development-mumbai" className="text-primary underline-offset-4 hover:underline">
            website projects
          </Link>{" "}
          or{" "}
          <Link to="/contact" className="text-primary underline-offset-4 hover:underline">
            request a custom scope
          </Link>.
        </p>
      </Section>

      <Section eyebrow="Pricing FAQ" title="Costs, scope, exit.">
        <FAQ items={FAQS} />
      </Section>
    </>
  );
}

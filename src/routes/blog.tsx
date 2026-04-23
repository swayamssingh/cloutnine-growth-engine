import { createFileRoute, Link } from "@tanstack/react-router";
import { Section } from "@/components/site/Section";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Insights — Social Media, Ads & Growth | CloutNine Mumbai" },
      { name: "description", content: "Playbooks, teardowns and frameworks for social media marketing, Meta Ads and growth — written by the CloutNine team in Mumbai." },
      { property: "og:title", content: "CloutNine Insights — Social Media & Growth Playbooks" },
      { property: "og:description", content: "Playbooks, teardowns and frameworks from a Mumbai performance agency." },
    ],
  }),
  component: Blog,
});

const POSTS = [
  { slug: "cost-of-social-media-marketing-mumbai-2026", title: "How much does social media marketing cost in Mumbai in 2026?", cat: "Pricing Guide", read: "8 min" },
  { slug: "instagram-reels-strategy-mumbai-small-business", title: "The Instagram Reels strategy that's working for Mumbai small businesses", cat: "Instagram", read: "11 min" },
  { slug: "how-to-choose-social-media-agency-mumbai", title: "How to choose a social media agency in Mumbai (without getting burned)", cat: "Decision Guide", read: "9 min" },
  { slug: "meta-ads-creative-testing-framework-2026", title: "The Meta Ads creative-testing framework we use in 2026", cat: "Paid Ads", read: "13 min" },
  { slug: "whatsapp-marketing-d2c-india", title: "WhatsApp marketing for D2C brands in India: the full playbook", cat: "WhatsApp", read: "15 min" },
  { slug: "local-seo-mumbai-businesses", title: "Local SEO for Mumbai businesses: the 2026 checklist", cat: "SEO", read: "10 min" },
  { slug: "social-media-marketing-trends-2026-india", title: "Social media marketing trends 2026 for Indian brands", cat: "Trends", read: "12 min" },
  { slug: "real-estate-lead-generation-mumbai", title: "Real estate lead generation in Mumbai: from CPL to closed sale", cat: "Real Estate", read: "14 min" },
];

function Blog() {
  return (
    <>
      <section className="border-b border-[color:var(--color-hairline)] grain">
        <div className="container-x pt-20 pb-16">
          <span className="eyebrow">Insights</span>
          <h1 className="display-xl mt-8 max-w-[16ch]">
            Playbooks. <span className="text-primary">Not theory.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
            What we're testing, breaking and shipping in Mumbai right now.
            Written by the team running the accounts — no SEO interns.
          </p>
        </div>
      </section>

      <Section className="!py-20">
        <div className="divide-y divide-[color:var(--color-hairline)] border-y border-[color:var(--color-hairline)]">
          {POSTS.map((p) => (
            <Link
              key={p.slug}
              to="/blog"
              className="group flex flex-col md:flex-row md:items-center md:justify-between gap-4 py-8 hover:bg-surface px-2 transition-colors"
            >
              <div className="flex-1">
                <span className="text-[11px] uppercase tracking-[0.22em] text-primary">
                  {p.cat} · {p.read}
                </span>
                <h3 className="font-sans text-xl md:text-2xl font-medium normal-case tracking-normal mt-3 group-hover:text-primary transition-colors">
                  {p.title}
                </h3>
              </div>
              <span className="text-sm text-muted-foreground shrink-0">Read →</span>
            </Link>
          ))}
        </div>

        <p className="mt-12 text-sm text-muted-foreground">
          More long-form drops every week. Want them by WhatsApp?{" "}
          <Link to="/contact" className="text-primary underline-offset-4 hover:underline">
            Subscribe here
          </Link>.
        </p>
      </Section>
    </>
  );
}

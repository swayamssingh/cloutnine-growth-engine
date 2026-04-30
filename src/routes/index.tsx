import { createFileRoute, Link } from "@tanstack/react-router";
import { Section, FAQ, MetricCard } from "@/components/site/Section";
import { PortfolioPreview } from "@/components/site/PortfolioPreview";
import { AuditForm } from "@/components/site/AuditForm";
import { VideoHero } from "@/components/site/VideoHero";
import { faqSchema, jsonLd } from "@/lib/seo";
import { ArrowUpRight } from "lucide-react";

const FAQS = [
  {
    q: "What does a social media agency in Mumbai actually do?",
    a: "We run the full growth stack: organic content (Reels, posts, hooks), paid distribution (Meta, Google), conversion (landing pages, WhatsApp, lead capture) and measurement. The output is qualified leads or sales — not vanity engagement.",
  },
  {
    q: "How much does social media marketing cost in Mumbai?",
    a: "Retainers start at ₹65,000/month for content + community, and ₹1.2L–₹3L/month for full-stack content + paid + funnel. Ad spend is separate and you control it. We share transparent scope, deliverables and KPIs upfront.",
  },
  {
    q: "How is CloutNine different from other Mumbai SMM agencies?",
    a: "Most agencies sell deliverables. We sell a system: content → ads → website → WhatsApp, all stitched into one funnel with weekly reporting. Less posting calendar theatre, more pipeline.",
  },
  {
    q: "How long until I see results?",
    a: "Paid: qualified leads inside 14 days. Organic: a real shift in 60–90 days as we test and double down on what compounds. We share weekly numbers, not monthly screenshots.",
  },
  {
    q: "Do you work with brands outside Mumbai?",
    a: "Yes. We're based in Andheri but run accounts across India and the UAE. Most of our work happens async — Loom, WhatsApp, Notion — with monthly in-person sessions for Mumbai clients.",
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "Social Media Agency Mumbai | CloutNine — Content, Ads & Growth Systems",
      },
      {
        name: "description",
        content:
          "CloutNine is a performance-driven social media agency in Mumbai. We turn content into qualified leads using paid distribution, websites and WhatsApp — one growth engine.",
      },
      { property: "og:title", content: "Social Media Agency Mumbai | CloutNine" },
      {
        property: "og:description",
        content:
          "Performance-driven social media agency in Mumbai. Content, Meta Ads, websites and WhatsApp — one growth engine.",
      },
    ],
    scripts: [jsonLd(faqSchema(FAQS))],
  }),
  component: Index,
});

const SERVICES = [
  {
    n: "01",
    title: "Social Media Marketing",
    body: "Hooks, Reels and posts engineered to be paid. Built for the algorithm, not the awards.",
    to: "/services/social-media-marketing-mumbai" as const,
  },
  {
    n: "02",
    title: "Instagram Marketing",
    body: "Reels-first growth: 8–15 posts a month, 3 boosted, weekly creative iteration.",
    to: "/services/instagram-marketing-mumbai" as const,
  },
  {
    n: "03",
    title: "Meta Ads Management",
    body: "Performance creative + media buying. We optimise for revenue, not CTR.",
    to: "/services/meta-ads-management-mumbai" as const,
  },
  {
    n: "04",
    title: "Website Development",
    body: "Conversion-first websites in Webflow / React. Fast, indexable, lead-ready.",
    to: "/services/website-development-mumbai" as const,
  },
  {
    n: "05",
    title: "WhatsApp Marketing",
    body: "Broadcast, automation and click-to-WhatsApp ads — close warm leads in minutes.",
    to: "/services/whatsapp-marketing-mumbai" as const,
  },
];

function Index() {
  return (
    <>
      {/* HERO — Video */}
      <VideoHero />

      {/* PORTFOLIO PREVIEW */}
      <PortfolioPreview />

      {/* SERVICES */}
      <Section
        eyebrow="What we do"
        title={
          <>
            One agency.<br />
            <span className="text-muted-foreground">One growth engine.</span>
          </>
        }
        intro="Most agencies sell pieces. We assemble the whole machine — and operate it weekly."
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((s, i) => {
            const tints = [
              "var(--wave-blue)",
              "var(--wave-purple)",
              "var(--wave-pink)",
              "var(--wave-orange)",
              "var(--wave-yellow)",
            ];
            return (
              <Link
                key={s.n}
                to={s.to}
                className="card-tint group p-8 md:p-10 block"
                style={{ ["--tint" as never]: tints[i % tints.length] }}
              >
                <div className="flex items-start justify-between">
                  <span className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
                    {s.n}
                  </span>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                </div>
                <h3 className="display text-3xl mt-10">{s.title}</h3>
                <p className="mt-4 text-muted-foreground">{s.body}</p>
              </Link>
            );
          })}
        </div>
      </Section>

      {/* PROCESS */}
      <Section eyebrow="The system" title="How we operate.">
        <div className="grid md:grid-cols-4 gap-10">
          {[
            { n: "01", t: "Audit", b: "Free 48-hour teardown of content, ads and funnel. Loom + written plan." },
            { n: "02", t: "Engineer", b: "Build the stack: content, ads, landing pages, WhatsApp routing, dashboards." },
            { n: "03", t: "Operate", b: "Weekly creative tests, daily ad ops, monthly strategy review. Async by default." },
            { n: "04", t: "Compound", b: "Double down on what works. Kill what doesn't. Reinvest gains into the next test." },
          ].map((s) => (
            <div key={s.n}>
              <div className="display text-5xl text-primary">{s.n}</div>
              <h4 className="mt-4 text-base font-medium">{s.t}</h4>
              <p className="mt-2 text-sm text-muted-foreground">{s.b}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CASE STUDY TEASER */}
      <Section eyebrow="Selected work" title="Outcomes, not dashboards.">
        <div className="grid md:grid-cols-3 gap-5">
          {[
            { tag: "D2C Skincare · Mumbai", h: "₹5L → ₹25L MRR in 6 months", b: "Reels-led top-of-funnel + Meta retargeting + WhatsApp recovery.", tint: "var(--wave-pink)" },
            { tag: "Restaurant · Bandra", h: "31% lift in dine-in covers", b: "Geo-targeted Reels + Click-to-WhatsApp reservations.", tint: "var(--wave-orange)" },
            { tag: "Real Estate · Powai", h: "212 site-visits in 90 days", b: "Lead-gen ads + landing page + on-call WhatsApp triage.", tint: "var(--wave-blue)" },
          ].map((c) => (
            <div
              key={c.h}
              className="card-tint p-8 md:p-10"
              style={{ ["--tint" as never]: c.tint }}
            >
              <span className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                {c.tag}
              </span>
              <h3 className="display text-3xl mt-6">{c.h}</h3>
              <p className="mt-4 text-muted-foreground">{c.b}</p>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 text-sm text-foreground hover:text-primary transition"
          >
            All case studies <ArrowUpRight size={16} />
          </Link>
        </div>
      </Section>

      {/* TESTIMONIALS */}
      <Section eyebrow="What clients say" title="">
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { q: "They run our growth stack like a CFO would. Every rupee has a number against it.", n: "Aarav Mehta", r: "Founder, D2C Skincare", tint: "var(--wave-blue)" },
            { q: "We replaced three vendors with CloutNine. Output went up, drama went down.", n: "Priya Shah", r: "Head of Marketing, Restaurant Group", tint: "var(--wave-purple)" },
          ].map((t) => (
            <figure
              key={t.n}
              className="card-tint p-8"
              style={{ ["--tint" as never]: t.tint }}
            >
              <blockquote className="text-xl md:text-2xl leading-snug">
                "{t.q}"
              </blockquote>
              <figcaption className="mt-6 text-sm text-muted-foreground">
                {t.n} — <span className="text-foreground/70">{t.r}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section eyebrow="FAQ" title="The questions you'd ask on a call.">
        <FAQ items={FAQS} />
      </Section>

      {/* AUDIT CTA */}
      <Section className="!pt-12">
        <div
          className="card-tint section-glow grain p-8 md:p-14"
          style={{
            ["--tint" as never]: "var(--wave-blue)",
            ["--glow-a" as never]: "var(--wave-purple)",
            ["--glow-b" as never]: "var(--wave-pink)",
          }}
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="eyebrow">Free Audit</span>
              <h2 className="display-lg mt-6">
                Find the leak before you fix it.
              </h2>
              <p className="mt-6 text-muted-foreground max-w-xl">
                We tear down your content, ads and funnel and send back a Loom +
                written plan within 48 hours. No deck. No pitch. Just numbers.
              </p>
              <ul className="mt-8 space-y-3 text-sm text-muted-foreground">
                <li>· Where you're losing revenue right now</li>
                <li>· The 3 highest-leverage fixes for the next 30 days</li>
                <li>· Whether you even need an agency (we'll tell you)</li>
              </ul>
            </div>
            <AuditForm />
          </div>
        </div>
      </Section>
    </>
  );
}

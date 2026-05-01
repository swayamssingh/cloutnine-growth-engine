import { createFileRoute } from "@tanstack/react-router";
import { LandingPage } from "@/components/site/LandingPage";
import { faqSchema, jsonLd, serviceSchema, SITE } from "@/lib/seo";

const FAQS = [
  { q: "What does your social media marketing service in Mumbai include?", a: "Strategy, content production (Reels, posts, carousels), community management, paid distribution on Meta, monthly reporting and a dedicated WhatsApp line. We operate the account end-to-end." },
  { q: "How is this different from hiring a freelancer?", a: "A freelancer publishes. We engineer a system: content engineered for ads, ads engineered for landing pages, landing pages engineered for WhatsApp. One brief, one team, one P&L." },
  { q: "Do you handle ad spend separately?", a: "Yes. You fund Meta directly. We manage spend, creative, audiences and weekly optimisation. Full transparency in your Business Manager." },
  { q: "What size of business do you work with?", a: "D2C brands at ₹20L–₹5Cr/month revenue, restaurants, real estate developers, fitness chains and SaaS startups. We don't take on local-only kirana or one-man services — wrong leverage." },
  { q: "Can I see results before paying for a full month?", a: "We start with a paid 2-week sprint for new accounts. If we don't move a real metric, you don't continue. Most do." },
];

export const Route = createFileRoute("/services/social-media-marketing-mumbai")({
  head: () => ({
    meta: [
      { title: "Social Media Marketing Agency in Mumbai | CloutNine" },
      { name: "description", content: "Performance-driven social media marketing in Mumbai. Content + Meta Ads + WhatsApp built into one growth engine. Free 48-hour audit." },
      { property: "og:title", content: "Social Media Marketing Agency in Mumbai" },
      { property: "og:description", content: "Content, ads and conversion stitched into one growth engine. Mumbai's performance-first SMM agency." },
    ],
    scripts: [
      jsonLd(faqSchema(FAQS)),
      jsonLd(serviceSchema({
        name: "Social Media Marketing",
        description: "Full-stack social media marketing combining organic content, Meta Ads and WhatsApp conversion.",
        url: `${SITE.url}/services/social-media-marketing-mumbai`,
      })),
    ],
  }),
  component: () => (
    <LandingPage
      eyebrow="Social Media Marketing · Mumbai"
      h1={<>The social media agency Mumbai brands hire to <span className="text-primary">grow revenue</span>.</>}
      intro="We build content engineered to be paid, ads engineered to convert, and WhatsApp flows engineered to close. One team. One system. Weekly accountability."
      deliverables={[
        { title: "Content production", body: "8–20 posts/Reels per month, scripted, shot and edited by the in-house team in Mumbai." },
        { title: "Paid distribution", body: "Meta Ads strategy, daily ad ops, weekly creative iteration. We optimise for revenue, not CTR." },
        { title: "Conversion layer", body: "Landing pages, click-to-WhatsApp ads and CRM routing so warm leads close in minutes, not days." },
        { title: "Reporting that matters", body: "Weekly Loom + Notion dashboard. CAC, LTV, ROAS — not impressions and reach." },
      ]}
      process={[
        { step: "01", title: "Audit", body: "48-hour free teardown of your current stack." },
        { step: "02", title: "Engineer", body: "Build the content, ads and funnel system." },
        { step: "03", title: "Operate", body: "Daily ops, weekly tests, monthly strategy." },
        { step: "04", title: "Compound", body: "Reinvest into what works. Kill the rest." },
      ]}
      proofPoints={[
        "Single point of contact — no account-manager telephone game",
        "Content team based in Mumbai for in-person shoot days",
        "Transparent pricing, transparent ad spend, transparent reporting",
        "We sign IP and exclusivity clauses by category",
        "You own all assets, accounts and data — always",
        "Stop anytime with 30 days notice. No annual lock-in.",
      ]}
      faqs={FAQS}
    />
  ),
});

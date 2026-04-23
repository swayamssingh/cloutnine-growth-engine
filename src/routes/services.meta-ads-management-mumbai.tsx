import { createFileRoute } from "@tanstack/react-router";
import { LandingPage } from "@/components/site/LandingPage";
import { faqSchema, jsonLd, serviceSchema, SITE } from "@/lib/seo";

const FAQS = [
  { q: "What's a good ROAS for Meta Ads in India?", a: "Depends on category. D2C: 3–6×. Lead-gen (real estate, education): ₹250–₹900 cost per qualified lead. Restaurants: 7–12× on offers. We share benchmarks in your audit." },
  { q: "Do you make the ad creative?", a: "Yes. Most agencies fail at media buying because their creative is weak. Our content team produces 12–25 ad creatives per month, tested in real audiences." },
  { q: "How do you structure campaigns in 2026?", a: "Advantage+ Shopping for D2C, Advantage+ Lead for services, broad targeting with creative-led testing. Manual interest stacks only for niche categories." },
  { q: "Will you work with my existing ad account?", a: "Yes. You keep ownership and admin. We're added as agency partner. You can revoke access anytime." },
  { q: "What's the minimum ad spend?", a: "₹60,000/month for meaningful learning. Below that, you're paying for variance, not insight." },
];

export const Route = createFileRoute("/services/meta-ads-management-mumbai")({
  head: () => ({
    meta: [
      { title: "Meta Ads Agency in Mumbai | Facebook & Instagram Ads | CloutNine" },
      { name: "description", content: "Meta Ads agency in Mumbai. Performance creative + media buying optimised for revenue. Manage Facebook & Instagram ads for D2C, services and lead-gen brands." },
      { property: "og:title", content: "Meta Ads Agency in Mumbai | CloutNine" },
      { property: "og:description", content: "Performance creative + media buying. Mumbai's Meta Ads agency for serious growth." },
    ],
    scripts: [
      jsonLd(faqSchema(FAQS)),
      jsonLd(serviceSchema({
        name: "Meta Ads Management",
        description: "Facebook and Instagram ads management with in-house creative production for Mumbai brands.",
        url: `${SITE.url}/services/meta-ads-management-mumbai`,
      })),
    ],
  }),
  component: () => (
    <LandingPage
      eyebrow="Meta Ads · Mumbai"
      h1={<>Meta Ads that move <span className="text-primary">revenue</span>, not dashboards.</>}
      intro="Performance creative + disciplined media buying. We obsess over CAC, ROAS and incremental lift — not impressions or thumb-stops in a Google Slides deck."
      metrics={[
        { value: "₹14Cr+", label: "Spend managed" },
        { value: "3.8×", label: "Avg ROAS" },
        { value: "₹287", label: "Avg CPL" },
        { value: "−42%", label: "Avg CAC drop" },
      ]}
      deliverables={[
        { title: "Creative-led testing", body: "12–25 fresh ad creatives per month. Hooks, statics, UGC, founder-led — whatever the data points to." },
        { title: "Account architecture", body: "Advantage+, ASC, lead-gen and retargeting structured to your funnel — not a generic template." },
        { title: "Daily media buying", body: "Bid, budget and audience optimisation. We don't 'set and forget'." },
        { title: "Conversion tracking", body: "Pixel, CAPI and offline conversion uploads done right. No more attribution guesswork." },
      ]}
      process={[
        { step: "01", title: "Audit", body: "We pull 90 days of your Ads Manager data." },
        { step: "02", title: "Rebuild", body: "Restructure account, fix tracking, ship 10 creatives." },
        { step: "03", title: "Scale", body: "Increase budget on winners, cut losers fast." },
        { step: "04", title: "Compound", body: "Refresh creatives weekly to stop fatigue." },
      ]}
      proofPoints={[
        "You own the ad account — always",
        "Weekly Loom walkthrough of numbers",
        "In-house creative team in Mumbai (no creative bottleneck)",
        "Direct WhatsApp line to the buyer running your account",
        "Server-side conversions configured properly",
        "iOS 14+ and consent-mode-v2 ready",
      ]}
      faqs={FAQS}
    />
  ),
});

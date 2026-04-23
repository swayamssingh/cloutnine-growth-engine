import { createFileRoute } from "@tanstack/react-router";
import { LandingPage } from "@/components/site/LandingPage";
import { faqSchema, jsonLd } from "@/lib/seo";

const FAQS = [
  { q: "Do you work with early-stage D2C brands?", a: "Yes — from ₹10L/month MRR upwards. Below that, you're better off founder-led for another quarter. We'll tell you so in the audit." },
  { q: "Shopify or custom?", a: "Shopify for 90% of cases. Custom only if you have a unique fulfilment or subscription model that Shopify can't handle gracefully." },
  { q: "What ROAS should I expect?", a: "Depends on category and AOV. Apparel: 2.5–4×. Beauty/skincare: 3–6×. Premium F&B: 4–8×. We benchmark in your audit." },
  { q: "Do you handle creative production?", a: "Yes — UGC, founder-led, in-studio product shoots. All in-house, all in Mumbai, no third-party dependencies." },
];

export const Route = createFileRoute("/industries/d2c-brands")({
  head: () => ({
    meta: [
      { title: "Social Media Marketing for D2C Brands in Mumbai | CloutNine" },
      { name: "description", content: "Performance marketing for D2C brands in Mumbai. Shopify, Meta Ads, UGC and WhatsApp recovery — built to scale revenue, not just impressions." },
      { property: "og:title", content: "D2C Marketing Agency Mumbai | CloutNine" },
      { property: "og:description", content: "Scale your D2C brand with Mumbai's performance-first agency. Content, ads, Shopify, WhatsApp." },
    ],
    scripts: [jsonLd(faqSchema(FAQS))],
  }),
  component: () => (
    <LandingPage
      eyebrow="Industry · D2C Brands"
      h1={<>D2C growth that respects your <span className="text-primary">unit economics</span>.</>}
      intro="We've helped Mumbai D2C brands cross ₹1Cr, ₹3Cr and ₹10Cr/month. The system: ruthless creative testing, tight Shopify funnel, WhatsApp recovery and weekly cohort review."
      metrics={[
        { value: "₹3.2Cr", label: "Largest monthly rev" },
        { value: "5.6×", label: "Avg blended ROAS" },
        { value: "−38%", label: "Avg CAC drop" },
        { value: "2.3×", label: "LTV uplift in 6mo" },
      ]}
      deliverables={[
        { title: "Performance creative", body: "20+ ad creatives/month — UGC, founder-led, demo, comparison, lifestyle." },
        { title: "Meta + Google media buying", body: "Advantage+, ASC, branded search and YouTube — managed daily." },
        { title: "Shopify CRO", body: "Theme tweaks, upsell, cart recovery, A/B tests on PDP and checkout." },
        { title: "WhatsApp + email retention", body: "Welcome, abandoned-cart, replenishment and win-back automated." },
      ]}
      process={[
        { step: "01", title: "Audit", body: "Cohort, P&L and creative teardown." },
        { step: "02", title: "Stack", body: "Fix tracking, rebuild ad accounts, ship 15 creatives." },
        { step: "03", title: "Scale", body: "Push spend on winners, expand to new audiences." },
        { step: "04", title: "Retain", body: "Lift LTV via WhatsApp + email + replenishment." },
      ]}
      proofPoints={[
        "Cohort and contribution-margin reporting (not just ROAS)",
        "Direct relationship with Meta partner managers",
        "Shopify Plus + Klaviyo + AiSensy stack experience",
        "We refuse to scale unprofitable accounts — period",
        "Weekly creative reviews with the founding team",
        "International expansion playbooks (UAE, US) when ready",
      ]}
      faqs={FAQS}
    />
  ),
});

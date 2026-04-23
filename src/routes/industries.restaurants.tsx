import { createFileRoute } from "@tanstack/react-router";
import { LandingPage } from "@/components/site/LandingPage";
import { faqSchema, jsonLd } from "@/lib/seo";

const FAQS = [
  { q: "How does social media marketing work for Mumbai restaurants?", a: "Geo-targeted Reels of food + ambience, paid promotion to a 5–10km radius, click-to-WhatsApp for reservations and offers, Google Business profile optimisation. Works for QSR, fine dining and cafés." },
  { q: "Can you actually fill empty tables on slow weeknights?", a: "Yes — we run dynamic offer ads (e.g. weekday set menu) targeted to office workers within 3km, with a one-tap WhatsApp booking. Most clients see 20–35% lift in midweek covers within 6 weeks." },
  { q: "Do you do food photography and Reels?", a: "Yes. Our Mumbai team does monthly shoot days at your venue. We bank 3–4 weeks of content per shoot." },
  { q: "What about Zomato and Swiftly listings?", a: "We optimise listings, photos and offer placement, but they're a channel — not a substitute for owned audience. Our job is to make you less dependent on aggregators." },
];

export const Route = createFileRoute("/industries/restaurants")({
  head: () => ({
    meta: [
      { title: "Social Media Marketing for Restaurants in Mumbai | CloutNine" },
      { name: "description", content: "Social media marketing for Mumbai restaurants, cafés and QSRs. Reels, geo-targeted ads, click-to-WhatsApp reservations. Fill tables, not feeds." },
      { property: "og:title", content: "Social Media for Mumbai Restaurants | CloutNine" },
      { property: "og:description", content: "Reels, geo-targeted ads and WhatsApp reservations engineered for Mumbai F&B." },
    ],
    scripts: [jsonLd(faqSchema(FAQS))],
  }),
  component: () => (
    <LandingPage
      eyebrow="Industry · Restaurants"
      h1={<>Marketing that fills <span className="text-primary">tables</span>, not just feeds.</>}
      intro="Mumbai F&B is brutal: rent's high, attention is shorter and aggregators eat the margin. We run a system to make your restaurant the obvious choice within 5km — and bring guests back."
      metrics={[
        { value: "+31%", label: "Avg dine-in lift" },
        { value: "₹47", label: "Cost per reservation" },
        { value: "4.7★", label: "Avg Google rating" },
        { value: "62%", label: "Repeat WhatsApp opt-in" },
      ]}
      deliverables={[
        { title: "Monthly food + ambience shoot", body: "Reels and stills shot at your venue. 25–40 assets per shoot day." },
        { title: "Geo-targeted Meta ads", body: "Lunch ads to offices, dinner ads to homes — all within drive radius." },
        { title: "WhatsApp reservations", body: "One-tap booking, automated table confirmations and reminders." },
        { title: "Google Business + Zomato", body: "Listings, photos, reviews and offer placement optimised monthly." },
      ]}
      process={[
        { step: "01", title: "Audit", body: "Walk-in, social and aggregator presence." },
        { step: "02", title: "Shoot", body: "Day-1 content shoot at your venue." },
        { step: "03", title: "Run", body: "Geo-targeted ads + WhatsApp flows live." },
        { step: "04", title: "Retain", body: "Win-back broadcasts to opt-in guests." },
      ]}
      proofPoints={[
        "Worked with cafés, fine-dining and QSR chains in Mumbai",
        "Built around your covers, not your follower count",
        "Aggregator-independent — own your guest list",
        "Founder-friendly reporting (covers, AOV, repeat rate)",
        "Mumbai-based shoot crew, no out-of-city freelancer cost",
        "Crisis-comms ready for review/PR situations",
      ]}
      faqs={FAQS}
    />
  ),
});

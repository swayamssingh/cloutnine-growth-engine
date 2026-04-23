import { createFileRoute } from "@tanstack/react-router";
import { LandingPage } from "@/components/site/LandingPage";
import { faqSchema, jsonLd } from "@/lib/seo";

const FAQS = [
  { q: "Do you work with Bandra restaurants and boutiques?", a: "Bandra is half our F&B and lifestyle book — Linking Road, Pali Hill, Bandra West cafés, Carter Road boutiques. We know the micro-market." },
  { q: "What's the difference for a Bandra brand vs other Mumbai brands?", a: "Bandra audiences are higher AOV, lower price-sensitivity but harder to impress. Creative bar is much higher — and that's where we shine." },
  { q: "Can we meet at your office?", a: "Our studio is in Andheri but we routinely meet Bandra clients at cafés or your office — Bandra to Andheri is a 25-min ride off-peak." },
];

export const Route = createFileRoute("/locations/bandra")({
  head: () => ({
    meta: [
      { title: "Social Media Agency in Bandra, Mumbai | CloutNine" },
      { name: "description", content: "Social media agency for Bandra brands — restaurants, boutiques, lifestyle, F&B. Reels, Meta Ads, WhatsApp engineered for Bandra's high-AOV market." },
      { property: "og:title", content: "Social Media Agency in Bandra, Mumbai" },
      { property: "og:description", content: "Bandra's lifestyle and F&B brands deserve premium creative. We build the system." },
    ],
    scripts: [jsonLd(faqSchema(FAQS))],
  }),
  component: () => (
    <LandingPage
      eyebrow="Location · Bandra, Mumbai"
      h1={<>The social media agency for <span className="text-primary">Bandra</span> brands that demand premium creative.</>}
      intro="Bandra audiences are sharper, higher-AOV and harder to impress. Generic posts don't move them. We build creative that earns attention — and converts it."
      metrics={[
        { value: "30+", label: "Bandra clients" },
        { value: "₹2,400", label: "Avg AOV" },
        { value: "+47%", label: "Avg engagement lift" },
        { value: "Pali·Linking·Carter", label: "Coverage" },
      ]}
      deliverables={[
        { title: "Premium creative production", body: "Reels and stills shot to a higher bar — for boutiques, cafés and lifestyle brands." },
        { title: "Hyperlocal targeting", body: "Bandra West, Khar, Carter Road, Pali Hill — radius and behavioural targeting layered." },
        { title: "Influencer + collab strategy", body: "Working with Bandra-based creators for authentic reach." },
        { title: "WhatsApp concierge flows", body: "Bookings, reservations and orders handled via concierge-style WhatsApp." },
      ]}
      process={[
        { step: "01", title: "Audit", body: "Creative + funnel teardown for your Bandra brand." },
        { step: "02", title: "Shoot", body: "On-site Bandra shoot — café, boutique, studio." },
        { step: "03", title: "Launch", body: "Hyperlocal ads + WhatsApp concierge live." },
        { step: "04", title: "Refine", body: "Weekly creative iteration, monthly review." },
      ]}
      proofPoints={[
        "Worked with Bandra F&B, fashion and lifestyle brands",
        "Premium-tier creative direction (no template work)",
        "Hyperlocal Bandra micro-market data",
        "Influencer relationships across Bandra creator scene",
        "Founders + PR teams meet at Bandra cafés routinely",
        "25 min from our Andheri studio — easy logistics",
      ]}
      faqs={FAQS}
    />
  ),
});

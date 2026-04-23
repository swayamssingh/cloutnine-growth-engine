import { createFileRoute } from "@tanstack/react-router";
import { LandingPage } from "@/components/site/LandingPage";
import { faqSchema, jsonLd } from "@/lib/seo";

const FAQS = [
  { q: "Do you serve Thane and Navi Mumbai brands?", a: "Yes. Thane is a fast-growing market — F&B, fitness, real estate, retail. We run hyperlocal campaigns and visit Thane bi-weekly." },
  { q: "Will Mumbai-style premiums apply to a Thane budget?", a: "No. Our pricing is the same regardless of suburb. The market dynamics are different — we tune ad spend, creative and offers to Thane buyers." },
  { q: "Do Thane real estate developers benefit from your system?", a: "Yes — Thane is one of MMR's biggest residential corridors. Our lead-gen + WhatsApp triage system works especially well here." },
];

export const Route = createFileRoute("/locations/thane")({
  head: () => ({
    meta: [
      { title: "Social Media Agency in Thane | CloutNine" },
      { name: "description", content: "Social media marketing agency for Thane brands — F&B, real estate, fitness, retail. Hyperlocal Meta Ads, Reels and WhatsApp marketing." },
      { property: "og:title", content: "Social Media Agency in Thane" },
      { property: "og:description", content: "Hyperlocal marketing for Thane and Navi Mumbai brands." },
    ],
    scripts: [jsonLd(faqSchema(FAQS))],
  }),
  component: () => (
    <LandingPage
      eyebrow="Location · Thane"
      h1={<>Hyperlocal marketing for <span className="text-primary">Thane</span> brands ready to scale.</>}
      intro="Thane is Mumbai's fastest-growing market — and most agencies still treat it as an afterthought. We build campaigns tuned to Thane's buyers, budgets and behaviour."
      metrics={[
        { value: "15+", label: "Thane clients" },
        { value: "₹389", label: "Avg cost per lead" },
        { value: "+58%", label: "Avg footfall lift" },
        { value: "Bi-weekly", label: "On-ground visits" },
      ]}
      deliverables={[
        { title: "Thane-specific creative", body: "Local language, local landmarks, local offers." },
        { title: "Hyperlocal Meta Ads", body: "Targeted to Thane West, Ghodbunder, Manpada, Vartak Nagar." },
        { title: "Real estate lead-gen", body: "Specialised for Thane developers and channel partners." },
        { title: "WhatsApp + GMB", body: "Local search visibility + WhatsApp-led close." },
      ]}
      process={[
        { step: "01", title: "Audit", body: "Local presence + competitor scan." },
        { step: "02", title: "Build", body: "Local creative + ad account + WhatsApp." },
        { step: "03", title: "Launch", body: "Hyperlocal campaigns live in 14 days." },
        { step: "04", title: "Visit", body: "Bi-weekly on-ground reviews in Thane." },
      ]}
      proofPoints={[
        "Real understanding of Thane's micro-markets",
        "Multilingual (English / Hindi / Marathi) campaigns",
        "Real estate, F&B and fitness specialism",
        "On-ground bi-weekly reviews",
        "No Mumbai-suburb premium pricing",
        "WhatsApp-led conversion built in",
      ]}
      faqs={FAQS}
    />
  ),
});

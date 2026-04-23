import { createFileRoute } from "@tanstack/react-router";
import { LandingPage } from "@/components/site/LandingPage";
import { faqSchema, jsonLd } from "@/lib/seo";

const FAQS = [
  { q: "Do you work with single-studio gyms or only chains?", a: "Both. Single studios benefit most from hyperlocal Reels + click-to-WhatsApp trial bookings. Chains get a multi-location playbook with per-branch creative." },
  { q: "What's a realistic cost per trial?", a: "₹120–₹450 in Mumbai depending on suburb and offer. We've taken some clients below ₹100 with the right creative." },
  { q: "Will members actually come from social?", a: "Yes — but only with a low-friction trial offer + WhatsApp-led conversion. We engineer the journey so that 'tap ad → book trial' takes 30 seconds." },
];

export const Route = createFileRoute("/industries/fitness")({
  head: () => ({
    meta: [
      { title: "Social Media Marketing for Fitness Studios & Gyms in Mumbai | CloutNine" },
      { name: "description", content: "Marketing for Mumbai gyms, fitness studios, yoga and CrossFit boxes. Trial bookings via Reels, geo-ads and WhatsApp." },
      { property: "og:title", content: "Fitness Marketing Agency Mumbai | CloutNine" },
      { property: "og:description", content: "Fill your gym with trial bookings — Reels, geo-targeted ads and WhatsApp closers." },
    ],
    scripts: [jsonLd(faqSchema(FAQS))],
  }),
  component: () => (
    <LandingPage
      eyebrow="Industry · Fitness"
      h1={<>Fill the floor with <span className="text-primary">paying members</span>, not free tours.</>}
      intro="Mumbai's fitness market is saturated and price-sensitive. We engineer the trial-to-membership funnel so every Reel has a job and every trial booking gets closed on WhatsApp."
      metrics={[
        { value: "₹187", label: "Avg cost per trial" },
        { value: "42%", label: "Trial → member rate" },
        { value: "+2.4×", label: "Member growth in 90d" },
        { value: "11k+", label: "Leads generated" },
      ]}
      deliverables={[
        { title: "Coach-led Reels", body: "Tutorials, transformations, behind-the-scenes — shot monthly at your studio." },
        { title: "Geo-targeted trial ads", body: "Targeted to a 4–7km radius around each branch." },
        { title: "WhatsApp trial flow", body: "Auto-confirm, day-of reminder, post-trial follow-up." },
        { title: "Member-retention content", body: "Weekly broadcasts to keep members engaged and paying." },
      ]}
      process={[
        { step: "01", title: "Audit", body: "Funnel from ad to trial to membership." },
        { step: "02", title: "Shoot", body: "Day-1 coach + studio content shoot." },
        { step: "03", title: "Launch", body: "Geo trial ads + WhatsApp closing flow." },
        { step: "04", title: "Retain", body: "Member-retention broadcasts." },
      ]}
      proofPoints={[
        "Worked with boutique studios, CrossFit and chain gyms",
        "Coach-talent management built in",
        "Multi-branch geo-targeting playbook",
        "Trial-to-member tracked end to end",
        "Mumbai-based shoot crew",
        "Compliance-friendly health claims",
      ]}
      faqs={FAQS}
    />
  ),
});

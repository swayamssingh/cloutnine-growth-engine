import { createFileRoute } from "@tanstack/react-router";
import { LandingPage } from "@/components/site/LandingPage";
import { faqSchema, jsonLd } from "@/lib/seo";

const FAQS = [
  { q: "Do you generate qualified leads for real estate developers?", a: "Yes — Meta lead-gen + landing page + WhatsApp triage + sales-team CRM handoff. Average CPL in Mumbai: ₹450–₹1,800 depending on ticket size and micro-market." },
  { q: "Can you run campaigns for a single project launch?", a: "Yes. We build a launch playbook over 60 days: pre-launch hype Reels → lead-gen sprint → site-visit booking → close." },
  { q: "Do you handle the sales calls?", a: "No — your sales team owns closing. We deliver qualified leads, score them, route to your CRM, and follow up via WhatsApp until they're warm." },
];

export const Route = createFileRoute("/industries/real-estate")({
  head: () => ({
    meta: [
      { title: "Social Media Marketing for Real Estate in Mumbai | CloutNine" },
      { name: "description", content: "Real estate marketing in Mumbai. Lead-gen ads, project-launch campaigns and WhatsApp triage for developers, channel partners and brokers." },
      { property: "og:title", content: "Real Estate Marketing Agency Mumbai | CloutNine" },
      { property: "og:description", content: "Qualified site-visits for Mumbai real estate. Meta lead-gen + WhatsApp triage + CRM handoff." },
    ],
    scripts: [jsonLd(faqSchema(FAQS))],
  }),
  component: () => (
    <LandingPage
      eyebrow="Industry · Real Estate"
      h1={<>Real estate marketing that delivers <span className="text-primary">site-visits</span>, not garbage leads.</>}
      intro="Mumbai real estate is unforgiving: high CPLs, long cycles, junk leads. We engineer a system that filters tyre-kickers and routes only buyer-intent leads to your sales team."
      metrics={[
        { value: "₹687", label: "Avg cost per qual. lead" },
        { value: "212", label: "Site-visits / 90d" },
        { value: "8.4%", label: "Lead → site-visit" },
        { value: "₹14L", label: "Largest single sale" },
      ]}
      deliverables={[
        { title: "Project-launch playbook", body: "60-day pre-launch → launch → close. Reels, ads, lead capture, WhatsApp." },
        { title: "Meta lead-gen ads", body: "Optimised for site-visit intent, not just form-fills." },
        { title: "WhatsApp triage", body: "Qualifying questions before lead reaches sales team — saves hours daily." },
        { title: "CRM integration", body: "Sync to your existing CRM. Auto-assign and follow up until warm." },
      ]}
      process={[
        { step: "01", title: "Audit", body: "Lead funnel and CRM hygiene check." },
        { step: "02", title: "Build", body: "Landing page + WhatsApp triage flow." },
        { step: "03", title: "Launch", body: "Lead-gen + retargeting campaigns live." },
        { step: "04", title: "Close", body: "Weekly lead-quality reports to sales head." },
      ]}
      proofPoints={[
        "Worked with MMR developers and channel partners",
        "RERA-compliant creative workflows",
        "Lead-quality scored, not just counted",
        "Site-visit attribution end to end",
        "WhatsApp triage cuts junk lead volume by 60%+",
        "Multilingual campaigns (English / Hindi / Marathi)",
      ]}
      faqs={FAQS}
    />
  ),
});

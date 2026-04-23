import { createFileRoute } from "@tanstack/react-router";
import { LandingPage } from "@/components/site/LandingPage";
import { faqSchema, jsonLd } from "@/lib/seo";

const FAQS = [
  { q: "Do you work with Powai-based startups and SaaS?", a: "Yes — Powai's startup ecosystem (Hiranandani, IIT-Bombay corridor) is a sweet spot for us. Founder-led content + LinkedIn + paid Meta is the typical stack." },
  { q: "Can you do B2B lead-gen for tech companies?", a: "Yes. LinkedIn ads + cold-outbound + landing-page funnel + WhatsApp routing. We've worked with SaaS and IT-services companies." },
  { q: "How often do you visit Powai?", a: "Weekly for active clients. Our Andheri studio is a 20-minute drive on the JVLR." },
];

export const Route = createFileRoute("/locations/powai")({
  head: () => ({
    meta: [
      { title: "Social Media Agency in Powai, Mumbai | B2B & Startup Marketing | CloutNine" },
      { name: "description", content: "Social media agency in Powai for startups, SaaS and B2B brands. LinkedIn lead-gen, founder-led content, Meta Ads and WhatsApp routing." },
      { property: "og:title", content: "Social Media Agency in Powai, Mumbai" },
      { property: "og:description", content: "B2B + startup marketing engineered for Powai's tech ecosystem." },
    ],
    scripts: [jsonLd(faqSchema(FAQS))],
  }),
  component: () => (
    <LandingPage
      eyebrow="Location · Powai, Mumbai"
      h1={<>Marketing for <span className="text-primary">Powai's</span> tech and startup ecosystem.</>}
      intro="Powai is Mumbai's quiet startup engine — IIT-B, Hiranandani campuses, tech parks. We help SaaS, fintech, B2B and consumer-tech brands build founder-led growth systems."
      metrics={[
        { value: "20+", label: "Powai-based clients" },
        { value: "₹1,247", label: "Avg B2B CPL" },
        { value: "12%", label: "MQL → SQL rate" },
        { value: "20min", label: "From Andheri studio" },
      ]}
      deliverables={[
        { title: "Founder-led content", body: "LinkedIn posts, podcast clips, demo Reels — built around the founder's POV." },
        { title: "B2B lead-gen ads", body: "LinkedIn + Meta lead forms with qualifying questions and CRM sync." },
        { title: "Demo-to-call flow", body: "Calendly + WhatsApp routing so demo bookings actually show up." },
        { title: "Account-based content", body: "Bespoke content for top-25 target accounts in your pipeline." },
      ]}
      process={[
        { step: "01", title: "Audit", body: "ICP + content + funnel teardown." },
        { step: "02", title: "Stack", body: "LinkedIn + Meta + landing + CRM rebuild." },
        { step: "03", title: "Launch", body: "Founder-led content + paid lead-gen live." },
        { step: "04", title: "Review", body: "Weekly pipeline review with founder." },
      ]}
      proofPoints={[
        "B2B + SaaS specialism, not consumer-only",
        "Founder personal-brand expertise",
        "ICP-aligned lead scoring",
        "HubSpot / Salesforce / Zoho sync",
        "20 min from our Andheri studio via JVLR",
        "On-site shoots at Powai offices and campuses",
      ]}
      faqs={FAQS}
    />
  ),
});

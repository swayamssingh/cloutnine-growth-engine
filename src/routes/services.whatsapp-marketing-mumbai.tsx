import { createFileRoute } from "@tanstack/react-router";
import { LandingPage } from "@/components/site/LandingPage";
import { faqSchema, jsonLd, serviceSchema, SITE } from "@/lib/seo";

const FAQS = [
  { q: "What is WhatsApp marketing for businesses?", a: "Using the official WhatsApp Business API to send broadcasts, run automated chat flows, and route ad clicks directly into a 1-on-1 conversation that closes faster than email or call." },
  { q: "Do I need WhatsApp Business API access?", a: "Yes for broadcasts. We set you up on AiSensy, Wati or Interakt — onboarding takes 3–5 days including Meta verification." },
  { q: "Is broadcasting on WhatsApp legal?", a: "Yes via the official Business API with template approval. Personal-number bulk-blasting is not — and gets you banned. We only do compliant." },
  { q: "What can WhatsApp marketing do for a D2C / restaurant / clinic?", a: "Order updates, abandoned-cart recovery, weekly offers to opt-in subscribers, click-to-WhatsApp ads, appointment booking, after-sales support — typical lift: 18–40% in repeat revenue." },
  { q: "How much does it cost?", a: "Setup ₹35,000 + retainer ₹40,000–₹85,000/month + per-conversation fees from Meta (₹0.20–₹0.85 each). ROI usually pays back month one." },
];

export const Route = createFileRoute("/services/whatsapp-marketing-mumbai")({
  head: () => ({
    meta: [
      { title: "WhatsApp Marketing Agency in Mumbai | API, Broadcasts & Ads | CloutNine" },
      { name: "description", content: "WhatsApp marketing agency in Mumbai. Official WhatsApp Business API setup, broadcasts, automation and click-to-WhatsApp ads. Free audit." },
      { property: "og:title", content: "WhatsApp Marketing Agency in Mumbai | CloutNine" },
      { property: "og:description", content: "WhatsApp Business API, broadcasts, automation and click-to-WhatsApp ads — built to close warm leads in minutes." },
    ],
    scripts: [
      jsonLd(faqSchema(FAQS)),
      jsonLd(serviceSchema({
        name: "WhatsApp Marketing",
        description: "WhatsApp Business API setup, broadcast campaigns, automation and click-to-WhatsApp ads.",
        url: `${SITE.url}/services/whatsapp-marketing-mumbai`,
      })),
    ],
  }),
  component: () => (
    <LandingPage
      eyebrow="WhatsApp Marketing · Mumbai"
      h1={<>Close warm leads on <span className="text-primary">WhatsApp</span>, not in inboxes.</>}
      intro="98% open rates. 45-second average response. WhatsApp is where Indian buyers actually decide. We set up the API, build the flows and run the campaigns."
      metrics={[
        { value: "98%", label: "Avg open rate" },
        { value: "45s", label: "Avg response time" },
        { value: "+34%", label: "Repeat revenue lift" },
        { value: "12×", label: "vs email CTR" },
      ]}
      deliverables={[
        { title: "WhatsApp API setup", body: "AiSensy / Wati / Interakt onboarding, Meta verification, green-tick application." },
        { title: "Template library", body: "20+ Meta-approved templates: order, offer, recovery, support, win-back." },
        { title: "Automation flows", body: "Welcome, abandoned cart, post-purchase, NPS, win-back — all running on autopilot." },
        { title: "Click-to-WhatsApp ads", body: "Meta ads that drop users straight into a sales conversation. Lowest CPL we've ever seen." },
      ]}
      process={[
        { step: "01", title: "Setup", body: "API + green tick + CRM integration in 7 days." },
        { step: "02", title: "Build", body: "Templates, flows and chatbot logic." },
        { step: "03", title: "Launch", body: "First broadcast and CTWA campaigns live." },
        { step: "04", title: "Optimise", body: "Iterate templates and flows on real data." },
      ]}
      proofPoints={[
        "Official Meta Business Solution Provider partner stack",
        "Compliance-first — no banned-account risk",
        "Built-in opt-in capture across web and ads",
        "CRM-synced — no list rotting in spreadsheets",
        "Multi-language template support (EN / HI / MR)",
        "WhatsApp + Meta Ads + Web tracked as one funnel",
      ]}
      faqs={FAQS}
    />
  ),
});

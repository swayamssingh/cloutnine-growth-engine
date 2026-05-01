import { createFileRoute } from "@tanstack/react-router";
import { LandingPage } from "@/components/site/LandingPage";
import { faqSchema, jsonLd, serviceSchema, SITE } from "@/lib/seo";

const FAQS = [
  { q: "How fast can Instagram grow with a Reels-first strategy?", a: "For a niche brand starting from scratch, expect first traction (10K+ views per Reel, 500–2,000 followers/month) within 60 days if posting cadence is 3–5x/week and creative is iterated weekly." },
  { q: "Do you only post Reels?", a: "No. Reels drive reach. Carousels save and share, Stories convert. We use a 60/25/15 split engineered to the algorithm in 2026." },
  { q: "Will you boost posts or run dedicated ads?", a: "Both. Boost the proven organic winners, run dedicated conversion campaigns to landing pages and click-to-WhatsApp." },
  { q: "Do you script and shoot in Mumbai?", a: "Yes. Our content team is in Mumbai. We do 1 shoot day/month at your venue or our studio, then bank 3–4 weeks of content." },
  { q: "What's a realistic monthly budget for Instagram?", a: "Retainer ₹65K–₹1.5L/month + ₹50K–₹2L ad spend depending on category. We size it to your unit economics." },
];

export const Route = createFileRoute("/services/instagram-marketing-mumbai")({
  head: () => ({
    meta: [
      { title: "Instagram Marketing Agency in Mumbai | Reels-First Growth | CloutNine" },
      { name: "description", content: "Instagram marketing agency in Mumbai. Reels-first content, Meta ads and conversion flows that turn views into customers. Free 48-hour audit." },
      { property: "og:title", content: "Instagram Marketing Agency in Mumbai | CloutNine" },
      { property: "og:description", content: "Reels-first Instagram growth for Mumbai brands. Built to convert, not just collect followers." },
    ],
    scripts: [
      jsonLd(faqSchema(FAQS)),
      jsonLd(serviceSchema({
        name: "Instagram Marketing",
        description: "Reels-first Instagram growth combining organic content, paid amplification and WhatsApp conversion.",
        url: `${SITE.url}/services/instagram-marketing-mumbai`,
      })),
    ],
  }),
  component: () => (
    <LandingPage
      eyebrow="Instagram Marketing · Mumbai"
      h1={<>Instagram growth for brands that <span className="text-primary">sell</span>, not pose.</>}
      intro="Reels engineered for the algorithm. Carousels engineered to save. Stories engineered to convert. The full Instagram stack, run by a team that ships weekly."
      deliverables={[
        { title: "Strategy + content calendar", body: "Hooks, formats and posting cadence derived from your top-converting offers." },
        { title: "Reels production", body: "Scripted, shot and edited in Mumbai. 8–15 Reels/month with weekly iteration." },
        { title: "Paid Reels distribution", body: "Boost organic winners + run dedicated Reels ads to website and WhatsApp." },
        { title: "DM-to-lead automation", body: "ManyChat / native flows that route warm DMs to your sales team or WhatsApp." },
      ]}
      process={[
        { step: "01", title: "Audit", body: "Tear down your current grid, hooks and Reels." },
        { step: "02", title: "Test", body: "10 hooks, 5 formats, 2 weeks." },
        { step: "03", title: "Scale", body: "Double down on the 2 that compound." },
        { step: "04", title: "Convert", body: "Paid + DM flows turn reach into revenue." },
      ]}
      proofPoints={[
        "In-house Mumbai shoot crew — no freelancer scheduling chaos",
        "Hook library iterated weekly based on retention data",
        "Reels-to-WhatsApp click flows for warm-lead capture",
        "Trend-jacking inside 24 hours when relevant",
        "We won't grow followers that don't convert",
        "Monthly creative review with founder, not interns",
      ]}
      faqs={FAQS}
    />
  ),
});

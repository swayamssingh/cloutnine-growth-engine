import { createFileRoute } from "@tanstack/react-router";
import { LandingPage } from "@/components/site/LandingPage";
import { faqSchema, jsonLd, serviceSchema, SITE } from "@/lib/seo";

const FAQS = [
  { q: "What stack do you build websites on?", a: "Webflow for marketing sites, Next.js / React for product, Shopify for D2C. We pick the stack that ships fastest and converts best — not what's trendy." },
  { q: "How long does a website take?", a: "Landing page: 7 days. Marketing site (5–8 pages): 3–4 weeks. Shopify D2C: 4–6 weeks. We work in weekly sprints with Loom updates." },
  { q: "Do you do SEO too?", a: "Yes. Every site we build ships with technical SEO done right — schema, semantic HTML, Core Web Vitals, internal linking. Content SEO is a separate retainer." },
  { q: "What about hosting and maintenance?", a: "We host on Vercel / Webflow CDN. Monthly maintenance retainer covers updates, A/B tests, conversion tweaks." },
  { q: "Will it actually convert?", a: "We benchmark against your existing site for 30 days post-launch. If conversion rate doesn't lift, we rebuild the underperforming sections free." },
];

export const Route = createFileRoute("/services/website-development-mumbai")({
  head: () => ({
    meta: [
      { title: "Website Development Agency in Mumbai | Conversion-First Sites | CloutNine" },
      { name: "description", content: "Website development in Mumbai. Conversion-first websites in Webflow, Next.js and Shopify — fast, indexable, lead-ready. Free audit." },
      { property: "og:title", content: "Website Development Agency in Mumbai | CloutNine" },
      { property: "og:description", content: "Conversion-first websites in Webflow, Next.js and Shopify. Fast, indexable, built to sell." },
    ],
    scripts: [
      jsonLd(faqSchema(FAQS)),
      jsonLd(serviceSchema({
        name: "Website Development",
        description: "Conversion-first website design and development for Mumbai brands.",
        url: `${SITE.url}/services/website-development-mumbai`,
      })),
    ],
  }),
  component: () => (
    <LandingPage
      eyebrow="Website Development · Mumbai"
      h1={<>Websites engineered to <span className="text-primary">convert</span>, not just exist.</>}
      intro="Most agency websites are art projects. Ours are sales assets. Fast, indexable, mobile-first, plugged into your ad funnel and WhatsApp from day one."
      deliverables={[
        { title: "Discovery + IA", body: "Customer research, sitemap, conversion-mapped user flow before we touch design." },
        { title: "Design + build", body: "Bespoke design in Figma → Webflow / Next.js / Shopify. No templates." },
        { title: "Technical SEO", body: "Schema markup, semantic HTML, Core Web Vitals, sitemap, robots.txt — all done right." },
        { title: "Conversion plumbing", body: "Pixel, CAPI, GA4, click-to-WhatsApp, lead routing to CRM. The site sells itself." },
      ]}
      process={[
        { step: "01", title: "Strategy", body: "Map your funnel and conversion goals." },
        { step: "02", title: "Design", body: "Figma in 10 days. 2 rounds of revisions." },
        { step: "03", title: "Build", body: "Develop in 2-week sprints with weekly demo." },
        { step: "04", title: "Optimise", body: "Post-launch A/B tests on hero, CTAs, forms." },
      ]}
      proofPoints={[
        "Built for Indian internet (slow networks, mid-tier phones)",
        "Indexable from day one — no JS-rendered SEO disasters",
        "All assets and source files yours forever",
        "Launch-day support + 30-day warranty",
        "Optional ongoing CRO retainer",
        "WhatsApp + Meta Pixel integrated as standard",
      ]}
      faqs={FAQS}
    />
  ),
});

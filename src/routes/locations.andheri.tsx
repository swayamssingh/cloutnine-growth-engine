import { createFileRoute } from "@tanstack/react-router";
import { LandingPage } from "@/components/site/LandingPage";
import { faqSchema, jsonLd } from "@/lib/seo";

const FAQS = [
  { q: "Are you actually based in Andheri?", a: "Yes — our studio is in Andheri East, near Marol Naka. Walk-in by appointment, content shoots happen here." },
  { q: "Do you only work with Andheri businesses?", a: "Andheri is our home market and the majority of our walk-in clients are here, but we run accounts across Mumbai, India and the UAE." },
  { q: "Can we meet for strategy in person?", a: "Yes. Mumbai clients get monthly in-person strategy sessions at our Andheri studio or your office." },
];

export const Route = createFileRoute("/locations/andheri")({
  head: () => ({
    meta: [
      { title: "Social Media Agency in Andheri, Mumbai | CloutNine Studio" },
      { name: "description", content: "CloutNine is a social media marketing agency in Andheri, Mumbai. Studio in Andheri East — content, Meta Ads and WhatsApp for Andheri brands." },
      { property: "og:title", content: "Social Media Agency in Andheri, Mumbai" },
      { property: "og:description", content: "Mumbai's media-creative hub deserves an agency that ships. Studio in Andheri East." },
    ],
    scripts: [jsonLd(faqSchema(FAQS))],
  }),
  component: () => (
    <LandingPage
      eyebrow="Location · Andheri, Mumbai"
      h1={<>The social media agency in <span className="text-primary">Andheri</span> built for media-first brands.</>}
      intro="Andheri runs Mumbai's creative engine — production houses, D2C brands, restaurants and tech offices. Our studio is in Andheri East. Walk in, shoot a day, ship a quarter."
      metrics={[
        { value: "40+", label: "Andheri clients" },
        { value: "5min", label: "From Marol Naka" },
        { value: "Mon-Sat", label: "Studio open" },
        { value: "48hr", label: "Audit turnaround" },
      ]}
      deliverables={[
        { title: "In-studio content shoots", body: "Daylight studio with lighting, props and edit bay — bank a month of content in a day." },
        { title: "Andheri-targeted ads", body: "Geo-targeted Meta ads to Andheri East/West, Lokhandwala, JVPD, Versova." },
        { title: "Walk-in strategy sessions", body: "Founders prefer face-to-face — we're 5 minutes from Marol Naka metro." },
        { title: "Local SEO + GMB", body: "Google Business profile optimisation for Andheri-based service brands." },
      ]}
      process={[
        { step: "01", title: "Walk-in", body: "Coffee + 30-min audit at our Andheri studio." },
        { step: "02", title: "Shoot", body: "Day-1 in-studio content production." },
        { step: "03", title: "Run", body: "Ads + WhatsApp + reporting from week one." },
        { step: "04", title: "Review", body: "Monthly in-person strategy session." },
      ]}
      proofPoints={[
        "Studio in Andheri East — not a co-working desk",
        "Same-day audit walkthroughs available",
        "Proven results for Andheri F&B, retail and SaaS",
        "Geo-targeted creative for Andheri micro-markets",
        "On-site shoot teams for Andheri offices/restaurants",
        "5 minutes from Andheri metro / Western Express Highway",
      ]}
      faqs={FAQS}
    />
  ),
});

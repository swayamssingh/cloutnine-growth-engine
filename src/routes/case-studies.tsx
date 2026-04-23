import { createFileRoute, Link } from "@tanstack/react-router";
import { Section } from "@/components/site/Section";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: [
      { title: "Case Studies | Mumbai Social Media Agency Results | CloutNine" },
      { name: "description", content: "Real outcomes from CloutNine clients in Mumbai — D2C, restaurants, real estate, fitness. Revenue, ROAS, leads, footfall." },
      { property: "og:title", content: "CloutNine Case Studies — Mumbai Growth Results" },
      { property: "og:description", content: "Receipts: revenue, ROAS, leads and footfall from Mumbai brands we run." },
    ],
  }),
  component: CaseStudies,
});

const CASES = [
  { tag: "D2C Skincare · Mumbai", h: "₹5L → ₹25L MRR in 6 months", b: "Reels-led top-of-funnel, Meta Advantage+, Klaviyo + WhatsApp recovery. Blended ROAS 4.7×.", metric: "5×" },
  { tag: "Restaurant Group · Bandra", h: "31% lift in dine-in covers", b: "Geo-targeted Reels + Click-to-WhatsApp reservations across 3 outlets.", metric: "+31%" },
  { tag: "Real Estate · Powai", h: "212 site-visits in 90 days", b: "Lead-gen ads + landing page + WhatsApp triage cutting junk by 60%.", metric: "212" },
  { tag: "CrossFit Box · Andheri", h: "Cost per trial ₹187", b: "Coach-led Reels + 5km radius targeting + automated trial WhatsApp.", metric: "₹187" },
  { tag: "Fashion D2C · Mumbai", h: "8.4× peak ROAS in launch month", b: "Founder-led storytelling + UGC creative testing + retention email/WhatsApp.", metric: "8.4×" },
  { tag: "B2B SaaS · Powai", h: "₹1,247 avg qualified CPL", b: "LinkedIn + Meta lead-gen with WhatsApp qualification and HubSpot routing.", metric: "₹1.2k" },
];

function CaseStudies() {
  return (
    <>
      <section className="border-b border-[color:var(--color-hairline)] grain">
        <div className="container-x pt-20 pb-16">
          <span className="eyebrow">Selected work</span>
          <h1 className="display-xl mt-8 max-w-[18ch]">
            Outcomes, not <span className="text-primary">dashboards</span>.
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
            We don't show you reach screenshots. We show revenue, leads,
            footfall and ROAS. Here's a slice of what we've built for Mumbai
            brands.
          </p>
        </div>
      </section>

      <Section className="!py-20">
        <div className="grid md:grid-cols-2 gap-px bg-[color:var(--color-hairline)] border border-[color:var(--color-hairline)]">
          {CASES.map((c) => (
            <div key={c.h} className="bg-background p-8 md:p-12">
              <div className="flex items-start justify-between">
                <span className="text-[11px] uppercase tracking-[0.22em] text-primary">
                  {c.tag}
                </span>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground" />
              </div>
              <div className="display text-7xl text-primary mt-10">{c.metric}</div>
              <h3 className="font-sans text-2xl font-medium normal-case tracking-normal mt-6">
                {c.h}
              </h3>
              <p className="mt-4 text-muted-foreground">{c.b}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            to="/contact"
            className="inline-flex h-12 items-center rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground"
          >
            Become the next case study →
          </Link>
        </div>
      </Section>
    </>
  );
}

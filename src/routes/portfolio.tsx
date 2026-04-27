import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio | CloutNine — Video Content, Ad Creatives & Websites" },
      {
        name: "description",
        content:
          "Selected work across video content, ad creatives and websites — for cafes, gyms, real estate, salons, D2C brands and SaaS.",
      },
      { property: "og:title", content: "Portfolio | CloutNine" },
      {
        property: "og:description",
        content:
          "Selected work across video content, ad creatives and websites.",
      },
    ],
  }),
  component: PortfolioIndex,
});

const SECTIONS = [
  {
    eyebrow: "01 — Video content",
    title: "Reels, hooks, founder cuts.",
    to: "/portfolio/video-content" as const,
  },
  {
    eyebrow: "02 — Ad creatives",
    title: "Static and motion that convert.",
    to: "/portfolio/ad-creatives" as const,
  },
  {
    eyebrow: "03 — Websites",
    title: "Conversion-first builds.",
    to: "/portfolio/websites" as const,
  },
];

function PortfolioIndex() {
  return (
    <div className="bg-black text-white">
      <section className="border-b border-white/5">
        <div className="container-x pt-20 pb-16 md:pt-28 md:pb-20">
          <span className="text-[11px] uppercase tracking-[0.22em] text-white/50">
            Portfolio
          </span>
          <h1 className="display-xl mt-8 max-w-[20ch]">
            Work, organised by what we make.
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-white/60">
            Three lines of work. Pick a format — filter by industry on the next
            page.
          </p>
        </div>
      </section>

      <section className="container-x py-16 md:py-24">
        <ul className="border-t border-white/5">
          {SECTIONS.map((s) => (
            <li key={s.to} className="border-b border-white/5">
              <Link
                to={s.to}
                className="group flex items-end justify-between gap-6 py-8 md:py-12 transition-opacity hover:opacity-90"
              >
                <div>
                  <span className="text-[11px] uppercase tracking-[0.22em] text-white/40">
                    {s.eyebrow}
                  </span>
                  <h2 className="display text-3xl md:text-5xl mt-3">
                    {s.title}
                  </h2>
                </div>
                <ArrowUpRight
                  size={28}
                  className="shrink-0 text-white/40 transition-all group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

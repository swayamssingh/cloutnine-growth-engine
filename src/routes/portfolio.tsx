import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { INDUSTRIES } from "@/lib/portfolio-data";

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
            Three lines of work. Pick a format, then an industry. No filters,
            no dropdowns — just the work.
          </p>
        </div>
      </section>

      <section className="container-x py-16 md:py-24 space-y-20">
        <Block
          eyebrow="01 — Video content"
          title="Reels, hooks, founder cuts."
          basePath="/portfolio/video-content"
        />
        <Block
          eyebrow="02 — Ad creatives"
          title="Static and motion that convert."
          basePath="/portfolio/ad-creatives"
        />

        {/* Websites — single link */}
        <div>
          <span className="text-[11px] uppercase tracking-[0.22em] text-white/50">
            03 — Websites
          </span>
          <h2 className="display text-4xl md:text-5xl mt-4">
            Conversion-first builds.
          </h2>
          <Link
            to="/portfolio/websites"
            className="group mt-8 inline-flex items-center gap-2 text-sm text-white/80 hover:text-white"
          >
            View all websites
            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>
      </section>
    </div>
  );
}

function Block({
  eyebrow,
  title,
  basePath,
}: {
  eyebrow: string;
  title: string;
  basePath: "/portfolio/video-content" | "/portfolio/ad-creatives";
}) {
  return (
    <div>
      <span className="text-[11px] uppercase tracking-[0.22em] text-white/50">
        {eyebrow}
      </span>
      <h2 className="display text-4xl md:text-5xl mt-4">{title}</h2>
      <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-white/5 border border-white/5 rounded-xl overflow-hidden">
        {INDUSTRIES.map((ind) => (
          <Link
            key={ind.slug}
            to={`${basePath}/$industry`}
            params={{ industry: ind.slug }}
            className="group bg-black px-5 py-6 flex items-center justify-between text-sm text-white/70 hover:text-white hover:bg-white/[0.03] transition"
          >
            <span>{ind.label}</span>
            <ArrowUpRight
              size={14}
              className="opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

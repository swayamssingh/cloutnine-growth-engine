import { createFileRoute, Link } from "@tanstack/react-router";
import { PortfolioGrid } from "@/components/site/PortfolioGrid";
import { WEBSITES } from "@/lib/portfolio-data";

export const Route = createFileRoute("/portfolio/websites")({
  head: () => ({
    meta: [
      { title: "Websites | CloutNine Portfolio" },
      {
        name: "description",
        content:
          "Selected website builds — conversion-first, fast and indexable. Built for cafes, gyms, real estate, salons, D2C and SaaS.",
      },
      { property: "og:title", content: "Websites | CloutNine Portfolio" },
    ],
  }),
  component: Websites,
});

function Websites() {
  return (
    <div className="bg-black text-white min-h-screen">
      <section className="border-b border-white/5">
        <div className="container-x pt-16 pb-10 md:pt-20 md:pb-14">
          <Link
            to="/portfolio"
            className="text-[11px] uppercase tracking-[0.22em] text-white/40 hover:text-white/70 transition"
          >
            ← Portfolio
          </Link>
          <div className="mt-6 flex items-end justify-between flex-wrap gap-4">
            <h1 className="display text-4xl md:text-6xl">
              Websites
            </h1>
            <span className="text-xs uppercase tracking-[0.22em] text-white/40">
              {WEBSITES.length} builds
            </span>
          </div>
        </div>
      </section>

      <section className="container-x py-10 md:py-14">
        <PortfolioGrid items={WEBSITES} />
      </section>
    </div>
  );
}

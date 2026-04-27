import { createFileRoute, Link } from "@tanstack/react-router";
import { PortfolioTabs } from "@/components/site/PortfolioTabs";
import { VIDEO_CONTENT } from "@/lib/portfolio-data";

export const Route = createFileRoute("/portfolio/video-content")({
  head: () => ({
    meta: [
      { title: "Video Content | CloutNine Portfolio" },
      {
        name: "description",
        content:
          "Selected video content work — Reels, hooks and short-form built to convert across cafes, gyms, real estate, salons, D2C and SaaS.",
      },
      { property: "og:title", content: "Video Content | CloutNine Portfolio" },
    ],
  }),
  component: VideoContentPage,
});

function VideoContentPage() {
  return (
    <div className="bg-black text-white min-h-screen">
      <section className="border-b border-white/5">
        <div className="container-x pt-16 pb-10 md:pt-20 md:pb-12">
          <Link
            to="/portfolio"
            className="text-[11px] uppercase tracking-[0.22em] text-white/40 hover:text-white/70 transition"
          >
            ← Portfolio
          </Link>
          <h1 className="display text-4xl md:text-6xl mt-6">
            Video <span className="text-white/40">content</span>
          </h1>
          <p className="mt-5 max-w-2xl text-white/55">
            Reels, hooks and founder cuts. Pick an industry to filter.
          </p>
        </div>
      </section>

      <section className="container-x py-10 md:py-14">
        <PortfolioTabs data={VIDEO_CONTENT} initial="cafe" />
      </section>
    </div>
  );
}

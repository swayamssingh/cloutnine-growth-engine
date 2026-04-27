import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { PortfolioGrid } from "@/components/site/PortfolioGrid";
import {
  INDUSTRIES,
  VIDEO_CONTENT,
  type Industry,
} from "@/lib/portfolio-data";

const VALID = new Set(INDUSTRIES.map((i) => i.slug));

export const Route = createFileRoute("/portfolio/video-content/$industry")({
  loader: ({ params }) => {
    if (!VALID.has(params.industry as Industry)) throw notFound();
    const slug = params.industry as Industry;
    const label = INDUSTRIES.find((i) => i.slug === slug)!.label;
    return { slug, label, items: VIDEO_CONTENT[slug] };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          {
            title: `${loaderData.label} Video Content | CloutNine Portfolio`,
          },
          {
            name: "description",
            content: `Selected video content work for ${loaderData.label.toLowerCase()} brands — Reels, hooks and short-form built to convert.`,
          },
          {
            property: "og:title",
            content: `${loaderData.label} Video Content | CloutNine`,
          },
        ]
      : [],
  }),
  notFoundComponent: () => (
    <NotFound message="Industry not found." />
  ),
  errorComponent: ({ error }) => (
    <NotFound message={error.message ?? "Something went wrong."} />
  ),
  component: VideoContentIndustry,
});

function VideoContentIndustry() {
  const { label, items } = Route.useLoaderData();
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
              {label} <span className="text-white/40">video content</span>
            </h1>
            <span className="text-xs uppercase tracking-[0.22em] text-white/40">
              {items.length} pieces
            </span>
          </div>
        </div>
      </section>

      <section className="container-x py-10 md:py-14">
        <PortfolioGrid items={items} />
      </section>
    </div>
  );
}

function NotFound({ message }: { message: string }) {
  return (
    <div className="bg-black text-white min-h-[70vh] flex items-center justify-center">
      <div className="text-center">
        <p className="text-white/60">{message}</p>
        <Link
          to="/portfolio"
          className="mt-6 inline-flex h-11 items-center rounded-full bg-white px-5 text-sm font-medium text-black"
        >
          Back to portfolio
        </Link>
      </div>
    </div>
  );
}

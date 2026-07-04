import { createFileRoute, Link } from "@tanstack/react-router";
import { Section } from "@/components/site/Section";
import blogsData from "@/data/blogs.json";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Insights — Social Media, Ads & Growth | CloutNine Mumbai" },
      { name: "description", content: "Playbooks, teardowns and frameworks for social media marketing, Meta Ads and growth — written by the CloutNine team in Mumbai." },
      { property: "og:title", content: "CloutNine Insights — Social Media & Growth Playbooks" },
      { property: "og:description", content: "Playbooks, teardowns and frameworks from a Mumbai performance agency." },
    ],
  }),
  component: Blog,
});

function Blog() {
  const posts = [...blogsData].reverse();
  return (
    <>
      <section className="border-b border-[color:var(--color-hairline)] grain">
        <div className="container-x pt-20 pb-16">
          <span className="eyebrow">Insights</span>
          <h1 className="display-xl mt-8 max-w-[16ch]">
            Playbooks. <span className="text-primary">Not theory.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
            What we're testing, breaking and shipping in Mumbai right now.
            Written by the team running the accounts — no SEO interns.
          </p>
        </div>
      </section>
      <Section className="!py-20">
        <div className="divide-y divide-[color:var(--color-hairline)] border-y border-[color:var(--color-hairline)]">
          {posts.map((p) => (
            <Link
              key={p.slug}
              to="/blog/$slug"
              params={{ slug: p.slug }}
              className="group flex flex-col md:flex-row md:items-center md:justify-between gap-4 py-8 hover:bg-surface px-2 transition-colors"
            >
              <div className="flex-1">
                <span className="text-[11px] uppercase tracking-[0.22em] text-primary">
                  {p.category} · {p.readTime}
                </span>
                <h3 className="font-sans text-xl md:text-2xl font-medium normal-case tracking-normal mt-3 group-hover:text-primary transition-colors">
                  {p.title}
                </h3>
              </div>
              <span className="text-sm text-muted-foreground shrink-0">Read →</span>
            </Link>
          ))}
        </div>
        <p className="mt-12 text-sm text-muted-foreground">
          More long-form drops every week. Want them by WhatsApp?{" "}
          <Link to="/contact" className="text-primary underline-offset-4 hover:underline">
            Subscribe here
          </Link>.
        </p>
      </Section>
    </>
  );
}

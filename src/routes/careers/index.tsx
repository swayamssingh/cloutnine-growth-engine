import { createFileRoute, Link } from "@tanstack/react-router";
import { Section } from "@/components/site/Section";
import { JOBS } from "@/data/careers";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/careers/")({
  head: () => ({
    meta: [
      { title: "Careers | CloutNine" },
      {
        name: "description",
        content:
          "Join CloutNine and build your career in digital marketing, SEO, branding, content creation, and business growth.",
      },
      { property: "og:title", content: "Careers | CloutNine" },
      {
        property: "og:description",
        content:
          "Join CloutNine and build your career in digital marketing, SEO, branding, content creation, and business growth.",
      },
    ],
  }),
  component: CareersPage,
});

function CareersPage() {
  return (
    <>
      <section className="border-b border-[color:var(--color-hairline)] grain">
        <div className="container-x pt-20 pb-16">
          <span className="eyebrow">Careers</span>
          <h1 className="display-xl mt-8 max-w-[18ch]">
            Careers at <span className="text-muted-foreground">CloutNine.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
            Help businesses grow while building your own career. Join a
            fast-growing digital growth agency where you'll learn, create, and
            make an impact from day one.
          </p>
        </div>
      </section>

      <Section
        eyebrow="Open Positions"
        title={
          <>
            Roles we're
            <br />
            hiring for.
          </>
        }
        intro={`${JOBS.length} open ${JOBS.length === 1 ? "role" : "roles"} — apply directly, no long forms.`}
      >
        <div className="grid md:grid-cols-2 gap-5">
          {JOBS.map((job) => (
            <Link
              key={job.slug}
              to="/careers/$slug"
              params={{ slug: job.slug }}
              className="group relative flex flex-col rounded-md border border-[color:var(--color-hairline)] hover:border-[color:var(--color-border-strong)] bg-surface p-8 md:p-10 transition-colors"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="display text-3xl">{job.title}</h3>
                <ArrowRight
                  className="mt-1 h-5 w-5 text-muted-foreground group-hover:text-foreground transition-all group-hover:translate-x-1 shrink-0"
                />
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {job.tags.map((t) => (
                  <span
                    key={t}
                    className="inline-flex items-center rounded-full border border-[color:var(--color-hairline)] bg-[color:var(--color-glass)] px-3 py-1 text-[11px] text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <p className="mt-6 text-foreground/85 leading-relaxed">
                {job.shortDescription}
              </p>

              <div className="mt-8">
                <span className="inline-flex h-11 items-center rounded-full border border-[color:var(--color-border-strong)] px-6 text-sm font-medium group-hover:bg-[color:var(--color-glass)] transition">
                  View Details →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}

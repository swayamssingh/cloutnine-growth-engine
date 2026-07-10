import { createFileRoute, Link } from "@tanstack/react-router";
import { Section } from "@/components/site/Section";
import { JOBS, type Job } from "@/data/careers";
import { Check } from "lucide-react";

export const Route = createFileRoute("/careers/$slug")({
  head: ({ params }) => {
    const job = JOBS.find((j) => j.slug === params.slug);
    return {
      meta: [
        { title: job?.metaTitle ?? "Careers | CloutNine" },
        {
          name: "description",
          content:
            job?.metaDescription ??
            "Explore career opportunities at CloutNine.",
        },
        { property: "og:title", content: job?.metaTitle ?? "Careers | CloutNine" },
        { property: "og:description", content: job?.metaDescription ?? "" },
      ],
    };
  },
  component: JobDetailsPage,
});

function scrollToApply(e: React.MouseEvent) {
  e.preventDefault();
  const el = document.getElementById("apply");
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

function JobDetailsPage() {
  const { slug } = Route.useParams();
  const job = JOBS.find((j) => j.slug === slug);

  if (!job) {
    return (
      <Section eyebrow="Careers" title="Role not found">
        <p className="text-muted-foreground">
          This position is no longer open.{" "}
          <Link to="/careers" className="underline">
            View open positions →
          </Link>
        </p>
      </Section>
    );
  }

  return (
    <>
      {/* Hero / Header */}
      <section className="border-b border-[color:var(--color-hairline)] grain">
        <div className="container-x pt-16 pb-14">
          <div className="mb-6 text-sm">
            <Link
              to="/careers"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              ← Careers
            </Link>
          </div>
          <span className="eyebrow">Open Role</span>
          <h1 className="display-xl mt-6 max-w-[20ch]">{job.title}</h1>

          <div className="mt-8 flex flex-wrap gap-2">
            {[job.tags[0], job.location, job.experience, job.startDate + " Start"]
              .filter(Boolean)
              .map((t) => (
                <span
                  key={t as string}
                  className="inline-flex items-center rounded-full border border-[color:var(--color-hairline)] bg-[color:var(--color-glass)] px-3 py-1 text-[11px] text-muted-foreground"
                >
                  {t}
                </span>
              ))}
          </div>

          <div className="mt-10">
            <a
              href="#apply"
              onClick={scrollToApply}
              className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-7 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition"
            >
              Apply Now →
            </a>
          </div>
        </div>
      </section>

      {/* Two-column layout */}
      <section className="py-16 md:py-20">
        <div className="container-x">
          <div className="grid lg:grid-cols-[minmax(0,65fr)_minmax(0,35fr)] gap-10 lg:gap-16 items-start">
            {/* LEFT — Job Description */}
            <div className="min-w-0 space-y-14">
              <JobSection title="About CloutNine" paragraphs={job.about} />
              <JobSection title="Role Overview" paragraphs={job.roleOverview} />
              <JobBullets title="Responsibilities" items={job.responsibilities} />
              <JobBullets title="Requirements" items={job.requirements} />
              <JobBullets title="Preferred Skills" items={job.preferredSkills} />
              <JobBullets title="What You'll Learn" items={job.whatYouWillLearn} />
              <JobBullets title="What We Offer" items={job.whatWeOffer} />
              <JobBullets title="Who Should Apply" items={job.whoShouldApply} />
              <ApplicationProcess job={job} />
            </div>

            {/* RIGHT — Sticky Application Card */}
            <aside className="lg:sticky lg:top-24">
              <ApplyCard job={job} />
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}

function JobSection({ title, paragraphs }: { title: string; paragraphs: string[] }) {
  return (
    <div>
      <h2 className="display text-3xl md:text-4xl">{title}</h2>
      <div className="mt-5 space-y-4 text-foreground/85 leading-[1.75] text-[17px]">
        {paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </div>
  );
}

function JobBullets({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h2 className="display text-3xl md:text-4xl">{title}</h2>
      <ul className="mt-6 space-y-3">
        {items.map((it) => (
          <li key={it} className="flex items-start gap-3 text-[17px] text-foreground/90 leading-relaxed">
            <Check className="mt-1.5 h-4 w-4 text-foreground/70 shrink-0" />
            <span>{it}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ApplicationProcess({ job }: { job: Job }) {
  return (
    <div>
      <h2 className="display text-3xl md:text-4xl">Application Process</h2>
      <p className="mt-5 text-foreground/85 text-[17px]">Applicants should prepare:</p>
      <ul className="mt-4 space-y-3">
        {job.applicationChecklist.map((it) => (
          <li key={it} className="flex items-start gap-3 text-[17px] text-foreground/90">
            <Check className="mt-1.5 h-4 w-4 text-foreground/70 shrink-0" />
            <span>{it}</span>
          </li>
        ))}
      </ul>

      <dl className="mt-8 grid sm:grid-cols-3 gap-6 border-t border-[color:var(--color-hairline)] pt-8">
        <MetaItem label="Location" value={job.location} />
        <MetaItem label="Experience" value={job.experience} />
        <MetaItem label="Start Date" value={job.startDate} />
      </dl>
    </div>
  );
}

function MetaItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
        {label}
      </dt>
      <dd className="mt-2 text-base text-foreground">{value}</dd>
    </div>
  );
}

function ApplyCard({ job }: { job: Job }) {
  return (
    <div
      id="apply"
      className="rounded-md border border-[color:var(--color-border-strong)] bg-surface p-8"
    >
      <h2 className="display text-2xl md:text-3xl">Apply for this Position</h2>
      <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
        Ready to become part of CloutNine? Complete our online application to
        be considered for this internship.
      </p>
      <p className="mt-3 text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
        Approx. 5 minutes
      </p>

      <ul className="mt-6 space-y-3 border-t border-[color:var(--color-hairline)] pt-6">
        {job.applicationChecklist.map((it) => (
          <li key={it} className="flex items-start gap-3 text-sm text-foreground/90">
            <Check className="mt-0.5 h-4 w-4 text-foreground/70 shrink-0" />
            <span>{it}</span>
          </li>
        ))}
      </ul>

      <a
        href={job.applyUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-flex h-12 w-full items-center justify-center rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition"
      >
        Apply Now →
      </a>

      <p className="mt-4 text-xs text-muted-foreground leading-relaxed">
        By applying, you agree that CloutNine may contact you regarding this
        opportunity.
      </p>
    </div>
  );
}

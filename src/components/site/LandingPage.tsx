import { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { Section, FAQ, MetricCard } from "@/components/site/Section";
import { AuditForm } from "@/components/site/AuditForm";
import { Check } from "lucide-react";

export type LandingPageProps = {
  eyebrow: string;
  h1: ReactNode;
  intro: string;
  metrics: { value: string; label: string }[];
  deliverables: { title: string; body: string }[];
  process: { step: string; title: string; body: string }[];
  proofPoints: string[];
  faqs: { q: string; a: string }[];
  ctaTitle?: string;
};

export function LandingPage(props: LandingPageProps) {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[color:var(--color-hairline)] grain">
        <div className="container-x pt-20 pb-24 md:pt-28 md:pb-32">
          <div className="grid lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-8">
              <span className="eyebrow">{props.eyebrow}</span>
              <h1 className="display-xl mt-8">{props.h1}</h1>
              <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
                {props.intro}
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="inline-flex h-12 items-center rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground"
                >
                  Get Your Free Audit →
                </Link>
                <Link
                  to="/case-studies"
                  className="inline-flex h-12 items-center rounded-full border border-border-strong px-6 text-sm hover:bg-surface transition"
                >
                  See the work
                </Link>
              </div>
            </div>
            <div className="lg:col-span-4">
              <AuditForm />
            </div>
          </div>
        </div>
      </section>

      {/* Metrics */}
      <Section className="!py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {props.metrics.map((m) => (
            <MetricCard key={m.label} {...m} />
          ))}
        </div>
      </Section>

      {/* Deliverables */}
      <Section eyebrow="What you get" title="Built as a system, not deliverables.">
        <div className="grid md:grid-cols-2 gap-px bg-[color:var(--color-hairline)] border border-[color:var(--color-hairline)]">
          {props.deliverables.map((d) => (
            <div key={d.title} className="bg-background p-8 md:p-10">
              <h3 className="font-sans text-xl font-medium normal-case tracking-normal">
                {d.title}
              </h3>
              <p className="mt-3 text-muted-foreground">{d.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Process */}
      <Section eyebrow="The process" title="From audit to compounding growth.">
        <div className="grid md:grid-cols-4 gap-8">
          {props.process.map((p) => (
            <div key={p.step}>
              <div className="display text-5xl text-primary">{p.step}</div>
              <h4 className="mt-4 text-base font-medium">{p.title}</h4>
              <p className="mt-2 text-sm text-muted-foreground">{p.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Proof */}
      <Section eyebrow="Why teams pick us" title="No fluff. Just systems that print pipeline.">
        <ul className="grid md:grid-cols-2 gap-4 max-w-4xl">
          {props.proofPoints.map((p) => (
            <li
              key={p}
              className="flex items-start gap-3 border border-border rounded-xl p-5 bg-surface"
            >
              <Check className="mt-0.5 h-5 w-5 text-primary shrink-0" />
              <span className="text-sm md:text-base">{p}</span>
            </li>
          ))}
        </ul>
      </Section>

      {/* FAQ */}
      <Section eyebrow="FAQ" title="Answers, fast.">
        <FAQ items={props.faqs} />
      </Section>

      {/* CTA */}
      <Section className="!pt-12">
        <div className="rounded-2xl border border-border bg-surface p-10 md:p-16 grain">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <h2 className="display-lg">
              {props.ctaTitle || "Want to see what we'd do for you?"}
            </h2>
            <div>
              <p className="text-muted-foreground">
                Free 15-minute audit of your content, ads and funnel. We send a
                Loom and a written action plan within 48 hours. No pitch deck,
                no slides.
              </p>
              <Link
                to="/contact"
                className="mt-6 inline-flex h-12 items-center rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground"
              >
                Get Your Free Audit →
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

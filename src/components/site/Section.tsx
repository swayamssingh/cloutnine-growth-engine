import { ReactNode } from "react";

export function Section({
  eyebrow,
  title,
  intro,
  children,
  className = "",
  id,
}: {
  eyebrow?: string;
  title?: ReactNode;
  intro?: ReactNode;
  children?: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={"py-24 md:py-32 " + className}>
      <div className="container-x">
        {(eyebrow || title) && (
          <div className="max-w-4xl">
            {eyebrow && <span className="eyebrow">{eyebrow}</span>}
            {title && <h2 className="display-lg mt-6">{title}</h2>}
            {intro && (
              <p className="mt-6 text-lg text-muted-foreground max-w-2xl">{intro}</p>
            )}
          </div>
        )}
        {children && <div className={eyebrow || title ? "mt-16" : ""}>{children}</div>}
      </div>
    </section>
  );
}

export function FAQ({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="divide-y divide-[color:var(--color-hairline)] border-y border-[color:var(--color-hairline)]">
      {items.map((it, i) => (
        <details key={i} className="group py-6">
          <summary className="flex cursor-pointer items-start justify-between gap-6 list-none">
            <h3 className="font-sans text-lg md:text-xl font-medium normal-case tracking-normal text-foreground">
              {it.q}
            </h3>
            <span className="mt-1 text-2xl text-muted-foreground group-open:rotate-45 transition-transform">
              +
            </span>
          </summary>
          <p className="mt-4 max-w-3xl text-muted-foreground">{it.a}</p>
        </details>
      ))}
    </div>
  );
}

export function MetricCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="border-t border-[color:var(--color-border-strong)] pt-6">
      <div className="display text-5xl md:text-6xl tracking-tight">{value}</div>
      <div className="mt-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
        {label}
      </div>
    </div>
  );
}

import type { ReactNode } from "react";

type Props = {
  eyebrow?: string;
  title: string;
  children?: ReactNode;
};

export function ArticleLayout({ eyebrow, title, children }: Props) {
  return (
    <article className="grain">
      <header className="border-b border-[color:var(--color-hairline)]">
        <div className="mx-auto max-w-3xl px-6 pt-24 pb-16">
          {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
          <h1 className="display-xl mt-6">{title}</h1>
        </div>
      </header>
      <div className="mx-auto max-w-3xl px-6 py-16">
        <div className="prose-article space-y-6 text-[17px] leading-[1.8] text-foreground/90">
          {children}
        </div>
      </div>
    </article>
  );
}

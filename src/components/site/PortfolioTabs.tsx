import { useEffect, useState } from "react";
import { PortfolioGrid } from "@/components/site/PortfolioGrid";
import { INDUSTRIES, type Industry, type PortfolioItem } from "@/lib/portfolio-data";

type Props = {
  data: Record<Industry, PortfolioItem[]>;
  initial?: Industry;
};

export function PortfolioTabs({ data, initial = "cafe" }: Props) {
  const [active, setActive] = useState<Industry>(initial);
  const [visible, setVisible] = useState(true);
  const [items, setItems] = useState<PortfolioItem[]>(data[initial]);

  // Smooth fade when switching categories
  useEffect(() => {
    setVisible(false);
    const t = setTimeout(() => {
      setItems(data[active]);
      setVisible(true);
    }, 180);
    return () => clearTimeout(t);
  }, [active, data]);

  return (
    <div>
      {/* Inline minimal tabs */}
      <div
        role="tablist"
        aria-label="Industry"
        className="flex flex-wrap items-center gap-x-7 gap-y-3 border-b border-white/5 pb-4"
      >
        {INDUSTRIES.map((ind) => {
          const isActive = ind.slug === active;
          return (
            <button
              key={ind.slug}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActive(ind.slug)}
              className={[
                "relative pb-2 text-sm transition-colors duration-300 outline-none",
                isActive
                  ? "text-white"
                  : "text-white/45 hover:text-white/80",
              ].join(" ")}
            >
              {ind.label}
              <span
                className={[
                  "pointer-events-none absolute left-0 right-0 -bottom-[5px] h-px bg-white origin-left transition-transform duration-300 ease-out",
                  isActive ? "scale-x-100" : "scale-x-0",
                ].join(" ")}
              />
            </button>
          );
        })}

        <span className="ml-auto text-[11px] uppercase tracking-[0.22em] text-white/35">
          {items.length} pieces
        </span>
      </div>

      {/* Content with fade transition */}
      <div
        className={[
          "mt-10 transition-opacity duration-300 ease-out",
          visible ? "opacity-100" : "opacity-0",
        ].join(" ")}
      >
        <PortfolioGrid key={active} items={items} />
      </div>
    </div>
  );
}

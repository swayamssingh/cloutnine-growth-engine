import type { PortfolioItem } from "@/lib/portfolio-data";

type Props = {
  items: PortfolioItem[];
};

export function PortfolioGrid({ items }: Props) {
  if (import.meta.env.DEV) {
    // eslint-disable-next-line no-console
    console.log("[PortfolioGrid] rendering items:", items?.length, items);
  }

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(var(--cols, 4), minmax(0, 1fr))",
        gap: 20,
        width: "100%",
      }}
      className="[--cols:1] sm:[--cols:2] lg:[--cols:4]"
    >
      {items.map((item, i) => (
        <div
          key={`${item.brand}-${i}-${item.src}`}
          style={{
            position: "relative",
            aspectRatio: "9 / 16",
            borderRadius: 12,
            overflow: "hidden",
            background: "#111",
            width: "100%",
          }}
        >
          {item.type === "video" ? (
            <video
              src={item.src}
              muted
              loop
              autoPlay
              playsInline
              preload="metadata"
              style={{
                display: "block",
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          ) : (
            <img
              src={item.src}
              alt={item.brand}
              loading="lazy"
              style={{
                display: "block",
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
}

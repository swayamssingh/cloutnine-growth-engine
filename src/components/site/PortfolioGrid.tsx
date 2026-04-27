import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type TouchEvent,
} from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { PortfolioItem } from "@/lib/portfolio-data";

type Props = {
  items: PortfolioItem[];
};

export function PortfolioGrid({ items }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const open = useCallback((i: number) => setOpenIndex(i), []);
  const close = useCallback(() => setOpenIndex(null), []);
  const next = useCallback(
    () => setOpenIndex((i) => (i === null ? null : (i + 1) % items.length)),
    [items.length],
  );
  const prev = useCallback(
    () =>
      setOpenIndex((i) =>
        i === null ? null : (i - 1 + items.length) % items.length,
      ),
    [items.length],
  );

  // Keyboard navigation
  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [openIndex, close, next, prev]);

  return (
    <>
      {/* Masonry — CSS columns for clean uneven heights */}
      <div className="columns-1 sm:columns-2 lg:columns-4 gap-5 [column-fill:_balance]">
        {items.map((item, i) => (
          <PortfolioTile
            key={`${item.brand}-${i}`}
            item={item}
            onClick={() => open(i)}
          />
        ))}
      </div>

      {openIndex !== null && (
        <Lightbox
          item={items[openIndex]}
          onClose={close}
          onNext={next}
          onPrev={prev}
        />
      )}
    </>
  );
}

// ───────────────────────────────────────────────────────────────
// Tile
// ───────────────────────────────────────────────────────────────
function PortfolioTile({
  item,
  onClick,
}: {
  item: PortfolioItem;
  onClick: () => void;
}) {
  const [hover, setHover] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (hover) {
      // Lazy: only set src on first hover
      if (!v.src && item.type === "video") v.src = item.src;
      v.play().catch(() => {});
    } else {
      v.pause();
      v.currentTime = 0;
    }
  }, [hover, item]);

  return (
    <button
      type="button"
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="group relative mb-5 block w-full overflow-hidden rounded-xl bg-white/[0.02] ring-1 ring-white/5 transition-all duration-500 hover:ring-white/10 break-inside-avoid"
      style={{ aspectRatio: item.ratio ?? 4 / 5 }}
      aria-label={`${item.brand} — ${item.category}`}
    >
      {item.type === "image" ? (
        <img
          src={item.src}
          alt={`${item.brand} — ${item.category}`}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-out group-hover:scale-[1.03] group-hover:brightness-[1.05]"
        />
      ) : (
        <>
          {/* Thumbnail layer */}
          {item.thumbnail && (
            <img
              src={item.thumbnail}
              alt={`${item.brand} — ${item.category}`}
              loading="lazy"
              decoding="async"
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
                hover ? "opacity-0" : "opacity-100"
              }`}
            />
          )}
          {/* Video layer (lazy loaded on hover) */}
          <video
            ref={videoRef}
            muted
            loop
            playsInline
            preload="none"
            poster={item.thumbnail}
            className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-out ${
              hover ? "scale-[1.03] opacity-100" : "opacity-0"
            }`}
          />
        </>
      )}

      {/* Subtle hover overlay with brand label */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-2 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
        <div className="bg-gradient-to-t from-black/70 to-transparent px-4 pt-10 pb-4">
          <div className="text-[11px] uppercase tracking-[0.18em] text-white/50">
            {item.category}
          </div>
          <div className="mt-1 text-sm text-white">{item.brand}</div>
        </div>
      </div>
    </button>
  );
}

// ───────────────────────────────────────────────────────────────
// Lightbox
// ───────────────────────────────────────────────────────────────
function Lightbox({
  item,
  onClose,
  onNext,
  onPrev,
}: {
  item: PortfolioItem;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}) {
  const touchStart = useRef<number | null>(null);

  const onTouchStart = (e: TouchEvent) => {
    touchStart.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: TouchEvent) => {
    if (touchStart.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStart.current;
    if (Math.abs(delta) > 50) {
      if (delta < 0) onNext();
      else onPrev();
    }
    touchStart.current = null;
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md animate-in fade-in duration-300"
      onClick={onClose}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* Top-left label */}
      <div className="pointer-events-none absolute left-5 top-5 z-10 text-xs uppercase tracking-[0.18em] text-white/70">
        <span className="text-white">{item.brand}</span>
        <span className="mx-2 text-white/30">/</span>
        <span>{item.category}</span>
      </div>

      {/* Close */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        className="absolute right-5 top-5 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full text-white/70 ring-1 ring-white/10 transition hover:bg-white/5 hover:text-white"
        aria-label="Close"
      >
        <X size={18} />
      </button>

      {/* Prev */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-3 md:left-6 z-10 inline-flex h-12 w-12 items-center justify-center rounded-full text-white/70 ring-1 ring-white/10 transition hover:bg-white/5 hover:text-white"
        aria-label="Previous"
      >
        <ChevronLeft size={22} />
      </button>

      {/* Next */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-3 md:right-6 z-10 inline-flex h-12 w-12 items-center justify-center rounded-full text-white/70 ring-1 ring-white/10 transition hover:bg-white/5 hover:text-white"
        aria-label="Next"
      >
        <ChevronRight size={22} />
      </button>

      {/* Content */}
      <div
        className="relative max-h-[88vh] max-w-[92vw] md:max-w-[80vw]"
        onClick={(e) => e.stopPropagation()}
      >
        {item.type === "image" ? (
          <img
            src={item.src}
            alt={`${item.brand} — ${item.category}`}
            className="max-h-[88vh] max-w-[92vw] md:max-w-[80vw] rounded-lg object-contain"
          />
        ) : (
          <video
            src={item.src}
            poster={item.thumbnail}
            autoPlay
            controls
            loop
            playsInline
            className="max-h-[88vh] max-w-[92vw] md:max-w-[80vw] rounded-lg object-contain"
          />
        )}
      </div>
    </div>
  );
}

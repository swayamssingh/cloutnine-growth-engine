import { Link } from "@tanstack/react-router";
import shot88 from "@/assets/portfolio/shot-88.png";
import shot89 from "@/assets/portfolio/shot-89.png";
import shot81 from "@/assets/portfolio/shot-81.png";
import shot96 from "@/assets/portfolio/shot-96.png";
import shot94 from "@/assets/portfolio/shot-94.png";
import shot90 from "@/assets/portfolio/shot-90.png";
import shot8 from "@/assets/portfolio/shot-8.png";

const IMAGES = [shot88, shot89, shot81, shot96, shot94, shot90, shot8];

export function PortfolioPreview() {
  // Duplicate the set so the -50% translate loop is seamless
  const loop = [...IMAGES, ...IMAGES];

  return (
    <section
      style={{ background: "#000", paddingTop: 120, paddingBottom: 120 }}
      className="relative text-white"
    >
      <Link
        to="/portfolio"
        aria-label="View full portfolio"
        className="absolute inset-0 z-10"
      />

      <div className="container-x relative z-20 pointer-events-none">
        <div className="flex items-end justify-between gap-6 mb-10">
          <div>
            <h2
              className="display font-bold text-white leading-[1.05]"
              style={{ fontSize: "clamp(32px, 5vw, 48px)" }}
            >
              Selected Work
            </h2>
            <p className="mt-4 max-w-xl text-base md:text-lg" style={{ color: "#A0A0A0" }}>
              A glimpse into the brands we've built, scaled, and grown.
            </p>
          </div>

          <Link
            to="/portfolio"
            className="hidden md:inline-flex pointer-events-auto items-center gap-2 text-sm text-white/40 hover:text-white transition-colors duration-300"
          >
            View full portfolio →
          </Link>
        </div>
      </div>

      {/* Marquee strip */}
      <div className="relative z-20 mt-10 overflow-hidden marquee-mask group pointer-events-none">
        <div className="marquee-track flex w-max">
          {loop.map((src, i) => (
            <div
              key={i}
              className="marquee-item relative shrink-0 overflow-hidden"
              style={{
                height: "var(--strip-h)",
                aspectRatio: "4 / 5",
                borderRadius: 12,
                marginRight: 20,
                background: "#0a0a0a",
              }}
            >
              <img
                src={src}
                alt=""
                loading="lazy"
                draggable={false}
                style={{
                  display: "block",
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
                className="transition-[transform,filter] duration-500 ease-out will-change-transform"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="container-x relative z-20 mt-8 md:hidden pointer-events-none">
        <Link
          to="/portfolio"
          className="inline-flex pointer-events-auto items-center gap-2 text-sm text-white/50 hover:text-white transition-colors"
        >
          View full portfolio →
        </Link>
      </div>

      <style>{`
        .marquee-mask {
          --strip-h: 220px;
          -webkit-mask-image: linear-gradient(to right, transparent, #000 8%, #000 92%, transparent);
          mask-image: linear-gradient(to right, transparent, #000 8%, #000 92%, transparent);
        }
        @media (min-width: 768px) {
          .marquee-mask { --strip-h: 320px; }
        }
        .marquee-track {
          animation: marquee-scroll 50s linear infinite;
        }
        .marquee-mask:hover .marquee-track {
          animation-play-state: paused;
        }
        .marquee-item {
          transition: transform 500ms ease-out, filter 500ms ease-out;
        }
        .marquee-item:hover {
          transform: scale(1.05);
          filter: brightness(1.12);
          z-index: 1;
        }
        @keyframes marquee-scroll {
          from { transform: translate3d(0, 0, 0); }
          to   { transform: translate3d(-50%, 0, 0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee-track { animation: none; }
        }
      `}</style>
    </section>
  );
}

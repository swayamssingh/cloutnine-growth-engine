
import shot88 from "@/assets/portfolio/shot-88.png";
import shot89 from "@/assets/portfolio/shot-89.png";
import shot81 from "@/assets/portfolio/shot-81.png";
import shot96 from "@/assets/portfolio/shot-96.png";
import shot94 from "@/assets/portfolio/shot-94.png";
import shot90 from "@/assets/portfolio/shot-90.png";
import shot8 from "@/assets/portfolio/shot-8.png";
import shot9 from "@/assets/portfolio/shot-9.png";
import shot10 from "@/assets/portfolio/shot-10.png";
import shot5 from "@/assets/portfolio/shot-5.png";
import shott23 from "@/assets/portfolio/shott-23.png";
import shott29 from "@/assets/portfolio/shott-29.png";
import shott49 from "@/assets/portfolio/shott-49.png";
import shott25 from "@/assets/portfolio/shott-25.png";
import shott64 from "@/assets/portfolio/shott-64.png";
import shott65 from "@/assets/portfolio/shott-65.png";
import shott30 from "@/assets/portfolio/shott-30.png";
import shott31 from "@/assets/portfolio/shott-31.png";
import shott77 from "@/assets/portfolio/shott-77.png";
import shott55 from "@/assets/portfolio/shott-55.png";
import shott54 from "@/assets/portfolio/shott-54.png";

const IMAGES = [
  shot88,
  shott64,
  shot9,
  shott30,
  shot89,
  shott77,
  shott23,
  shot81,
  shott65,
  shot10,
  shott54,
  shot96,
  shott31,
  shott29,
  shot94,
  shott55,
  shot5,
  shot90,
  shott49,
  shot8,
  shott25,
];

export function PortfolioPreview() {
  // Duplicate the set so the -50% translate loop is seamless
  const loop = [...IMAGES, ...IMAGES];

  return (
    <section
      style={{ background: "#000", paddingTop: 120, paddingBottom: 120 }}
      className="relative text-white"
    >
      <a
        href="https://portfolio.cloutnine.in"
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
              Portfolio
            </h2>
            <p className="mt-4 max-w-xl text-base md:text-lg" style={{ color: "#A0A0A0" }}>
              Design, content, and creative direction.
            </p>
          </div>

          <a
            href="https://portfolio.cloutnine.in"
            className="hidden md:inline-flex pointer-events-auto items-center gap-2 text-sm text-white/40 hover:text-white transition-colors duration-300"
          >
            View full portfolio →
          </a>
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
        <a
          href="https://portfolio.cloutnine.in"
          className="inline-flex pointer-events-auto items-center gap-2 text-sm text-white/50 hover:text-white transition-colors"
        >
          View full portfolio →
        </a>
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

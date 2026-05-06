import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function VideoHero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [src, setSrc] = useState("/hero.mp4");

  useEffect(() => {
    const mql = window.matchMedia("(max-width: 639px)");
    const update = () => setSrc(mql.matches ? "/hero-mobile.mp4" : "/hero.mp4");
    update();
    mql.addEventListener("change", update);
    return () => mql.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;
    v.load();
    const tryPlay = () => v.play().catch(() => {});
    tryPlay();
    v.addEventListener("canplay", tryPlay, { once: true });
    return () => v.removeEventListener("canplay", tryPlay);
  }, [src]);

  return (
    <section className="relative overflow-hidden">
      <div className="hero-grid" aria-hidden="true" />
      <div className="container-x relative pt-8 pb-10 md:pt-12 md:pb-16">
        <div className="video-shell relative aspect-[4/5] sm:aspect-[16/9] md:aspect-[21/9] w-full bg-black">
          <video
            ref={videoRef}
            key={src}
            className="absolute inset-0 h-full w-full object-cover"
            src={src}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            controls={false}
            disablePictureInPicture
            aria-hidden="true"
          />

          {/* readability gradient */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.15) 40%, rgba(0,0,0,0.65) 100%)",
            }}
          />

          {/* overlay content */}
          <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-12">
            <div className="flex items-start justify-between text-white/80">
              <span className="text-[11px] uppercase tracking-[0.28em]">
                Mumbai · Est. 2021
              </span>
              <span className="hidden md:inline text-[11px] uppercase tracking-[0.28em]">
                Reel · 00:12
              </span>
            </div>

            <div className="max-w-5xl">
              <h1 className="text-white" style={{ lineHeight: 0.86 }}>
                <span
                  className="block italic font-normal text-white/95"
                  style={{
                    fontFamily: "'Instrument Serif', Georgia, serif",
                    fontSize: "clamp(1.75rem, 8vw, 7.5rem)",
                    letterSpacing: "-0.01em",
                    lineHeight: 0.95,
                  }}
                >
                  Clout <span className="text-white/70">that</span>
                </span>
                <span
                  className="display block text-white uppercase"
                  style={{
                    fontSize: "clamp(2.75rem, 14vw, 13rem)",
                    letterSpacing: "-0.025em",
                    lineHeight: 0.85,
                    marginTop: "0.05em",
                  }}
                >
                  Converts<span className="text-white/40">.</span>
                </span>
              </h1>


              <div className="mt-8 md:mt-10 flex flex-wrap items-center gap-3">
                <Link
                  to="/contact"
                  className="glass inline-flex h-12 items-center gap-2 rounded-full px-6 text-sm font-medium text-white"
                >
                  Get Your Free Audit
                  <ArrowUpRight size={16} />
                </Link>
                <a
                  href="https://portfolio.cloutnine.in"
                  className="glass inline-flex h-12 items-center rounded-full px-6 text-sm text-white/90"
                >
                  See the work
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* sub-line under video */}
        <div className="mt-10 md:mt-14 grid lg:grid-cols-12 gap-8 items-end">
          <p className="lg:col-span-7 text-base md:text-lg text-muted-foreground max-w-2xl">
            CloutNine is a performance-driven social media agency in Mumbai. We
            connect content, ads, websites and WhatsApp into one growth engine —
            so every post has a job, and every rupee has an outcome.
          </p>
          <div className="lg:col-span-5 lg:text-right text-xs uppercase tracking-[0.25em] text-muted-foreground">
            Content · Meta Ads · Websites · WhatsApp
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div className="border-y border-[color:var(--color-hairline)] py-5 overflow-hidden">
        <div className="marquee-track flex w-max gap-12 whitespace-nowrap text-muted-foreground text-sm uppercase tracking-[0.2em]">
          {Array.from({ length: 2 }).flatMap((_, i) =>
            [
              "D2C Brands",
              "Restaurants",
              "Real Estate",
              "Fitness",
              "SaaS",
              "Retail",
              "Hospitality",
              "Healthcare",
              "Education",
              "Fashion",
            ].map((t) => (
              <span key={`${i}-${t}`} className="flex items-center gap-12">
                <span>{t}</span>
                <span className="text-foreground/60">●</span>
              </span>
            ))
          )}
        </div>
      </div>
    </section>
  );
}

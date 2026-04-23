import { useEffect, useRef } from "react";

/**
 * Aurora-style cursor follower. Soft, multi-color blurred glow that trails the
 * cursor with smooth lerp easing. Brightens over interactive elements and
 * fades when idle.
 */
export function AuroraCursor() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia?.("(pointer: coarse)").matches) return; // skip on touch

    const el = ref.current;
    if (!el) return;

    const target = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const pos = { x: target.x, y: target.y };
    let raf = 0;
    let idleTimer: number | undefined;

    const onMove = (e: MouseEvent) => {
      target.x = e.clientX;
      target.y = e.clientY;
      el.classList.add("is-active");
      window.clearTimeout(idleTimer);
      idleTimer = window.setTimeout(() => {
        el.classList.remove("is-active");
      }, 900);

      const t = e.target as HTMLElement | null;
      const interactive = t?.closest(
        "a, button, [role='button'], input, textarea, select, summary, label"
      );
      el.classList.toggle("is-hover", !!interactive);
    };

    const tick = () => {
      pos.x += (target.x - pos.x) * 0.18;
      pos.y += (target.y - pos.y) * 0.18;
      el.style.transform = `translate(${pos.x}px, ${pos.y}px) translate(-50%, -50%)`;
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
      window.clearTimeout(idleTimer);
    };
  }, []);

  return <div ref={ref} className="aurora-cursor" aria-hidden />;
}

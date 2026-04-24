import { useEffect, useRef } from "react";

/**
 * Tight aurora cursor. Small radius, controlled glow, locked to cursor position
 * with a single-frame lerp so it feels precise — never trailing or drifting.
 * Visible only while the cursor is moving; fades quickly when idle.
 */
export function AuroraCursor() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia?.("(pointer: coarse)").matches) return;

    const el = ref.current;
    if (!el) return;

    const target = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const pos = { x: target.x, y: target.y };
    let raf = 0;
    let idleTimer: number | undefined;
    let moving = false;

    const onMove = (e: MouseEvent) => {
      target.x = e.clientX;
      target.y = e.clientY;
      if (!moving) {
        // snap on first movement to avoid catch-up drift
        pos.x = target.x;
        pos.y = target.y;
        moving = true;
      }
      el.classList.add("is-active");
      window.clearTimeout(idleTimer);
      idleTimer = window.setTimeout(() => {
        el.classList.remove("is-active");
        moving = false;
      }, 220);

      const t = e.target as HTMLElement | null;
      const interactive = t?.closest(
        "a, button, [role='button'], input, textarea, select, summary, label"
      );
      el.classList.toggle("is-hover", !!interactive);
    };

    const tick = () => {
      // very tight smoothing — feels locked to the cursor
      pos.x += (target.x - pos.x) * 0.55;
      pos.y += (target.y - pos.y) * 0.55;
      el.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0) translate(-50%, -50%)`;
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

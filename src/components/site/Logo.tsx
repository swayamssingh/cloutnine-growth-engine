/**
 * CloutNine logo mark — concentric "9" / "C" composition rendered in pure
 * monochrome. Uses currentColor so it adapts to dark/light themes.
 */
export function LogoMark({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="6"
      strokeLinecap="round"
      aria-hidden="true"
    >
      {/* outer 9 loop */}
      <path d="M75 50 a25 25 0 1 0 -25 25" />
      <path d="M75 50 V72 a18 18 0 0 1 -18 18 H40" strokeWidth="6" />
      {/* inner concentric rings (C inside) */}
      <path d="M65 50 a15 15 0 1 0 -15 15" strokeWidth="5" opacity="0.85" />
      <path d="M55 50 a5 5 0 1 0 -5 5" strokeWidth="4" opacity="0.7" />
    </svg>
  );
}

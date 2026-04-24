import logoSrc from "@/assets/logo.png";

/**
 * CloutNine logo mark — concentric "9/C" rendered from the brand asset.
 * In dark mode the PNG renders white; in light mode we invert it to black
 * via CSS filter so it stays monochrome and adapts cleanly to the theme.
 */
export function LogoMark({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <img
      src={logoSrc}
      alt="CloutNine"
      className={`${className} object-contain select-none [.light_&]:invert`}
      draggable={false}
    />
  );
}

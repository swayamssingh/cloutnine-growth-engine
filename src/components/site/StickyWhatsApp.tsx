import { SITE } from "@/lib/seo";
import { MessageCircle } from "lucide-react";

export function StickyWhatsApp() {
  const url = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
    "Hi CloutNine, I'd like a free social media audit."
  )}`;
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-[color:var(--color-whatsapp)] px-4 py-3 text-sm font-medium text-black shadow-[0_10px_40px_-10px_rgba(0,0,0,0.6)] hover:scale-105 transition-transform"
    >
      <MessageCircle size={18} strokeWidth={2.2} />
      <span className="hidden sm:inline">Chat on WhatsApp</span>
    </a>
  );
}

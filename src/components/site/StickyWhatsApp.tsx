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
      className="glass fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full px-4 py-3 text-sm font-medium text-foreground"
    >
      <MessageCircle size={18} strokeWidth={2.2} />
      <span className="hidden sm:inline">Chat on WhatsApp</span>
    </a>
  );
}

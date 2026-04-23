import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/site/Section";
import { AuditForm } from "@/components/site/AuditForm";
import { SITE } from "@/lib/seo";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact CloutNine | Free Social Media Audit | Mumbai" },
      { name: "description", content: "Get a free 48-hour social media audit from CloutNine, Mumbai. WhatsApp, email or walk in to our Andheri studio." },
      { property: "og:title", content: "Contact CloutNine | Free Audit | Mumbai" },
      { property: "og:description", content: "Free 48-hour social media audit. WhatsApp us or walk into our Andheri studio." },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <>
      <section className="border-b border-[color:var(--color-hairline)] grain">
        <div className="container-x pt-20 pb-16">
          <span className="eyebrow">Contact</span>
          <h1 className="display-xl mt-8 max-w-[18ch]">
            Get your free <span className="text-primary">48-hour audit</span>.
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
            Drop your details. We'll send back a Loom + written action plan
            within 48 working hours. No deck. No pitch. Just numbers.
          </p>
        </div>
      </section>

      <Section className="!py-20">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div>
            <AuditForm />
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="font-sans text-xl font-medium normal-case tracking-normal">
                Or reach us directly
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                We reply on WhatsApp inside 2 working hours.
              </p>
            </div>

            <div className="space-y-4">
              <ContactRow
                icon={<MessageCircle size={18} />}
                label="WhatsApp"
                value={SITE.phone}
                href={`https://wa.me/${SITE.whatsapp}`}
              />
              <ContactRow
                icon={<Phone size={18} />}
                label="Phone"
                value={SITE.phone}
                href={`tel:${SITE.phone}`}
              />
              <ContactRow
                icon={<Mail size={18} />}
                label="Email"
                value={SITE.email}
                href={`mailto:${SITE.email}`}
              />
              <ContactRow
                icon={<MapPin size={18} />}
                label="Studio"
                value="Andheri East, Mumbai 400069"
              />
            </div>

            <div className="border-t border-[color:var(--color-hairline)] pt-8">
              <h4 className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                Studio hours
              </h4>
              <p className="mt-3 text-sm">Mon – Sat · 10:00 – 19:00 IST</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Walk-ins by appointment.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

function ContactRow({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <div className="flex items-center gap-4 border border-border rounded-xl p-5 bg-surface hover:border-primary transition-colors">
      <span className="text-primary">{icon}</span>
      <div>
        <div className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
          {label}
        </div>
        <div className="text-base mt-1">{value}</div>
      </div>
    </div>
  );
  return href ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className="block">
      {inner}
    </a>
  ) : (
    inner
  );
}

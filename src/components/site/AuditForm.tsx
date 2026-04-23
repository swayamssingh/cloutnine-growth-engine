import { useState } from "react";
import { z } from "zod";
import { SITE } from "@/lib/seo";

const schema = z.object({
  name: z.string().trim().min(2, "Enter your name").max(80),
  phone: z
    .string()
    .trim()
    .regex(/^[0-9+\-\s()]{8,16}$/i, "Enter a valid phone number"),
  need: z.string().trim().min(3, "Tell us briefly what you need").max(300),
});

export function AuditForm({ compact = false }: { compact?: boolean }) {
  const [state, setState] = useState({ name: "", phone: "", need: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const parsed = schema.safeParse(state);
    if (!parsed.success) {
      const fe: Record<string, string> = {};
      parsed.error.issues.forEach((i) => {
        fe[i.path[0] as string] = i.message;
      });
      setErrors(fe);
      return;
    }
    setErrors({});
    const msg = `New audit request:%0AName: ${encodeURIComponent(state.name)}%0APhone: ${encodeURIComponent(state.phone)}%0ANeed: ${encodeURIComponent(state.need)}`;
    window.open(`https://wa.me/${SITE.whatsapp}?text=${msg}`, "_blank");
    setSent(true);
  }

  return (
    <form
      onSubmit={submit}
      className={
        "rounded-2xl border border-border bg-surface p-6 md:p-8 " +
        (compact ? "" : "")
      }
    >
      <div className="flex items-center justify-between">
        <h3 className="display text-2xl md:text-3xl">Free Audit</h3>
        <span className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
          Reply &lt; 2 hrs
        </span>
      </div>
      <p className="mt-2 text-sm text-muted-foreground">
        15-minute teardown of your content, ads & funnel — no pitch deck.
      </p>

      <div className="mt-6 grid gap-4">
        <Field
          label="Name"
          value={state.name}
          onChange={(v) => setState({ ...state, name: v })}
          error={errors.name}
        />
        <Field
          label="Phone / WhatsApp"
          value={state.phone}
          onChange={(v) => setState({ ...state, phone: v })}
          error={errors.phone}
        />
        <Field
          label="What do you need?"
          value={state.need}
          onChange={(v) => setState({ ...state, need: v })}
          error={errors.need}
          multiline
        />
      </div>

      <button
        type="submit"
        className="glass-solid mt-6 inline-flex h-12 w-full items-center justify-center rounded-full px-6 text-sm font-medium"
      >
        {sent ? "Sent — opening WhatsApp…" : "Get My Free Audit →"}
      </button>
      <p className="mt-3 text-[11px] text-muted-foreground text-center">
        We respond on WhatsApp within 2 working hours.
      </p>
    </form>
  );
}

function Field({
  label,
  value,
  onChange,
  error,
  multiline,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  multiline?: boolean;
}) {
  const cls =
    "w-full bg-transparent border-b border-border focus:border-foreground outline-none py-2 text-base transition-colors";
  return (
    <label className="block">
      <span className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
        {label}
      </span>
      {multiline ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          rows={2}
          className={cls + " resize-none"}
        />
      ) : (
        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={cls}
        />
      )}
      {error && <span className="mt-1 block text-xs text-destructive">{error}</span>}
    </label>
  );
}

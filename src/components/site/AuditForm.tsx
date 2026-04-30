import { useState } from "react";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(2, "Enter your name").max(80),
  phone: z
    .string()
    .trim()
    .regex(/^[0-9+\-\s()]{8,16}$/i, "Enter a valid phone number"),
  message: z.string().trim().max(300).optional().or(z.literal("")),
});

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xnjwqnej";

export function AuditForm({ compact = false }: { compact?: boolean }) {
  const [state, setState] = useState({ name: "", phone: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  async function submit(e: React.FormEvent<HTMLFormElement>) {
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
    setSubmitting(true);
    try {
      const formData = new FormData();
      formData.append("name", state.name);
      formData.append("phone", state.phone);
      formData.append("message", state.message);
      formData.append("_subject", "New CloutNine Lead");

      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setSent(true);
        setState({ name: "", phone: "", message: "" });
      } else {
        setErrors({ form: "Something went wrong. Please try again." });
      }
    } catch {
      setErrors({ form: "Network error. Please try again." });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form
      onSubmit={submit}
      action={FORMSPREE_ENDPOINT}
      method="POST"
      className={
        "rounded-2xl border border-border bg-surface p-6 md:p-8 " +
        (compact ? "" : "")
      }
    >
      <input type="hidden" name="_subject" value="New CloutNine Lead" />
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
          name="name"
          required
          value={state.name}
          onChange={(v) => setState({ ...state, name: v })}
          error={errors.name}
        />
        <Field
          label="Phone / WhatsApp"
          name="phone"
          required
          value={state.phone}
          onChange={(v) => setState({ ...state, phone: v })}
          error={errors.phone}
        />
        <Field
          label="What do you need?"
          name="message"
          value={state.message}
          onChange={(v) => setState({ ...state, message: v })}
          error={errors.message}
          multiline
        />
      </div>

      <button
        type="submit"
        disabled={submitting || sent}
        className="glass-solid mt-6 inline-flex h-12 w-full items-center justify-center rounded-full px-6 text-sm font-medium disabled:opacity-70"
      >
        {sent
          ? "Thanks, we'll reach out shortly."
          : submitting
            ? "Sending…"
            : "Get My Free Audit →"}
      </button>
      {errors.form && (
        <p className="mt-3 text-xs text-destructive text-center">{errors.form}</p>
      )}
      <p className="mt-3 text-[11px] text-muted-foreground text-center">
        We respond on WhatsApp within 2 working hours.
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  value,
  onChange,
  error,
  multiline,
  required,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  multiline?: boolean;
  required?: boolean;
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
          name={name}
          required={required}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          rows={2}
          className={cls + " resize-none"}
        />
      ) : (
        <input
          name={name}
          required={required}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={cls}
        />
      )}
      {error && <span className="mt-1 block text-xs text-destructive">{error}</span>}
    </label>
  );
}

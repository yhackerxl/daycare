"use client";

import { useState } from "react";

type Errors = Record<string, string>;

const PROGRAMS = ["Infant Care", "Toddler Program", "Preschool", "Pre-K", "After-School Care"];

function sanitize(value: string): string {
  return value.replace(/[<>"'&]/g, "").trim();
}

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [errors, setErrors] = useState<Errors>({});
  const [form, setForm] = useState({
    parentName: "",
    email: "",
    phone: "",
    childName: "",
    childAge: "",
    program: "",
    startDate: "",
    message: ""
  });

  function set(field: keyof typeof form, value: string) {
    setForm((f) => ({ ...f, [field]: value }));
  }

  function validate(): Errors {
    const e: Errors = {};
    if (sanitize(form.parentName).length < 2) e.parentName = "Enter your full name so we know who to contact.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) e.email = "Enter a valid email, e.g. you@example.com…";
    if (!/^[+()\-.\s\d]{7,20}$/.test(form.phone.trim())) e.phone = "Enter a reachable phone number.";
    if (sanitize(form.childName).length < 2) e.childName = "Enter your child\u2019s first name.";
    if (!form.childAge.trim()) e.childAge = "Enter your child\u2019s age, e.g. 2 years…";
    if (!form.program) e.program = "Choose a preferred program.";
    if (form.message && sanitize(form.message).length < 4) e.message = "Add a little more detail so we can help.";
    return e;
  }

  function onSubmit(ev: React.FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    const v = validate();
    setErrors(v);
    if (Object.keys(v).length > 0) {
      const first = document.querySelector<HTMLElement>("[data-error='true'] input, [data-error='true'] select, [data-error='true'] textarea");
      first?.focus();
      return;
    }
    setStatus("sending");
    // Simulate server-side validated submission; no secrets or API keys in client.
    setTimeout(() => setStatus("sent"), 900);
  }

  const inputCls = (hasError: boolean) =>
    `mt-1.5 w-full rounded-xl border bg-white px-4 py-3 text-[15px] text-ink placeholder:text-muted/70 transition-colors duration-150 ${
      hasError ? "border-coral" : "border-ink/15 hover:border-primary/50"
    }`;

  function fieldError(id: string) {
    if (!errors[id]) return null;
    return (
      <p id={`${id}-error`} role="alert" className="mt-1.5 text-sm font-medium text-[#B3402A]">
        {errors[id]}
      </p>
    );
  }

  if (status === "sent") {
    return (
      <div aria-live="polite" className="rounded-2xl border border-primary/25 bg-softgreen p-6 sm:p-8">
        <h3 className="text-xl font-bold text-ink">Thank you — we received your inquiry.</h3>
        <p className="mt-2 text-[15px] leading-7 text-ink/80">
          Our enrollment team replies within one business day. If your request is urgent, call us
          at <a className="font-semibold text-primary" href="tel:+15552148890">+1&nbsp;(555)&nbsp;214-8890</a>.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate aria-describedby="form-note" className="rounded-2xl border border-ink/10 bg-white p-6 shadow-soft sm:p-8">
      <p id="form-note" className="text-sm leading-6 text-muted">
        Fields marked * are required. We only use your details to respond to your inquiry.
      </p>
      <div aria-live="polite" className="sr-only">{status === "sending" ? "Sending…" : ""}</div>
      <div className="mt-5 grid gap-5 md:grid-cols-2">
        <div data-error={Boolean(errors.parentName)}>
          <label htmlFor="parentName" className="text-sm font-semibold text-ink">Parent / Guardian Name *</label>
          <input id="parentName" name="parentName" type="text" autoComplete="name" value={form.parentName}
            onChange={(e) => set("parentName", e.target.value)} placeholder="e.g. Amara Johnson…" aria-invalid={Boolean(errors.parentName)} aria-describedby={errors.parentName ? "parentName-error" : undefined}
            className={inputCls(Boolean(errors.parentName))} />
          {fieldError("parentName")}
        </div>
        <div data-error={Boolean(errors.email)}>
          <label htmlFor="email" className="text-sm font-semibold text-ink">Email *</label>
          <input id="email" name="email" type="email" autoComplete="email" spellCheck={false} inputMode="email" value={form.email}
            onChange={(e) => set("email", e.target.value)} placeholder="e.g. you@example.com…" aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "email-error" : undefined}
            className={inputCls(Boolean(errors.email))} />
          {fieldError("email")}
        </div>
        <div data-error={Boolean(errors.phone)}>
          <label htmlFor="phone" className="text-sm font-semibold text-ink">Phone *</label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" inputMode="tel" value={form.phone}
            onChange={(e) => set("phone", e.target.value)} placeholder="e.g. (555) 123-4567…" aria-invalid={Boolean(errors.phone)} aria-describedby={errors.phone ? "phone-error" : undefined}
            className={inputCls(Boolean(errors.phone))} />
          {fieldError("phone")}
        </div>
        <div data-error={Boolean(errors.childName)}>
          <label htmlFor="childName" className="text-sm font-semibold text-ink">Child Name *</label>
          <input id="childName" name="childName" type="text" autoComplete="off" value={form.childName}
            onChange={(e) => set("childName", e.target.value)} placeholder="e.g. Milo…" aria-invalid={Boolean(errors.childName)} aria-describedby={errors.childName ? "childName-error" : undefined}
            className={inputCls(Boolean(errors.childName))} />
          {fieldError("childName")}
        </div>
        <div data-error={Boolean(errors.childAge)}>
          <label htmlFor="childAge" className="text-sm font-semibold text-ink">Child Age *</label>
          <input id="childAge" name="childAge" type="text" autoComplete="off" inputMode="text" value={form.childAge}
            onChange={(e) => set("childAge", e.target.value)} placeholder="e.g. 2 years 4 months…" aria-invalid={Boolean(errors.childAge)} aria-describedby={errors.childAge ? "childAge-error" : undefined}
            className={inputCls(Boolean(errors.childAge))} />
          {fieldError("childAge")}
        </div>
        <div data-error={Boolean(errors.program)}>
          <label htmlFor="program" className="text-sm font-semibold text-ink">Preferred Program *</label>
          <select id="program" name="program" autoComplete="off" value={form.program}
            onChange={(e) => set("program", e.target.value)} aria-invalid={Boolean(errors.program)} aria-describedby={errors.program ? "program-error" : undefined}
            className={inputCls(Boolean(errors.program))} style={{ backgroundColor: "#fff", color: "#24332B" }}>
            <option value="">Select a program…</option>
            {PROGRAMS.map((p) => (<option key={p} value={p}>{p}</option>))}
          </select>
          {fieldError("program")}
        </div>
        <div>
          <label htmlFor="startDate" className="text-sm font-semibold text-ink">Preferred Start Date</label>
          <input id="startDate" name="startDate" type="date" autoComplete="off" value={form.startDate}
            onChange={(e) => set("startDate", e.target.value)} className={inputCls(false)} />
        </div>
        <div>
          <label htmlFor="message" className="text-sm font-semibold text-ink">Message</label>
          <textarea id="message" name="message" rows={4} autoComplete="off" value={form.message}
            onChange={(e) => set("message", e.target.value)} placeholder="Allergies, schedule needs, questions…"
            aria-describedby={errors.message ? "message-error" : undefined}
            className={`${inputCls(Boolean(errors.message))} resize-y`} />
          {fieldError("message")}
        </div>
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-6 inline-flex min-h-[48px] w-full items-center justify-center rounded-xl bg-primary px-6 py-3 font-semibold text-white transition-colors duration-150 hover:bg-primaryDark disabled:opacity-70 sm:w-auto"
      >
        {status === "sending" ? "Sending…" : "Send Enrollment Inquiry"}
      </button>
      <p className="mt-3 text-xs leading-5 text-muted">Protected against spam. We never share your information.</p>
    </form>
  );
}

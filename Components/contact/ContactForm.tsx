"use client";

import { useState } from "react";

const QUERY_TYPES = [
  "General",
  "Product",
  "Payments & Refunds",
  "Collaboration",
  "Other",
];

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  queryType: string;
  message: string;
};

const INITIAL: FormState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  queryType: "",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [submitted, setSubmitted] = useState(false);

  const set =
    (key: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((prev) => ({ ...prev, [key]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 border border-text-black p-12 text-center">
        <span className="text-xs uppercase tracking-[0.2em] text-green-primary font-semibold">
          Message Sent
        </span>
        <p className="text-sm text-text-black/50">
          We&apos;ll get back to you within 24 hours.
        </p>
        <button
          onClick={() => {
            setForm(INITIAL);
            setSubmitted(false);
          }}
          className="mt-4 text-[10px] uppercase tracking-[0.15em] underline underline-offset-4 hover:text-green-primary transition-colors"
        >
          Send another
        </button>
      </div>
    );
  }

  const inputCls =
    "w-full border border-black/10 focus:border-text-black px-4 py-3 text-[11px] uppercase tracking-[0.08em] placeholder:normal-case placeholder:tracking-normal focus:outline-none transition-colors duration-200";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      {/* Name row */}
      <div className="grid grid-cols-2 gap-4">
        <input
          placeholder="First Name"
          value={form.firstName}
          onChange={set("firstName")}
          className={inputCls}
          required
        />
        <input
          placeholder="Last Name"
          value={form.lastName}
          onChange={set("lastName")}
          className={inputCls}
          required
        />
      </div>

      {/* Contact row */}
      <div className="grid grid-cols-2 gap-4">
        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={set("email")}
          className={inputCls}
          required
        />
        <input
          placeholder="Phone (optional)"
          value={form.phone}
          onChange={set("phone")}
          className={inputCls}
        />
      </div>

      {/* Query type pills */}
      <div className="flex flex-col gap-2">
        <span className="text-[9px] uppercase tracking-[0.18em] text-text-black/40">
          Query Type
        </span>
        <div className="flex flex-wrap gap-2">
          {QUERY_TYPES.map((q) => (
            <button
              key={q}
              type="button"
              onClick={() => setForm((p) => ({ ...p, queryType: q }))}
              className={`px-3 py-1.5 text-[9px] uppercase tracking-[0.12em] border transition-all duration-200 ${
                form.queryType === q
                  ? "bg-text-black text-green-primary border-text-black"
                  : "border-black/15 text-text-black/50 hover:border-text-black hover:text-text-black"
              }`}
            >
              {q}
            </button>
          ))}
        </div>
      </div>

      {/* Message */}
      <textarea
        placeholder="Your message..."
        value={form.message}
        onChange={set("message")}
        rows={5}
        className="w-full border border-black/10 focus:border-text-black px-4 py-3 text-[11px] resize-none focus:outline-none transition-colors duration-200"
        required
      />

      <button
        type="submit"
        className="w-full bg-text-black text-green-primary py-3.5 text-xs uppercase tracking-[0.2em] font-semibold hover:bg-black/80 transition-all active:scale-[0.99]"
      >
        Send Message
      </button>
    </form>
  );
}

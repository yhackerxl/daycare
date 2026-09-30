"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

type Props = { question: string; answer: string };

export default function FAQItem({ question, answer }: Props) {
  const [open, setOpen] = useState(false);
  const panelId = `faq-${question.slice(0, 12).replace(/[^a-z0-9]+/gi, "-").toLowerCase()}`;
  return (
    <div className="overflow-hidden rounded-2xl border border-ink/10 bg-white">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={panelId}
        className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left transition-colors duration-150 hover:bg-cream"
      >
        <span className="min-w-0 text-[15px] font-semibold text-ink">{question}</span>
        <ChevronDown
          size={20}
          aria-hidden="true"
          className={`shrink-0 text-primary transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div id={panelId} className="border-t border-ink/10 bg-cream/60 px-5 py-4">
          <p className="text-[15px] leading-7 text-muted">{answer}</p>
        </div>
      )}
    </div>
  );
}

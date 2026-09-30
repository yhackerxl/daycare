"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Sun } from "lucide-react";
import { NAV, SITE } from "../lib/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex min-w-0 items-center gap-2" aria-label={`${SITE.name} — home`}>
          <span aria-hidden="true" className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-primary text-white">
            <Sun size={20} strokeWidth={2.2} />
          </span>
          <span className="min-w-0 truncate text-[17px] font-bold tracking-tight text-ink">
            Little&nbsp;Sprouts
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 text-[15px] font-medium text-ink/80 transition-colors duration-150 hover:bg-softgreen hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact/"
            className="ml-2 rounded-xl bg-primary px-4 py-2.5 text-[15px] font-semibold text-white shadow-soft transition-colors duration-150 hover:bg-primaryDark"
          >
            Enroll Now
          </Link>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <Link
            href="/contact/"
            className="rounded-xl bg-primary px-3.5 py-2 text-sm font-semibold text-white transition-colors duration-150 hover:bg-primaryDark"
          >
            Enroll Now
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid h-11 w-11 place-items-center rounded-xl border border-ink/10 text-ink transition-colors duration-150 hover:bg-cream"
          >
            {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="border-t border-ink/10 bg-white px-4 pb-6 pt-2 md:hidden"
        >
          <ul className="flex flex-col gap-1">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-3 py-3 text-base font-medium text-ink transition-colors duration-150 hover:bg-softgreen"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-3 px-3 text-sm text-muted">{SITE.hours}</p>
        </nav>
      )}
    </header>
  );
}

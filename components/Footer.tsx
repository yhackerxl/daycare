import Link from "next/link";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { SITE } from "../lib/site";

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-4">
        <div className="min-w-0">
          <p className="text-lg font-bold">Little&nbsp;Sprouts</p>
          <p className="mt-3 max-w-xs text-sm leading-6 text-white/75">
            A warm, safe daycare where children learn through play, build confidence, and grow at
            their own pace.
          </p>
          <div className="mt-4 flex gap-2" aria-label="Social links">
            {["Facebook", "Instagram", "X"].map((label) => (
              <a
                key={label}
                href="/contact/"
                aria-label={`Little Sprouts on ${label}`}
                className="rounded-lg border border-white/20 px-3 py-2 text-xs font-semibold text-white/90 transition-colors duration-150 hover:bg-white/10 hover:text-white"
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        <nav aria-label="Footer">
          <p className="text-sm font-semibold uppercase tracking-wide text-warmyellow">Explore</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link className="text-white/80 transition-colors duration-150 hover:text-white" href="/">Home</Link></li>
            <li><Link className="text-white/80 transition-colors duration-150 hover:text-white" href="/about/">About</Link></li>
            <li><Link className="text-white/80 transition-colors duration-150 hover:text-white" href="/programs/">Programs</Link></li>
            <li><Link className="text-white/80 transition-colors duration-150 hover:text-white" href="/contact/">Contact &amp; Enrollment</Link></li>
          </ul>
        </nav>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-warmyellow">Contact</p>
          <ul className="mt-3 space-y-2 text-sm text-white/80">
            <li className="flex items-start gap-2"><Phone size={16} aria-hidden="true" className="mt-0.5 shrink-0" /><a href={SITE.phoneHref} className="transition-colors duration-150 hover:text-white">{SITE.phone}</a></li>
            <li className="flex items-start gap-2"><Mail size={16} aria-hidden="true" className="mt-0.5 shrink-0" /><a href={`mailto:${SITE.email}`} className="break-words transition-colors duration-150 hover:text-white">{SITE.email}</a></li>
            <li className="flex items-start gap-2"><MapPin size={16} aria-hidden="true" className="mt-0.5 shrink-0" /><span>{SITE.address}</span></li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-warmyellow">Hours</p>
          <p className="mt-3 flex items-start gap-2 text-sm text-white/80">
            <Clock size={16} aria-hidden="true" className="mt-0.5 shrink-0" />
            <span>Mon–Fri · 7:30&nbsp;AM – 5:30&nbsp;PM<br />Weekends &amp; holidays closed</span>
          </p>
          <Link
            href="/contact/"
            className="mt-4 inline-block rounded-xl bg-warmyellow px-4 py-2.5 text-sm font-bold text-ink transition-colors duration-150 hover:bg-white"
          >
            Book a Tour
          </Link>
        </div>
      </div>
      <div className="border-t border-white/15">
        <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-5 text-xs text-white/65 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>© {new Date().getFullYear()} Little Sprouts Daycare. All rights reserved.</p>
          <p>Licensed childcare · CPR &amp; first-aid trained staff</p>
        </div>
      </div>
    </footer>
  );
}

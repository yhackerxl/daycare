import type { Metadata } from "next";
import { AlarmClock, Mail, MapPin, Phone, Siren } from "lucide-react";
import ContactForm from "../../components/ContactForm";
import FAQItem from "../../components/FAQItem";
import CTASection from "../../components/CTASection";
import SectionHeading from "../../components/SectionHeading";
import { SITE } from "../../lib/site";

export const metadata: Metadata = {
  title: "Contact & Enrollment",
  description:
    "Contact Little Sprouts Daycare: phone, email, location, hours, enrollment form, map, emergency info, and FAQs to start your child\u2019s journey.",
  alternates: { canonical: "/contact/" },
  openGraph: { title: "Contact & Enrollment — Little Sprouts", description: "Let\u2019s start your child\u2019s journey.", url: "/contact/" }
};

export default function ContactPage() {
  return (
    <>
      <section aria-labelledby="contact-hero" className="bg-cream">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 md:py-14">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-primary">Contact &amp; Enrollment</p>
          <h1 id="contact-hero" className="mt-2 max-w-2xl text-balance text-3xl font-extrabold text-ink sm:text-4xl">Let’s Start Your Child’s Journey</h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-muted sm:text-lg sm:leading-8">Questions about availability, tours, or fees? Send the form below or reach us directly — we reply within one business day.</p>
        </div>
      </section>

      <section aria-label="Contact details and enrollment form" className="bg-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-5 md:py-16">
          <div className="min-w-0 md:col-span-2">
            <h2 className="text-xl font-bold text-ink">Visit or Reach Us</h2>
            <ul className="mt-4 space-y-3">
              {[
                { icon: Phone, label: "Phone", value: SITE.phone, href: SITE.phoneHref },
                { icon: Mail, label: "Email", value: SITE.email, href: `mailto:${SITE.email}` },
                { icon: MapPin, label: "Location", value: SITE.address },
                { icon: AlarmClock, label: "Hours", value: SITE.hours }
              ].map((c) => (
                <li key={c.label} className="flex min-w-0 gap-3 rounded-2xl border border-ink/10 bg-cream/60 p-4">
                  <span aria-hidden="true" className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-softgreen text-primary"><c.icon size={19} /></span>
                  <div className="min-w-0">
                    <p className="text-xs font-bold uppercase tracking-wide text-muted">{c.label}</p>
                    {c.href ? (
                      <a href={c.href} className="break-words text-[15px] font-semibold text-ink transition-colors duration-150 hover:text-primary">{c.value}</a>
                    ) : (
                      <p className="text-[15px] font-semibold text-ink">{c.value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-4 rounded-2xl bg-ink p-5 text-white">
              <p className="flex items-center gap-2 font-bold"><Siren size={18} aria-hidden="true" className="text-warmyellow" /> Emergency contacts</p>
              <p className="mt-2 text-sm leading-6 text-white/85">Daytime urgent line: <a className="font-semibold text-warmyellow" href="tel:+15552148891">+1&nbsp;(555)&nbsp;214-8891</a><br />After hours: email <a className="font-semibold text-warmyellow" href={`mailto:${SITE.email}`}>{SITE.email}</a> with “URGENT” in the subject.</p>
            </div>
          </div>
          <div className="min-w-0 md:col-span-3">
            <h2 className="text-xl font-bold text-ink">Enrollment Inquiry</h2>
            <p className="mt-1 text-sm text-muted">Takes about 2 minutes. No payment required.</p>
            <div className="mt-4"><ContactForm /></div>
          </div>
        </div>
      </section>

      <section aria-labelledby="map" className="bg-cream">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-16">
          <SectionHeading align="left" eyebrow="Find Us" title="Easy Drop-off on Your Way to Work" description="Two blocks from Greenline Station with stroller parking and a kiss-and-go loop out front." />
          <div className="mt-6 overflow-hidden rounded-3xl border border-ink/10 bg-white shadow-soft">
            <iframe
              title="Map showing Little Sprouts Daycare at 124 Maple Grove Avenue, Springfield"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-89.68%2C39.76%2C-89.60%2C39.82&layer=mapnik&marker=39.79%2C-89.64"
              width="100%"
              height="320"
              loading="lazy"
              style={{ border: 0, display: "block" }}
            />
            <div className="flex flex-col gap-2 p-5 sm:flex-row sm:items-center sm:justify-between">
              <p className="min-w-0 text-sm text-muted">{SITE.address} · Free parking behind the building</p>
              <a href="https://www.openstreetmap.org/search?query=Springfield" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[44px] items-center justify-center rounded-xl border-2 border-primary px-5 py-2 text-sm font-semibold text-primary transition-colors duration-150 hover:bg-softgreen">Get Directions</a>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="contact-faq" className="bg-white">
        <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 md:py-16">
          <SectionHeading eyebrow="Good to Know" title="Enrollment FAQs" />
          <div className="mt-8 space-y-3">
            <FAQItem question="Can we tour before enrolling?" answer="Yes — tours run Tuesday and Thursday at 9:30 AM. Children are welcome. Bring vaccination records if you have them." />
            <FAQItem question="Is there a waitlist?" answer="Popular rooms (infants, 2s) sometimes wait 2–4 weeks. Joining the inquiry list is free and holds your place in line." />
            <FAQItem question="What should we bring on day one?" answer="Diapers, wipes, a change of clothes, bedding for nap cots, and any comfort item. Label everything — we provide cubbies." />
            <FAQItem question="How do sick days work?" answer="Fever, vomiting, or undiagnosed rash means staying home until symptom-free for 24 hours. We credit extended closures per our handbook." />
          </div>
        </div>
      </section>

      <CTASection title="Prefer to Talk First?" text="Call us on weekday mornings — a real teacher answers, not a call center." primaryLabel="Call Us Now" primaryHref="tel:+15552148890" secondaryLabel="See Programs" secondaryHref="/programs/" />
    </>
  );
}

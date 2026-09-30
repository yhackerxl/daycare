import type { Metadata } from "next";
import { BellRing, HandHeart, HeartHandshake, Home, ShieldCheck, Sparkles, Stethoscope, Users } from "lucide-react";
import SectionHeading from "../../components/SectionHeading";
import FeatureCard from "../../components/FeatureCard";
import CTASection from "../../components/CTASection";
import Button from "../../components/Button";

export const metadata: Metadata = {
  title: "About Our Daycare",
  description:
    "Meet Little Sprouts Daycare: our story, mission, safety practices, qualified caregivers, bright facilities, and daily parent communication.",
  alternates: { canonical: "/about/" },
  openGraph: { title: "About Little Sprouts Daycare", description: "Our story, values, safety, caregivers, and facilities.", url: "/about/" }
};

export default function AboutPage() {
  return (
    <>
      <section aria-labelledby="about-hero" className="bg-cream">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-2 md:items-center md:py-14">
          <div className="min-w-0">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-primary">About Us</p>
            <h1 id="about-hero" className="mt-2 text-balance text-3xl font-extrabold text-ink sm:text-4xl">A Neighborhood Daycare Built on Trust</h1>
            <p className="mt-4 text-base leading-7 text-muted sm:text-lg sm:leading-8">
              Founded by two early-childhood teachers in 2012, Little Sprouts cares for 64 children
              with a simple promise: every child feels safe, seen, and celebrated — every day.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button href="/contact/">Book a Tour</Button>
              <Button href="/programs/" variant="secondary">See Programs</Button>
            </div>
          </div>
          <img
            src="https://images.unsplash.com/photo-1564429097439-33e3d97e0c8f?auto=format&fit=crop&w=900&q=80"
            alt="Bright daycare classroom with small tables, bookshelves, and natural light"
            width={900}
            height={700}
            fetchPriority="high"
            className="aspect-[4/3] w-full rounded-3xl object-cover shadow-lift"
          />
        </div>
      </section>

      <section aria-labelledby="story" className="bg-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-2 md:py-16">
          <div className="min-w-0">
            <h2 id="story" className="text-balance text-2xl font-bold text-ink sm:text-3xl">Our Story</h2>
            <div className="mt-4 space-y-4 text-[15px] leading-7 text-muted">
              <p>We started with 12 toddlers in a converted craftsman house. Parents wanted more than babysitting — they wanted teachers who understood development, routines that felt like home, and honest communication.</p>
              <p>Today our purpose-built center has five sunlit classrooms, a fenced garden playground, and an on-site kitchen. What hasn’t changed: small groups, a primary caregiver for every child, and time to play outside every day.</p>
            </div>
            <dl className="tnum mt-6 grid grid-cols-3 gap-3 text-center">
              {[["13+", "years open"], ["18", "educators"], ["900+", "alumni families"]].map(([n, l]) => (
                <div key={l} className="rounded-2xl bg-cream p-4">
                  <dt className="sr-only">{l}</dt>
                  <dd className="text-2xl font-extrabold text-primary">{n}</dd>
                  <dd className="text-xs font-medium text-muted">{l}</dd>
                </div>
              ))}
            </dl>
          </div>
          <img
            src="https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=900&q=80"
            alt="Caregiver helping toddlers wash hands at low sinks"
            width={900}
            height={700}
            loading="lazy"
            className="aspect-[4/3] w-full rounded-3xl object-cover shadow-soft"
          />
        </div>
      </section>

      <section aria-labelledby="mission" className="bg-softgreen/60">
        <div className="mx-auto grid max-w-6xl gap-4 px-4 py-12 sm:px-6 md:grid-cols-3 md:py-16">
          {[
            { t: "Our Mission", d: "Give every child a safe, joyful start through responsive care, play-rich learning, and partnership with families." },
            { t: "Our Vision", d: "A community where working parents feel supported and children head to kindergarten curious, kind, and confident." },
            { t: "Our Promise", d: "If something matters to your family — allergies, naps, language — it matters to us. We write it down and follow it." }
          ].map((c) => (
            <article key={c.t} className="min-w-0 rounded-2xl border border-ink/10 bg-white p-6 shadow-soft">
              <h2 className="text-lg font-bold text-ink">{c.t}</h2>
              <p className="mt-2 text-[15px] leading-7 text-muted">{c.d}</p>
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="values" className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-16">
          <SectionHeading eyebrow="Core Values" title="How We Care, Every Day" />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <FeatureCard icon={ShieldCheck} title="Safety with calm" text="Locked entry, sign-in/out with ID, headcounts every transition, fenced play areas." />
            <FeatureCard icon={HandHeart} title="Respectful care" text="We follow each child\u2019s cues for food, rest, and comfort — never one-size-fits-all." />
            <FeatureCard icon={Sparkles} title="Joyful learning" text="Weekly themes, books, songs, and hands-on centers that build real skills." />
            <FeatureCard icon={Users} title="Family partnership" text="Daily reports, conferences twice a year, and an open-door policy for parents." />
          </div>
        </div>
      </section>

      <section aria-labelledby="safety" className="bg-cream">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-2 md:items-center md:py-16">
          <div className="min-w-0">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-primary">Child Safety</p>
            <h2 id="safety" className="mt-2 text-balance text-2xl font-bold text-ink sm:text-3xl">Practical Safeguards, Quietly Done</h2>
            <ul className="mt-5 space-y-3 text-[15px] leading-6 text-ink/90">
              {[
                "Secured entry with unique family PINs and ID checks for pickups.",
                "Background-checked staff, CPR & first-aid certified, safe-sleep trained for infants.",
                "Allergy action plans posted in kitchen and classrooms; nut-aware menus.",
                "Fenced playground with soft surfacing, shade, and age-separated zones.",
                "Monthly fire and lockdown drills, plus a nurse consultant on call."
              ].map((s) => (
                <li key={s} className="flex gap-2.5"><Stethoscope size={18} aria-hidden="true" className="mt-1 shrink-0 text-primary" /><span>{s}</span></li>
              ))}
            </ul>
          </div>
          <img
            src="https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=900&q=80"
            alt="Fenced outdoor playground with slides and shade sails"
            width={900}
            height={700}
            loading="lazy"
            className="aspect-[4/3] w-full rounded-3xl object-cover shadow-soft"
          />
        </div>
      </section>

      <section aria-labelledby="team" className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-16">
          <SectionHeading eyebrow="Our Caregivers" title="Teachers Who Stay — and Know Your Child" description="Low turnover, lead teachers with early-childhood credentials, and a floater in every wing." />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { n: "Dana W.", r: "Director · M.Ed. Early Childhood", d: "14 years in classrooms. Leads curriculum and family conferences." },
              { n: "Rosa M.", r: "Infant Lead · CDA", d: "Safe-sleep and feeding specialist. Your baby\u2019s primary caregiver." },
              { n: "James K.", r: "Preschool Lead · B.A. Education", d: "Early-literacy lead. Runs our kindergarten-readiness workshops." },
              { n: "Aisha B.", r: "Toddler Lead · CDA", d: "Language and potty-learning pro. Sends the best lunch photos." },
              { n: "Tom E.", r: "After-School Coordinator", d: "School pickup, homework help, and maker-club captain." },
              { n: "Nurse Lee", r: "Health Consultant · RN", d: "Reviews allergy plans, trains staff, and advises on illness policy." }
            ].map((m) => (
              <article key={m.n} className="min-w-0 rounded-2xl border border-ink/10 bg-cream/60 p-5">
                <span aria-hidden="true" className="grid h-11 w-11 place-items-center rounded-full bg-primary font-bold text-white">{m.n.charAt(0)}</span>
                <h3 className="mt-3 font-bold text-ink">{m.n}</h3>
                <p className="text-sm font-semibold text-primary">{m.r}</p>
                <p className="mt-1 text-sm leading-6 text-muted">{m.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="facilities" className="bg-cream">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-16">
          <SectionHeading eyebrow="Facilities" title="Built for Little Bodies and Big Feelings" />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <FeatureCard icon={Home} title="5 sunlit classrooms" text="Age-separated rooms with reading nooks, low sinks, and nap areas." />
            <FeatureCard icon={ShieldCheck} title="Secure & clean" text="Hospital-grade cleaning, air purifiers, and touch-free diapering stations." />
            <FeatureCard icon={HeartHandshake} title="Garden playground" text="Trikes, sand, slides, and a veggie garden children help tend." />
            <FeatureCard icon={BellRing} title="Parent communication" text="Daily app updates with photos, meals, naps, diapers, and milestones." />
          </div>
        </div>
      </section>

      <CTASection title="Come See the Classrooms in Person" text="Tours run Tuesday and Thursday mornings. Bring your questions — and your little one." primaryLabel="Book a Tour" secondaryLabel="Contact Us" />
    </>
  );
}

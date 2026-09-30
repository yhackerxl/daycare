import type { Metadata } from "next";
import { Baby, Blocks, Bus, HeartHandshake, Leaf, MessagesSquare, Salad, ShieldCheck, Sparkles, Sun } from "lucide-react";
import Button from "../components/Button";
import SectionHeading from "../components/SectionHeading";
import ProgramCard from "../components/ProgramCard";
import TestimonialCard from "../components/TestimonialCard";
import FeatureCard from "../components/FeatureCard";
import CTASection from "../components/CTASection";
import { SITE } from "../lib/site";

export const metadata: Metadata = {
  title: "A Safe Place to Learn, Play and Grow",
  description:
    "Little Sprouts Daycare offers safe infant care, toddler, preschool and after-school programs with caring teachers, healthy meals, and daily parent updates.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Little Sprouts Daycare — A Safe Place to Learn, Play and Grow",
    description: "Safe classrooms, caring teachers, play-based learning, and daily updates for parents.",
    url: "/"
  }
};

const TRUST = [
  { icon: ShieldCheck, title: "Safe & Secure", text: "Secured entry, low ratios, and trained staff in every room." },
  { icon: HeartHandshake, title: "Qualified Caregivers", text: "Experienced, background-checked educators who love children." },
  { icon: Blocks, title: "Learning Through Play", text: "Purposeful play that builds language, math, and curiosity." },
  { icon: Salad, title: "Healthy Meals", text: "Fresh breakfast, lunch, and two snacks prepared on site." },
  { icon: MessagesSquare, title: "Parent Communication", text: "Photos, naps, meals, and milestones shared every day." }
];

const TIMELINE = [
  { time: "7:30 AM", title: "Arrival", text: "Warm welcome, health check, and free play." },
  { time: "9:00 AM", title: "Learning", text: "Circle time, letters, numbers, and stories." },
  { time: "10:30 AM", title: "Outdoor Play", text: "Climbing, bikes, sand, and garden time." },
  { time: "12:00 PM", title: "Lunch", text: "Balanced hot meal with fruits and vegetables." },
  { time: "1:00 PM", title: "Rest", text: "Quiet cots, soft music, and calm-down stories." },
  { time: "3:00 PM", title: "Creative Activities", text: "Art, music, building, and sensory play." },
  { time: "5:00 PM", title: "Pickup", text: "Daily recap and chat with your teacher." }
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section aria-labelledby="hero-heading" className="relative overflow-hidden bg-cream">
        <div aria-hidden="true" className="decorative absolute -right-24 -top-24 h-72 w-72 rounded-full bg-softgreen" />
        <div aria-hidden="true" className="decorative absolute -left-16 bottom-0 h-40 w-40 rounded-full bg-warmyellow/30" />
        <div className="relative mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-2 md:items-center md:py-16">
          <div className="min-w-0">
            <p className="inline-flex items-center gap-1.5 rounded-full bg-softgreen px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-primary">
              <Sun size={14} aria-hidden="true" /> Trusted since 2012
            </p>
            <h1 id="hero-heading" className="mt-4 text-balance text-3xl font-extrabold leading-[1.12] text-ink sm:text-4xl lg:text-[2.9rem]">
              A Safe Place to Learn, Play and Grow
            </h1>
            <p className="mt-4 max-w-lg text-base leading-7 text-muted sm:text-lg sm:leading-8">
              Little Sprouts is a warm neighborhood daycare for ages 6&nbsp;weeks to 10&nbsp;years.
              Small classes, caring teachers, fresh meals, and joyful routines help your child feel
              secure — and help you feel confident.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button href="/contact/">Enroll Your Child</Button>
              <Button href="/programs/" variant="secondary">Explore Our Programs</Button>
            </div>
            <dl className="tnum mt-6 flex flex-wrap gap-x-8 gap-y-3 text-sm">
              <div><dt className="text-muted">Capacity</dt><dd className="text-lg font-bold text-ink">64 children</dd></div>
              <div><dt className="text-muted">Ratio</dt><dd className="text-lg font-bold text-ink">1:4 infants</dd></div>
              <div><dt className="text-muted">Rating</dt><dd className="text-lg font-bold text-ink">4.9 from parents</dd></div>
            </dl>
          </div>
          <div className="min-w-0">
            <img
              src="https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=900&q=80"
              alt="Toddlers building with colorful blocks with a smiling teacher in a bright classroom"
              width={900}
              height={700}
              fetchPriority="high"
              className="aspect-[4/3] w-full rounded-3xl object-cover shadow-lift"
            />
            <div className="mt-3 flex items-center gap-3 rounded-2xl border border-ink/10 bg-white p-4 shadow-soft">
              <span aria-hidden="true" className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-softgreen text-primary"><ShieldCheck size={20} /></span>
              <p className="min-w-0 text-sm leading-6 text-ink/85"><strong>Secure check-in &amp; pickup.</strong> Only authorized adults with ID — every time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust */}
      <section aria-labelledby="trust-heading" className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-16">
          <SectionHeading
            eyebrow="Why Families Trust Us"
            title="Care You Can Feel From the First Visit"
            description="Clean rooms, calm routines, and teachers who know every child by name — and by heart."
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {TRUST.map((t) => (
              <FeatureCard key={t.title} icon={t.icon} title={t.title} text={t.text} />
            ))}
          </div>
        </div>
      </section>

      {/* Programs preview */}
      <section aria-labelledby="programs-heading" className="bg-cream">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-16">
          <SectionHeading
            eyebrow="Programs"
            title="The Right Room for Every Age"
            description="From first cuddles to after-school homework help, each program follows age-appropriate milestones."
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <ProgramCard icon={Baby} name="Infant Care" ages="6 weeks – 15 months" description="Gentle routines, naps on cue, tummy time, songs, and lots of cuddles." activities={["Naps on cue", "Sensory play"]} />
            <ProgramCard icon={Blocks} name="Toddler Program" ages="16 months – 2.9 years" description="Language bursts, potty support, outdoor play, and joyful independence." activities={["First words", "Potty learning"]} />
            <ProgramCard icon={Sparkles} name="Preschool" ages="3 – 4 years" description="Letters, numbers, art, and friendships through guided play centers." activities={["Early literacy", "Art centers"]} />
            <ProgramCard icon={Bus} name="After-School Care" ages="5 – 10 years" description="School pickup, homework help, snacks, clubs, and playground time." activities={["Homework help", "Clubs"]} />
          </div>
          <div className="mt-8 text-center">
            <Button href="/programs/" variant="secondary">See All Programs &amp; Schedules</Button>
          </div>
        </div>
      </section>

      {/* Why parents choose us */}
      <section aria-labelledby="why-heading" className="bg-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-2 md:items-center md:py-16">
          <img
            src="https://images.unsplash.com/photo-1541692641319-981cc79ee10a?auto=format&fit=crop&w=900&q=80"
            alt="Teacher reading a picture book to preschool children sitting in a circle"
            width={900}
            height={700}
            loading="lazy"
            className="aspect-[4/3] w-full rounded-3xl object-cover shadow-soft"
          />
          <div className="min-w-0">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-primary">Why Parents Choose Us</p>
            <h2 id="why-heading" className="mt-2 text-balance text-2xl font-bold text-ink sm:text-3xl">Thoughtful Details That Make Days Easier</h2>
            <ul className="mt-5 space-y-3">
              {[
                ["Child safety first", "Locked entry, fenced playground, allergy plans, and daily safety checks."],
                ["Experienced staff", "Lead teachers with early-childhood training and CPR & first-aid certification."],
                ["Individual attention", "Small groups and a primary caregiver for every child."],
                ["Structured learning", "Weekly themes with play-based goals you can follow at home."],
                ["Clean facilities", "Hospital-grade cleaning, fresh air, and child-sized everything."]
              ].map(([title, text]) => (
                <li key={title} className="flex min-w-0 gap-3 rounded-2xl border border-ink/10 bg-cream/60 p-4">
                  <Leaf size={20} aria-hidden="true" className="mt-0.5 shrink-0 text-primary" />
                  <p className="min-w-0 text-[15px] leading-6 text-ink/90"><strong>{title}.</strong> <span className="text-muted">{text}</span></p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Daily experience */}
      <section aria-labelledby="day-heading" className="bg-softgreen/60">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-16">
          <SectionHeading
            eyebrow="A Day at Little Sprouts"
            title="Predictable Rhythms Children Love"
            description={`${SITE.hours}. Here is what a typical day looks like.`}
          />
          <ol className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {TIMELINE.map((s, i) => (
              <li key={s.title} className="min-w-0 rounded-2xl border border-ink/10 bg-white p-5 shadow-soft">
                <p className="tnum text-xs font-bold uppercase tracking-wide text-primary">{s.time}</p>
                <p className="mt-1 text-base font-bold text-ink"><span aria-hidden="true" className="mr-1.5 inline-grid h-6 w-6 place-items-center rounded-full bg-primary text-[12px] text-white">{i + 1}</span>{s.title}</p>
                <p className="mt-1 text-sm leading-6 text-muted">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Testimonials */}
      <section aria-labelledby="stories-heading" className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-16">
          <SectionHeading eyebrow="Parent Stories" title="Loved by Families, Trusted by Parents" />
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <TestimonialCard quote="Drop-off used to mean tears. Now my daughter runs to her teacher. The photo updates during lunch make my workday so much lighter." name="Priya N." role="Toddler mom · enrolled 2 years" />
            <TestimonialCard quote="They handled our son\u2019s egg allergy with real care — separate meals, clear labels, and constant communication. We always feel informed." name="Marcus T." role="Preschool dad · enrolled 1 year" />
            <TestimonialCard quote="Homework is done before I pick up my twins, and they\u2019ve joined the art club. After-school pickup from their elementary school is seamless." name="Elena R." role="After-school mom · enrolled 3 years" />
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

import type { Metadata } from "next";
import { Baby, Blocks, Bus, GraduationCap, Palette, Sparkles } from "lucide-react";
import SectionHeading from "../../components/SectionHeading";
import FAQItem from "../../components/FAQItem";
import CTASection from "../../components/CTASection";
import Button from "../../components/Button";

export const metadata: Metadata = {
  title: "Programs & Daily Schedule",
  description:
    "Explore infant care, toddler, preschool, pre-K and after-school programs: ages, schedules, activities, learning goals, daily routine, and FAQs.",
  alternates: { canonical: "/programs/" },
  openGraph: { title: "Daycare Programs", description: "Ages, schedules, learning goals, and FAQs for every program.", url: "/programs/" }
};

const PROGRAMS = [
  {
    icon: Baby, name: "Infant Care", ages: "6 weeks – 15 months", schedule: "Full-time · 7:30 AM – 5:30 PM",
    desc: "Bottles on demand, naps on cue, tummy time, songs, and one primary caregiver who learns your baby\u2019s rhythms.",
    acts: ["Tummy time", "Sensory bins", "Lullabies & signing", "Outdoor stroller walks"]
  },
  {
    icon: Blocks, name: "Toddler Care", ages: "16 months – 2.9 years", schedule: "Full-time · 7:30 AM – 5:30 PM",
    desc: "First words, big feelings, and joyful independence with potty support and lots of outdoor play.",
    acts: ["Language bursts", "Potty learning", "Parallel play", "Simple puzzles"]
  },
  {
    icon: Palette, name: "Preschool", ages: "3 – 4 years", schedule: "Full-time · 8:00 AM – 3:30 PM + extended care",
    desc: "Letters, numbers, art studios, and friendships through guided centers and weekly themes.",
    acts: ["Early literacy", "Counting games", "Art & music", "Garden science"]
  },
  {
    icon: GraduationCap, name: "Pre-K", ages: "4 – 5 years", schedule: "Full-time · 8:00 AM – 3:30 PM + extended care",
    desc: "Kindergarten readiness with phonics, handwriting, early math, and confident classroom routines.",
    acts: ["Phonics", "Handwriting", "Early math", "Show & tell"]
  },
  {
    icon: Bus, name: "After-School Care", ages: "5 – 10 years", schedule: "School days · pickup – 6:00 PM · holiday camps",
    desc: "Pickup from 4 nearby schools, homework help, hot snack, clubs, and playground time until pickup.",
    acts: ["Homework help", "Maker club", "Sports & playground", "Reading buddies"]
  }
];

const LEARNS = [
  ["Social development", "Turn-taking, sharing, and resolving conflicts with words."],
  ["Communication", "Songs, stories, and conversations that grow vocabulary."],
  ["Early literacy", "Letter sounds, book handling, and pre-writing strokes."],
  ["Numeracy", "Counting, sorting, patterns, and measuring in play."],
  ["Creativity", "Open-ended art, music, dance, and pretend play."],
  ["Physical development", "Climbing, balancing, throwing, and fine-motor crafts."],
  ["Emotional development", "Naming feelings, calming strategies, and confidence."]
];

const SCHEDULE = [
  ["7:30 – 8:30", "Arrival & free play"],
  ["8:30 – 9:00", "Breakfast"],
  ["9:00 – 10:15", "Circle time & learning centers"],
  ["10:15 – 11:30", "Outdoor play"],
  ["11:30 – 12:00", "Lunch"],
  ["12:00 – 2:30", "Nap / quiet time"],
  ["2:30 – 3:00", "Snack"],
  ["3:00 – 4:30", "Art, music & small groups"],
  ["4:30 – 5:30", "Playground & pickup"]
];

const FAQS = [
  ["What ages do you accept?", "We welcome children from 6 weeks to 10 years across infant, toddler, preschool, pre-K, and after-school programs."],
  ["What are your operating hours?", "Monday to Friday, 7:30 AM to 5:30 PM. After-school runs until 6:00 PM. We close on weekends and public holidays."],
  ["Do you provide meals?", "Yes — breakfast, hot lunch, and two snacks made on site. Menus are nut-aware and posted weekly."],
  ["How do you handle allergies?", "Every allergy has a written action plan shared with teachers and the kitchen. We label meals, train staff, and keep medication locked but accessible."],
  ["How do you keep children safe?", "Secured entry with family PINs, ID checks at pickup, low ratios, fenced playgrounds, and CPR & first-aid certified staff."],
  ["How do parents receive updates?", "Daily app reports with photos, naps, meals, and diapers — plus conferences twice a year and anytime chats."],
  ["How do I enroll my child?", "Send the enrollment form, visit for a tour, then reserve your spot with a deposit. Most families start within 2–3 weeks."]
];

export default function ProgramsPage() {
  return (
    <>
      <section aria-labelledby="programs-hero" className="bg-cream">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 md:py-14">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-primary">Programs</p>
          <h1 id="programs-hero" className="mt-2 max-w-2xl text-balance text-3xl font-extrabold text-ink sm:text-4xl">Every Age, Thoughtfully Planned</h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-muted sm:text-lg sm:leading-8">Small classes, clear milestones, and teachers who guide — never rush — development. Pick the room that fits your child today; we help with transitions.</p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row"><Button href="/contact/">Check Availability</Button><Button href="/contact/" variant="secondary">Ask a Question</Button></div>
        </div>
      </section>

      <section aria-label="Program directory" className="bg-white">
        <div className="mx-auto grid max-w-6xl gap-4 px-4 py-12 sm:px-6 md:grid-cols-2 md:py-16 lg:grid-cols-3">
          {PROGRAMS.map((p) => (
            <article key={p.name} className="card-hover flex min-w-0 flex-col rounded-2xl border border-ink/10 bg-cream/50 p-6 shadow-soft">
              <span aria-hidden="true" className="grid h-12 w-12 place-items-center rounded-2xl bg-softgreen text-primary"><p.icon size={24} /></span>
              <h2 className="mt-4 text-xl font-bold text-ink">{p.name}</h2>
              <p className="tnum mt-1 text-sm font-bold text-primary">{p.ages}</p>
              <p className="tnum mt-0.5 text-sm text-muted">{p.schedule}</p>
              <p className="mt-2 text-[15px] leading-7 text-muted">{p.desc}</p>
              <h3 className="mt-3 text-sm font-bold uppercase tracking-wide text-ink/70">Key activities</h3>
              <ul className="mt-1.5 space-y-1.5">
                {p.acts.map((a) => (<li key={a} className="flex gap-2 text-sm text-ink/85"><Sparkles size={15} aria-hidden="true" className="mt-0.5 shrink-0 text-coral" />{a}</li>))}
              </ul>
              <a href="/contact/" aria-label={`Enroll in ${p.name}`} className="mt-4 inline-flex min-h-[44px] items-center justify-center rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-150 hover:bg-primaryDark">Enroll in {p.name}</a>
            </article>
          ))}
          <article className="flex min-w-0 flex-col justify-center rounded-2xl bg-primary p-6 text-white">
            <h2 className="text-xl font-bold">Not sure which room fits?</h2>
            <p className="mt-2 text-[15px] leading-7 text-white/85">Tell us your child\u2019s age and schedule. We reply within one business day with availability and next steps.</p>
            <a href="/contact/" className="mt-4 inline-flex min-h-[44px] items-center justify-center rounded-xl bg-warmyellow px-5 py-2.5 text-sm font-bold text-ink transition-colors duration-150 hover:bg-white">Get Guidance</a>
          </article>
        </div>
      </section>

      <section aria-labelledby="learns" className="bg-softgreen/60">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-16">
          <SectionHeading eyebrow="Learning Goals" title="What Your Child Learns" description="Play with purpose: every center, song, and garden visit builds school-ready skills." />
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {LEARNS.map(([t, d]) => (
              <div key={t} className="min-w-0 rounded-2xl border border-ink/10 bg-white p-5 shadow-soft">
                <h3 className="font-bold text-ink">{t}</h3>
                <p className="mt-1 text-sm leading-6 text-muted">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="daily" className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-16">
          <SectionHeading eyebrow="Daily Schedule" title="A Predictable, Calm Day" />
          <div className="mx-auto mt-8 max-w-3xl overflow-hidden rounded-2xl border border-ink/10">
            <table className="w-full text-left text-[15px]">
              <caption className="sr-only">Typical daily schedule from arrival to pickup</caption>
              <thead><tr className="bg-cream text-sm"><th scope="col" className="px-5 py-3 font-bold text-ink">Time</th><th scope="col" className="px-5 py-3 font-bold text-ink">Activity</th></tr></thead>
              <tbody>
                {SCHEDULE.map(([time, act], i) => (
                  <tr key={time} className={i % 2 === 0 ? "bg-white" : "bg-cream/50"}>
                    <th scope="row" className="tnum whitespace-nowrap px-5 py-3 font-semibold text-primary">{time}</th>
                    <td className="px-5 py-3 text-ink/85">{act}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section aria-labelledby="faq" className="bg-cream">
        <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 md:py-16">
          <SectionHeading eyebrow="FAQ" title="Common Questions" />
          <div className="mt-8 space-y-3">
            {FAQS.map(([q, a]) => (<FAQItem key={q} question={q} answer={a} />))}
          </div>
        </div>
      </section>

      <CTASection title="Ready to Save Your Spot?" text="Spaces are limited to 12 per classroom. Send an inquiry and we will confirm availability this week." />
    </>
  );
}

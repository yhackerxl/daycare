import Link from "next/link";

type Props = {
  title?: string;
  text?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export default function CTASection({
  title = "Give Your Child a Place to Grow",
  text = "Book a tour, meet our caregivers, and see how calm, joyful days help children thrive.",
  primaryLabel = "Enroll Your Child",
  primaryHref = "/contact/",
  secondaryLabel = "Explore Our Programs",
  secondaryHref = "/programs/"
}: Props) {
  return (
    <section aria-labelledby="cta-heading" className="bg-primary">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-4 py-12 sm:px-6 md:flex-row md:items-center md:justify-between">
        <div className="min-w-0 max-w-xl">
          <h2 id="cta-heading" className="text-balance text-2xl font-bold text-white sm:text-3xl">
            {title}
          </h2>
          <p className="mt-2 text-base leading-7 text-white/85">{text}</p>
        </div>
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <Link
            href={primaryHref}
            className="inline-flex min-h-[48px] items-center justify-center rounded-xl bg-warmyellow px-6 py-3 font-semibold text-ink transition-colors duration-150 hover:bg-white"
          >
            {primaryLabel}
          </Link>
          <Link
            href={secondaryHref}
            className="inline-flex min-h-[48px] items-center justify-center rounded-xl border-2 border-white/70 px-6 py-3 font-semibold text-white transition-colors duration-150 hover:bg-white/10"
          >
            {secondaryLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}

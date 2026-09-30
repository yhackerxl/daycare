import Link from "next/link";
import type { LucideIcon } from "lucide-react";

type Props = {
  icon: LucideIcon;
  name: string;
  ages: string;
  schedule?: string;
  description: string;
  activities?: string[];
  href?: string;
};

export default function ProgramCard({ icon: Icon, name, ages, schedule, description, activities, href = "/programs/" }: Props) {
  return (
    <article className="card-hover flex min-w-0 flex-col rounded-2xl border border-ink/10 bg-white p-6 shadow-soft">
      <span aria-hidden="true" className="grid h-12 w-12 place-items-center rounded-2xl bg-softgreen text-primary">
        <Icon size={24} />
      </span>
      <h3 className="mt-4 text-lg font-bold text-ink">{name}</h3>
      <p className="tnum mt-1 text-sm font-semibold text-primary">{ages}</p>
      {schedule && <p className="tnum mt-1 text-sm text-muted">{schedule}</p>}
      <p className="mt-2 min-w-0 text-[15px] leading-6 text-muted">{description}</p>
      {activities && (
        <ul className="mt-3 flex flex-wrap gap-1.5" aria-label={`${name} highlights`}>
          {activities.slice(0, 3).map((a) => (
            <li key={a} className="rounded-full bg-cream px-2.5 py-1 text-xs font-medium text-ink/80">
              {a}
            </li>
          ))}
        </ul>
      )}
      <Link
        href={href}
        aria-label={`Learn more about ${name}`}
        className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary transition-colors duration-150 hover:text-primaryDark"
      >
        Learn more <span aria-hidden="true">→</span>
      </Link>
    </article>
  );
}

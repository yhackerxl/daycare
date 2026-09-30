import type { LucideIcon } from "lucide-react";

type Props = { icon: LucideIcon; title: string; text: string };

export default function FeatureCard({ icon: Icon, title, text }: Props) {
  return (
    <div className="card-hover min-w-0 rounded-2xl border border-ink/10 bg-white p-5 shadow-soft">
      <span aria-hidden="true" className="grid h-11 w-11 place-items-center rounded-xl bg-softgreen text-primary">
        <Icon size={22} />
      </span>
      <h3 className="mt-3 text-base font-bold text-ink">{title}</h3>
      <p className="mt-1 text-sm leading-6 text-muted">{text}</p>
    </div>
  );
}

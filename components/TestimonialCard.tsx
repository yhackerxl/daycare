import { Star } from "lucide-react";

type Props = { quote: string; name: string; role: string };

export default function TestimonialCard({ quote, name, role }: Props) {
  return (
    <figure className="card-hover flex min-w-0 flex-col rounded-2xl border border-ink/10 bg-white p-6 shadow-soft">
      <div className="flex gap-1" aria-label="Rated 5 out of 5 stars">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} size={16} aria-hidden="true" className="fill-warmyellow text-warmyellow" />
        ))}
      </div>
      <blockquote className="mt-3 min-w-0 text-[15px] leading-7 text-ink/90">“{quote}”</blockquote>
      <figcaption className="mt-4 border-t border-ink/10 pt-4">
        <p className="text-sm font-bold text-ink">{name}</p>
        <p className="text-sm text-muted">{role}</p>
      </figcaption>
    </figure>
  );
}

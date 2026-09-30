type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export default function SectionHeading({ eyebrow, title, description, align = "center" }: Props) {
  const alignCls = align === "center" ? "mx-auto text-center items-center" : "text-left items-start";
  return (
    <div className={`flex max-w-2xl flex-col gap-3 ${alignCls}`}>
      {eyebrow && (
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-primary">{eyebrow}</p>
      )}
      <h2 className="text-balance text-2xl font-bold leading-tight text-ink sm:text-3xl">{title}</h2>
      {description && <p className="text-base leading-7 text-muted">{description}</p>}
    </div>
  );
}

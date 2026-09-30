import Link from "next/link";
import type { ReactNode } from "react";

type Props = {
  href?: string;
  variant?: "primary" | "secondary" | "accent";
  children: ReactNode;
  className?: string;
};

export default function Button({ href, variant = "primary", children, className = "" }: Props) {
  const base =
    "inline-flex min-h-[48px] items-center justify-center rounded-xl px-6 py-3 text-base font-semibold transition-colors duration-150";
  const styles =
    variant === "primary"
      ? "bg-primary text-white shadow-soft hover:bg-primaryDark"
      : variant === "secondary"
        ? "border-2 border-primary bg-white text-primary hover:bg-softgreen"
        : "bg-coral text-white hover:brightness-95";
  if (href) {
    return (
      <Link href={href} className={`${base} ${styles} ${className}`}>
        {children}
      </Link>
    );
  }
  return <span className={`${base} ${styles} ${className}`}>{children}</span>;
}

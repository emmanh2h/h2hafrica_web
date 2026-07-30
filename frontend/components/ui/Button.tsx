import Link from "next/link";
import { clsx } from "@/lib/clsx";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline-dark";
  className?: string;
};

const variants = {
  primary: "bg-white text-ink hover:bg-white/90",
  secondary: "border border-white text-white hover:bg-white/10",
  "outline-dark": "border border-ink/20 text-ink hover:bg-ink/5",
};

export default function Button({ href, children, variant = "primary", className }: ButtonProps) {
  return (
    <Link
      href={href}
      className={clsx(
        "inline-flex items-center justify-center rounded-full px-7 py-3 text-base whitespace-nowrap transition-colors",
        variants[variant],
        className,
      )}
    >
      {children}
    </Link>
  );
}

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { clsx } from "@/lib/clsx";

export default function TextLink({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={clsx(
        "group inline-flex items-center gap-2.5 border-b border-green py-2 text-sm font-semibold tracking-wide text-green uppercase transition-colors hover:text-green/80",
        className,
      )}
    >
      {children}
      <ArrowRight className="h-6 w-6 transition-transform group-hover:translate-x-1" />
    </Link>
  );
}

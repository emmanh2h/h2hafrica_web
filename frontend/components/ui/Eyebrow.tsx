import { clsx } from "@/lib/clsx";

export default function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={clsx(
        "text-sm font-semibold tracking-wide uppercase text-green",
        className,
      )}
    >
      {children}
    </p>
  );
}

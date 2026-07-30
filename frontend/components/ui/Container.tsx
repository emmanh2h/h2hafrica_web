import { clsx } from "@/lib/clsx";

export default function Container({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={clsx("mx-auto w-full max-w-[1440px] px-6 lg:px-[120px]", className)}>
      {children}
    </div>
  );
}

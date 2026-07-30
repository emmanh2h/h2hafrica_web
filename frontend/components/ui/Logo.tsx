import Image from "next/image";
import Link from "next/link";

export default function Logo({ variant = "green" }: { variant?: "green" | "white" }) {
  const suffix = variant === "green" ? "-green" : "";
  return (
    <Link href="/" className="flex items-center gap-2.5 shrink-0">
      <Image
        src={`/brand/logo-mark${suffix}.svg`}
        alt=""
        width={44}
        height={42}
        className="h-[42px] w-auto"
      />
      <Image
        src={`/brand/logo-word${suffix}.svg`}
        alt="Happy2Host EDU Africa"
        width={99}
        height={35}
        className="h-[28px] w-auto"
      />
    </Link>
  );
}

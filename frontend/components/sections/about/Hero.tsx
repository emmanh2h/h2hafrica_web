import Image from "next/image";
import Header from "@/components/layout/Header";
import type { AboutFields } from "@/lib/types";

export default function Hero({ fields }: { fields: AboutFields }) {
  return (
    <section className="relative flex min-h-[810px] w-full flex-col justify-end overflow-hidden">
      {fields.heroImage?.node.sourceUrl && (
        <Image
          src={fields.heroImage.node.sourceUrl}
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      )}
      <div className="absolute inset-0 bg-black/50" />
      <Header variant="overlay" />
      <div className="relative mx-auto w-full max-w-[1440px] px-6 pb-[85px] lg:px-[120px]">
        <p className="text-xs font-bold tracking-wide text-white uppercase">{fields.heroEyebrow}</p>
        <h1 className="mt-4 max-w-3xl text-4xl leading-tight font-semibold tracking-tight text-white sm:text-5xl lg:text-[48px] lg:leading-[56px]">
          {fields.heroHeading}
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-white/90 lg:text-xl">{fields.heroSubtext}</p>
      </div>
      <Image
        src="/brand/google-partner-badge.png"
        alt="Google for Education Partner"
        width={151}
        height={42}
        className="absolute right-6 bottom-[85px] hidden h-[42px] w-auto sm:block lg:right-[120px]"
      />
    </section>
  );
}

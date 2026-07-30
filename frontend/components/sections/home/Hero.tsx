import Image from "next/image";
import Header from "@/components/layout/Header";
import Button from "@/components/ui/Button";
import type { HomeFields } from "@/lib/types";

export default function Hero({ fields }: { fields: HomeFields }) {
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
      <div className="relative mx-auto w-full max-w-[1440px] px-6 pb-[103px] lg:px-[120px]">
        <h1 className="max-w-3xl text-4xl leading-tight font-semibold tracking-tight text-white sm:text-5xl lg:text-[48px] lg:leading-[56px]">
          {fields.heroHeading}
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-white/90 lg:text-xl">{fields.heroSubtext}</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Button href="/contact" variant="primary">
            Book a Consultation
          </Button>
          <Button href="/services" variant="secondary">
            See Our Services
          </Button>
        </div>
      </div>
      <Image
        src="/brand/google-partner-badge.png"
        alt="Google for Education Partner"
        width={151}
        height={42}
        className="absolute right-6 bottom-[103px] hidden h-[42px] w-auto sm:block lg:right-[120px]"
      />
    </section>
  );
}

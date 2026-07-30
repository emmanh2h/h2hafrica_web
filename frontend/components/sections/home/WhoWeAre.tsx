import Image from "next/image";
import Container from "@/components/ui/Container";
import TextLink from "@/components/ui/TextLink";
import type { HomeFields } from "@/lib/types";

export default function WhoWeAre({ fields }: { fields: HomeFields }) {
  const badges = [fields.whoBadge1, fields.whoBadge2, fields.whoBadge3].filter(Boolean);
  const paragraphs = (fields.whoBody ?? "").split("\n\n");

  return (
    <section className="relative overflow-hidden py-24">
      <Image
        src="/brand/watermark-mark.svg"
        alt=""
        width={588}
        height={561}
        className="pointer-events-none absolute top-16 right-0 hidden w-[40%] max-w-[588px] lg:block"
      />
      <Container className="relative max-w-4xl">
        <div className="flex flex-wrap gap-3">
          {badges.map((badge) => (
            <span
              key={badge}
              className="rounded-full bg-green px-4 py-2 text-xs tracking-wide text-white uppercase"
            >
              {badge}
            </span>
          ))}
        </div>
        <h2 className="mt-8 max-w-2xl text-4xl font-semibold tracking-tight text-ink lg:text-[44px] lg:leading-[48px]">
          {fields.whoHeading}
        </h2>
        <div className="mt-6 max-w-2xl space-y-4 text-base text-ink">
          {paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        <TextLink href="/about" className="mt-8">
          {fields.whoLinkLabel}
        </TextLink>
      </Container>
    </section>
  );
}

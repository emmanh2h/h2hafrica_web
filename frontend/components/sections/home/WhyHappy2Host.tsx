import Image from "next/image";
import { BadgeCheck } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { Icon } from "@/lib/icons";
import type { HomeFields } from "@/lib/types";

function splitReason(text?: string | null) {
  if (!text) return { title: "", rest: "" };
  const idx = text.indexOf(". ");
  if (idx === -1) return { title: text, rest: "" };
  return { title: text.slice(0, idx + 1), rest: text.slice(idx + 2) };
}

export default function WhyHappy2Host({ fields }: { fields: HomeFields }) {
  const reasons = [fields.whyReason1, fields.whyReason2, fields.whyReason3, fields.whyReason4].filter(
    Boolean,
  );

  return (
    <section className="relative overflow-hidden py-24 text-white">
      {fields.whyImage?.node.sourceUrl && (
        <Image src={fields.whyImage.node.sourceUrl} alt="" fill className="object-cover" sizes="100vw" />
      )}
      <div className="absolute inset-0 bg-black/70" />
      <Container className="relative grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-start">
        <div>
          <p className="text-xs font-bold tracking-wide text-mint uppercase">{fields.whyEyebrow}</p>
          <h2 className="mt-4 max-w-lg text-4xl font-semibold tracking-tight text-mint lg:text-[44px] lg:leading-[48px]">
            {fields.whyHeading}
          </h2>

          <div className="mt-8 divide-y divide-white/20 border-b border-white/20">
            {reasons.map((reason, i) => {
              const { title, rest } = splitReason(reason?.text);
              return (
                <div key={i} className="flex items-center gap-4 py-4">
                  <Icon name={reason?.icon} className="h-12 w-12 shrink-0 text-mint" />
                  <p className="text-mint">
                    <span className="text-xl font-semibold">{title}</span>{" "}
                    <span className="text-base">{rest}</span>
                  </p>
                </div>
              );
            })}
          </div>

          <Button href="/contact" variant="primary" className="mt-8 bg-gold text-ink hover:bg-gold/90">
            Book a Consultation
          </Button>
        </div>

        <div className="rounded-xl bg-ink/40 p-10 backdrop-blur-2xl">
          <p className="text-xs font-bold tracking-wide text-gold uppercase">
            {fields.whyQuoteLabel}
          </p>
          <div className="mt-8 flex items-end gap-3">
            <span className="text-8xl font-bold tracking-tight text-mint">
              {fields.whyQuoteRating}
            </span>
            <span className="pb-2 text-2xl font-bold text-mint">{fields.whyQuoteOutOf}</span>
          </div>
          <p className="mt-8 max-w-md text-xl text-mint">{fields.whyQuoteBody}</p>
          <div className="mt-8 flex items-center gap-3 border-t border-white/20 pt-6">
            <BadgeCheck className="h-6 w-6 text-mint" />
            <p className="text-base text-mint">{fields.whyQuoteBadgeText}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}

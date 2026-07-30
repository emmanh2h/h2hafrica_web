import { BadgeCheck } from "lucide-react";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import type { AboutFields } from "@/lib/types";

export default function Homecoming({ fields }: { fields: AboutFields }) {
  const paragraphs = (fields.homecomingBody ?? "").split("\n\n");

  return (
    <section className="bg-mint py-24">
      <Container className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start">
        <div>
          <Eyebrow>{fields.homecomingEyebrow}</Eyebrow>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-ink lg:text-[44px] lg:leading-[48px]">
            {fields.homecomingHeading}
          </h2>
          <div className="mt-6 space-y-4 text-base text-ink">
            {paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>

        <div className="rounded-xl bg-green p-10 text-mint">
          <p className="text-xs font-bold tracking-wide text-gold uppercase">{fields.quoteLabel}</p>
          <div className="mt-8 flex items-end gap-3">
            <span className="text-8xl font-bold tracking-tight">{fields.quoteRating}</span>
            <span className="pb-2 text-2xl font-bold">{fields.quoteOutOf}</span>
          </div>
          <p className="mt-8 max-w-md text-xl">{fields.quoteBody}</p>
          <div className="mt-8 flex items-center gap-3 border-t border-white/20 pt-6">
            <BadgeCheck className="h-6 w-6" />
            <p className="text-base">{fields.quoteBadgeText}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}

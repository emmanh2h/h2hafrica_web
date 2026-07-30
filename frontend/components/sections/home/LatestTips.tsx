import Image from "next/image";
import { Mail } from "lucide-react";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import TextLink from "@/components/ui/TextLink";
import NewsletterForm from "@/components/ui/NewsletterForm";
import { stripHtml } from "@/lib/text";
import type { HomeFields, TipNode } from "@/lib/types";

export default function LatestTips({ fields, tips }: { fields: HomeFields; tips: TipNode[] }) {
  return (
    <section className="py-24">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <Eyebrow>{fields.tipsEyebrow}</Eyebrow>
            <h2 className="mt-4 max-w-2xl text-4xl font-semibold tracking-tight text-ink lg:text-[44px] lg:leading-[48px]">
              {fields.tipsHeading}
            </h2>
          </div>
          <TextLink href="/tips">{fields.tipsLinkLabel}</TextLink>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2">
          {tips.map((tip) => (
            <div key={tip.slug} className="border-b border-mint pb-4">
              <div className="relative h-[330px] w-full overflow-hidden rounded-xl">
                {tip.featuredImage?.node.sourceUrl && (
                  <Image
                    src={tip.featuredImage.node.sourceUrl}
                    alt={tip.featuredImage.node.altText ?? ""}
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 50vw, 100vw"
                  />
                )}
              </div>
              <span className="mt-6 inline-block rounded-lg bg-mint px-3 py-2 text-xs font-semibold tracking-wide text-green uppercase">
                {tip.tipCategories?.nodes[0]?.name}
              </span>
              <h3 className="mt-4 text-[28px] leading-tight font-semibold tracking-tight text-ink">
                {tip.title}
              </h3>
              <p className="mt-4 text-base text-ink">{stripHtml(tip.excerpt)}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-start gap-8 rounded-3xl bg-green p-10 text-mint lg:flex-row lg:items-center lg:p-12">
          <Mail className="h-20 w-20 shrink-0 text-gold" strokeWidth={1.5} />
          <div className="flex-1">
            <h3 className="text-2xl font-semibold tracking-tight">
              One email a week.
              <br />
              Useful by Monday morning.
            </h3>
            <p className="mt-3 max-w-lg text-base">
              Practical tips for Google Workspace and Gemini, written for real classrooms. No
              fluff, and you can unsubscribe any time.
            </p>
          </div>
          <div className="w-full lg:w-auto lg:min-w-[478px]">
            <NewsletterForm variant="green" />
          </div>
        </div>
      </Container>
    </section>
  );
}

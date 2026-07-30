import Image from "next/image";
import PageHeader from "@/components/layout/PageHeader";
import Container from "@/components/ui/Container";
import CTASection from "@/components/sections/CTASection";
import { getLatestTips } from "@/lib/wp";
import { stripHtml } from "@/lib/text";

export const metadata = { title: "Tips | Happy2Host EDU Africa" };

export default async function TipsPage() {
  const tips = await getLatestTips(50);

  return (
    <>
      <PageHeader
        eyebrow="Latest Tips"
        heading="One practical tip a week"
        subtext="Practical tips for Google Workspace and Gemini, written for real classrooms."
      />
      <section className="py-24">
        <Container>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
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
                <h2 className="mt-4 text-[28px] leading-tight font-semibold tracking-tight text-ink">
                  {tip.title}
                </h2>
                <p className="mt-4 text-base text-ink">{stripHtml(tip.excerpt)}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
      <CTASection
        heading="Let's work out what's right for your school."
        body="A friendly, no-pressure conversation. We listen first, then tell you honestly what we would do."
        buttonLabel="Book your free consultation"
      />
    </>
  );
}

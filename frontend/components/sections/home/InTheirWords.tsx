import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import type { HomeFields, TestimonialNode } from "@/lib/types";

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function InTheirWords({
  fields,
  testimonials,
}: {
  fields: HomeFields;
  testimonials: TestimonialNode[];
}) {
  return (
    <section className="bg-mint py-24">
      <Container>
        <Eyebrow>{fields.wordsEyebrow}</Eyebrow>
        <h2 className="mt-4 max-w-2xl text-4xl font-semibold tracking-tight text-ink lg:text-[44px] lg:leading-[48px]">
          {fields.wordsHeading}
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.title}>
              <span className="text-4xl font-bold text-gold">&ldquo;</span>
              <p className="mt-4 text-2xl text-ink italic">{t.testimonialDetails?.quote}</p>
              <div className="mt-8 flex items-center gap-3 border-t border-[#cde4db] pt-3">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-green text-base font-bold text-mint">
                  {initials(t.title)}
                </div>
                <div>
                  <p className="font-semibold text-ink">{t.title}</p>
                  <p className="text-ink/80">{t.testimonialDetails?.authorRole}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

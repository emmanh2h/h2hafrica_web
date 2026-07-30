import Container from "@/components/ui/Container";
import type { AboutFields } from "@/lib/types";

export default function Record({ fields }: { fields: AboutFields }) {
  const stats = [fields.recordStat1, fields.recordStat2, fields.recordStat3, fields.recordStat4].filter(
    Boolean,
  );

  return (
    <section className="py-24">
      <Container>
        <p className="text-xs font-bold tracking-wide text-green uppercase">{fields.recordEyebrow}</p>
        <p className="mt-4 max-w-3xl text-2xl text-ink lg:text-[32px] lg:leading-[40px]">
          {fields.recordIntro}
        </p>

        <div className="mt-10 grid grid-cols-1 gap-8 rounded-xl bg-mint p-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={i > 0 ? "lg:border-l lg:border-[#cde4db] lg:pl-8" : ""}
            >
              <p className="text-5xl font-bold tracking-tight text-green">{stat?.number}</p>
              <p className="mt-1 text-base text-ink">{stat?.label}</p>
            </div>
          ))}
        </div>

        <p className="mt-8 text-base font-semibold text-gold">{fields.recordNote}</p>
      </Container>
    </section>
  );
}

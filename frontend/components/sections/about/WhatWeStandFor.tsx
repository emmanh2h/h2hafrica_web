import Container from "@/components/ui/Container";
import { Icon } from "@/lib/icons";
import type { AboutFields } from "@/lib/types";

export default function WhatWeStandFor({ fields }: { fields: AboutFields }) {
  const items = [fields.standItem1, fields.standItem2, fields.standItem3, fields.standItem4].filter(
    Boolean,
  );

  return (
    <section className="bg-mint py-24">
      <Container>
        <h2 className="max-w-2xl text-4xl font-semibold tracking-tight text-ink lg:text-[44px] lg:leading-[48px]">
          {fields.standHeading}
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {items.map((item, i) => (
            <div key={i} className="rounded-xl bg-white p-10">
              <Icon name={item?.icon} className="h-16 w-16 text-gold" />
              <h3 className="mt-6 text-[28px] font-semibold tracking-tight text-ink">{item?.title}</h3>
              <p className="mt-3 text-base text-ink">{item?.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

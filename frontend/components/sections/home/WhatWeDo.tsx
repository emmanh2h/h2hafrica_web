import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import TextLink from "@/components/ui/TextLink";
import { Icon } from "@/lib/icons";
import type { HomeFields, ServiceNode } from "@/lib/types";

export default function WhatWeDo({
  fields,
  services,
}: {
  fields: HomeFields;
  services: ServiceNode[];
}) {
  return (
    <section className="bg-mint py-24">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <Eyebrow>{fields.whatEyebrow}</Eyebrow>
            <h2 className="mt-4 max-w-2xl text-4xl font-semibold tracking-tight text-ink lg:text-[44px] lg:leading-[48px]">
              {fields.whatHeading}
            </h2>
          </div>
          <TextLink href="/services">{fields.whatLinkLabel}</TextLink>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {services.slice(0, 3).map((service) => {
            const features = (service.serviceDetails?.features ?? "")
              .split("\n")
              .filter(Boolean);
            return (
              <div key={service.slug} className="rounded-xl bg-white p-10">
                <Icon name={service.serviceDetails?.icon} className="h-16 w-16 text-gold" />
                <h3 className="mt-11 text-[28px] font-semibold tracking-tight text-ink">
                  {service.title}
                </h3>
                <p className="mt-3 text-xl text-ink">{service.serviceDetails?.summary}</p>
                <ul className="mt-8 space-y-0">
                  {features.map((feature) => (
                    <li key={feature} className="border-t border-mint py-2 text-base text-ink">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

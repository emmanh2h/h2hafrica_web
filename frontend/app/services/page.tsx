import Hero from "@/components/sections/services/Hero";
import ServiceBlock from "@/components/sections/services/ServiceBlock";
import CTASection from "@/components/sections/CTASection";
import { getServicesPage, getServices } from "@/lib/wp";

export default async function ServicesPage() {
  const [fields, services] = await Promise.all([getServicesPage(), getServices()]);

  return (
    <>
      <Hero fields={fields} />
      {services.map((service, i) => (
        <ServiceBlock
          key={service.slug}
          service={service}
          imageSide={i % 2 === 0 ? "left" : "right"}
        />
      ))}
      <CTASection
        heading={fields.ctaHeading}
        body={fields.ctaBody}
        buttonLabel={fields.ctaButtonLabel}
      />
    </>
  );
}

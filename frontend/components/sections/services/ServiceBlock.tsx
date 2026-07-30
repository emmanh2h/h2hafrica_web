import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import { Icon } from "@/lib/icons";
import { clsx } from "@/lib/clsx";
import type { ServiceNode } from "@/lib/types";

export default function ServiceBlock({
  service,
  imageSide,
}: {
  service: ServiceNode;
  imageSide: "left" | "right";
}) {
  const features = (service.serviceDetails?.features ?? "").split("\n").filter(Boolean);

  return (
    <section className="py-16">
      <Container
        className={clsx(
          "grid grid-cols-1 items-center gap-12 lg:grid-cols-2",
          imageSide === "right" && "lg:[&>*:first-child]:order-2",
        )}
      >
        <div className="relative h-[400px] w-full overflow-hidden rounded-xl lg:h-[594px]">
          {service.featuredImage?.node.sourceUrl && (
            <Image
              src={service.featuredImage.node.sourceUrl}
              alt={service.featuredImage.node.altText ?? ""}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          )}
        </div>
        <div>
          <Icon name={service.serviceDetails?.icon} className="h-16 w-16 text-gold" />
          <h2 className="mt-6 text-[32px] font-semibold tracking-tight text-green">
            {service.title}
          </h2>
          <p className="mt-4 text-xl text-ink">{service.serviceDetails?.summary}</p>
          <p className="mt-4 text-base text-ink">{service.serviceDetails?.intro}</p>
          <ul className="mt-8 divide-y divide-[#d9d9d9] border-t border-[#d9d9d9]">
            {features.map((feature) => (
              <li key={feature} className="flex items-center justify-between gap-4 py-2">
                <span className="text-base text-ink">{feature}</span>
                <ArrowRight className="h-6 w-6 shrink-0 text-ink" />
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}

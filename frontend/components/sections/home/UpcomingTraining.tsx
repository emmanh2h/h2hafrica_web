import Image from "next/image";
import { Calendar, MapPin } from "lucide-react";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import TextLink from "@/components/ui/TextLink";
import { stripHtml } from "@/lib/text";
import type { HomeFields, TrainingEventNode } from "@/lib/types";

export default function UpcomingTraining({
  fields,
  events,
}: {
  fields: HomeFields;
  events: TrainingEventNode[];
}) {
  return (
    <section className="bg-mint py-24">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <Eyebrow>{fields.upcomingEyebrow}</Eyebrow>
            <h2 className="mt-4 max-w-2xl text-4xl font-semibold tracking-tight text-ink lg:text-[44px] lg:leading-[48px]">
              {fields.upcomingHeading}
            </h2>
          </div>
          <TextLink href="/training">{fields.upcomingLinkLabel}</TextLink>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {events.map((event) => (
            <div key={event.slug} className="overflow-hidden rounded-xl bg-white">
              <div className="relative h-[216px] w-full">
                {event.featuredImage?.node.sourceUrl && (
                  <Image
                    src={event.featuredImage.node.sourceUrl}
                    alt={event.featuredImage.node.altText ?? ""}
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 33vw, 100vw"
                  />
                )}
              </div>
              <div className="border-t border-mint p-10">
                <h3 className="text-[28px] leading-tight font-semibold tracking-tight text-ink">
                  {event.title}
                </h3>
                <p className="mt-4 text-base text-ink">{stripHtml(event.excerpt)}</p>
                <div className="mt-6 flex items-center gap-2 border-t border-mint py-2">
                  <Calendar className="h-5 w-5 shrink-0 text-ink" />
                  <p className="text-lg text-ink">
                    {event.eventDetails?.eventDateDisplay} • {event.eventDetails?.startTime} -{" "}
                    {event.eventDetails?.endTime}
                  </p>
                </div>
                <div className="flex items-center gap-2 border-t border-mint py-2">
                  <MapPin className="h-5 w-5 shrink-0 text-ink" />
                  <p className="text-lg text-ink">
                    {event.eventDetails?.mode?.[0] === "online" ? "Online" : "In Person"} -{" "}
                    {event.eventDetails?.venue}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

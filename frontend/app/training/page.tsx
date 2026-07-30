import Image from "next/image";
import { Calendar, MapPin } from "lucide-react";
import PageHeader from "@/components/layout/PageHeader";
import Container from "@/components/ui/Container";
import CTASection from "@/components/sections/CTASection";
import { getUpcomingTrainingEvents } from "@/lib/wp";
import { stripHtml } from "@/lib/text";

export const metadata = { title: "Upcoming Training | Happy2Host EDU Africa" };

export default async function TrainingPage() {
  const events = await getUpcomingTrainingEvents(50);

  return (
    <>
      <PageHeader
        eyebrow="Upcoming Training"
        heading="Come and learn with us"
        subtext="Every upcoming session, in one place."
      />
      <section className="py-24">
        <Container>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {events.map((event) => (
              <div key={event.slug} className="overflow-hidden rounded-xl bg-mint">
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
                <div className="border-t border-white p-10">
                  <h2 className="text-[28px] leading-tight font-semibold tracking-tight text-ink">
                    {event.title}
                  </h2>
                  <p className="mt-4 text-base text-ink">{stripHtml(event.excerpt)}</p>
                  <div className="mt-6 flex items-center gap-2 border-t border-white py-2">
                    <Calendar className="h-5 w-5 shrink-0 text-ink" />
                    <p className="text-lg text-ink">
                      {event.eventDetails?.eventDateDisplay} • {event.eventDetails?.startTime} -{" "}
                      {event.eventDetails?.endTime}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 border-t border-white py-2">
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
      <CTASection
        heading="Let's work out what's right for your school."
        body="A friendly, no-pressure conversation. We listen first, then tell you honestly what we would do."
        buttonLabel="Book your free consultation"
      />
    </>
  );
}

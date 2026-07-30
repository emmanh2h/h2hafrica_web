import Hero from "@/components/sections/home/Hero";
import WhoWeAre from "@/components/sections/home/WhoWeAre";
import WhatWeDo from "@/components/sections/home/WhatWeDo";
import WhyHappy2Host from "@/components/sections/home/WhyHappy2Host";
import UpcomingTraining from "@/components/sections/home/UpcomingTraining";
import InTheirWords from "@/components/sections/home/InTheirWords";
import LatestTips from "@/components/sections/home/LatestTips";
import CTASection from "@/components/sections/CTASection";
import {
  getHomePage,
  getServices,
  getUpcomingTrainingEvents,
  getFeaturedTestimonials,
  getLatestTips,
} from "@/lib/wp";

export default async function Home() {
  const [fields, services, events, testimonials, tips] = await Promise.all([
    getHomePage(),
    getServices(),
    getUpcomingTrainingEvents(3),
    getFeaturedTestimonials(3),
    getLatestTips(2),
  ]);

  return (
    <>
      <Hero fields={fields} />
      <WhoWeAre fields={fields} />
      <WhatWeDo fields={fields} services={services} />
      <WhyHappy2Host fields={fields} />
      <UpcomingTraining fields={fields} events={events} />
      <InTheirWords fields={fields} testimonials={testimonials} />
      <LatestTips fields={fields} tips={tips} />
      <CTASection
        heading={fields.ctaHeading}
        body={fields.ctaBody}
        buttonLabel={fields.ctaButtonLabel}
      />
    </>
  );
}

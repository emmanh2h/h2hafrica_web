import Hero from "@/components/sections/about/Hero";
import OurStory from "@/components/sections/about/OurStory";
import Record from "@/components/sections/about/Record";
import Homecoming from "@/components/sections/about/Homecoming";
import HowWeWork from "@/components/sections/about/HowWeWork";
import WhatWeStandFor from "@/components/sections/about/WhatWeStandFor";
import CTASection from "@/components/sections/CTASection";
import { getAboutPage } from "@/lib/wp";

export default async function AboutPage() {
  const fields = await getAboutPage();

  return (
    <>
      <Hero fields={fields} />
      <OurStory fields={fields} />
      <Record fields={fields} />
      <Homecoming fields={fields} />
      <HowWeWork fields={fields} />
      <WhatWeStandFor fields={fields} />
      <CTASection
        heading={fields.ctaHeading}
        body={fields.ctaBody}
        buttonLabel={fields.ctaButtonLabel}
      />
    </>
  );
}

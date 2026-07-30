import Image from "next/image";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import type { AboutFields } from "@/lib/types";

export default function OurStory({ fields }: { fields: AboutFields }) {
  const paragraphs = (fields.storyBody ?? "").split("\n\n");

  return (
    <section className="bg-mint py-24">
      <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div className="relative h-[441px] w-full overflow-hidden rounded-xl">
          {fields.storyImage?.node.sourceUrl && (
            <Image
              src={fields.storyImage.node.sourceUrl}
              alt=""
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          )}
        </div>
        <div>
          <Eyebrow>{fields.storyEyebrow}</Eyebrow>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-ink lg:text-[44px] lg:leading-[48px]">
            {fields.storyHeading}
          </h2>
          <div className="mt-6 space-y-4 text-base text-ink">
            {paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

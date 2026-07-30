import Image from "next/image";
import Container from "@/components/ui/Container";
import { Icon } from "@/lib/icons";
import type { AboutFields } from "@/lib/types";

export default function HowWeWork({ fields }: { fields: AboutFields }) {
  const steps = [fields.howStep1, fields.howStep2, fields.howStep3, fields.howStep4].filter(Boolean);

  return (
    <section className="relative overflow-hidden py-24 text-mint">
      {fields.howImage?.node.sourceUrl && (
        <Image src={fields.howImage.node.sourceUrl} alt="" fill className="object-cover" sizes="100vw" />
      )}
      <div className="absolute inset-0 bg-black/70" />
      <Container className="relative">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">{fields.howHeading}</h2>
          <p className="mt-4 text-lg sm:text-xl">{fields.howSubtext}</p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <div key={i} className="border-t border-white/30 pt-8">
              <Icon name={step?.icon} className="h-16 w-16 text-gold" />
              <h3 className="mt-6 text-[28px] font-semibold tracking-tight">{step?.title}</h3>
              <p className="mt-3 text-base">{step?.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

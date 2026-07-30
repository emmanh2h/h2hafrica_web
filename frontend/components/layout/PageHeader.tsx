import Header from "@/components/layout/Header";
import Container from "@/components/ui/Container";

export default function PageHeader({
  eyebrow,
  heading,
  subtext,
}: {
  eyebrow: string;
  heading: string;
  subtext?: string;
}) {
  return (
    <>
      <Header variant="solid" />
      <section className="bg-mint py-20">
        <Container>
          <p className="text-xs font-bold tracking-wide text-green uppercase">{eyebrow}</p>
          <h1 className="mt-4 max-w-2xl text-4xl font-semibold tracking-tight text-ink lg:text-[44px] lg:leading-[48px]">
            {heading}
          </h1>
          {subtext && <p className="mt-4 max-w-2xl text-lg text-ink">{subtext}</p>}
        </Container>
      </section>
    </>
  );
}

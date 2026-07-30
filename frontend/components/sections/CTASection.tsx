import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

export default function CTASection({
  heading,
  body,
  buttonLabel,
}: {
  heading?: string | null;
  body?: string | null;
  buttonLabel?: string | null;
}) {
  return (
    <section
      className="py-24"
      style={{
        backgroundImage:
          "linear-gradient(110.5deg, #007749 0.15%, #00dd88 100%)",
      }}
    >
      <Container className="flex flex-col items-center text-center">
        <h2 className="max-w-2xl text-4xl font-semibold tracking-tight text-mint sm:text-5xl lg:text-[60px] lg:leading-[60px]">
          {heading}
        </h2>
        <p className="mt-6 max-w-xl text-lg text-mint/95 sm:text-xl">{body}</p>
        <Button href="/contact" variant="primary" className="mt-8 bg-mint">
          {buttonLabel}
        </Button>
      </Container>
    </section>
  );
}

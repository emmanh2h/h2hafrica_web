import PageHeader from "@/components/layout/PageHeader";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export const metadata = { title: "Lagos Summit | Happy2Host EDU Africa" };

export default function LagosSummitPage() {
  return (
    <>
      <PageHeader
        eyebrow="Lagos Summit"
        heading="The Lagos Summit, featuring Google for Education"
        subtext="Full event details are coming soon."
      />
      <section className="py-24">
        <Container className="max-w-2xl">
          <p className="text-base text-ink">
            We&apos;re putting together the full page for this year&apos;s summit. In the
            meantime, get in touch and we&apos;ll make sure you hear about registration as soon
            as it opens.
          </p>
          <Button href="/contact" variant="outline-dark" className="mt-8">
            Get in touch
          </Button>
        </Container>
      </section>
    </>
  );
}

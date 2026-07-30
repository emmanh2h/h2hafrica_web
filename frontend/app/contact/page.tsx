import PageHeader from "@/components/layout/PageHeader";
import Container from "@/components/ui/Container";
import ContactForm from "@/components/sections/contact/ContactForm";

export const metadata = { title: "Contact | Happy2Host EDU Africa" };

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        heading="Let's talk about your school."
        subtext="A friendly, no-pressure conversation. We listen first, then tell you honestly what we would do."
      />
      <section className="py-24">
        <Container className="max-w-2xl">
          <ContactForm />
        </Container>
      </section>
    </>
  );
}

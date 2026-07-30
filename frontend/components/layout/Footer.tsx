import Image from "next/image";
import Link from "next/link";
import Logo from "@/components/ui/Logo";
import Container from "@/components/ui/Container";
import NewsletterForm from "@/components/ui/NewsletterForm";

const sitemap = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Upcoming training", href: "/training" },
  { label: "Tips", href: "/tips" },
  { label: "Contact", href: "/contact" },
];

const legal = [
  { label: "Privacy policy", href: "/privacy-policy" },
  { label: "Cookie policy", href: "/cookie-policy" },
  { label: "Terms of use", href: "/terms-of-use" },
  { label: "Accessibility", href: "/accessibility" },
];

const social = [
  { name: "LinkedIn", href: "https://linkedin.com", icon: "/brand/social-linkedin.svg" },
  { name: "Instagram", href: "https://instagram.com", icon: "/brand/social-instagram.svg" },
  { name: "YouTube", href: "https://youtube.com", icon: "/brand/social-youtube.svg" },
  { name: "X", href: "https://x.com", icon: "/brand/social-twitter.svg" },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-mint">
      <Container className="py-16 lg:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[282px_282px_282px_282px]">
          <div className="space-y-6">
            <Logo variant="white" />
            <p className="text-base text-mint/90">
              Supporting schools, colleges, universities and governments across Africa, and the
              educators inside them, through Google Workspace for Education and Gemini.
            </p>
            <div className="flex items-center gap-4">
              <Image
                src="/brand/google-partner-badge.png"
                alt="Google for Education Partner"
                width={128}
                height={36}
                className="h-9 w-auto"
              />
              {social.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.name}
                  className="opacity-90 transition-opacity hover:opacity-100"
                >
                  <Image src={s.icon} alt="" width={24} height={24} className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-2.5 text-xs font-semibold tracking-wide text-green uppercase">
              Sitemap
            </p>
            <ul className="space-y-2.5">
              {sitemap.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-base hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-2.5 text-xs font-semibold tracking-wide text-green uppercase">
              Legal
            </p>
            <ul className="space-y-2.5">
              {legal.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-base hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-2.5 text-xs font-semibold tracking-wide text-green uppercase">
              Weekly Tips
            </p>
            <p className="mb-4 text-base">
              Practical tips for Google Workspace and Gemini, written for real classrooms. No
              fluff, and you can unsubscribe any time.
            </p>
            <NewsletterForm variant="dark" stacked />
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-2 border-t border-white/10 pt-8 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Happy2Host EDU Africa. Building across Africa, one country at a time.</p>
          <p>British English · happy2host.africa</p>
        </div>
      </Container>
    </footer>
  );
}

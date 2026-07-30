"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Logo from "@/components/ui/Logo";
import Button from "@/components/ui/Button";
import { clsx } from "@/lib/clsx";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Upcoming Training", href: "/training" },
  { label: "Lagos Summit", href: "/lagos-summit" },
  { label: "Tips", href: "/tips" },
  { label: "Contact", href: "/contact" },
];

export default function Header({
  variant = "overlay",
}: {
  variant?: "overlay" | "solid";
}) {
  const [open, setOpen] = useState(false);
  const isOverlay = variant === "overlay";
  const pathname = usePathname();

  return (
    <header
      className={clsx(
        "z-20 w-full",
        isOverlay ? "absolute top-0 left-0" : "relative border-b border-ink/10 bg-white",
      )}
    >
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-6 lg:px-[120px]">
        <Logo variant={isOverlay ? "white" : "green"} />

        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={clsx(
                "text-base transition-colors",
                isOverlay ? "text-white hover:text-white/80" : "text-ink hover:text-green",
                pathname === link.href && "border-b border-current pb-0.5",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href="/contact" variant="primary">
            Book a Consultation
          </Button>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className={clsx("lg:hidden", isOverlay ? "text-white" : "text-ink")}
        >
          {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>

      {open && (
        <div className="absolute inset-x-0 top-full bg-white shadow-lg lg:hidden">
          <nav className="flex flex-col gap-1 px-6 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded px-2 py-3 text-base text-ink hover:bg-mint"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-2">
              <Button href="/contact" variant="outline-dark" className="w-full">
                Book a Consultation
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

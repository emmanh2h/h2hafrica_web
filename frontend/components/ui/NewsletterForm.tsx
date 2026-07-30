"use client";

import { useState } from "react";
import { clsx } from "@/lib/clsx";

export default function NewsletterForm({
  variant = "light",
  stacked = false,
}: {
  variant?: "light" | "dark" | "green";
  stacked?: boolean;
}) {
  const [status, setStatus] = useState<"idle" | "submitted">("idle");

  return (
    <form
      className={clsx("flex flex-col gap-3", !stacked && "sm:flex-row")}
      onSubmit={(e) => {
        e.preventDefault();
        setStatus("submitted");
      }}
    >
      <input
        type="email"
        required
        placeholder="you@yourschool.edu"
        className={clsx(
          "h-12 flex-1 rounded px-4 text-base outline-none",
          variant === "dark" && "bg-[#303033] text-mint placeholder:text-mint/60",
          variant === "green" && "bg-[#0b8b59] text-mint placeholder:text-mint/70",
          variant === "light" && "border border-ink/15 bg-white text-ink placeholder:text-ink/50",
        )}
      />
      <button
        type="submit"
        className={clsx(
          "inline-flex h-12 items-center justify-center rounded-full px-7 text-base whitespace-nowrap transition-colors",
          variant === "green"
            ? "bg-mint text-ink hover:bg-mint/90"
            : "bg-green text-mint hover:bg-green/90",
        )}
      >
        {status === "submitted" ? "Thanks!" : "Send Me The Tips"}
      </button>
    </form>
  );
}

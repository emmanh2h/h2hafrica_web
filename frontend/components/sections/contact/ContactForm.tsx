"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitted">("idle");

  if (status === "submitted") {
    return (
      <div className="rounded-xl bg-mint p-10">
        <h2 className="text-2xl font-semibold text-ink">Thanks — message received.</h2>
        <p className="mt-2 text-base text-ink">
          We&apos;ll be in touch within one working day.
        </p>
      </div>
    );
  }

  return (
    <form
      className="space-y-6"
      onSubmit={(e) => {
        e.preventDefault();
        setStatus("submitted");
      }}
    >
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-semibold text-ink" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="h-12 w-full rounded border border-ink/15 bg-white px-4 text-base text-ink outline-none focus:border-green"
          />
        </div>
        <div>
          <label className="mb-2 block text-sm font-semibold text-ink" htmlFor="school">
            School / institution
          </label>
          <input
            id="school"
            name="school"
            type="text"
            className="h-12 w-full rounded border border-ink/15 bg-white px-4 text-base text-ink outline-none focus:border-green"
          />
        </div>
      </div>
      <div>
        <label className="mb-2 block text-sm font-semibold text-ink" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="h-12 w-full rounded border border-ink/15 bg-white px-4 text-base text-ink outline-none focus:border-green"
        />
      </div>
      <div>
        <label className="mb-2 block text-sm font-semibold text-ink" htmlFor="message">
          How can we help?
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full rounded border border-ink/15 bg-white px-4 py-3 text-base text-ink outline-none focus:border-green"
        />
      </div>
      <button
        type="submit"
        className="inline-flex h-12 items-center justify-center rounded-full bg-green px-7 text-base text-mint transition-colors hover:bg-green/90"
      >
        Book your free consultation
      </button>
    </form>
  );
}

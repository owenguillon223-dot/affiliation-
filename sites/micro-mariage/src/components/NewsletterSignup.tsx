"use client";

import { useState, type FormEvent } from "react";

const SIGNUP_ENDPOINT = process.env.NEXT_PUBLIC_NEWSLETTER_ENDPOINT;

/** Email capture for the long micro-wedding decision cycle — inert until NEXT_PUBLIC_NEWSLETTER_ENDPOINT is set. */
export function NewsletterSignup() {
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">(
    "idle"
  );

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!SIGNUP_ENDPOINT) {
      setStatus("error");
      return;
    }
    const email = new FormData(event.currentTarget).get("email");
    setStatus("sending");
    try {
      const res = await fetch(SIGNUP_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      setStatus(res.ok ? "done" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <p className="rounded-md bg-brand-50 px-4 py-3 text-sm text-brand-700">
        You're on the list — check your inbox for a confirmation.
      </p>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-2 rounded-md bg-brand-50 p-4 sm:flex-row"
    >
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <input
        id="newsletter-email"
        name="email"
        type="email"
        required
        placeholder="you@example.com"
        className="flex-1 rounded-md border border-brand-300 px-3 py-2 text-sm"
      />
      <button
        type="submit"
        disabled={status === "sending"}
        className="rounded-md bg-brand-600 px-4 py-2 text-sm font-medium text-white hover:bg-brand-700 disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Get the planning checklist"}
      </button>
      {status === "error" && !SIGNUP_ENDPOINT && (
        <p className="w-full text-xs text-brand-500">
          Signup isn't connected yet — set NEXT_PUBLIC_NEWSLETTER_ENDPOINT.
        </p>
      )}
      {status === "error" && SIGNUP_ENDPOINT && (
        <p className="w-full text-xs text-brand-500">
          Something went wrong — try again in a moment.
        </p>
      )}
    </form>
  );
}

"use client";

import { type FormEvent, useState } from "react";
import { ArrowRight } from "lucide-react";
import { isSupabaseConfigured, submitPublicLead } from "@/lib/supabase-rest";

const interestOptions = [
  "English conversation",
  "Business English",
  "Exam prep",
  "Academic writing",
  "Spanish for foreigners",
  "Travel English",
];

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [interest, setInterest] = useState(interestOptions[0]);
  const [level, setLevel] = useState("Not sure");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage(null);

    if (!isSupabaseConfigured()) {
      setStatus("error");
      setMessage("Supabase is not configured yet. Add the public Supabase environment variables before launch.");
      return;
    }

    try {
      await submitPublicLead({ name, email, phone, interest, level });
      setStatus("success");
      setMessage("Request sent. Alberto will review your goals and follow up with next steps.");
      setName("");
      setEmail("");
      setPhone("");
      setInterest(interestOptions[0]);
      setLevel("Not sure");
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Could not submit the request.");
    }
  }

  return (
    <form
      className="bg-brand-navy px-6 py-10 text-white sm:px-10 sm:py-12 lg:px-20 lg:py-16"
      onSubmit={handleSubmit}
      aria-label="Trial session booking form"
    >
      <div className="mx-auto flex h-full max-w-2xl flex-col justify-center gap-7 sm:gap-8 lg:gap-10">
        <label className="contact-line-field">
          Full name
          <input type="text" name="name" value={name} onChange={(event) => setName(event.target.value)} required />
        </label>

        <label className="contact-line-field">
          Email address
          <input type="email" name="email" value={email} onChange={(event) => setEmail(event.target.value)} required />
        </label>

        <label className="contact-line-field">
          Phone
          <input type="tel" name="phone" value={phone} onChange={(event) => setPhone(event.target.value)} />
        </label>

        <label className="contact-line-field">
          Interest
          <select name="interest" value={interest} onChange={(event) => setInterest(event.target.value)}>
            {interestOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </label>

        <label className="contact-line-field">
          Current level
          <select name="level" value={level} onChange={(event) => setLevel(event.target.value)}>
            <option>Beginner</option>
            <option>Intermediate</option>
            <option>Advanced</option>
            <option>Not sure</option>
          </select>
        </label>

        {message && (
          <p
            className={`rounded-md border px-4 py-3 text-sm font-bold ${
              status === "success"
                ? "border-brand-teal-light/30 bg-brand-teal/15 text-brand-teal-light"
                : "border-brand-red/30 bg-brand-red/12 text-white"
            }`}
          >
            {message}
          </p>
        )}

        <button
          type="submit"
          disabled={status === "loading"}
          className="group flex items-center justify-between border-b border-white/28 pb-6 text-left font-heading text-2xl font-normal text-white transition hover:border-white disabled:cursor-not-allowed disabled:opacity-60 sm:pb-7 sm:text-3xl"
        >
          {status === "loading" ? "Submitting..." : "Submit Request"}
          <ArrowRight className="shrink-0 transition group-hover:translate-x-1" size={30} aria-hidden />
        </button>
      </div>
    </form>
  );
}

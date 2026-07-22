"use client";

import { type FormEvent, useState } from "react";
import { ArrowRight } from "lucide-react";
import { publicLeadInterestOptions } from "@/lib/crm-types";
import { isSupabaseConfigured, submitPublicLead } from "@/lib/supabase-rest";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [interest, setInterest] = useState<string>(publicLeadInterestOptions[0]);
  const [level, setLevel] = useState("Not sure");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage(null);

    if (!isSupabaseConfigured()) {
      setStatus("error");
      setMessage("El formulario no está disponible en este momento. Puede escribirnos por WhatsApp o correo electrónico.");
      return;
    }

    try {
      await submitPublicLead({ name, email, phone, interest, level });
      setStatus("success");
      setMessage("Solicitud recibida. Alberto Academy se comunicará con usted en un plazo de 24 a 48 horas laborables.");
      setName("");
      setEmail("");
      setPhone("");
      setInterest(publicLeadInterestOptions[0]);
      setLevel("Not sure");
    } catch {
      setStatus("error");
      setMessage("No pudimos enviar su solicitud. Inténtelo de nuevo o comuníquese por WhatsApp.");
    }
  }

  return (
    <form className="bg-brand-navy px-6 py-10 text-white sm:px-10 sm:py-12 lg:px-20 lg:py-16" onSubmit={handleSubmit} aria-label="Formulario para solicitar la conversación inicial">
      <div className="mx-auto flex h-full max-w-2xl flex-col justify-center gap-7 sm:gap-8 lg:gap-10">
        <label className="contact-line-field">
          Nombre completo
          <input type="text" name="name" value={name} onChange={(event) => setName(event.target.value)} required />
        </label>

        <label className="contact-line-field">
          Correo electrónico
          <input type="email" name="email" value={email} onChange={(event) => setEmail(event.target.value)} required />
        </label>

        <label className="contact-line-field">
          Teléfono o WhatsApp
          <input type="tel" name="phone" value={phone} onChange={(event) => setPhone(event.target.value)} />
        </label>

        <label className="contact-line-field">
          Servicio de interés
          <select name="interest" value={interest} onChange={(event) => setInterest(event.target.value)}>
            {publicLeadInterestOptions.map((option) => <option key={option}>{option}</option>)}
          </select>
        </label>

        <label className="contact-line-field">
          Nivel actual
          <select name="level" value={level} onChange={(event) => setLevel(event.target.value)}>
            <option value="Beginner">Principiante</option>
            <option value="Intermediate">Intermedio</option>
            <option value="Advanced">Avanzado</option>
            <option value="Not sure">No estoy seguro</option>
          </select>
        </label>

        {message && (
          <p className={`rounded-md border px-4 py-3 text-sm font-bold ${status === "success" ? "border-brand-teal-light/30 bg-brand-teal/15 text-brand-teal-light" : "border-brand-red/30 bg-brand-red/12 text-white"}`}>
            {message}
          </p>
        )}

        <button
          type="submit"
          disabled={status === "loading"}
          className="group mt-1 inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-lg border border-white/10 bg-brand-red px-5 py-4 text-center text-base font-extrabold text-white shadow-[0_16px_36px_rgba(0,0,0,0.24)] transition hover:-translate-y-0.5 hover:bg-brand-red-dark hover:shadow-[0_20px_42px_rgba(0,0,0,0.3)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-teal-light/35 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 sm:text-lg"
        >
          {status === "loading" ? "Enviando..." : "Solicitar conversación inicial"}
          <ArrowRight className="shrink-0 transition group-hover:translate-x-1" size={22} aria-hidden />
        </button>
      </div>
    </form>
  );
}

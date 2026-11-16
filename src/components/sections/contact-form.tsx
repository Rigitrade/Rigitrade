"use client"

import { useState } from "react"
import { getDictionary, href, type Locale } from "@/content"
import { cn } from "@/lib/cn"

const FORM_ID = process.env.NEXT_PUBLIC_FORMSPREE_CONTACT_ID ?? ""

const field =
  "mt-2 block h-12 w-full rounded-md border border-line-strong bg-white px-4 text-[16px] text-navy outline-none transition-colors focus:border-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
const label = "block text-[15px] leading-5 font-semibold text-navy"

type State = "idle" | "sending" | "sent" | "error"

export function ContactForm({ locale }: { locale: Locale }) {
  const f = getDictionary(locale).contact.form
  const [state, setState] = useState<State>("idle")

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form).entries())
    if (data._gotcha) return setState("sent") // honeypot

    if (!FORM_ID) {
      // No form endpoint configured yet: hand over to the visitor's mail client.
      const body = `${data.message}\n\n${data.name}${data.company ? `, ${data.company}` : ""}\n${data.email}`
      window.location.href = `mailto:info@rigitrade.com?subject=${encodeURIComponent(`${data.topic} – rigitrade.com`)}&body=${encodeURIComponent(body)}`
      return
    }

    setState("sending")
    try {
      const res = await fetch(`https://formspree.io/f/${FORM_ID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...data, _subject: `${data.topic} – rigitrade.com`, locale }),
      })
      setState(res.ok ? "sent" : "error")
      if (res.ok) form.reset()
    } catch {
      setState("error")
    }
  }

  if (state === "sent") {
    return (
      <div role="status" className="border border-line bg-ice p-8">
        <span aria-hidden className="red-square" />
        <p className="text-h3 mt-5">{f.success}</p>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <h2 className="text-h2">{f.heading}</h2>
      <div className="hidden" aria-hidden>
        <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" />
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        <label className={label}>
          {f.name} <span className="sr-only">({f.required})</span>
          <span aria-hidden className="text-red-text">*</span>
          <input name="name" required autoComplete="name" className={field} />
        </label>
        <label className={label}>
          {f.email} <span className="sr-only">({f.required})</span>
          <span aria-hidden className="text-red-text">*</span>
          <input name="email" type="email" required autoComplete="email" className={field} />
        </label>
        <label className={label}>
          {f.company}
          <input name="company" autoComplete="organization" className={field} />
        </label>
        <label className={label}>
          {f.topic}
          <select name="topic" className={cn(field, "appearance-none bg-[length:12px] bg-[right_1rem_center] bg-no-repeat")} style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' fill='none' stroke='%230B1F3A' stroke-width='1.5'/%3E%3C/svg%3E\")" }}>
            {f.topics.map((topic) => (
              <option key={topic}>{topic}</option>
            ))}
          </select>
        </label>
      </div>
      <label className={label}>
        {f.message} <span className="sr-only">({f.required})</span>
        <span aria-hidden className="text-red-text">*</span>
        <textarea name="message" required rows={6} className={cn(field, "h-auto py-3 leading-6")} />
      </label>
      <label className="flex items-start gap-3 text-[15px] leading-6 text-ink-muted">
        <input type="checkbox" name="consent" required className="mt-1 size-4 flex-none accent-navy" />
        <span>
          {f.consent}{" "}
          <a href={href("privacy", locale)} className="font-semibold text-navy underline underline-offset-2">
            {f.privacyLink}
          </a>
          .
        </span>
      </label>
      {state === "error" && (
        <p role="alert" className="text-[15px] leading-6 font-semibold text-danger">
          {f.error}
        </p>
      )}
      <button
        type="submit"
        disabled={state === "sending"}
        className="inline-flex h-12 items-center rounded-md bg-red px-6 text-[15px] leading-5 font-semibold text-white transition-colors hover:bg-red-hover disabled:opacity-60"
      >
        {state === "sending" ? f.sending : f.submit}
      </button>
    </form>
  )
}

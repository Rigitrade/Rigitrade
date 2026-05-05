import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { NextIntlClientProvider, hasLocale } from "next-intl"
import { getMessages, setRequestLocale } from "next-intl/server"
import { Analytics } from "@vercel/analytics/next"
import { routing, type Locale } from "@/i18n/routing"
import { switzer, jetbrains } from "@/lib/fonts"
import { cn } from "@/lib/utils/cn"

export const metadata: Metadata = {
  title: { default: "Rigitrade", template: "%s · Rigitrade" },
  description:
    "Swiss-controlled supply of superalloys for extreme environments — Inconel, Hastelloy, Duplex, Monel.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  openGraph: {
    type: "website",
    siteName: "Rigitrade",
    locale: "en_US",
  },
  robots: { index: true, follow: true },
  authors: [{ name: "Rigitrade AG" }],
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (!hasLocale(routing.locales, locale)) notFound()
  setRequestLocale(locale)

  const messages = await getMessages()

  return (
    <html lang={locale} className={cn(switzer.variable, jetbrains.variable)}>
      <body className="bg-paper text-ink antialiased">
        <NextIntlClientProvider locale={locale as Locale} messages={messages}>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
          >
            Skip to content
          </a>
          {children}
          <Analytics />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}

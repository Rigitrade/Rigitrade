import type { Metadata, Viewport } from "next"
import { Analytics } from "@vercel/analytics/next"
import { getDictionary, HTML_LANG, SITE_URL, type Locale } from "@/content"
import { archivo, inter } from "@/lib/fonts"
import { cn } from "@/lib/cn"
import { SiteHeader } from "./site-header"
import { SiteFooter } from "./site-footer"

export const rootMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: "Rigitrade AG",
  authors: [{ name: "Rigitrade AG" }],
  icons: {
    icon: [{ url: "/brand/rigitrade-mark-navy-32px.png", sizes: "32x32", type: "image/png" }],
    apple: [{ url: "/brand/rigitrade-mark-navy-180px.png", sizes: "180x180", type: "image/png" }],
  },
  robots: { index: true, follow: true },
}

export const rootViewport: Viewport = {
  themeColor: "#0B1F3A",
  width: "device-width",
  initialScale: 1,
}

/** The <html> document shared by the German and English root layouts. */
export function Document({ locale, children }: { locale: Locale; children: React.ReactNode }) {
  const t = getDictionary(locale)
  return (
    <html lang={HTML_LANG[locale]} className={cn(archivo.variable, inter.variable)}>
      {/* Browser extensions (e.g. Grammarly) add attributes to <body> before React loads */}
      <body suppressHydrationWarning>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-navy"
        >
          {t.ui.skipToContent}
        </a>
        <SiteHeader locale={locale} />
        <main id="main">{children}</main>
        <SiteFooter locale={locale} />
        <Analytics />
      </body>
    </html>
  )
}

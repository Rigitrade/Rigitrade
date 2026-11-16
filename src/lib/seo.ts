import type { Metadata } from "next"
import { getDictionary, ROUTES, SITE_URL, type Locale, type PageKey } from "@/content"

/** Absolute alternates per SEO doc: de-CH, en and x-default (→ German). */
export function alternatesFor(page: PageKey) {
  return {
    "de-CH": `${SITE_URL}${ROUTES[page].de}`,
    en: `${SITE_URL}${ROUTES[page].en}`,
    "x-default": `${SITE_URL}${ROUTES[page].de}`,
  }
}

export function buildMetadata(page: PageKey, locale: Locale): Metadata {
  const { title, description } = getDictionary(locale).meta[page]
  const url = `${SITE_URL}${ROUTES[page][locale]}`
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url, languages: alternatesFor(page) },
    openGraph: {
      type: "website",
      siteName: "Rigitrade AG",
      locale: locale === "de" ? "de_CH" : "en_GB",
      url,
      title,
      description,
      images: [{ url: `${SITE_URL}/og-image.png`, width: 1200, height: 630, alt: "Rigitrade AG" }],
    },
    twitter: { card: "summary_large_image", title, description },
  }
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Rigitrade AG",
    description: "Swiss Automotive & Mobility Group",
    url: SITE_URL,
    logo: `${SITE_URL}/logo/rigitrade-mark-navy-512px.png`,
    telephone: "+41 58 513 99 96",
    email: "info@rigitrade.com",
    vatID: "CHE-199.884.159",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Schaffhauserstrasse 550",
      postalCode: "8052",
      addressLocality: "Zürich",
      addressCountry: "CH",
    },
    brand: [
      { "@type": "Brand", name: "zuriauto", url: "https://www.zuriauto.ch" },
      { "@type": "Brand", name: "Carseek.ch", url: "https://www.carseek.ch" },
      { "@type": "Brand", name: "TrackMyCar24", url: "https://www.trackmycar24.com" },
    ],
  }
}

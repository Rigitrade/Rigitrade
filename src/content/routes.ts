// URL map from Rigitrade-SEO-and-Setup.docx: German at the root, English under /en/.
export const LOCALES = ["de", "en"] as const
export type Locale = (typeof LOCALES)[number]

export const PAGES = ["home", "about", "brands", "strategy", "contact", "legal", "privacy"] as const
export type PageKey = (typeof PAGES)[number]

export const ROUTES: Record<PageKey, Record<Locale, string>> = {
  home: { de: "/", en: "/en/" },
  about: { de: "/ueber-uns/", en: "/en/about/" },
  brands: { de: "/marken/", en: "/en/brands/" },
  strategy: { de: "/strategie/", en: "/en/strategy/" },
  contact: { de: "/kontakt/", en: "/en/contact/" },
  legal: { de: "/impressum/", en: "/en/legal-notice/" },
  privacy: { de: "/datenschutz/", en: "/en/privacy/" },
}

export const HTML_LANG: Record<Locale, string> = { de: "de-CH", en: "en" }

export function href(page: PageKey, locale: Locale): string {
  return ROUTES[page][locale]
}

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.rigitrade.com").replace(
  /\/$/,
  "",
)

export const BRAND_URLS = {
  zuriauto: "https://www.zuriauto.ch",
  carseek: "https://www.carseek.ch",
  trackmycar24: "https://www.trackmycar24.com",
} as const

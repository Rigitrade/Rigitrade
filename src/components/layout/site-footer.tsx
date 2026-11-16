import Link from "next/link"
import { ArrowUp, Mail, Phone } from "lucide-react"
import { Wordmark } from "@/components/brand/wordmark"
import { BRAND_URLS, getDictionary, href, type Locale } from "@/content"

const MAPS_URL = "https://www.google.com/maps/search/?api=1&query=Schaffhauserstrasse+550,+8052+Z%C3%BCrich"
const ZEFIX_URL = "https://www.zefix.ch/en/search/entity/list/firm/1690688"

const BRANDS = [
  { name: "zuriauto", url: BRAND_URLS.zuriauto },
  { name: "Carseek.ch", url: BRAND_URLS.carseek },
  { name: "TrackMyCar24", url: BRAND_URLS.trackmycar24 },
] as const

const NAV = ["brands", "about", "strategy", "contact"] as const

/** Red column label — the footer's only accent besides the top seam. */
function ColLabel({ children }: { children: React.ReactNode }) {
  return <h2 className="eyebrow mb-5 text-[13px] text-red">{children}</h2>
}

/** Faded hairline centred in the grid gap to a column's left (desktop only). */
function ColDivider() {
  return (
    <span
      aria-hidden
      className="pointer-events-none absolute top-0 -left-4 hidden h-full w-px bg-gradient-to-b from-transparent via-white/15 to-transparent lg:block"
    />
  )
}

function SwissFlag() {
  return (
    <svg viewBox="0 0 24 24" className="size-4 shrink-0" aria-hidden>
      <rect width="24" height="24" rx="2" fill="#e30613" />
      <path fill="#fff" d="M10.2 5.4h3.6v4.8h4.8v3.6h-4.8v4.8h-3.6v-4.8H5.4v-3.6h4.8z" />
    </svg>
  )
}

export function SiteFooter({ locale }: { locale: Locale }) {
  const t = getDictionary(locale)
  const c = t.contact
  const [cityLine, countryLine] = c.city.split(", ")

  return (
    <footer className="relative bg-navy text-white">
      {/* Red top seam: separates the footer from the navy and photo bands above it */}
      <div aria-hidden className="absolute inset-x-0 top-0 h-0.5 bg-red" />

      <div className="container-site pt-10 pb-8 lg:pt-14">
        {/* Top row: page links and back to top */}
        <div className="flex flex-col gap-6 border-b border-white/10 pb-8 sm:flex-row sm:items-center sm:justify-between">
          <nav aria-label={t.ui.company}>
            <ul className="flex flex-wrap gap-x-7 gap-y-1">
              {NAV.map((key) => (
                <li key={key}>
                  <Link
                    href={href(key, locale)}
                    className="inline-block py-2 text-[15px] leading-5 font-semibold text-white/85 transition-colors hover:text-white"
                  >
                    {t.nav[key]}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <a
            href="#top"
            className="group eyebrow inline-flex items-center gap-2 self-start py-2 text-white/55 transition-colors hover:text-white sm:self-auto"
          >
            {t.ui.backToTop}
            <ArrowUp
              aria-hidden
              strokeWidth={2}
              className="size-3.5 text-red transition-transform duration-200 group-hover:-translate-y-0.5"
            />
          </a>
        </div>

        {/* Columns */}
        <div className="mt-12 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:mt-14 lg:grid-cols-12">
          <div className="sm:col-span-2 lg:col-span-3 xl:col-span-4">
            <Link href={href("home", locale)} aria-label="Rigitrade – Home" className="inline-block">
              <Wordmark className="h-[24px] w-auto" />
            </Link>
            <p className="mt-6 max-w-xs font-display text-xl leading-snug font-bold">{t.positioning.tagline}</p>
            <p className="mt-3 max-w-xs text-[15px] leading-6 text-white/60">{t.positioning.descriptor}</p>
          </div>

          <div className="relative lg:col-span-3">
            <ColDivider />
            <ColLabel>{t.ui.headquarters}</ColLabel>
            <a
              href={MAPS_URL}
              title={t.ui.openInMaps}
              className="block w-fit space-y-1.5 text-[15px] leading-6 text-white/80 transition-colors hover:text-white"
            >
              <span className="block font-semibold text-white">{c.company}</span>
              <span className="block">{c.street}</span>
              <span className="block">{cityLine}</span>
              {countryLine && <span className="block">{countryLine}</span>}
            </a>
          </div>

          <div className="relative lg:col-span-3">
            <ColDivider />
            <ColLabel>{t.ui.contact}</ColLabel>
            <ul className="space-y-1.5 text-[15px] leading-6">
              <li>
                <a
                  href={c.phoneHref}
                  className="inline-block font-semibold tabular-nums text-white transition-colors hover:text-white/75"
                >
                  {c.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${c.email}`} className="inline-block text-white/80 transition-colors hover:text-white">
                  {c.email}
                </a>
              </li>
              <li className="pt-3 text-white/60">{c.hours}</li>
            </ul>
          </div>

          <div className="relative lg:col-span-3 xl:col-span-2">
            <ColDivider />
            <ColLabel>{t.ui.ourBrands}</ColLabel>
            <ul className="space-y-1.5 text-[15px] leading-6">
              {BRANDS.map((b) => (
                <li key={b.name} className="flex items-center gap-2.5">
                  <span aria-hidden className="size-1.5 shrink-0 bg-red" />
                  <a href={b.url} className="text-white/80 transition-colors hover:text-white">
                    {b.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar: register entry, legal pages, quick contact */}
        <div className="mt-14 flex flex-col gap-5 border-t border-white/10 pt-6 lg:flex-row lg:items-center lg:justify-between">
          <p className="eyebrow flex items-center gap-2.5 text-[11px] text-white/55">
            <SwissFlag />
            <span>
              {t.ui.commercialRegister} · UID{" "}
              <a
                href={ZEFIX_URL}
                title={t.ui.registryEntry}
                className="inline-block py-2 tabular-nums transition-colors hover:text-white"
              >
                {c.uid}
              </a>
            </span>
          </p>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <nav aria-label={t.ui.legalNav} className="eyebrow flex items-center gap-x-6 text-[11px]">
              <Link href={href("legal", locale)} className="py-2 text-white/60 transition-colors hover:text-white">
                {t.footer.legal}
              </Link>
              <Link href={href("privacy", locale)} className="py-2 text-white/60 transition-colors hover:text-white">
                {t.footer.privacy}
              </Link>
            </nav>
            <span aria-hidden className="h-4 w-px bg-white/20" />
            <div className="flex items-center gap-1">
              <a
                href={`mailto:${c.email}`}
                aria-label={t.ui.emailUs}
                className="inline-flex size-10 items-center justify-center text-white/60 transition-colors hover:text-white"
              >
                <Mail aria-hidden strokeWidth={1.75} className="size-[18px]" />
              </a>
              <a
                href={c.phoneHref}
                aria-label={t.ui.callUs}
                className="inline-flex size-10 items-center justify-center text-white/60 transition-colors hover:text-white"
              >
                <Phone aria-hidden strokeWidth={1.75} className="size-[18px]" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-4 flex flex-col gap-1 text-[12px] leading-5 text-white/45 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
          <p>{t.footer.disclaimer}</p>
          <p className="shrink-0">{t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  )
}

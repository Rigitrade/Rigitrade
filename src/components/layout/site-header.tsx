"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useRef, useState } from "react"
import { Menu, X } from "lucide-react"
import { Wordmark } from "@/components/brand/wordmark"
import { getDictionary, href, ROUTES, PAGES, type Locale, type PageKey } from "@/content"
import { cn } from "@/lib/cn"

type NavKey = "brands" | "about" | "strategy" | "contact"
const NAV: NavKey[] = ["brands", "about", "strategy"]

function normalise(path: string) {
  return path.endsWith("/") ? path : `${path}/`
}

function pageFromPath(path: string, locale: Locale): PageKey | undefined {
  const p = normalise(path)
  return PAGES.find((key) => ROUTES[key][locale] === p)
}

export function SiteHeader({ locale }: { locale: Locale }) {
  const t = getDictionary(locale)
  const pathname = usePathname() ?? "/"
  const current = pageFromPath(pathname, locale)
  const otherLocale: Locale = locale === "de" ? "en" : "de"
  const switchHref = href(current ?? "home", otherLocale)

  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const progressRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let frame = 0
    const update = () => {
      frame = 0
      const y = window.scrollY
      setScrolled(y > 24)
      const max = document.documentElement.scrollHeight - window.innerHeight
      // Written straight to the DOM so scrolling never re-renders the header
      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${max > 0 ? Math.min(1, y / max) : 0})`
      }
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }
    update()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false)
    window.addEventListener("keydown", onKey)
    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", onKey)
    }
  }, [open])

  // Every page starts on a dark photo or navy band, so the header is
  // transparent with white type until the visitor scrolls.
  const solid = scrolled && !open

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,color] duration-300",
        solid ? "bg-white text-navy shadow-[0_1px_0_var(--color-line)]" : "text-white",
      )}
    >
      {!solid && !open && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -bottom-10 bg-gradient-to-b from-navy-deep/55 to-transparent"
        />
      )}
      {/* Reading progress: a 2px red line along the header's lower edge */}
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-x-0 bottom-0 h-0.5 transition-opacity duration-300",
          solid ? "opacity-100" : "opacity-0",
        )}
      >
        <div ref={progressRef} className="h-full origin-left bg-red" style={{ transform: "scaleX(0)" }} />
      </div>
      <div className="container-site relative flex h-20 items-center justify-between gap-6 lg:h-24">
        <Link href={href("home", locale)} className="block shrink-0" aria-label="Rigitrade – Home">
          <Wordmark className="h-[18px] w-auto lg:h-[21px]" />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-10 lg:flex">
          <ul className="flex items-center gap-9">
            {NAV.map((key) => {
              const active = current === key
              return (
                <li key={key}>
                  <Link
                    href={href(key, locale)}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "relative py-2 text-[15px] leading-5 font-semibold transition-opacity hover:opacity-75",
                      active &&
                        "after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:bg-red",
                    )}
                  >
                    {t.nav[key]}
                  </Link>
                </li>
              )
            })}
          </ul>
          <span aria-hidden className={cn("h-5 w-px", solid ? "bg-line" : "bg-white/35")} />
          <a
            href={switchHref}
            hrefLang={otherLocale === "de" ? "de-CH" : "en"}
            lang={otherLocale === "de" ? "de-CH" : "en"}
            className="eyebrow transition-opacity hover:opacity-75"
            aria-label={`${t.ui.language}: ${t.ui.switchTo}`}
          >
            {otherLocale.toUpperCase()}
          </a>
          <Link
            href={href("contact", locale)}
            aria-current={current === "contact" ? "page" : undefined}
            className="inline-flex h-11 items-center rounded-md bg-red px-5 text-[15px] leading-5 font-semibold text-white transition-colors hover:bg-red-hover"
          >
            {t.nav.contact}
          </Link>
        </nav>

        <button
          type="button"
          className="-mr-2 inline-flex size-11 items-center justify-center lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? t.ui.closeMenu : t.ui.menu}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X strokeWidth={1.5} className="size-7" /> : <Menu strokeWidth={1.5} className="size-7" />}
        </button>
      </div>

      <div
        id="mobile-menu"
        hidden={!open}
        className="fixed inset-0 top-20 z-40 overflow-y-auto bg-navy text-white lg:hidden"
      >
        <nav aria-label="Mobile" className="container-site flex min-h-full flex-col pt-8 pb-10">
          <ul className="flex flex-col">
            {[...NAV, "contact" as const].map((key) => (
              <li key={key} className="border-b border-white/15">
                <Link
                  href={href(key, locale)}
                  onClick={() => setOpen(false)}
                  aria-current={current === key ? "page" : undefined}
                  className="flex items-center gap-3 py-5 font-display text-3xl font-bold"
                >
                  {current === key && <span aria-hidden className="red-square" />}
                  {t.nav[key]}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-auto flex items-center justify-between pt-10 text-sm text-white/70">
            <a href={switchHref} className="eyebrow text-white">
              {t.ui.switchTo}
            </a>
            <a href="tel:+41585139996">+41 58 513 99 96</a>
          </div>
        </nav>
      </div>
    </header>
  )
}

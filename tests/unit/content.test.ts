import { describe, expect, it } from "vitest"
import { de } from "@/content/de"
import { en } from "@/content/en"
import { LOCALES, PAGES, ROUTES } from "@/content/routes"
import { PHOTOS } from "@/content/photos"
import { alternatesFor } from "@/lib/seo"
import photoLoader from "@/lib/image-loader"

/** Structural fingerprint: keys and array lengths, not the words. */
function shape(value: unknown): unknown {
  if (Array.isArray(value)) return value.map(shape)
  if (value && typeof value === "object")
    return Object.fromEntries(Object.entries(value).map(([k, v]) => [k, shape(v)]))
  return value === null ? "null" : typeof value
}

describe("content", () => {
  it("German and English carry the same structure", () => {
    expect(shape(de)).toEqual(shape(en))
  })

  it("uses Swiss spelling in German (no ß)", () => {
    expect(JSON.stringify(de)).not.toContain("ß")
  })

  it("keeps SEO titles under 60 and descriptions under 155 characters", () => {
    for (const dict of [de, en]) {
      for (const page of PAGES) {
        expect(dict.meta[page].title.length, `${page} title`).toBeLessThanOrEqual(60)
        expect(dict.meta[page].description.length, `${page} description`).toBeLessThanOrEqual(155)
      }
    }
  })

  it("only references photo slots that exist", () => {
    for (const dict of [de, en]) {
      for (const d of dict.brands.zuriauto.divisions) expect(PHOTOS).toHaveProperty(d.photo)
    }
  })
})

describe("routes", () => {
  it("serves German at the root and English under /en/", () => {
    for (const page of PAGES) {
      expect(ROUTES[page].de.startsWith("/en/")).toBe(false)
      expect(ROUTES[page].en.startsWith("/en/")).toBe(true)
      for (const locale of LOCALES) expect(ROUTES[page][locale].endsWith("/")).toBe(true)
    }
  })

  it("has no duplicate URLs", () => {
    const all = PAGES.flatMap((p) => LOCALES.map((l) => ROUTES[p][l]))
    expect(new Set(all).size).toBe(all.length)
  })

  it("points x-default at the German page", () => {
    const alt = alternatesFor("about")
    expect(alt["x-default"]).toBe(alt["de-CH"])
    expect(alt["de-CH"]).toMatch(/\/ueber-uns\/$/)
    expect(alt.en).toMatch(/\/en\/about\/$/)
  })
})

describe("image loader", () => {
  it("maps a requested width to the nearest generated size", () => {
    expect(photoLoader({ src: "/img/hero-1", width: 750 })).toBe("/img/hero-1-1080.webp")
    expect(photoLoader({ src: "/img/hero-1", width: 3840 })).toBe("/img/hero-1-2400.webp")
    expect(photoLoader({ src: "/img/hero-1", width: 640 })).toBe("/img/hero-1-640.webp")
  })

  it("passes other assets through untouched", () => {
    expect(photoLoader({ src: "/brand/rigitrade-mark-navy.svg", width: 640 })).toBe(
      "/brand/rigitrade-mark-navy.svg",
    )
  })
})

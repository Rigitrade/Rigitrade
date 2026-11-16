import type { MetadataRoute } from "next"
import { PAGES, ROUTES, SITE_URL } from "@/content"
import { alternatesFor } from "@/lib/seo"

export const dynamic = "force-static"

// Both languages, each entry carrying its hreflang alternates.
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  return PAGES.flatMap((page) =>
    (["de", "en"] as const).map((locale) => ({
      url: `${SITE_URL}${ROUTES[page][locale]}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: page === "home" ? 1 : page === "legal" || page === "privacy" ? 0.3 : 0.8,
      alternates: { languages: alternatesFor(page) },
    })),
  )
}

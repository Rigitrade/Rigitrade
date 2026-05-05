import type { Metadata } from "next"
import { setRequestLocale } from "next-intl/server"
import { Hero } from "@/components/blocks/hero"
import { TrustStrip } from "@/components/blocks/trust-strip"
import { SolutionCarousel } from "@/components/blocks/solution-carousel"
import { MaterialComparisonTable } from "@/components/blocks/material-comparison-table"
import { TwoPillarSection } from "@/components/blocks/two-pillar-section"
import { CommoditiesGrid } from "@/components/blocks/commodities-grid"
import { FinalCta } from "@/components/blocks/final-cta"
import { loadPageContent } from "@/lib/content/load"
import { homeSchema } from "@/lib/content/schema"
import type { Locale } from "@/i18n/routing"

export const metadata: Metadata = {
  title: "Superalloys for Extreme Environments",
  description:
    "Swiss-controlled supply of Inconel, Hastelloy, Duplex and Monel for high-temperature, corrosive and high-pressure applications.",
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)

  const { frontmatter } = await loadPageContent(
    locale as Locale,
    "home",
    homeSchema,
  )

  return (
    <>
      <Hero hero={frontmatter.hero} locale={locale as Locale} />
      <TrustStrip items={frontmatter.trust.items} />
      <SolutionCarousel solutions={frontmatter.solutions} locale={locale as Locale} />
      <MaterialComparisonTable
        materials={frontmatter.materials}
        locale={locale as Locale}
      />
      <TwoPillarSection pillars={frontmatter.pillars} />
      <CommoditiesGrid commodities={frontmatter.commodities} locale={locale as Locale} />
      <FinalCta finalCta={frontmatter.finalCta} locale={locale as Locale} />
    </>
  )
}

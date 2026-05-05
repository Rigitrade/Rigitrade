import type { Metadata } from "next"
import { setRequestLocale } from "next-intl/server"
import { Container } from "@/components/primitives/container"
import { Section } from "@/components/primitives/section"
import { Stack } from "@/components/primitives/stack"
import { ResponsiveImage } from "@/components/primitives/responsive-image"
import { PageHeader } from "@/components/blocks/page-header"
import { MidPageCta } from "@/components/blocks/mid-page-cta"
import { FinalCta } from "@/components/blocks/final-cta"
import { SectionLabel } from "@/components/typography/section-label"
import { DataChip } from "@/components/typography/data-chip"
import { loadPageContent } from "@/lib/content/load"
import { homeSchema, solutionsPageSchema } from "@/lib/content/schema"
import type { Locale } from "@/i18n/routing"

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Engineered superalloy solutions for high-temperature, corrosive, high-pressure, and custom-cast applications.",
}

export default async function SolutionsPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)

  const { frontmatter } = await loadPageContent(
    locale as Locale,
    "solutions",
    solutionsPageSchema,
  )
  const home = await loadPageContent(locale as Locale, "home", homeSchema)

  return (
    <>
      <PageHeader
        number={frontmatter.pageHeader.number}
        label={frontmatter.pageHeader.label}
        title={frontmatter.pageHeader.title}
        intro={frontmatter.pageHeader.intro}
        breadcrumbs={[
          { label: "Home", href: `/${locale}` },
          { label: "Solutions" },
        ]}
      />
      {frontmatter.sections.map((section, i) => (
        <Section
          key={section.title}
          surface={i % 2 === 0 ? "paper" : "stone"}
          id={section.title.toLowerCase().replace(/\s+/g, "-")}
        >
          <Container>
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
              <div className={i % 2 === 0 ? "lg:col-span-7" : "lg:col-span-7 lg:order-2"}>
                <Stack gap="4">
                  <SectionLabel number={section.number} label="SOLUTION" />
                  <h2 className="max-w-[20ch] text-h1 font-medium">{section.title}</h2>
                  <DataChip>{section.spec}</DataChip>
                  <p className="max-w-[60ch] text-body-l text-ink/80">{section.body}</p>
                </Stack>
              </div>
              <div
                className={
                  i % 2 === 0 ? "lg:col-span-5" : "lg:col-span-5 lg:order-1"
                }
              >
                <div className="relative aspect-[4/3] overflow-hidden border border-hairline bg-stone">
                  <ResponsiveImage
                    src={section.image.src}
                    alt={section.image.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                </div>
              </div>
            </div>
          </Container>
        </Section>
      ))}
      <MidPageCta
        text="Have a specific requirement? Request a technical quote."
        href={`/${locale}/contact?intent=quote`}
      />
      <FinalCta finalCta={home.frontmatter.finalCta} locale={locale as Locale} />
    </>
  )
}

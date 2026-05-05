import type { Metadata } from "next"
import { setRequestLocale } from "next-intl/server"
import { Container } from "@/components/primitives/container"
import { Section } from "@/components/primitives/section"
import { Stack } from "@/components/primitives/stack"
import { PageHeader } from "@/components/blocks/page-header"
import { MidPageCta } from "@/components/blocks/mid-page-cta"
import { FinalCta } from "@/components/blocks/final-cta"
import { SectionLabel } from "@/components/typography/section-label"
import { loadPageContent } from "@/lib/content/load"
import { homeSchema, commoditiesPageSchema } from "@/lib/content/schema"
import type { Locale } from "@/i18n/routing"

export const metadata: Metadata = {
  title: "Commodities",
  description:
    "Structured commodities trade in food, metals, and energy markets — Swiss-precision delivery.",
}

export default async function CommoditiesPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)

  const { frontmatter } = await loadPageContent(
    locale as Locale,
    "commodities",
    commoditiesPageSchema,
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
          { label: "Commodities" },
        ]}
      />

      {frontmatter.groups.map((group, i) => (
        <Section key={group.title} surface={i % 2 === 0 ? "paper" : "stone"}>
          <Container>
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <Stack gap="2">
                  <SectionLabel number={`0${i + 1}`} label="PRODUCT GROUP" />
                  <h2 className="text-h1 font-medium">{group.title}</h2>
                </Stack>
              </div>
              <div className="lg:col-span-8">
                <ul className="grid grid-cols-2 gap-x-8 gap-y-2 md:grid-cols-3">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="border-l border-hairline pl-3 text-body text-ink/80"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Container>
        </Section>
      ))}

      <MidPageCta
        text="Inquire about specific commodities or volumes."
        href={`/${locale}/contact?intent=quote`}
      />
      <FinalCta finalCta={home.frontmatter.finalCta} locale={locale as Locale} />
    </>
  )
}

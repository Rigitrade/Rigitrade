import type { Metadata } from "next"
import { setRequestLocale } from "next-intl/server"
import { Container } from "@/components/primitives/container"
import { Section } from "@/components/primitives/section"
import { Stack } from "@/components/primitives/stack"
import { Hairline } from "@/components/primitives/hairline"
import { PageHeader } from "@/components/blocks/page-header"
import { FinalCta } from "@/components/blocks/final-cta"
import { SectionLabel } from "@/components/typography/section-label"
import { DisplayHeading } from "@/components/typography/display-heading"
import { loadPageContent } from "@/lib/content/load"
import { homeSchema, aboutPageSchema } from "@/lib/content/schema"
import type { Locale } from "@/i18n/routing"

export const metadata: Metadata = {
  title: "About",
  description:
    "Rigitrade AG — Swiss-incorporated holding company. Engineering-grade execution. Less is more.",
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)

  const { frontmatter } = await loadPageContent(
    locale as Locale,
    "about",
    aboutPageSchema,
  )
  const home = await loadPageContent(locale as Locale, "home", homeSchema)

  return (
    <>
      <PageHeader
        number={frontmatter.pageHeader.number}
        label={frontmatter.pageHeader.label}
        title={frontmatter.pageHeader.title}
        intro={frontmatter.pageHeader.intro}
        breadcrumbs={[{ label: "Home", href: `/${locale}` }, { label: "About" }]}
      />

      <Section>
        <Container>
          <Stack gap="6">
            <SectionLabel number="01" label="HOLDING" />
            <DisplayHeading as="h2" size="display-m" className="max-w-[20ch]">
              {frontmatter.holding.title}
            </DisplayHeading>
            <p className="max-w-[60ch] text-body-l text-ink/80">
              {frontmatter.holding.body}
            </p>
            <Hairline className="my-8" />
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {frontmatter.holding.sisterBrands.map((brand) => (
                <div
                  key={brand.domain}
                  className="border border-hairline p-6 transition-colors hover:border-ink"
                >
                  <Stack gap="2">
                    <h3 className="text-h3 font-medium">{brand.name}</h3>
                    <p className="font-mono text-micro uppercase tracking-[0.08em] text-ink/60">
                      {brand.domain}
                    </p>
                    <p className="text-body text-ink/80">{brand.sector}</p>
                  </Stack>
                </div>
              ))}
            </div>
          </Stack>
        </Container>
      </Section>

      <FinalCta finalCta={home.frontmatter.finalCta} locale={locale as Locale} />
    </>
  )
}

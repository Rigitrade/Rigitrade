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
import { LeaderDots } from "@/components/typography/leader-dots"
import { loadPageContent } from "@/lib/content/load"
import { homeSchema, aboutPageSchema } from "@/lib/content/schema"
import type { Locale } from "@/i18n/routing"

export const metadata: Metadata = {
  title: "About",
  description:
    "Rigitrade AG — Swiss-managed manufacturer of high-performance seamless pipes and superalloy components. British metallurgical heritage, AOD refining, UK + Egypt manufacturing.",
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
            <SectionLabel number="01" label="HERITAGE" />
            <DisplayHeading as="h2" size="display-m" className="max-w-[20ch]">
              {frontmatter.heritage.title}
            </DisplayHeading>
            <p className="max-w-[65ch] text-body-l text-ink/80">
              {frontmatter.heritage.body}
            </p>
          </Stack>
        </Container>
      </Section>

      <Section surface="stone">
        <Container>
          <Stack gap="6">
            <SectionLabel number="02" label="FACILITIES" />
            <Hairline />
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {frontmatter.facilities.map((f) => (
                <article
                  key={f.location}
                  className="border border-hairline bg-paper p-6"
                >
                  <Stack gap="2">
                    <span className="font-mono text-micro uppercase tracking-[0.08em] text-ink/60">
                      {f.role}
                    </span>
                    <h3 className="text-h3 font-medium">{f.location}</h3>
                    {f.detail && (
                      <p className="text-body text-ink/80">{f.detail}</p>
                    )}
                  </Stack>
                </article>
              ))}
            </div>
          </Stack>
        </Container>
      </Section>

      <Section>
        <Container>
          <Stack gap="6">
            <SectionLabel number="03" label="TIMELINE" />
            <Hairline />
            <div className="max-w-2xl space-y-3">
              {frontmatter.timeline.map((t) => (
                <LeaderDots key={t.milestone} left={t.milestone} right={t.date} />
              ))}
            </div>
          </Stack>
        </Container>
      </Section>

      <FinalCta finalCta={home.frontmatter.finalCta} locale={locale as Locale} />
    </>
  )
}

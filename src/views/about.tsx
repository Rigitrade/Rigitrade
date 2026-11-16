import { getDictionary, href, type Locale } from "@/content"
import { Overline } from "@/components/ui/overline"
import { ArrowLink } from "@/components/ui/arrow-link"
import { PageHero } from "@/components/sections/page-hero"
import { PhotoBand } from "@/components/sections/photo-band"
import { ContactBand } from "@/components/sections/contact-band"
import { Reveal } from "@/components/sections/reveal"

export function AboutView({ locale }: { locale: Locale }) {
  const t = getDictionary(locale)
  const a = t.about
  // Facts are shown only once Rigitrade has confirmed a value (copy doc: "delete any you can't confirm").
  const facts = a.facts.filter((f) => f.value)

  return (
    <>
      <PageHero slot="page-about" locale={locale} title={a.headline} />

      <section className="section-y">
        <div className="container-site grid gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <p className="font-display text-[1.5rem] leading-[1.45] font-semibold text-navy lg:text-[1.75rem]">
              {a.paragraphs[0]}
            </p>
          </Reveal>
          <Reveal className="lg:col-span-4 lg:col-start-9 lg:pt-2" delay={120}>
            <p className="text-ink-muted">{a.paragraphs[1]}</p>
          </Reveal>
        </div>
      </section>

      {facts.length > 0 && (
        <section aria-labelledby="facts-heading" className="bg-ice">
          <div className="container-site py-14">
            <h2 id="facts-heading" className="sr-only">
              {a.factsHeading}
            </h2>
            <dl className="grid gap-y-8 sm:grid-cols-2 lg:grid-cols-5 lg:divide-x lg:divide-line">
              {facts.map((f) => (
                <div key={f.label} className="flex flex-col-reverse lg:px-6 lg:first:pl-0">
                  <dt className="mt-2 text-sm leading-[22px] text-ink-muted">{f.label}</dt>
                  <dd className="font-display text-3xl font-extrabold text-navy">{f.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      )}

      <section aria-labelledby="philosophy-heading" className="section-y bg-navy text-white">
        <div className="container-site">
          <Overline tone="light" as="h2">
            <span id="philosophy-heading">{a.philosophyLabel}</span>
          </Overline>
          <div className="mt-10 grid gap-6 md:grid-cols-3 md:gap-0 md:divide-x md:divide-white/15">
            {a.philosophyWords.map((word, i) => (
              <Reveal key={word} delay={i * 120} className="md:px-6 md:first:pl-0 lg:px-8 xl:px-10">
                <p className="font-display text-[2.5rem] leading-none font-extrabold md:text-[1.875rem] lg:text-[2.5rem] xl:text-[3.25rem]">{word}</p>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-12 max-w-2xl border-t border-white/15 pt-8" delay={200}>
            <p className="text-lead text-silver">{a.philosophyText}</p>
          </Reveal>
        </div>
      </section>

      <PhotoBand slot="band-group" locale={locale}>
        <Reveal>
          <p className="text-h1 mx-auto max-w-4xl">{t.home.closingLine}</p>
          <div className="mt-10 flex justify-center">
            <ArrowLink href={href("brands", locale)} tone="light">
              {t.home.primaryCta}
            </ArrowLink>
          </div>
        </Reveal>
      </PhotoBand>

      <ContactBand locale={locale} />
    </>
  )
}

import { getDictionary, type Locale } from "@/content"
import { PageHero } from "@/components/sections/page-hero"
import { ContactForm } from "@/components/sections/contact-form"
import { Reveal } from "@/components/sections/reveal"

const MAPS_URL = "https://www.google.com/maps/search/?api=1&query=Schaffhauserstrasse+550,+8052+Z%C3%BCrich"

export function ContactView({ locale }: { locale: Locale }) {
  const t = getDictionary(locale)
  const c = t.contact

  return (
    <>
      <PageHero slot="page-contact" locale={locale} title={c.headline} />

      <section className="section-y">
        <div className="container-site grid gap-14 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-5">
            <p className="font-display text-[1.375rem] leading-[1.5] font-semibold text-navy lg:text-[1.5rem]">
              {c.intro}
            </p>

            <address className="mt-10 border-t border-line pt-8 not-italic">
              <p className="font-display text-lg font-bold text-navy">{c.company}</p>
              <p className="text-[15px] leading-6 text-ink-muted">{c.descriptor}</p>
              <a href={MAPS_URL} className="mt-4 block text-[15px] leading-6 text-navy hover:underline" title={t.ui.openInMaps}>
                {c.street}
                <br />
                {c.city}
              </a>
              <p className="mt-4 text-[15px] leading-6">
                <a href={c.phoneHref} className="inline-block py-1 font-semibold text-navy hover:underline">
                  T. {c.phone}
                </a>
                <br />
                <a href={`mailto:${c.email}`} className="inline-block py-1 font-semibold text-navy hover:underline">
                  {c.email}
                </a>
              </p>
              <p className="mt-4 text-[15px] leading-6 text-ink-muted">{c.hours}</p>
              <p className="mt-4 text-[15px] leading-6 text-ink-muted">
                UID:{" "}
                <a
                  href="https://www.zefix.ch/en/search/entity/list/firm/1690688"
                  className="text-navy hover:underline"
                  title={t.ui.registryEntry}
                >
                  {c.uid}
                </a>
              </p>
            </address>
          </Reveal>

          <Reveal className="lg:col-span-6 lg:col-start-7" delay={120}>
            <ContactForm locale={locale} />
          </Reveal>
        </div>
      </section>
    </>
  )
}

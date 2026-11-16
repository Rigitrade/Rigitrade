import { BRAND_URLS, getDictionary, type Locale } from "@/content"
import type { PhotoSlot } from "@/content/photos"
import { Overline } from "@/components/ui/overline"
import { ArrowLink } from "@/components/ui/arrow-link"
import { PageHero } from "@/components/sections/page-hero"
import { ImagePanels } from "@/components/sections/image-panels"
import { SplitFeature } from "@/components/sections/split-feature"
import { ContactBand } from "@/components/sections/contact-band"
import { Reveal } from "@/components/sections/reveal"

export function BrandsView({ locale }: { locale: Locale }) {
  const t = getDictionary(locale)
  const b = t.brands

  return (
    <>
      <PageHero slot="page-brands" locale={locale} title={b.headline} />

      {/* zuriauto */}
      <section id="zuriauto" aria-labelledby="zuriauto-heading" className="scroll-mt-24">
        <div className="container-site section-y grid gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-6">
            <Overline>{b.zuriauto.descriptor}</Overline>
            <h2 id="zuriauto-heading" className="text-h1 mt-5">
              zuriauto
            </h2>
          </Reveal>
          <Reveal className="flex flex-col justify-end gap-6 lg:col-span-5 lg:col-start-8" delay={120}>
            <p className="text-lead text-ink-muted">{b.zuriauto.intro}</p>
            <ArrowLink href={BRAND_URLS.zuriauto} external>
              www.zuriauto.ch
            </ArrowLink>
          </Reveal>
        </div>
        <ImagePanels
          locale={locale}
          panels={b.zuriauto.divisions.map((d) => ({
            slot: d.photo as PhotoSlot,
            title: d.name,
            text: d.offer,
            link: { href: `https://www.${d.path}`, text: d.path },
          }))}
        />
      </section>

      {/* Carseek.ch */}
      <div id="carseek" className="scroll-mt-24">
        <SplitFeature slot="brand-carseek" locale={locale} tone="ice">
          <Overline>{b.carseek.descriptor}</Overline>
          <h2 className="text-h2 mt-5">Carseek.ch</h2>
          <p className="mt-6 text-ink-muted">{b.carseek.text}</p>
          <p className="mt-6 flex items-center gap-3 font-semibold text-navy">
            <span aria-hidden className="red-square !size-2.5" />
            {b.carseek.launch}
          </p>
          <ArrowLink href={BRAND_URLS.carseek} external className="mt-8">
            www.carseek.ch
          </ArrowLink>
        </SplitFeature>
      </div>

      {/* TrackMyCar24 */}
      <div id="trackmycar24" className="scroll-mt-24">
        <SplitFeature slot="brand-trackmycar24" locale={locale} reverse>
          <Overline>{b.trackmycar24.descriptor}</Overline>
          <h2 className="text-h2 mt-5">TrackMyCar24</h2>
          <p className="mt-6 text-ink-muted">{b.trackmycar24.text}</p>
          <ul className="mt-6 space-y-3">
            {b.trackmycar24.features.map((f) => (
              <li key={f} className="flex gap-3 text-[15px] leading-6 text-navy">
                <span aria-hidden className="red-square mt-[7px] !size-2" />
                {f}
              </li>
            ))}
          </ul>
          <ArrowLink href={BRAND_URLS.trackmycar24} external className="mt-8">
            www.trackmycar24.com
          </ArrowLink>
        </SplitFeature>
      </div>

      <ContactBand locale={locale} />
    </>
  )
}

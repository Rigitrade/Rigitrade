import { BRAND_URLS, getDictionary, href, type Locale } from "@/content"
import { HERO_CAPTIONS, photoAlt, photoPosition } from "@/content/photos"
import { organizationJsonLd } from "@/lib/seo"
import { ButtonLink } from "@/components/ui/button-link"
import { ArrowLink } from "@/components/ui/arrow-link"
import { Overline } from "@/components/ui/overline"
import { HeroSlideshow } from "@/components/sections/hero-slideshow"
import { heroTitle } from "@/components/sections/page-hero"
import { ImagePanels } from "@/components/sections/image-panels"
import { PhotoBand } from "@/components/sections/photo-band"
import { SplitFeature } from "@/components/sections/split-feature"
import { ContactBand } from "@/components/sections/contact-band"
import { Reveal } from "@/components/sections/reveal"

export function HomeView({ locale }: { locale: Locale }) {
  const t = getDictionary(locale)
  const h = t.home
  const visit = t.ui.visitWebsite

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd()) }}
      />

      <HeroSlideshow
        slides={(["hero-1", "hero-2", "hero-3"] as const).map((slot) => ({
          src: `/img/${slot}`,
          alt: photoAlt(slot, locale),
          caption: HERO_CAPTIONS[slot][locale],
          position: photoPosition(slot),
        }))}
        labels={{ pause: t.ui.pauseSlideshow, play: t.ui.playSlideshow, show: t.ui.showSlide }}
      >
        <div className="max-w-5xl">
          <Overline tone="light" className="motion-safe:animate-rise">
            {t.positioning.descriptor}
          </Overline>
          <h1 className="text-display mt-6 motion-safe:animate-rise">{heroTitle(h.headline)}</h1>
          <p className="text-lead mt-7 max-w-2xl text-silver motion-safe:animate-rise">{h.intro}</p>
          <div className="mt-10 flex flex-wrap gap-4 motion-safe:animate-rise">
            <ButtonLink href={href("brands", locale)}>{h.primaryCta}</ButtonLink>
            <ButtonLink href={href("contact", locale)} variant="outline-light">
              {h.secondaryCta}
            </ButtonLink>
          </div>
        </div>
      </HeroSlideshow>

      <section aria-labelledby="brands-heading">
        <h2 id="brands-heading" className="sr-only">
          {h.brandsHeading}
        </h2>
        <ImagePanels
          locale={locale}
          panels={[
            {
              slot: "brand-zuriauto",
              label: h.stripLabels.zuriauto,
              title: "zuriauto",
              text: h.strip.zuriauto,
              link: { href: BRAND_URLS.zuriauto, text: `${visit} zuriauto.ch` },
            },
            {
              slot: "brand-carseek",
              label: h.stripLabels.carseek,
              title: "Carseek.ch",
              text: h.strip.carseek,
              link: { href: BRAND_URLS.carseek, text: `${visit} carseek.ch` },
            },
            {
              slot: "brand-trackmycar24",
              label: h.stripLabels.trackmycar24,
              title: "TrackMyCar24",
              text: h.strip.trackmycar24,
              link: { href: BRAND_URLS.trackmycar24, text: `${visit} trackmycar24.com` },
            },
          ]}
        />
      </section>

      <PhotoBand slot="band-group" locale={locale}>
        <Reveal>
          <p className="text-h1 mx-auto max-w-4xl">{h.closingLine}</p>
        </Reveal>
      </PhotoBand>

      <SplitFeature slot="about-zurich" locale={locale}>
        <Overline>{t.nav.about}</Overline>
        <h2 className="text-h2 mt-5">{t.about.headline}</h2>
        <p className="mt-6 text-ink-muted">{t.about.paragraphs[0]}</p>
        <ArrowLink href={href("about", locale)} className="mt-8">
          {h.aboutTeaserLink}
        </ArrowLink>
      </SplitFeature>

      <SplitFeature slot="page-strategy" locale={locale} reverse tone="ice">
        <Overline>{t.nav.strategy}</Overline>
        <h2 className="text-h2 mt-5">{t.strategy.headline}</h2>
        <p className="mt-6 text-ink-muted">{t.strategy.intro}</p>
        <ArrowLink href={href("strategy", locale)} className="mt-8">
          {h.strategyTeaserLink}
        </ArrowLink>
      </SplitFeature>

      <ContactBand locale={locale} />
    </>
  )
}

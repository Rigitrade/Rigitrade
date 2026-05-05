import { Container } from "@/components/primitives/container"
import { Section } from "@/components/primitives/section"
import { Stack } from "@/components/primitives/stack"
import { Cluster } from "@/components/primitives/cluster"
import { Hairline } from "@/components/primitives/hairline"
import { ResponsiveImage } from "@/components/primitives/responsive-image"
import { LinkButton } from "@/components/ui/link-button"
import { DisplayHeading } from "@/components/typography/display-heading"
import { SectionLabel } from "@/components/typography/section-label"
import { VerticalRail } from "@/components/typography/vertical-rail"
import { RotatingSeal } from "@/components/interactive/rotating-seal"
import type { HomeContent } from "@/lib/content/schema"

type HeroProps = {
  hero: HomeContent["hero"]
  locale: "en" | "de"
}

export function Hero({ hero, locale }: HeroProps) {
  return (
    <Section className="relative min-h-[85vh] lg:min-h-screen lg:py-section-loose">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Stack gap="6">
              <SectionLabel number={hero.number} label={hero.label} />
              <DisplayHeading as="h1" size="display-xl" mode="mount">
                {hero.headline}
              </DisplayHeading>
              <p className="font-mono text-micro uppercase tracking-[0.08em] text-ink/70">
                {hero.subhead}
              </p>
              <p className="max-w-[60ch] text-body-l text-ink/80">{hero.body}</p>

              {hero.banner && (
                <div className="border-l-2 border-forge bg-forge/5 px-4 py-3 max-w-[60ch]">
                  <p className="text-body text-ink">
                    <span aria-hidden="true" className="mr-2 font-mono text-forge">
                      ▸
                    </span>
                    {hero.banner}
                  </p>
                </div>
              )}

              <Cluster gap="3">
                <LinkButton
                  href={`/${locale}${hero.primaryCta.href}`}
                  variant="primary"
                  size="lg"
                >
                  {hero.primaryCta.label}
                </LinkButton>
                <LinkButton
                  href={`/${locale}${hero.secondaryCta.href}`}
                  variant="secondary"
                  size="lg"
                >
                  {hero.secondaryCta.label}
                </LinkButton>
              </Cluster>
            </Stack>
          </div>

          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden border border-hairline bg-stone">
              <ResponsiveImage
                src={hero.image.src}
                alt={hero.image.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                priority
              />
            </div>
          </div>
        </div>
      </Container>

      <div className="absolute bottom-8 left-8 hidden lg:block">
        <RotatingSeal
          text="· SWISS-MANAGED · MILL-PRODUCED · GLOBALLY DELIVERED "
          size={160}
        />
      </div>

      <div className="absolute left-4 top-1/2 hidden -translate-y-1/2 xl:block">
        <VerticalRail>API · ASTM · ASME · NACE</VerticalRail>
      </div>

      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 lg:block">
        <Hairline orientation="vertical" className="h-8 bg-ink/30" />
      </div>
    </Section>
  )
}

import Image from "next/image"
import { Container } from "@/components/primitives/container"
import { Stack } from "@/components/primitives/stack"
import { Cluster } from "@/components/primitives/cluster"
import { LinkButton } from "@/components/ui/link-button"
import { DisplayHeading } from "@/components/typography/display-heading"
import { VerticalRail } from "@/components/typography/vertical-rail"
import type { HomeContent } from "@/lib/content/schema"

type HeroProps = {
  hero: HomeContent["hero"]
  locale: "en" | "de"
}

export function Hero({ hero, locale }: HeroProps) {
  return (
    <section className="relative isolate flex min-h-[100vh] items-end overflow-hidden bg-ink text-paper">
      <Image
        src={hero.image.src}
        alt={hero.image.alt}
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 -z-10 object-cover"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-tr from-ink/90 via-ink/55 to-ink/30"
      />

      <div className="absolute left-6 top-24 sm:left-8 lg:left-16">
        <span className="font-mono text-micro uppercase tracking-[0.16em] text-paper/70">
          {hero.number} — {hero.label}
        </span>
      </div>

      <Container className="pb-section-mobile pt-32 lg:pb-section">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-9">
            <Stack gap="6">
              <DisplayHeading
                as="h1"
                size="display-xl"
                mode="mount"
                className="text-paper"
              >
                {hero.headline}
              </DisplayHeading>
              <p className="font-mono text-micro uppercase tracking-[0.16em] text-paper/70">
                {hero.subhead}
              </p>
              <p className="max-w-[60ch] text-body-l text-paper/80">{hero.body}</p>

              {hero.banner && (
                <div className="max-w-[60ch] border-l-2 border-forge bg-paper/5 px-4 py-3 backdrop-blur-sm">
                  <p className="text-body text-paper">
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
                  variant="inverted"
                  size="lg"
                >
                  {hero.secondaryCta.label}
                </LinkButton>
              </Cluster>
            </Stack>
          </div>
        </div>
      </Container>

      <div className="absolute left-4 top-1/2 hidden -translate-y-1/2 xl:block">
        <VerticalRail className="!text-paper/50">
          API · ASTM · ASME · NACE
        </VerticalRail>
      </div>
    </section>
  )
}

import { Container } from "@/components/primitives/container"
import { Section } from "@/components/primitives/section"
import { Stack } from "@/components/primitives/stack"
import { Hairline } from "@/components/primitives/hairline"
import { SectionLabel } from "@/components/typography/section-label"
import { DisplayHeading } from "@/components/typography/display-heading"
import { DataChip } from "@/components/typography/data-chip"
import type { HomeContent } from "@/lib/content/schema"

type ManufacturingTechnologyProps = {
  content: HomeContent["manufacturing"]
}

export function ManufacturingTechnology({ content }: ManufacturingTechnologyProps) {
  return (
    <Section surface="ink" className="text-paper">
      <Container>
        <div className="mb-12">
          <p className="font-mono text-micro uppercase tracking-[0.08em] text-paper/50">
            {content.number} — {content.label}
          </p>
          <DisplayHeading as="h2" size="display-m" className="mt-6 max-w-[18ch] text-paper">
            From melt to final product, fully controlled.
          </DisplayHeading>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <article>
            <Stack gap="4">
              <DataChip tone="accent" className="border-forge/60 text-forge">
                AOD
              </DataChip>
              <h3 className="text-h2 font-medium text-paper">{content.aod.title}</h3>
              <ul className="space-y-2 text-body-l text-paper/80">
                {content.aod.bullets.map((b) => (
                  <li key={b} className="flex gap-3">
                    <span className="mt-2 h-px w-4 shrink-0 bg-paper/40" aria-hidden="true" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <Hairline className="bg-paper/20" />
              <p className="text-body text-forge">{content.aod.benefit}</p>
            </Stack>
          </article>

          <article>
            <Stack gap="4">
              <DataChip tone="accent" className="border-forge/60 text-forge">
                ROUTE
              </DataChip>
              <h3 className="text-h2 font-medium text-paper">{content.route.title}</h3>
              <p className="font-mono text-body tabular-nums text-paper">
                {content.route.flow}
              </p>
              <ul className="space-y-2 text-body-l text-paper/80">
                {content.route.bullets.map((b) => (
                  <li key={b} className="flex gap-3">
                    <span className="mt-2 h-px w-4 shrink-0 bg-paper/40" aria-hidden="true" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </Stack>
          </article>
        </div>
      </Container>
    </Section>
  )
}

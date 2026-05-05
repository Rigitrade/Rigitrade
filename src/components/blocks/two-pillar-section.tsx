import { Container } from "@/components/primitives/container"
import { Section } from "@/components/primitives/section"
import { Stack } from "@/components/primitives/stack"
import { Hairline } from "@/components/primitives/hairline"
import { SectionLabel } from "@/components/typography/section-label"
import type { HomeContent } from "@/lib/content/schema"

type TwoPillarSectionProps = {
  pillars: HomeContent["pillars"]
}

export function TwoPillarSection({ pillars }: TwoPillarSectionProps) {
  return (
    <Section>
      <Container>
        <div className="mb-12">
          <SectionLabel
            number={pillars.number}
            label="WHY INDUSTRY LEADERS WORK WITH US"
          />
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_auto_1fr] lg:gap-16">
          <div>
            <Stack gap="4">
              <h3 className="text-h2 font-medium">{pillars.left.title}</h3>
              <ul className="space-y-3">
                {pillars.left.points.map((point) => (
                  <li key={point} className="text-body-l text-ink/80">
                    {point}
                  </li>
                ))}
              </ul>
            </Stack>
          </div>

          <div className="hidden lg:block">
            <Hairline orientation="vertical" />
          </div>

          <div>
            <Stack gap="4">
              <h3 className="text-h2 font-medium">{pillars.right.title}</h3>
              <ul className="space-y-3">
                {pillars.right.points.map((point) => (
                  <li key={point} className="text-body-l text-ink/80">
                    {point}
                  </li>
                ))}
              </ul>
            </Stack>
          </div>
        </div>
      </Container>
    </Section>
  )
}

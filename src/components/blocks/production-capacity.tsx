import { Container } from "@/components/primitives/container"
import { Section } from "@/components/primitives/section"
import { Stack } from "@/components/primitives/stack"
import { SectionLabel } from "@/components/typography/section-label"
import type { HomeContent } from "@/lib/content/schema"

type ProductionCapacityProps = {
  content: HomeContent["productionCapacity"]
}

export function ProductionCapacity({ content }: ProductionCapacityProps) {
  return (
    <Section>
      <Container>
        <div className="mb-12">
          <SectionLabel number={content.number} label={content.label} />
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {content.blocks.map((block, i) => (
            <article
              key={block.title}
              className="border-l border-hairline pl-6"
            >
              <Stack gap="3">
                <span className="font-mono text-micro uppercase tracking-[0.08em] text-ink/50">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-h3 font-medium">{block.title}</h3>
                <ul className="space-y-2 text-body text-ink/80">
                  {block.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </Stack>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  )
}

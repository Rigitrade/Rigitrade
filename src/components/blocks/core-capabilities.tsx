import { Container } from "@/components/primitives/container"
import { Section } from "@/components/primitives/section"
import { Stack } from "@/components/primitives/stack"
import { Hairline } from "@/components/primitives/hairline"
import { ResponsiveImage } from "@/components/primitives/responsive-image"
import { SectionLabel } from "@/components/typography/section-label"
import { DataChip } from "@/components/typography/data-chip"
import type { HomeContent } from "@/lib/content/schema"

type CoreCapabilitiesProps = {
  content: HomeContent["capabilities"]
}

export function CoreCapabilities({ content }: CoreCapabilitiesProps) {
  return (
    <Section surface="stone">
      <Container>
        <div className="mb-12">
          <SectionLabel number={content.number} label={content.label} />
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {content.items.map((item, i) => (
            <article
              key={item.title}
              className="flex flex-col border border-hairline bg-paper"
            >
              {item.image && (
                <div className="relative aspect-[5/4] overflow-hidden border-b border-hairline bg-stone">
                  <ResponsiveImage
                    src={item.image.src}
                    alt={item.image.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              )}
              <div className="flex flex-1 flex-col p-6">
                <Stack gap="3" className="flex-1">
                  <span className="font-mono text-micro uppercase tracking-[0.08em] text-ink/50">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-h3 font-medium">{item.title}</h3>
                  <DataChip>{item.description}</DataChip>
                  {item.detail && (
                    <p className="text-body text-ink/80">{item.detail}</p>
                  )}
                </Stack>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12">
          <Hairline />
          <p className="mt-6 max-w-3xl text-body text-ink/70">
            {content.standards}
          </p>
        </div>
      </Container>
    </Section>
  )
}

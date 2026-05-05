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
    <Section surface="paper">
      <Container>
        <div className="mb-12 max-w-2xl">
          <SectionLabel number={content.number} label={content.label} />
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {content.items.map((item, i) => (
            <article
              key={item.title}
              className="group relative isolate overflow-hidden bg-ink text-paper"
            >
              {item.image && (
                <div className="relative aspect-[4/5]">
                  <ResponsiveImage
                    src={item.image.src}
                    alt={item.image.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/10 transition-opacity duration-300"
                  />
                </div>
              )}
              <div className="absolute inset-x-0 bottom-0 p-6">
                <Stack gap="2">
                  <span className="font-mono text-micro uppercase tracking-[0.16em] text-paper/60">
                    {String(i + 1).padStart(2, "0")} — Capability
                  </span>
                  <h3 className="text-h2 font-medium text-paper">
                    {item.title}
                  </h3>
                  <DataChip
                    tone="accent"
                    className="border-forge/60 bg-paper/0 text-forge"
                  >
                    {item.description}
                  </DataChip>
                  {item.detail && (
                    <p className="mt-2 max-h-0 overflow-hidden text-body text-paper/80 opacity-0 transition-all duration-500 group-hover:max-h-32 group-hover:opacity-100">
                      {item.detail}
                    </p>
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

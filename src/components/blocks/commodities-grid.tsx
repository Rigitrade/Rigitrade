import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Container } from "@/components/primitives/container"
import { Section } from "@/components/primitives/section"
import { Stack } from "@/components/primitives/stack"
import { SectionLabel } from "@/components/typography/section-label"
import type { HomeContent } from "@/lib/content/schema"

type CommoditiesGridProps = {
  commodities: HomeContent["commodities"]
  locale: "en" | "de"
}

export function CommoditiesGrid({ commodities, locale }: CommoditiesGridProps) {
  return (
    <Section surface="stone">
      <Container>
        <div className="mb-10 max-w-2xl">
          <SectionLabel number={commodities.number} label="GLOBAL COMMODITIES" />
          <p className="mt-4 text-body-l text-ink/80">{commodities.intro}</p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {commodities.groups.map((group) => (
            <div key={group.title}>
              <Stack gap="2">
                <h3 className="font-mono text-micro uppercase tracking-[0.08em] text-ink/70">
                  {group.title}
                </h3>
                <ul className="space-y-1">
                  {group.items.map((item) => (
                    <li key={item} className="text-body text-ink/80">
                      {item}
                    </li>
                  ))}
                </ul>
              </Stack>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <Link
            href={`/${locale}${commodities.href}`}
            className="inline-flex items-center gap-2 font-mono text-micro uppercase tracking-[0.08em] text-ink hover:text-forge"
          >
            Explore Commodities Trade
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </Container>
    </Section>
  )
}

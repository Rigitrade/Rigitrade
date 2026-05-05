import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Container } from "@/components/primitives/container"
import { Section } from "@/components/primitives/section"
import { Stack } from "@/components/primitives/stack"
import { ResponsiveImage } from "@/components/primitives/responsive-image"
import { SectionLabel } from "@/components/typography/section-label"
import { DataChip } from "@/components/typography/data-chip"
import type { HomeContent } from "@/lib/content/schema"

type SolutionCarouselProps = {
  solutions: HomeContent["solutions"]
  locale: "en" | "de"
}

export function SolutionCarousel({ solutions, locale }: SolutionCarouselProps) {
  return (
    <Section>
      <Container>
        <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionLabel number={solutions.number} label="SOLUTIONS" />
          <p className="max-w-[480px] text-body-l text-ink/80">{solutions.intro}</p>
        </div>
      </Container>

      <div
        className="overflow-x-auto pb-4 [scrollbar-width:thin] [scroll-snap-type:x_mandatory]"
        role="region"
        aria-label="Solutions carousel"
      >
        <div className="flex gap-6 px-6 sm:px-8 lg:px-16">
          {solutions.items.map((item) => (
            <article
              key={item.title}
              className="w-[80vw] max-w-[420px] shrink-0 border border-hairline bg-paper [scroll-snap-align:start] sm:w-[420px]"
            >
              <div className="relative aspect-[5/4] border-b border-hairline overflow-hidden bg-stone">
                <ResponsiveImage
                  src={item.image.src}
                  alt={item.image.alt}
                  fill
                  sizes="(max-width: 640px) 80vw, 420px"
                />
              </div>
              <div className="p-6">
                <Stack gap="3">
                  <div className="flex justify-end">
                    <DataChip>{item.spec}</DataChip>
                  </div>
                  <h3 className="text-h3 font-medium">{item.title}</h3>
                  <p className="line-clamp-2 text-body text-ink/80">
                    {item.description}
                  </p>
                  <Link
                    href={`/${locale}${item.href}`}
                    className="mt-2 inline-flex items-center gap-2 text-body text-ink hover:text-forge"
                  >
                    View
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </Stack>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Section>
  )
}

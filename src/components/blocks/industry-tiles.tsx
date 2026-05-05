import Image from "next/image"
import { Container } from "@/components/primitives/container"
import { Section } from "@/components/primitives/section"
import { SectionLabel } from "@/components/typography/section-label"
import type { HomeContent } from "@/lib/content/schema"

type IndustryTilesProps = {
  content: HomeContent["applications"]
}

const INDUSTRY_IMAGE_MAP: Record<string, { src: string; alt: string; tagline: string }> = {
  "Oil & Gas": {
    src: "/img/industries/oil-gas.jpg",
    alt: "Offshore oil and gas platform infrastructure",
    tagline: "Subsea, refining, transport",
  },
  Refineries: {
    src: "/img/industries/refineries.jpg",
    alt: "Refinery process infrastructure with pipework",
    tagline: "Process piping, fittings, valves",
  },
  Petrochemicals: {
    src: "/img/industries/petrochemicals.jpg",
    alt: "Petrochemical plant pipework",
    tagline: "Aggressive media, high temperature",
  },
  Fertilizer: {
    src: "/img/industries/fertilizer.jpg",
    alt: "Fertilizer production facility",
    tagline: "Urea, phosphate, ammonia processes",
  },
  "Power Generation": {
    src: "/img/industries/power.jpg",
    alt: "Power generation turbine and pipework",
    tagline: "Steam, gas turbine, nuclear",
  },
  "Marine & Offshore": {
    src: "/img/industries/marine.jpg",
    alt: "Marine and offshore platform",
    tagline: "Seawater, subsea, structural",
  },
}

export function IndustryTiles({ content }: IndustryTilesProps) {
  return (
    <Section surface="paper" density="default">
      <Container>
        <div className="mb-12 grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionLabel number={content.number} label={content.label} />
          </div>
          <div className="lg:col-span-7">
            <p className="text-body-l text-ink/80">{content.intro}</p>
          </div>
        </div>
      </Container>

      <Container>
        <div className="grid grid-cols-1 gap-px bg-hairline md:grid-cols-2 lg:grid-cols-3">
          {content.industries.map((industry) => {
            const meta = INDUSTRY_IMAGE_MAP[industry] ?? {
              src: "/img/industries/oil-gas.jpg",
              alt: industry,
              tagline: "",
            }
            return (
              <article
                key={industry}
                className="group relative isolate aspect-square overflow-hidden bg-ink"
              >
                <Image
                  src={meta.src}
                  alt={meta.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/40 to-ink/0 transition-opacity duration-300 group-hover:from-ink/85"
                />
                <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-8">
                  <span className="mb-2 font-mono text-micro uppercase tracking-[0.16em] text-forge">
                    Application
                  </span>
                  <h3 className="text-h2 font-medium text-paper">{industry}</h3>
                  {meta.tagline && (
                    <p className="mt-2 max-h-0 overflow-hidden text-body text-paper/80 opacity-0 transition-all duration-500 group-hover:max-h-20 group-hover:opacity-100">
                      {meta.tagline}
                    </p>
                  )}
                </div>
              </article>
            )
          })}
        </div>
      </Container>
    </Section>
  )
}

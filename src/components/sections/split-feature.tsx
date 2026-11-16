import { Photo } from "@/components/ui/photo"
import type { PhotoSlot } from "@/content/photos"
import type { Locale } from "@/content"
import { cn } from "@/lib/cn"
import { Reveal } from "./reveal"

type SplitFeatureProps = {
  slot: PhotoSlot
  locale: Locale
  reverse?: boolean
  tone?: "white" | "ice"
  children: React.ReactNode
}

/**
 * Photo on one side bleeding to the page edge, text card on the other,
 * overlapping the photo on large screens.
 */
export function SplitFeature({ slot, locale, reverse, tone = "white", children }: SplitFeatureProps) {
  return (
    <section className={cn(tone === "ice" ? "bg-ice" : "bg-white")}>
      <div className={cn("grid items-center lg:grid-cols-12", reverse && "lg:[&>*:first-child]:order-2")}>
        <div className={cn("relative aspect-[4/3] lg:col-span-7 lg:aspect-auto lg:h-[640px]")}>
          <Photo slot={slot} locale={locale} sizes="(min-width: 1024px) 58vw, 100vw" />
        </div>
        <div
          className={cn(
            "relative z-10 px-5 py-14 md:px-10 lg:col-span-5 lg:py-0",
            reverse ? "lg:-mr-24 lg:pl-[max(2.5rem,calc((100vw-1200px)/2))]" : "lg:-ml-24 lg:pr-[max(2.5rem,calc((100vw-1200px)/2))]",
          )}
        >
          <Reveal>
            <div
              className={cn(
                "lg:border lg:border-line lg:p-12 xl:p-14",
                tone === "ice" ? "lg:bg-white" : "lg:bg-ice",
              )}
            >
              {children}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

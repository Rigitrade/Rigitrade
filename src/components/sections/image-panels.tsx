import { ArrowRight } from "lucide-react"
import { Photo } from "@/components/ui/photo"
import type { PhotoSlot } from "@/content/photos"
import type { Locale } from "@/content"
import { cn } from "@/lib/cn"

export type Panel = {
  slot: PhotoSlot
  label?: string
  title: string
  text: string
  link: { href: string; text: string }
}

type ImagePanelsProps = {
  panels: Panel[]
  locale: Locale
  headingLevel?: "h2" | "h3"
}

/**
 * Tall full-bleed photo panels side by side, title bottom-left.
 * Only the title and the link are interactive (no whole-card targets, no zoom).
 */
export function ImagePanels({ panels, locale, headingLevel: H = "h3" }: ImagePanelsProps) {
  return (
    <div
      className={cn(
        "grid bg-navy",
        panels.length === 4 ? "sm:grid-cols-2 xl:grid-cols-4" : "lg:grid-cols-3",
      )}
    >
      {panels.map((panel, i) => (
        <article
          key={panel.title}
          className={cn(
            "relative isolate flex min-h-[460px] flex-col justify-end overflow-hidden text-white md:min-h-[520px] lg:min-h-[82svh]",
            i > 0 && (panels.length === 4
              ? "border-t border-white/15 sm:even:border-l xl:border-t-0 xl:border-l sm:[&:nth-child(2)]:border-t-0"
              : "border-t border-white/15 lg:border-t-0 lg:border-l"),
          )}
        >
          <div className="absolute inset-0 -z-10">
            <Photo
              slot={panel.slot}
              locale={locale}
              sizes={panels.length === 4 ? "(min-width: 1280px) 25vw, (min-width: 640px) 50vw, 100vw" : "(min-width: 1024px) 33vw, 100vw"}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/95 via-navy/35 to-transparent" />
          </div>
          <div className="p-7 lg:p-10">
            {panel.label && <p className="eyebrow mb-3 text-white/75">{panel.label}</p>}
            <H className="font-display text-[1.75rem] leading-tight font-extrabold lg:text-[2.125rem]">
              <a href={panel.link.href} className="hover:underline hover:decoration-2 hover:underline-offset-4">
                {panel.title}
              </a>
            </H>
            <p className="mt-3 max-w-sm text-[15px] leading-6 text-white/85 lg:min-h-[4.5rem]">{panel.text}</p>
            <a
              href={panel.link.href}
              className="group mt-4 -mb-3 inline-flex items-center gap-2 py-3 text-[15px] leading-5 font-semibold underline-offset-4 hover:underline"
            >
              {panel.link.text}
              <ArrowRight
                aria-hidden
                strokeWidth={1.75}
                className="size-4 text-red transition-transform duration-200 group-hover:translate-x-1"
              />
            </a>
          </div>
        </article>
      ))}
    </div>
  )
}

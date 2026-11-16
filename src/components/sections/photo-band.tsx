import { Photo } from "@/components/ui/photo"
import type { PhotoSlot } from "@/content/photos"
import type { Locale } from "@/content"
import { ParallaxPhoto } from "./parallax-photo"

type PhotoBandProps = {
  slot: PhotoSlot
  locale: Locale
  children: React.ReactNode
}

/** Full-width photo band with a slow parallax and a navy overlay behind white type. */
export function PhotoBand({ slot, locale, children }: PhotoBandProps) {
  return (
    <section className="relative isolate overflow-hidden bg-navy text-white">
      <div aria-hidden className="absolute inset-0 -z-10">
        <ParallaxPhoto>
          <Photo slot={slot} locale={locale} decorative />
        </ParallaxPhoto>
        <div className="absolute inset-0 bg-navy/65" />
      </div>
      <div className="container-site flex min-h-[420px] items-center justify-center py-24 text-center lg:min-h-[520px]">
        {children}
      </div>
    </section>
  )
}

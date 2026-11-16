import { Photo } from "@/components/ui/photo"
import type { PhotoSlot } from "@/content/photos"
import type { Locale } from "@/content"

/** Hero titles drop their final full stop (house style); the copy itself stays verbatim. */
export function heroTitle(text: string) {
  return text.replace(/\.$/, "")
}

type PageHeroProps = {
  slot: PhotoSlot
  locale: Locale
  title: string
  lead?: string
}

/** Inner-page hero: one calm still photo, navy overlay, title bottom-left. */
export function PageHero({ slot, locale, title, lead }: PageHeroProps) {
  return (
    <section className="relative isolate flex min-h-[460px] items-end overflow-hidden bg-navy text-white lg:min-h-[68svh]">
      <div className="absolute inset-0 -z-10">
        <Photo slot={slot} locale={locale} priority />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/75 via-navy/40 to-navy/5" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/75 via-transparent to-transparent" />
      </div>
      <div className="container-site w-full pt-36 pb-14 lg:pb-20">
        <span aria-hidden className="red-square mb-6 block motion-safe:animate-rise" />
        <h1 className="text-h1 max-w-4xl motion-safe:animate-rise">{heroTitle(title)}</h1>
        {lead && (
          <p className="text-lead mt-6 max-w-2xl text-silver motion-safe:animate-rise">{lead}</p>
        )}
      </div>
    </section>
  )
}

/** Compact navy title band for text pages (legal notice, privacy). */
export function TitleBand({ title }: { title: string }) {
  return (
    <section className="bg-navy text-white">
      <div className="container-site pt-36 pb-12 lg:pt-44 lg:pb-16">
        <span aria-hidden className="red-square mb-6 block" />
        <h1 className="text-h1">{heroTitle(title)}</h1>
      </div>
    </section>
  )
}

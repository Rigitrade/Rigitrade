import Image from "next/image"
import { photoAlt, photoPosition, type PhotoSlot } from "@/content/photos"
import type { Locale } from "@/content"
import { cn } from "@/lib/cn"

type PhotoProps = {
  slot: PhotoSlot
  locale: Locale
  sizes?: string
  priority?: boolean
  className?: string
  /** Decorative photos (behind text that already says it all) get empty alt. */
  decorative?: boolean
}

/** A full-cover photo that fills its positioned parent. */
export function Photo({ slot, locale, sizes = "100vw", priority, className, decorative }: PhotoProps) {
  return (
    <Image
      src={`/img/${slot}`}
      alt={decorative ? "" : photoAlt(slot, locale)}
      fill
      sizes={sizes}
      priority={priority}
      className={cn("object-cover", className)}
      style={{ objectPosition: photoPosition(slot) }}
    />
  )
}

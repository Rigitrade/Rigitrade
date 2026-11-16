"use client"

import Image from "next/image"
import { useCallback, useEffect, useState, useSyncExternalStore } from "react"
import { Pause, Play } from "lucide-react"
import { cn } from "@/lib/cn"

const REDUCED = "(prefers-reduced-motion: reduce)"
function subscribeReducedMotion(cb: () => void) {
  const mq = window.matchMedia(REDUCED)
  mq.addEventListener("change", cb)
  return () => mq.removeEventListener("change", cb)
}
function getReducedMotion() {
  return window.matchMedia(REDUCED).matches
}

type Slide = { src: string; alt: string; caption: string; position?: string }

type HeroSlideshowProps = {
  slides: Slide[]
  labels: { pause: string; play: string; show: string }
  children: React.ReactNode
  /** Milliseconds each image stays on screen. */
  interval?: number
}

/**
 * Full-screen photo hero. Images cross-fade slowly with a gentle zoom; the
 * headline and buttons stay still (corporate: no moving words). Auto-advance
 * can be paused (WCAG 2.2.2) and is off for prefers-reduced-motion.
 */
export function HeroSlideshow({ slides, labels, children, interval = 7000 }: HeroSlideshowProps) {
  const [index, setIndex] = useState(0)
  const [cycle, setCycle] = useState(0)
  const reducedMotion = useSyncExternalStore(subscribeReducedMotion, getReducedMotion, () => false)
  // null = follow the system setting; true/false = the visitor pressed play/pause
  const [override, setOverride] = useState<boolean | null>(null)
  const playing = override ?? !reducedMotion
  const setPlaying = (fn: (p: boolean) => boolean) => setOverride(fn(playing))

  const go = useCallback(
    (i: number) => {
      setIndex(((i % slides.length) + slides.length) % slides.length)
      setCycle((c) => c + 1)
    },
    [slides.length],
  )

  useEffect(() => {
    if (!playing || slides.length < 2) return
    const id = window.setTimeout(() => go(index + 1), interval)
    return () => window.clearTimeout(id)
  }, [playing, index, interval, go, slides.length, cycle])

  return (
    <section className="relative isolate flex min-h-[100svh] items-end overflow-hidden bg-navy text-white">
      <div aria-hidden={false} className="absolute inset-0 -z-10">
        {slides.map((slide, i) => (
          <div
            key={slide.src}
            className={cn(
              "absolute inset-0 transition-opacity duration-[1600ms] ease-in-out",
              i === index ? "opacity-100" : "opacity-0",
            )}
            aria-hidden={i !== index}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              sizes="100vw"
              priority={i === 0}
              style={{ objectPosition: slide.position }}
              className={cn(
                "object-cover",
                i === index && playing && "motion-safe:animate-kenburns",
              )}
            />
          </div>
        ))}
        {/* Navy overlay: strong on the text side, lighter on the image side */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy/75 via-navy/35 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent" />
      </div>

      <div className="container-site relative w-full pt-32 pb-32 lg:pb-40">{children}</div>

      {slides.length > 1 && (
        <div className="absolute inset-x-0 bottom-0">
          <div className="container-site flex items-end gap-4 pb-7 sm:gap-6 lg:pb-10">
            {/* Timeline: one hairline segment per image, the current one fills in red */}
            <ol className="grid flex-1 grid-cols-3 gap-3 sm:gap-5">
              {slides.map((slide, i) => {
                const active = i === index
                return (
                  <li key={slide.src}>
                    <button
                      type="button"
                      onClick={() => go(i)}
                      aria-label={`${labels.show} ${i + 1} / ${slides.length}: ${slide.caption}`}
                      aria-current={active}
                      className="group block w-full pt-3 pb-1 text-left"
                    >
                      <span className="relative block h-0.5 overflow-hidden bg-white/25">
                        {active && (
                          <span
                            key={`${cycle}-${playing}`}
                            className={cn(
                              "absolute inset-0 origin-left bg-red",
                              playing && "animate-progress",
                            )}
                            style={playing ? { animationDuration: `${interval}ms` } : undefined}
                          />
                        )}
                      </span>
                      <span
                        className={cn(
                          "eyebrow mt-3 block truncate text-[11px] transition-colors duration-300",
                          active ? "text-white" : "text-white/50 group-hover:text-white/80",
                        )}
                      >
                        {slide.caption}
                      </span>
                    </button>
                  </li>
                )
              })}
            </ol>
            <button
              type="button"
              onClick={() => setPlaying((p) => !p)}
              aria-label={playing ? labels.pause : labels.play}
              className="mb-1 inline-flex size-10 shrink-0 items-center justify-center rounded-sm border border-white/30 text-white/85 transition-colors hover:border-white hover:text-white"
            >
              {playing ? (
                <Pause aria-hidden className="size-3.5" strokeWidth={2} />
              ) : (
                <Play aria-hidden className="size-3.5" strokeWidth={2} />
              )}
            </button>
          </div>
        </div>
      )}
    </section>
  )
}

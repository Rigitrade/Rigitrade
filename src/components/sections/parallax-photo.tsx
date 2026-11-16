"use client"

import { useEffect, useRef } from "react"

/**
 * Moves its child slowly against the scroll (max ±8% of the frame height).
 * The child must be taller than the frame (the frame clips it).
 */
export function ParallaxPhoto({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    let frame = 0
    const update = () => {
      frame = 0
      const parent = el.parentElement
      if (!parent) return
      const rect = parent.getBoundingClientRect()
      const vh = window.innerHeight
      if (rect.bottom < 0 || rect.top > vh) return
      // -1 when the band enters at the bottom, +1 when it leaves at the top
      const progress = (vh - rect.top) / (vh + rect.height) * 2 - 1
      el.style.transform = `translate3d(0, ${(-progress * 8).toFixed(2)}%, 0)`
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }
    update()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
    }
  }, [])

  return (
    <div ref={ref} className="absolute inset-x-0 -top-[10%] h-[120%] will-change-transform">
      {children}
    </div>
  )
}

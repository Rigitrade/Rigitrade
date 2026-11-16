import { cn } from "@/lib/cn"

type OverlineProps = {
  children: React.ReactNode
  tone?: "dark" | "light"
  square?: boolean
  className?: string
  as?: "p" | "h2" | "span"
}

/** Uppercase letter-spaced label, optionally led by the red square from the logo. */
export function Overline({ children, tone = "dark", square = true, className, as: Tag = "p" }: OverlineProps) {
  return (
    <Tag
      className={cn(
        "eyebrow flex items-center gap-3",
        tone === "dark" ? "text-ink-muted" : "text-white/80",
        className,
      )}
    >
      {square && <span aria-hidden className="red-square !size-2.5" />}
      {children}
    </Tag>
  )
}

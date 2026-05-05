import Link from "next/link"
import { cn } from "@/lib/utils/cn"

type Size = "sm" | "md" | "lg" | "xl"

const sizeClasses: Record<Size, string> = {
  sm: "text-caption",
  md: "text-body-l",
  lg: "text-h2",
  xl: "text-display-m",
}

type WordmarkProps = {
  size?: Size
  className?: string
  href?: string
}

export function Wordmark({ size = "md", className, href }: WordmarkProps) {
  const content = (
    <span
      className={cn(
        "font-sans font-medium uppercase tracking-[0.04em]",
        sizeClasses[size],
        className,
      )}
    >
      RIGITRADE
    </span>
  )

  if (href) {
    return (
      <Link href={href} aria-label="Rigitrade home" className="inline-block">
        {content}
      </Link>
    )
  }

  return content
}

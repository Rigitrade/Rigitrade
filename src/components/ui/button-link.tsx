import Link from "next/link"
import { cn } from "@/lib/cn"

type Variant = "primary" | "navy" | "outline" | "outline-light"

const VARIANTS: Record<Variant, string> = {
  // Swiss Red: one primary action per view (brand book)
  primary: "bg-red text-white hover:bg-red-hover",
  navy: "bg-navy text-white hover:bg-navy-deep",
  outline: "border border-line-strong text-navy hover:border-navy",
  "outline-light": "border border-white/70 text-white hover:border-white hover:bg-white/10",
}

type ButtonLinkProps = {
  href: string
  variant?: Variant
  className?: string
  children: React.ReactNode
}

export function ButtonLink({ href, variant = "primary", className, children }: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex h-12 items-center justify-center rounded-md px-6 text-[15px] leading-5 font-semibold transition-colors duration-200",
        VARIANTS[variant],
        className,
      )}
    >
      {children}
    </Link>
  )
}

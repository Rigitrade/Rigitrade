import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/cn"

type ArrowLinkProps = {
  href: string
  children: React.ReactNode
  tone?: "dark" | "light"
  className?: string
  external?: boolean
}

/** Text link with a trailing arrow. Only the link itself is interactive. */
export function ArrowLink({ href, children, tone = "dark", className, external }: ArrowLinkProps) {
  const classes = cn(
    "group -my-3 inline-flex items-center gap-2 py-3 text-[15px] leading-5 font-semibold underline-offset-4 hover:underline",
    tone === "dark" ? "text-navy" : "text-white",
    className,
  )
  const arrow = (
    <ArrowRight
      aria-hidden
      strokeWidth={1.75}
      className="size-4 text-red transition-transform duration-200 group-hover:translate-x-1"
    />
  )
  if (external) {
    return (
      <a href={href} className={classes}>
        {children}
        {arrow}
      </a>
    )
  }
  return (
    <Link href={href} className={classes}>
      {children}
      {arrow}
    </Link>
  )
}

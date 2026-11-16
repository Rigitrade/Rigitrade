import "./globals.css"
import type { Metadata } from "next"
import Link from "next/link"
import { Wordmark } from "@/components/brand/wordmark"
import { archivo, inter } from "@/lib/fonts"
import { cn } from "@/lib/cn"

export const metadata: Metadata = {
  title: "404 – Rigitrade AG",
  robots: { index: false, follow: true },
}

// Bilingual: a 404 cannot know which language the visitor came from.
export default function GlobalNotFound() {
  return (
    <html lang="de-CH" className={cn(archivo.variable, inter.variable)}>
      <body className="bg-navy text-white">
        <main className="container-site flex min-h-[100svh] flex-col justify-center py-20">
          <Link href="/" aria-label="Rigitrade – Home" className="mb-16 inline-block">
            <Wordmark className="h-[22px] w-auto" />
          </Link>
          <span aria-hidden className="red-square mb-6 block" />
          <h1 className="text-h1">Seite nicht gefunden</h1>
          <p className="text-lead mt-4 text-silver" lang="en">
            Page not found
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/"
              className="inline-flex h-12 items-center rounded-md bg-red px-6 text-[15px] font-semibold text-white hover:bg-red-hover"
            >
              Zur Startseite
            </Link>
            <Link
              href="/en/"
              lang="en"
              className="inline-flex h-12 items-center rounded-md border border-white/70 px-6 text-[15px] font-semibold text-white hover:border-white hover:bg-white/10"
            >
              Back to home
            </Link>
          </div>
        </main>
      </body>
    </html>
  )
}

import type { Metadata } from "next"

export const metadata: Metadata = {
  robots: { index: false, follow: false },
  alternates: { canonical: "/en/" },
}

export default function RootRedirectPage() {
  return (
    <html lang="en">
      <head>
        <meta httpEquiv="refresh" content="0; url=/en/" />
        <link rel="canonical" href="/en/" />
      </head>
      <body>
        <a href="/en/">Continue to Rigitrade</a>
      </body>
    </html>
  )
}

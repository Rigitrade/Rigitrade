import { Inter, JetBrains_Mono } from "next/font/google"

// Note: spec calls for Switzer (Fontshare). For launch v1 we use Inter as a
// near-equivalent grotesque available via next/font/google. To switch to
// Switzer later, download the Switzer-Variable.woff2 file from Fontshare into
// public/fonts/switzer/ and replace this file with localFont definitions.

export const switzer = Inter({
  subsets: ["latin"],
  variable: "--font-switzer",
  display: "swap",
  preload: true,
})

export const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
  preload: false,
})

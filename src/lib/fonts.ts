import { Archivo, Inter } from "next/font/google"

// Brand book: Archivo for headlines, labels and the logo; Inter for body and UI.
export const archivo = Archivo({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-archivo",
  display: "swap",
})

export const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-inter",
  display: "swap",
})

import { de } from "./de"
import { en } from "./en"
import type { Locale } from "./routes"
import type { Dictionary } from "./types"

const DICTIONARIES: Record<Locale, Dictionary> = { de, en }

export function getDictionary(locale: Locale): Dictionary {
  return DICTIONARIES[locale]
}

export * from "./routes"
export type * from "./types"

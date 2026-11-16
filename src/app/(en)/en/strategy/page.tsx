import { buildMetadata } from "@/lib/seo"
import { StrategyView } from "@/views/strategy"

export const metadata = buildMetadata("strategy", "en")

export default function Page() {
  return <StrategyView locale="en" />
}

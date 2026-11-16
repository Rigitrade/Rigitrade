import { buildMetadata } from "@/lib/seo"
import { LegalView } from "@/views/legal"

export const metadata = buildMetadata("legal", "en")

export default function Page() {
  return <LegalView locale="en" />
}

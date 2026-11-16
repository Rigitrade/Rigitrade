import { buildMetadata } from "@/lib/seo"
import { LegalView } from "@/views/legal"

export const metadata = buildMetadata("legal", "de")

export default function Page() {
  return <LegalView locale="de" />
}

import { buildMetadata } from "@/lib/seo"
import { PrivacyView } from "@/views/privacy"

export const metadata = buildMetadata("privacy", "en")

export default function Page() {
  return <PrivacyView locale="en" />
}

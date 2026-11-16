import { buildMetadata } from "@/lib/seo"
import { ContactView } from "@/views/contact"

export const metadata = buildMetadata("contact", "en")

export default function Page() {
  return <ContactView locale="en" />
}

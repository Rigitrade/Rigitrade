import { buildMetadata } from "@/lib/seo"
import { ContactView } from "@/views/contact"

export const metadata = buildMetadata("contact", "de")

export default function Page() {
  return <ContactView locale="de" />
}

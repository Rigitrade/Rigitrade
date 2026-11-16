import { buildMetadata } from "@/lib/seo"
import { AboutView } from "@/views/about"

export const metadata = buildMetadata("about", "de")

export default function Page() {
  return <AboutView locale="de" />
}

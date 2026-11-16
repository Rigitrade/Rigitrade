import { buildMetadata } from "@/lib/seo"
import { BrandsView } from "@/views/brands"

export const metadata = buildMetadata("brands", "en")

export default function Page() {
  return <BrandsView locale="en" />
}

import { buildMetadata } from "@/lib/seo"
import { BrandsView } from "@/views/brands"

export const metadata = buildMetadata("brands", "de")

export default function Page() {
  return <BrandsView locale="de" />
}

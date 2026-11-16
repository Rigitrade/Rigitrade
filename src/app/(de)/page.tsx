import { buildMetadata } from "@/lib/seo"
import { HomeView } from "@/views/home"

export const metadata = buildMetadata("home", "de")

export default function Page() {
  return <HomeView locale="de" />
}

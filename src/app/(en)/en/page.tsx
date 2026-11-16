import { buildMetadata } from "@/lib/seo"
import { HomeView } from "@/views/home"

export const metadata = buildMetadata("home", "en")

export default function Page() {
  return <HomeView locale="en" />
}

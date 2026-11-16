import { type Locale } from "@/content"
import { PRIVACY } from "@/content/legal"
import { TitleBand } from "@/components/sections/page-hero"
import { Prose } from "@/components/sections/prose"

export function PrivacyView({ locale }: { locale: Locale }) {
  return (
    <>
      <TitleBand title={locale === "de" ? "Datenschutzerklärung" : "Privacy policy"} />
      <div className="container-site section-y">
        <Prose blocks={PRIVACY[locale]} />
      </div>
    </>
  )
}

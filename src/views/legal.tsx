import { getDictionary, type Locale } from "@/content"
import { LEGAL_NOTICE } from "@/content/legal"
import { TitleBand } from "@/components/sections/page-hero"
import { Prose } from "@/components/sections/prose"

export function LegalView({ locale }: { locale: Locale }) {
  const t = getDictionary(locale)
  return (
    <>
      <TitleBand title={t.footer.legal} />
      <div className="container-site section-y">
        <Prose blocks={LEGAL_NOTICE[locale]} />
      </div>
    </>
  )
}

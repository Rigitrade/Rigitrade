import { getDictionary, href, type Locale } from "@/content"
import { ButtonLink } from "@/components/ui/button-link"
import { heroTitle } from "./page-hero"
import { Reveal } from "./reveal"

/** Closing invitation used at the end of content pages. */
export function ContactBand({ locale }: { locale: Locale }) {
  const t = getDictionary(locale)
  const c = t.contact
  return (
    <section className="section-y bg-white">
      <div className="container-site">
        <Reveal className="grid gap-10 border-t-2 border-navy pt-12 lg:grid-cols-12 lg:gap-8 lg:pt-16">
          <div className="lg:col-span-7">
            <h2 className="text-h1">{heroTitle(c.headline)}</h2>
            <p className="text-lead mt-6 max-w-xl text-ink-muted">{c.intro}</p>
          </div>
          <div className="flex flex-col justify-end gap-8 lg:col-span-4 lg:col-start-9">
            <dl className="text-[15px] leading-6">
              <dt className="sr-only">{t.ui.contact}</dt>
              <dd>
                <a href={c.phoneHref} className="inline-block py-1 font-semibold hover:underline">
                  T. {c.phone}
                </a>
              </dd>
              <dd>
                <a href={`mailto:${c.email}`} className="inline-block py-1 font-semibold hover:underline">
                  {c.email}
                </a>
              </dd>
              <dd className="text-ink-muted">{c.hours}</dd>
            </dl>
            <div>
              <ButtonLink href={href("contact", locale)}>{t.home.secondaryCta}</ButtonLink>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

import { getDictionary, type BusinessStatus, type Locale } from "@/content"
import { Overline } from "@/components/ui/overline"
import { PageHero } from "@/components/sections/page-hero"
import { PhotoBand } from "@/components/sections/photo-band"
import { ContactBand } from "@/components/sections/contact-band"
import { Reveal } from "@/components/sections/reveal"
import { cn } from "@/lib/cn"

/** Small square status marker — square geometry from the logo, red only for the launch. */
const MARKER: Record<BusinessStatus, string> = {
  active: "bg-navy",
  launching: "bg-red",
  onRequest: "border-[1.5px] border-navy bg-transparent",
  planned: "bg-silver",
}

export function StrategyView({ locale }: { locale: Locale }) {
  const t = getDictionary(locale)
  const s = t.strategy

  return (
    <>
      <PageHero slot="page-strategy" locale={locale} title={s.headline} />

      <section className="section-y">
        <div className="container-site">
          <Reveal>
            <p className="max-w-3xl font-display text-[1.5rem] leading-[1.45] font-semibold text-navy lg:text-[1.75rem]">
              {s.intro}
            </p>
          </Reveal>

          <div className="mt-14 lg:mt-20">
            <table className="w-full border-collapse text-left">
              <thead className="sr-only md:not-sr-only">
                <tr className="border-b-2 border-navy">
                  <th scope="col" className="eyebrow w-[30%] pb-4 pr-6 text-ink-muted">
                    {s.table.area}
                  </th>
                  <th scope="col" className="eyebrow w-[40%] pb-4 pr-6 text-ink-muted">
                    {s.table.covers}
                  </th>
                  <th scope="col" className="eyebrow pb-4 text-ink-muted">
                    {s.table.status}
                  </th>
                </tr>
              </thead>
              <tbody>
                {s.areas.map((row) => (
                  <tr
                    key={row.area}
                    className="flex flex-col gap-1 border-b border-line py-5 md:table-row md:py-0"
                  >
                    <th
                      scope="row"
                      className="font-display text-lg leading-7 font-bold text-navy md:py-6 md:pr-6 md:align-top"
                    >
                      {row.area}
                    </th>
                    <td className="text-[15px] leading-6 text-ink-muted md:py-6 md:pr-6 md:align-top">
                      {row.covers}
                    </td>
                    <td className="pt-2 md:py-6 md:align-top">
                      <span className="flex items-start gap-3 text-[15px] leading-6 font-semibold text-navy">
                        <span aria-hidden className={cn("mt-[7px] size-2.5 flex-none", MARKER[row.status])} />
                        {row.statusText}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="mt-5 flex items-start gap-3 text-[13px] leading-5 text-ink-muted">
              <span aria-hidden className="mt-[5px] size-2.5 flex-none bg-silver" />
              {s.plannedNote}
            </p>
          </div>
        </div>
      </section>

      <section aria-labelledby="grow-heading" className="section-y bg-ice">
        <div className="container-site">
          <Overline as="h2">
            <span id="grow-heading">{s.growHeading}</span>
          </Overline>
          <ol className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-line">
            {s.grow.map((step, i) => (
              <li key={step.title} className="lg:px-8 lg:first:pl-0 lg:last:pr-0">
                <Reveal delay={i * 100}>
                  <span aria-hidden className="red-square" />
                  <h3 className="text-h3 mt-5">{step.title}</h3>
                  <p className="mt-3 text-ink-muted">
                    {step.text.charAt(0).toUpperCase() + step.text.slice(1)}
                  </p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <PhotoBand slot="band-goal" locale={locale}>
        <Reveal>
          <p className="mx-auto max-w-4xl font-display text-[1.75rem] leading-[1.3] font-bold lg:text-[2.5rem]">
            {s.goal}
          </p>
        </Reveal>
      </PhotoBand>

      <ContactBand locale={locale} />
    </>
  )
}

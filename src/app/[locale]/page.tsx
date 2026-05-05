import { setRequestLocale } from "next-intl/server"

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)

  return (
    <main id="main" className="mx-auto w-full max-w-[80rem] px-6 py-section-mobile lg:px-16 lg:py-section">
      <h1 className="text-display-l font-medium">Rigitrade</h1>
      <p className="mt-4 text-body-l text-ink/80">
        Swiss-controlled supply of superalloys for extreme environments. Foundation in place — content blocks coming online.
      </p>
    </main>
  )
}

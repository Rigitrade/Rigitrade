import { expect, test } from "@playwright/test"

const PAGES = [
  ["/", "de-CH"],
  ["/ueber-uns/", "de-CH"],
  ["/marken/", "de-CH"],
  ["/strategie/", "de-CH"],
  ["/kontakt/", "de-CH"],
  ["/impressum/", "de-CH"],
  ["/datenschutz/", "de-CH"],
  ["/en/", "en"],
  ["/en/about/", "en"],
  ["/en/brands/", "en"],
  ["/en/strategy/", "en"],
  ["/en/contact/", "en"],
  ["/en/legal-notice/", "en"],
  ["/en/privacy/", "en"],
] as const

for (const [path, lang] of PAGES) {
  test(`${path} renders with one h1, lang and hreflang`, async ({ page }) => {
    const res = await page.goto(path)
    expect(res?.status()).toBe(200)
    await expect(page.locator("html")).toHaveAttribute("lang", lang)
    await expect(page.locator("h1")).toHaveCount(1)
    await expect(page.locator('link[rel="alternate"][hreflang="x-default"]')).toHaveCount(1)
    const broken = await page.evaluate(() =>
      [...document.images].filter((img) => img.complete && img.naturalWidth === 0).map((i) => i.src),
    )
    expect(broken).toEqual([])
  })
}

test("language switch keeps the page", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 })
  await page.goto("/strategie/")
  await page.getByRole("link", { name: /English/ }).first().click()
  await expect(page).toHaveURL(/\/en\/strategy\/$/)
})

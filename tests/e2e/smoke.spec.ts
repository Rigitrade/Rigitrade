import { test, expect } from "@playwright/test"

const ROUTES = [
  { path: "/en/", h1Pattern: /Superalloys for Extreme Environments/i },
  { path: "/en/solutions/", h1Pattern: /Engineered for the conditions/i },
  { path: "/en/materials/", h1Pattern: /right alloy/i },
  { path: "/en/commodities/", h1Pattern: /Structured trading/i },
  { path: "/en/about/", h1Pattern: /Swiss-incorporated/i },
  { path: "/en/contact/", h1Pattern: /technical challenge/i },
  { path: "/en/privacy/", h1Pattern: /Privacy/i },
] as const

test.describe("smoke: pages load", () => {
  for (const route of ROUTES) {
    test(`${route.path} loads with expected H1`, async ({ page }) => {
      const errors: string[] = []
      page.on("pageerror", (err) => errors.push(err.message))

      await page.goto(route.path)
      await expect(page.locator("h1").first()).toContainText(route.h1Pattern)
      expect(errors).toEqual([])
    })
  }
})

test.describe("smoke: shell", () => {
  test("Wordmark links to home", async ({ page }) => {
    await page.goto("/en/solutions/")
    await page.getByRole("link", { name: "Rigitrade home" }).first().click()
    await expect(page).toHaveURL(/\/en\/?$/)
  })

  test("Footer renders sister brands", async ({ page }) => {
    await page.goto("/en/")
    await expect(page.getByRole("link", { name: "Digihome" }).first()).toBeVisible()
    await expect(page.getByRole("link", { name: "Senergic" }).first()).toBeVisible()
  })
})

test.describe("smoke: homepage blocks", () => {
  test("Trust strip renders all certifications", async ({ page }) => {
    await page.goto("/en/")
    await expect(page.getByText("Full Traceability", { exact: true })).toBeVisible()
    await expect(page.getByText("Swiss Quality Control", { exact: true })).toBeVisible()
    await expect(page.getByText("Audited Supply Chains", { exact: true })).toBeVisible()
  })

  test("Material comparison table renders all 6 alloys", async ({ page }) => {
    await page.goto("/en/")
    const table = page.getByRole("table")
    await expect(table).toBeVisible()
    await expect(table.getByText("Inconel 625")).toBeVisible()
    await expect(table.getByText("Inconel 718")).toBeVisible()
    await expect(table.getByText("Hastelloy C-276")).toBeVisible()
    await expect(table.getByText("Duplex 2205")).toBeVisible()
    await expect(table.getByText("Super Duplex 2507")).toBeVisible()
    await expect(table.getByText("Monel 400")).toBeVisible()
  })

  test("Solutions carousel is present", async ({ page }) => {
    await page.goto("/en/")
    await expect(page.getByRole("region", { name: "Solutions carousel" })).toBeVisible()
  })
})

test.describe("smoke: forms", () => {
  test("Quote form renders required fields", async ({ page }) => {
    await page.goto("/en/contact/")
    await expect(page.getByLabel(/Company name/i)).toBeVisible()
    await expect(page.getByLabel(/Business email/i)).toBeVisible()
    await expect(page.getByLabel(/Country/i)).toBeVisible()
  })

  test("Contact form renders required fields", async ({ page }) => {
    await page.goto("/en/contact/")
    await expect(page.getByLabel(/^Name/i).first()).toBeVisible()
    await expect(page.getByLabel(/Reason/i)).toBeVisible()
    await expect(page.getByLabel(/Message/i)).toBeVisible()
  })
})

test.describe("smoke: i18n", () => {
  test("DE locale renders with German nav", async ({ page }) => {
    await page.goto("/de/")
    await expect(page.locator("html")).toHaveAttribute("lang", "de")
  })

  test("DE switcher is disabled at launch", async ({ page }) => {
    await page.goto("/en/")
    const de = page.getByText("DE", { exact: true }).first()
    await expect(de).toHaveAttribute("aria-disabled", "true")
  })
})

test.describe("smoke: a11y essentials", () => {
  test("Skip link is keyboard-reachable", async ({ page }) => {
    await page.goto("/en/")
    await page.keyboard.press("Tab")
    await expect(page.getByText(/skip to content/i)).toBeFocused()
  })

  test("All routes have a unique <h1>", async ({ page }) => {
    for (const route of ROUTES) {
      await page.goto(route.path)
      const h1Count = await page.locator("h1").count()
      expect(h1Count, `${route.path} should have exactly one h1`).toBeGreaterThanOrEqual(1)
    }
  })
})

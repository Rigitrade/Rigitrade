import type { PageKey } from "./routes"

export type Meta = { title: string; description: string }

export type BusinessStatus = "active" | "launching" | "onRequest" | "planned"

export type Fact = { label: string; value: string | null }

export type Dictionary = {
  positioning: {
    descriptor: string
    tagline: string
    pitch: string
  }
  meta: Record<Exclude<PageKey, never>, Meta>
  ui: {
    skipToContent: string
    menu: string
    closeMenu: string
    language: string
    switchTo: string
    pauseSlideshow: string
    playSlideshow: string
    showSlide: string
    readMore: string
    visitWebsite: string
    ourBrands: string
    company: string
    contact: string
    openingHours: string
    openInMaps: string
    registryEntry: string
    headquarters: string
    backToTop: string
    commercialRegister: string
    legalNav: string
    emailUs: string
    callUs: string
    notFoundTitle: string
    notFoundText: string
    backHome: string
  }
  nav: { brands: string; about: string; strategy: string; contact: string }
  home: {
    headline: string
    intro: string
    primaryCta: string
    secondaryCta: string
    brandsHeading: string
    strip: { zuriauto: string; carseek: string; trackmycar24: string }
    stripLabels: { zuriauto: string; carseek: string; trackmycar24: string }
    closingLine: string
    aboutTeaserLink: string
    strategyTeaserLink: string
  }
  about: {
    headline: string
    paragraphs: [string, string]
    factsHeading: string
    facts: Fact[]
    philosophyLabel: string
    philosophyWords: [string, string, string]
    philosophyText: string
  }
  brands: {
    headline: string
    zuriauto: {
      descriptor: string
      intro: string
      divisions: { name: string; offer: string; path: string; photo: string }[]
    }
    carseek: { descriptor: string; text: string; launch: string }
    trackmycar24: { descriptor: string; text: string; features: string[] }
  }
  strategy: {
    headline: string
    intro: string
    table: { area: string; covers: string; status: string }
    areas: { area: string; covers: string; status: BusinessStatus; statusText: string }[]
    plannedNote: string
    growHeading: string
    grow: { title: string; text: string }[]
    goal: string
  }
  contact: {
    headline: string
    intro: string
    company: string
    descriptor: string
    street: string
    city: string
    phone: string
    phoneHref: string
    email: string
    hours: string
    uid: string
    form: {
      heading: string
      name: string
      email: string
      company: string
      topic: string
      topics: string[]
      message: string
      consent: string
      privacyLink: string
      submit: string
      sending: string
      success: string
      error: string
      required: string
    }
  }
  footer: {
    addressLine: string
    disclaimer: string
    copyright: string
    legal: string
    privacy: string
  }
}

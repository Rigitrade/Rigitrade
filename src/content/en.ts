import type { Dictionary } from "./types"

// Source: Rigitrade-Website-Copy-EN.docx and Rigitrade-SEO-and-Setup.docx (November 2026).
// Copy is reproduced as supplied. Strings marked UI are interface labels not covered by the docs.
export const en: Dictionary = {
  positioning: {
    descriptor: "Swiss Automotive & Mobility Group",
    tagline: "Driving mobility. Connecting solutions.",
    pitch:
      "A Zurich-based group combining vehicle services, trading, digital platforms and tracking technology.",
  },
  meta: {
    home: {
      title: "Rigitrade AG – Swiss Automotive & Mobility Group",
      description:
        "Rigitrade AG is a Swiss automotive and mobility group in Zurich, home to zuriauto, Carseek.ch and TrackMyCar24.",
    },
    about: {
      title: "About Rigitrade AG – Automotive company, Zurich",
      description:
        "Independent Swiss company in Zurich that owns and develops automotive brands in services, trading and vehicle technology.",
    },
    brands: {
      title: "Brands: zuriauto, Carseek.ch, TrackMyCar24 | Rigitrade",
      description:
        "Rental, workshop, trading and parts from zuriauto, the Carseek.ch marketplace and GPS tracking from TrackMyCar24.",
    },
    strategy: {
      title: "Strategy and business areas | Rigitrade AG",
      description:
        "Our business areas, what is active today and what is planned, and how the group grows: build, connect, expand, innovate.",
    },
    contact: {
      title: "Contact Rigitrade AG – Zurich, Switzerland",
      description:
        "Rigitrade AG, Schaffhauserstrasse 550, 8052 Zurich. Phone +41 58 513 99 96, Monday to Friday 08:00–18:00.",
    },
    legal: {
      title: "Legal notice | Rigitrade AG",
      description: "Legal notice of Rigitrade AG, Schaffhauserstrasse 550, 8052 Zurich, Switzerland.",
    },
    privacy: {
      title: "Privacy policy | Rigitrade AG",
      description:
        "How Rigitrade AG processes personal data on this website, under the Swiss Federal Act on Data Protection (FADP).",
    },
  },
  ui: {
    skipToContent: "Skip to content",
    menu: "Menu",
    closeMenu: "Close menu",
    language: "Language",
    switchTo: "Deutsch",
    pauseSlideshow: "Pause slideshow",
    playSlideshow: "Play slideshow",
    showSlide: "Show image",
    readMore: "Read more",
    visitWebsite: "Visit website",
    ourBrands: "Our brands",
    company: "Company",
    contact: "Contact",
    openingHours: "Opening hours",
    openInMaps: "Open in Google Maps",
    registryEntry: "Commercial register entry (Zefix)",
    headquarters: "Headquarters",
    backToTop: "Back to top",
    commercialRegister: "Commercial register",
    legalNav: "Legal",
    emailUs: "Email Rigitrade AG",
    callUs: "Call Rigitrade AG",
    notFoundTitle: "Page not found",
    notFoundText: "This page does not exist or has moved.",
    backHome: "Back to home",
  },
  nav: { brands: "Brands", about: "About", strategy: "Strategy", contact: "Contact" },
  home: {
    headline: "Moving the automotive industry forward.",
    intro:
      "Rigitrade AG is a Swiss automotive and mobility group based in Zurich. Our brands cover vehicle rental, workshop services, trading, spare parts, a digital marketplace and GPS tracking, with one company behind them.",
    primaryCta: "Discover our brands",
    secondaryCta: "Contact us",
    brandsHeading: "Our brands",
    strip: {
      zuriauto: "Rentals, repairs, trade and parts in Zurich.",
      carseek: "The Swiss automotive marketplace. Launching 1 December 2026.",
      trackmycar24: "GPS tracking and theft protection for vehicles and fleets.",
    },
    stripLabels: {
      zuriauto: "Automotive services",
      carseek: "Digital marketplace",
      trackmycar24: "GPS tracking",
    },
    closingLine: "One group. Three brands. Built to grow.",
    aboutTeaserLink: "More about us",
    strategyTeaserLink: "Our strategy",
  },
  about: {
    headline: "A Swiss company. A growing automotive group.",
    paragraphs: [
      "Rigitrade AG is an independent Swiss company based in Zurich. We own and develop specialised brands, each with its own customers and market focus, supported by one corporate foundation: shared management, processes and investment.",
      "The automotive industry is changing through electrification, digital platforms and connected vehicles. We combine hands-on workshop expertise with our own technology, so we can grow with that change rather than react to it.",
    ],
    factsHeading: "Facts",
    // Values to be supplied by Rigitrade before launch; facts without a value are not shown.
    facts: [
      { label: "Founded", value: null },
      { label: "Rental fleet", value: null },
      { label: "Workshop", value: null },
      { label: "Vehicles tracked by TrackMyCar24", value: null },
      { label: "Team", value: null },
    ],
    philosophyLabel: "Our philosophy",
    philosophyWords: ["Integration.", "Innovation.", "Expansion."],
    philosophyText:
      "We connect complementary automotive services, invest in technology and add new business areas step by step.",
  },
  brands: {
    headline: "Specialised brands. Connected expertise.",
    zuriauto: {
      descriptor: "Automotive services and mobility",
      intro: "Our Zurich automotive services brand, with four divisions under one name.",
      divisions: [
        {
          name: "zuriauto Rentals",
          offer: "Flexible vehicle rental for private customers, companies and professional drivers",
          path: "zuriauto.ch/rentals",
          photo: "zuriauto-rentals",
        },
        {
          name: "zuriauto Repairs",
          offer: "Workshop, diagnostics and maintenance, specialised in hybrid and electric vehicles",
          path: "zuriauto.ch/repairs",
          photo: "zuriauto-repairs",
        },
        {
          name: "zuriauto Trade",
          offer: "Buying, selling, valuation and vehicle sourcing, including import and export on request",
          path: "zuriauto.ch/trade",
          photo: "zuriauto-trade",
        },
        {
          name: "zuriauto Parts",
          offer: "OEM and quality aftermarket spare parts and accessories",
          path: "zuriauto.ch/parts",
          photo: "zuriauto-parts",
        },
      ],
    },
    carseek: {
      descriptor: "The Swiss automotive marketplace",
      text: "A digital marketplace connecting vehicle buyers and sellers across Switzerland: private sellers, dealers and automotive businesses in one place.",
      launch: "Launching 1 December 2026",
    },
    trackmycar24: {
      descriptor: "GPS tracking and theft protection",
      text: "GPS tracking for private vehicle owners and company fleets.",
      features: [
        "Real-time vehicle location",
        "Theft protection",
        "Remote engine immobilisation on compatible vehicles, subject to safe operating conditions and applicable legal requirements",
      ],
    },
  },
  strategy: {
    headline: "Building a scalable automotive group.",
    intro:
      "Our current brands are the foundation. Each business area below is marked with its status, so customers and partners know what is available today and what is planned.",
    table: { area: "Business area", covers: "What it covers", status: "Status" },
    areas: [
      {
        area: "Mobility and rental",
        covers: "Vehicle rental and fleet solutions",
        status: "active",
        statusText: "Active — zuriauto Rentals",
      },
      {
        area: "Workshop services",
        covers: "Maintenance, diagnostics, repairs, hybrid and EV service, valuation",
        status: "active",
        statusText: "Active — zuriauto Repairs",
      },
      {
        area: "Vehicle trading",
        covers: "Buying, selling, sourcing and brokerage",
        status: "active",
        statusText: "Active — zuriauto Trade",
      },
      {
        area: "Spare parts",
        covers: "OEM and aftermarket parts, accessories and components",
        status: "active",
        statusText: "Active — zuriauto Parts",
      },
      {
        area: "GPS tracking",
        covers: "Vehicle location, theft protection, remote immobilisation",
        status: "active",
        statusText: "Active — TrackMyCar24",
      },
      {
        area: "Digital marketplace",
        covers: "Online vehicle trading platform for Switzerland",
        status: "launching",
        statusText: "Launching 1 December 2026 — Carseek.ch",
      },
      {
        area: "Import and export",
        covers: "International vehicle sourcing for individual customers",
        status: "onRequest",
        statusText: "On request",
      },
      {
        area: "Vehicle care and infrastructure",
        covers: "Car wash, detailing, fuel stations, EV charging",
        status: "planned",
        statusText: "Planned",
      },
      {
        area: "Recycling and circular economy",
        covers: "Dismantling, recovery and reuse of vehicles and parts",
        status: "planned",
        statusText: "Planned",
      },
    ],
    plannedNote: "Business areas marked “Planned” are development goals, not current services.",
    growHeading: "How we grow",
    grow: [
      { title: "Build", text: "develop specialised brands with a clear position and business model." },
      { title: "Connect", text: "link complementary services, platforms, suppliers and partners." },
      { title: "Expand", text: "enter new segments and develop international sourcing and trading." },
      { title: "Innovate", text: "invest in digital tools, electrification and new mobility models." },
    ],
    goal: "Our long-term goal: a diversified Swiss automotive and mobility group with strong brands, reliable partnerships and scalable operations.",
  },
  contact: {
    headline: "Let’s connect.",
    intro:
      "Looking for an automotive service, a business partner or a new opportunity? Contact us and we’ll put you in touch with the right brand.",
    company: "Rigitrade AG",
    descriptor: "Swiss Automotive & Mobility Group",
    street: "Schaffhauserstrasse 550",
    city: "8052 Zurich, Switzerland",
    phone: "+41 58 513 99 96",
    phoneHref: "tel:+41585139996",
    email: "info@rigitrade.com",
    hours: "Monday to Friday, 08:00–18:00",
    uid: "CHE-199.884.159",
    form: {
      heading: "Send a message",
      name: "Name",
      email: "Email",
      company: "Company",
      topic: "Topic",
      topics: ["General enquiry", "zuriauto", "Carseek.ch", "TrackMyCar24", "Partnership"],
      message: "Message",
      consent: "I agree that Rigitrade AG processes my details to answer my enquiry. Details in the",
      privacyLink: "privacy policy",
      submit: "Send message",
      sending: "Sending …",
      success: "Thank you for your message. We will be in touch.",
      error: "Your message could not be sent. Please email us at info@rigitrade.com.",
      required: "Required",
    },
  },
  footer: {
    addressLine: "Rigitrade AG · Schaffhauserstrasse 550 · 8052 Zurich",
    disclaimer:
      "zuriauto, Carseek.ch and TrackMyCar24 are brands of Rigitrade AG.",
    copyright: "© 2026 Rigitrade AG",
    legal: "Impressum",
    privacy: "Privacy policy",
  },
}

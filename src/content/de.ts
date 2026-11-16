import type { Dictionary } from "./types"

// Source: Rigitrade-Website-Texte-DE.docx and Rigitrade-SEO-and-Setup.docx (November 2026).
// Copy is reproduced as supplied. Strings marked UI are interface labels not covered by the docs.
export const de: Dictionary = {
  positioning: {
    descriptor: "Schweizer Automobil- und Mobilitätsgruppe",
    tagline: "Mobilität voranbringen. Lösungen verbinden.",
    pitch:
      "Eine Zürcher Unternehmensgruppe für Fahrzeugdienstleistungen, Fahrzeughandel, digitale Plattformen und Ortungstechnologie.",
  },
  meta: {
    home: {
      title: "Rigitrade AG – Schweizer Automobil- und Mobilitätsgruppe",
      description:
        "Die Rigitrade AG ist eine Schweizer Automobil- und Mobilitätsgruppe in Zürich – mit den Marken zuriauto, Carseek.ch und TrackMyCar24.",
    },
    about: {
      title: "Über uns – Rigitrade AG, Automobilunternehmen Zürich",
      description:
        "Unabhängiges Schweizer Unternehmen in Zürich, das Automobilmarken für Dienstleistungen, Handel und Fahrzeugtechnologie entwickelt.",
    },
    brands: {
      title: "Marken: zuriauto, Carseek.ch, TrackMyCar24 | Rigitrade",
      description:
        "Vermietung, Werkstatt, Handel und Ersatzteile von zuriauto, der Marktplatz Carseek.ch und GPS-Ortung von TrackMyCar24.",
    },
    strategy: {
      title: "Strategie und Geschäftsfelder | Rigitrade AG",
      description:
        "Die Geschäftsfelder der Rigitrade AG: was heute aktiv und was geplant ist – und wie die Gruppe wächst.",
    },
    contact: {
      title: "Kontakt – Rigitrade AG, Zürich",
      description:
        "Rigitrade AG, Schaffhauserstrasse 550, 8052 Zürich. Telefon +41 58 513 99 96, Montag bis Freitag 08:00–18:00 Uhr.",
    },
    legal: {
      title: "Impressum | Rigitrade AG",
      description: "Impressum der Rigitrade AG, Schaffhauserstrasse 550, 8052 Zürich.",
    },
    privacy: {
      title: "Datenschutzerklärung | Rigitrade AG",
      description:
        "Wie die Rigitrade AG Personendaten auf dieser Website bearbeitet – nach dem Schweizer Datenschutzgesetz (DSG).",
    },
  },
  ui: {
    skipToContent: "Zum Inhalt springen",
    menu: "Menü",
    closeMenu: "Menü schliessen",
    language: "Sprache",
    switchTo: "English",
    pauseSlideshow: "Bildwechsel anhalten",
    playSlideshow: "Bildwechsel fortsetzen",
    showSlide: "Bild anzeigen",
    readMore: "Mehr erfahren",
    visitWebsite: "Zur Website",
    ourBrands: "Unsere Marken",
    company: "Unternehmen",
    contact: "Kontakt",
    openingHours: "Öffnungszeiten",
    openInMaps: "In Google Maps öffnen",
    registryEntry: "Handelsregistereintrag (Zefix)",
    headquarters: "Hauptsitz",
    backToTop: "Nach oben",
    commercialRegister: "Handelsregister",
    legalNav: "Rechtliches",
    emailUs: "E-Mail an Rigitrade AG",
    callUs: "Rigitrade AG anrufen",
    notFoundTitle: "Seite nicht gefunden",
    notFoundText: "Diese Seite gibt es nicht oder nicht mehr.",
    backHome: "Zur Startseite",
  },
  nav: { brands: "Marken", about: "Über uns", strategy: "Strategie", contact: "Kontakt" },
  home: {
    headline: "Die Automobilbranche weiterbringen.",
    intro:
      "Die Rigitrade AG ist eine Schweizer Automobil- und Mobilitätsgruppe mit Sitz in Zürich. Unsere Marken decken Fahrzeugvermietung, Werkstatt, Fahrzeughandel, Ersatzteile, einen digitalen Marktplatz und GPS-Ortung ab – mit einem Unternehmen dahinter.",
    primaryCta: "Unsere Marken entdecken",
    secondaryCta: "Kontakt aufnehmen",
    brandsHeading: "Unsere Marken",
    strip: {
      zuriauto: "Vermietung, Werkstatt, Handel und Ersatzteile in Zürich.",
      carseek: "Der Schweizer Automarktplatz. Start am 1. Dezember 2026.",
      trackmycar24: "GPS-Ortung und Diebstahlschutz für Fahrzeuge und Flotten.",
    },
    stripLabels: {
      zuriauto: "Fahrzeugdienstleistungen",
      carseek: "Digitaler Marktplatz",
      trackmycar24: "GPS-Ortung",
    },
    closingLine: "Eine Gruppe. Drei Marken. Gebaut für Wachstum.",
    aboutTeaserLink: "Mehr über uns",
    strategyTeaserLink: "Zur Strategie",
  },
  about: {
    headline: "Ein Schweizer Unternehmen. Eine wachsende Automobilgruppe.",
    paragraphs: [
      "Die Rigitrade AG ist ein unabhängiges Schweizer Unternehmen mit Sitz in Zürich. Wir besitzen und entwickeln spezialisierte Marken mit eigener Kundschaft und eigenem Marktfokus – getragen von einer gemeinsamen Basis aus Führung, Prozessen und Investitionen.",
      "Die Automobilbranche verändert sich durch Elektrifizierung, digitale Plattformen und vernetzte Fahrzeuge. Wir verbinden handfeste Werkstatterfahrung mit eigener Technologie und wachsen so mit diesem Wandel.",
    ],
    factsHeading: "Fakten",
    // Values to be supplied by Rigitrade before launch; facts without a value are not shown.
    facts: [
      { label: "Gegründet", value: null },
      { label: "Mietflotte", value: null },
      { label: "Werkstatt", value: null },
      { label: "Mit TrackMyCar24 geortete Fahrzeuge", value: null },
      { label: "Team", value: null },
    ],
    philosophyLabel: "Unsere Philosophie",
    philosophyWords: ["Integration.", "Innovation.", "Expansion."],
    philosophyText:
      "Wir verbinden sich ergänzende Dienstleistungen, investieren in Technologie und erschliessen neue Geschäftsfelder Schritt für Schritt.",
  },
  brands: {
    headline: "Spezialisierte Marken. Vernetztes Know-how.",
    zuriauto: {
      descriptor: "Fahrzeugdienstleistungen und Mobilität",
      intro: "Unsere Zürcher Marke für Fahrzeugdienstleistungen, mit vier Bereichen unter einem Namen.",
      divisions: [
        {
          name: "zuriauto Rentals",
          offer: "Flexible Fahrzeugvermietung für Privatpersonen, Unternehmen und Berufsfahrer",
          path: "zuriauto.ch/rentals",
          photo: "zuriauto-rentals",
        },
        {
          name: "zuriauto Repairs",
          offer: "Werkstatt, Diagnose und Wartung, spezialisiert auf Hybrid- und Elektrofahrzeuge",
          path: "zuriauto.ch/repairs",
          photo: "zuriauto-repairs",
        },
        {
          name: "zuriauto Trade",
          offer: "An- und Verkauf, Bewertung und Fahrzeugbeschaffung, Import und Export auf Anfrage",
          path: "zuriauto.ch/trade",
          photo: "zuriauto-trade",
        },
        {
          name: "zuriauto Parts",
          offer: "Original- (OEM) und hochwertige Nachbau-Ersatzteile sowie Zubehör",
          path: "zuriauto.ch/parts",
          photo: "zuriauto-parts",
        },
      ],
    },
    carseek: {
      descriptor: "Der Schweizer Automarktplatz",
      text: "Ein digitaler Marktplatz, der Käufer und Verkäufer von Fahrzeugen in der ganzen Schweiz zusammenbringt: Privatpersonen, Händler und Garagen an einem Ort.",
      launch: "Start am 1. Dezember 2026",
    },
    trackmycar24: {
      descriptor: "GPS-Ortung und Diebstahlschutz",
      text: "GPS-Ortung für Privatpersonen und Firmenflotten.",
      features: [
        "Fahrzeugstandort in Echtzeit",
        "Diebstahlschutz",
        "Fernabschaltung des Motors bei kompatiblen Fahrzeugen, unter sicheren Betriebsbedingungen und gemäss den gesetzlichen Vorgaben",
      ],
    },
  },
  strategy: {
    headline: "Eine skalierbare Automobilgruppe aufbauen.",
    intro:
      "Unsere heutigen Marken bilden das Fundament. Jedes Geschäftsfeld ist mit seinem Status gekennzeichnet, damit Kunden und Partner wissen, was heute verfügbar und was geplant ist.",
    table: { area: "Geschäftsfeld", covers: "Inhalt", status: "Status" },
    areas: [
      {
        area: "Mobilität und Vermietung",
        covers: "Fahrzeugvermietung und Flottenlösungen",
        status: "active",
        statusText: "Aktiv — zuriauto Rentals",
      },
      {
        area: "Werkstatt",
        covers: "Wartung, Diagnose, Reparaturen, Hybrid- und EV-Service, Bewertung",
        status: "active",
        statusText: "Aktiv — zuriauto Repairs",
      },
      {
        area: "Fahrzeughandel",
        covers: "An- und Verkauf, Beschaffung und Vermittlung",
        status: "active",
        statusText: "Aktiv — zuriauto Trade",
      },
      {
        area: "Ersatzteile",
        covers: "OEM- und Nachbauteile, Zubehör und Komponenten",
        status: "active",
        statusText: "Aktiv — zuriauto Parts",
      },
      {
        area: "GPS-Ortung",
        covers: "Fahrzeugortung, Diebstahlschutz, Fernabschaltung",
        status: "active",
        statusText: "Aktiv — TrackMyCar24",
      },
      {
        area: "Digitaler Marktplatz",
        covers: "Online-Fahrzeughandel für die Schweiz",
        status: "launching",
        statusText: "Start 1. Dezember 2026 — Carseek.ch",
      },
      {
        area: "Import und Export",
        covers: "Internationale Fahrzeugbeschaffung für einzelne Kunden",
        status: "onRequest",
        statusText: "Auf Anfrage",
      },
      {
        area: "Fahrzeugpflege und Infrastruktur",
        covers: "Autowaschanlage, Aufbereitung, Tankstellen, E-Ladestationen",
        status: "planned",
        statusText: "Geplant",
      },
      {
        area: "Recycling und Kreislaufwirtschaft",
        covers: "Demontage, Verwertung und Wiederverwendung von Fahrzeugen und Teilen",
        status: "planned",
        statusText: "Geplant",
      },
    ],
    plannedNote: "Als «Geplant» gekennzeichnete Geschäftsfelder sind Entwicklungsziele, keine aktuellen Dienstleistungen.",
    growHeading: "So wachsen wir",
    grow: [
      {
        title: "Aufbauen",
        text: "spezialisierte Marken mit klarer Positionierung und Geschäftsmodell entwickeln.",
      },
      {
        title: "Verbinden",
        text: "sich ergänzende Dienstleistungen, Plattformen, Lieferanten und Partner vernetzen.",
      },
      {
        title: "Erweitern",
        text: "neue Segmente erschliessen und internationale Beschaffung und Handel aufbauen.",
      },
      {
        title: "Erneuern",
        text: "in digitale Werkzeuge, Elektrifizierung und neue Mobilitätsmodelle investieren.",
      },
    ],
    goal: "Unser langfristiges Ziel: eine breit aufgestellte Schweizer Automobil- und Mobilitätsgruppe mit starken Marken, verlässlichen Partnerschaften und skalierbaren Abläufen.",
  },
  contact: {
    headline: "Lassen Sie uns sprechen.",
    intro:
      "Sie suchen eine Dienstleistung rund ums Fahrzeug, einen Geschäftspartner oder eine neue Möglichkeit? Kontaktieren Sie uns – wir verbinden Sie mit der richtigen Marke.",
    company: "Rigitrade AG",
    descriptor: "Schweizer Automobil- und Mobilitätsgruppe",
    street: "Schaffhauserstrasse 550",
    city: "8052 Zürich, Schweiz",
    phone: "+41 58 513 99 96",
    phoneHref: "tel:+41585139996",
    email: "info@rigitrade.com",
    hours: "Montag bis Freitag, 08:00–18:00 Uhr",
    uid: "CHE-199.884.159",
    form: {
      heading: "Nachricht senden",
      name: "Name",
      email: "E-Mail",
      company: "Firma",
      topic: "Anliegen",
      topics: ["Allgemeine Anfrage", "zuriauto", "Carseek.ch", "TrackMyCar24", "Partnerschaft"],
      message: "Nachricht",
      consent: "Ich bin einverstanden, dass die Rigitrade AG meine Angaben zur Beantwortung meiner Anfrage bearbeitet. Details in der",
      privacyLink: "Datenschutzerklärung",
      submit: "Nachricht senden",
      sending: "Wird gesendet …",
      success: "Vielen Dank für Ihre Nachricht. Wir melden uns bei Ihnen.",
      error: "Die Nachricht konnte nicht gesendet werden. Bitte schreiben Sie uns an info@rigitrade.com.",
      required: "Pflichtfeld",
    },
  },
  footer: {
    addressLine: "Rigitrade AG · Schaffhauserstrasse 550 · 8052 Zürich",
    disclaimer:
      "zuriauto, Carseek.ch und TrackMyCar24 sind Marken der Rigitrade AG.",
    copyright: "© 2026 Rigitrade AG",
    legal: "Impressum",
    privacy: "Datenschutz",
  },
}

import type { ProseBlock } from "@/components/sections/prose"
import type { Locale } from "./routes"

// Draft texts — to be checked by a lawyer before launch (SEO and setup doc, technical checklist).
const ZEFIX = "https://www.zefix.ch/en/search/entity/list/firm/1690688"
const MAIL = { label: "info@rigitrade.com", href: "mailto:info@rigitrade.com" }
const TEL = { label: "+41 58 513 99 96", href: "tel:+41585139996" }

export const LEGAL_NOTICE: Record<Locale, ProseBlock[]> = {
  de: [
    {
      heading: "Anbieterin",
      body: [
        ["Rigitrade AG\nSchaffhauserstrasse 550, 8052 Zürich, Schweiz"],
        ["Telefon: ", TEL, " · E-Mail: ", MAIL],
      ],
    },
    {
      heading: "Handelsregister",
      body: [
        [
          "Eingetragen im Handelsregister des Kantons Zürich. Firmennummer CH-020-3055523-5, UID CHE-199.884.159.",
        ],
        ["Vertretungsberechtigte Personen gemäss ", { label: "Handelsregistereintrag (Zefix)", href: ZEFIX }, "."],
      ],
    },
    {
      heading: "Marken",
      body: [["zuriauto, Carseek.ch und TrackMyCar24 sind Marken der Rigitrade AG."]],
    },
    {
      heading: "Haftungsausschluss",
      body: [
        [
          "Die Rigitrade AG prüft die Inhalte dieser Website sorgfältig. Für die Richtigkeit, Vollständigkeit und Aktualität der Informationen übernehmen wir jedoch keine Gewähr. Als «Geplant» gekennzeichnete Geschäftsfelder sind Entwicklungsziele, keine aktuellen Dienstleistungen.",
        ],
        ["Für Inhalte verlinkter Websites Dritter sind ausschliesslich deren Betreiber verantwortlich."],
      ],
    },
    {
      heading: "Urheberrechte",
      body: [
        [
          "Texte, Logos und Gestaltung dieser Website gehören der Rigitrade AG oder den genannten Rechteinhabern. Jede Verwendung ausserhalb des privaten Gebrauchs bedarf der schriftlichen Zustimmung.",
        ],
      ],
    },
  ],
  en: [
    {
      heading: "Provider",
      body: [
        ["Rigitrade AG\nSchaffhauserstrasse 550, 8052 Zurich, Switzerland"],
        ["Phone: ", TEL, " · Email: ", MAIL],
      ],
    },
    {
      heading: "Commercial register",
      body: [
        [
          "Registered in the commercial register of the Canton of Zurich. Company number CH-020-3055523-5, UID CHE-199.884.159.",
        ],
        ["Authorised signatories as per the ", { label: "commercial register entry (Zefix)", href: ZEFIX }, "."],
      ],
    },
    {
      heading: "Brands",
      body: [["zuriauto, Carseek.ch and TrackMyCar24 are brands of Rigitrade AG."]],
    },
    {
      heading: "Disclaimer",
      body: [
        [
          "Rigitrade AG checks the content of this website carefully but gives no guarantee that the information is correct, complete or up to date. Business areas marked “Planned” are development goals, not current services.",
        ],
        ["The operators of linked third-party websites are solely responsible for their content."],
      ],
    },
    {
      heading: "Copyright",
      body: [
        [
          "Texts, logos and design of this website belong to Rigitrade AG or the rights holders named. Any use beyond private use requires written permission.",
        ],
      ],
    },
  ],
}

export const PRIVACY: Record<Locale, ProseBlock[]> = {
  de: [
    {
      heading: "Verantwortliche Stelle",
      body: [
        ["Rigitrade AG, Schaffhauserstrasse 550, 8052 Zürich, Schweiz. Für Fragen zum Datenschutz: ", MAIL, "."],
      ],
    },
    {
      heading: "Grundlage",
      body: [
        [
          "Wir bearbeiten Personendaten nach dem Schweizer Bundesgesetz über den Datenschutz (DSG). Soweit die Datenschutz-Grundverordnung der EU (DSGVO) anwendbar ist, beachten wir auch diese.",
        ],
      ],
    },
    {
      heading: "Besuch der Website",
      body: [
        [
          "Beim Aufruf der Website speichert unser Hosting-Anbieter Vercel Inc. technische Daten wie IP-Adresse, Datum und Uhrzeit, aufgerufene Seite und Browsertyp in Server-Logfiles. Diese Daten dienen dem sicheren und stabilen Betrieb der Website und werden nicht mit anderen Daten zusammengeführt.",
        ],
      ],
    },
    {
      heading: "Reichweitenmessung",
      body: [
        [
          "Wir verwenden Vercel Web Analytics, um anonym zu messen, welche Seiten wie oft aufgerufen werden. Dabei werden keine Cookies gesetzt und keine Nutzerprofile erstellt.",
        ],
      ],
    },
    {
      heading: "Kontaktaufnahme",
      body: [
        [
          "Wenn Sie uns per E-Mail, Telefon oder Kontaktformular kontaktieren, bearbeiten wir Ihre Angaben (Name, E-Mail, Firma, Nachricht), um Ihre Anfrage zu beantworten und an die zuständige Marke der Gruppe weiterzuleiten. Formulareingaben werden über den Dienst Formspree übermittelt.",
        ],
      ],
    },
    {
      heading: "Bekanntgabe ins Ausland",
      body: [
        [
          "Vercel und Formspree können Daten in den USA bearbeiten. Die Bekanntgabe erfolgt gestützt auf das Swiss-U.S. Data Privacy Framework oder auf Standardvertragsklauseln.",
        ],
      ],
    },
    {
      heading: "Aufbewahrung",
      body: [
        [
          "Wir bewahren Personendaten nur so lange auf, wie es für den jeweiligen Zweck nötig ist oder gesetzliche Aufbewahrungspflichten es verlangen.",
        ],
      ],
    },
    {
      heading: "Ihre Rechte",
      body: [
        [
          "Sie können jederzeit Auskunft über Ihre Daten verlangen, deren Berichtigung oder Löschung beantragen und der Bearbeitung widersprechen. Wenden Sie sich dazu an ",
          MAIL,
          ".",
        ],
      ],
    },
    {
      heading: "Änderungen",
      body: [["Wir können diese Datenschutzerklärung anpassen. Es gilt die auf dieser Seite veröffentlichte Fassung."]],
    },
  ],
  en: [
    {
      heading: "Controller",
      body: [["Rigitrade AG, Schaffhauserstrasse 550, 8052 Zurich, Switzerland. For data protection questions: ", MAIL, "."]],
    },
    {
      heading: "Legal basis",
      body: [
        [
          "We process personal data under the Swiss Federal Act on Data Protection (FADP). Where the EU General Data Protection Regulation (GDPR) applies, we also comply with it.",
        ],
      ],
    },
    {
      heading: "Visiting the website",
      body: [
        [
          "When you open the website, our hosting provider Vercel Inc. stores technical data such as IP address, date and time, the page requested and browser type in server log files. This data is used to run the website securely and reliably and is not combined with other data.",
        ],
      ],
    },
    {
      heading: "Audience measurement",
      body: [
        [
          "We use Vercel Web Analytics to measure anonymously which pages are viewed and how often. No cookies are set and no user profiles are created.",
        ],
      ],
    },
    {
      heading: "Contacting us",
      body: [
        [
          "When you contact us by email, phone or the contact form, we process your details (name, email, company, message) to answer your enquiry and pass it on to the right brand of the group. Form entries are transmitted via the Formspree service.",
        ],
      ],
    },
    {
      heading: "Transfers abroad",
      body: [
        [
          "Vercel and Formspree may process data in the USA. Transfers are based on the Swiss-U.S. Data Privacy Framework or on standard contractual clauses.",
        ],
      ],
    },
    {
      heading: "Retention",
      body: [
        [
          "We keep personal data only as long as needed for the purpose concerned or as required by statutory retention duties.",
        ],
      ],
    },
    {
      heading: "Your rights",
      body: [
        [
          "You may at any time request access to your data, ask for it to be corrected or deleted, and object to its processing. Please write to ",
          MAIL,
          ".",
        ],
      ],
    },
    {
      heading: "Changes",
      body: [["We may update this privacy policy. The version published on this page applies."]],
    },
  ],
}

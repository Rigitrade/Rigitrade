import { z } from "zod"

export const imageSchema = z.object({
  src: z.string().min(1),
  alt: z.string().min(1, "Alt text is required for accessibility"),
})

export const ctaSchema = z.object({
  label: z.string().min(1),
  href: z.string().min(1),
})

const heroSchema = z.object({
  number: z.string(),
  label: z.string(),
  headline: z.string(),
  subhead: z.string(),
  body: z.string(),
  primaryCta: ctaSchema,
  secondaryCta: ctaSchema,
  image: imageSchema,
})

const trustSchema = z.object({
  items: z.array(z.string()).min(1),
})

const solutionItemSchema = z.object({
  title: z.string(),
  spec: z.string(),
  description: z.string(),
  image: imageSchema,
  href: z.string(),
})

const solutionsSchema = z.object({
  number: z.string(),
  intro: z.string(),
  items: z.array(solutionItemSchema).min(1),
})

const alloySchema = z.object({
  name: z.string(),
  family: z.string(),
  maxTemp: z.string(),
  corrosionRating: z.string(),
  tensileStrength: z.string(),
  keyApplications: z.array(z.string()).min(1),
})

const materialsSchema = z.object({
  number: z.string(),
  callout: z.string(),
  alloys: z.array(alloySchema).min(1),
})

const pillarSchema = z.object({
  title: z.string(),
  points: z.array(z.string()).min(1),
})

const pillarsSchema = z.object({
  number: z.string(),
  left: pillarSchema,
  right: pillarSchema,
})

const commodityGroupSchema = z.object({
  title: z.string(),
  items: z.array(z.string()).min(1),
})

const commoditiesBlockSchema = z.object({
  number: z.string(),
  intro: z.string(),
  groups: z.array(commodityGroupSchema).min(1),
  href: z.string(),
})

const finalCtaSchema = z.object({
  headline: z.string(),
  primaryCta: ctaSchema,
  secondaryCta: ctaSchema,
})

export const homeSchema = z.object({
  hero: heroSchema,
  trust: trustSchema,
  solutions: solutionsSchema,
  materials: materialsSchema,
  pillars: pillarsSchema,
  commodities: commoditiesBlockSchema,
  finalCta: finalCtaSchema,
})

const pageHeaderSchema = z.object({
  number: z.string(),
  label: z.string(),
  title: z.string(),
  intro: z.string(),
})

export const solutionsPageSchema = z.object({
  pageHeader: pageHeaderSchema,
  sections: z
    .array(
      z.object({
        number: z.string(),
        title: z.string(),
        spec: z.string(),
        body: z.string(),
        image: imageSchema,
      }),
    )
    .min(1),
})

export const materialsPageSchema = z.object({
  pageHeader: pageHeaderSchema,
  comparisonNote: z.string(),
  alloys: z.array(alloySchema).min(1),
  selectionGuidance: z.array(
    z.object({
      question: z.string(),
      answer: z.string(),
    }),
  ),
})

export const commoditiesPageSchema = z.object({
  pageHeader: pageHeaderSchema,
  groups: z.array(commodityGroupSchema).min(1),
})

export const aboutPageSchema = z.object({
  pageHeader: pageHeaderSchema,
  holding: z.object({
    title: z.string(),
    body: z.string(),
    sisterBrands: z.array(
      z.object({
        name: z.string(),
        domain: z.string(),
        sector: z.string(),
      }),
    ),
  }),
})

export const contactPageSchema = z.object({
  pageHeader: pageHeaderSchema,
  office: z.object({
    address: z.string(),
    phone: z.string(),
    email: z.string().email(),
    hours: z.string(),
  }),
})

export const privacyPageSchema = z.object({
  pageHeader: pageHeaderSchema,
  lastUpdated: z.string(),
})

export const navSchema = z.object({
  links: z.array(
    z.object({
      label: z.string(),
      href: z.string(),
    }),
  ),
  cta: ctaSchema,
})

export const footerSchema = z.object({
  office: z.object({
    address: z.string(),
    company: z.string(),
    cheNumber: z.string().optional(),
  }),
  contact: z.object({
    email: z.string().email(),
    phone: z.string(),
  }),
  sisterBrands: z.array(
    z.object({
      name: z.string(),
      href: z.string(),
    }),
  ),
  legal: z.array(
    z.object({
      label: z.string(),
      href: z.string(),
    }),
  ),
  social: z.array(
    z.object({
      platform: z.enum(["linkedin", "twitter", "facebook", "instagram"]),
      href: z.string().url(),
    }),
  ),
})

export const trustStripSchema = z.object({
  items: z.array(z.string()).min(1),
})

export type ImageContent = z.infer<typeof imageSchema>
export type CtaContent = z.infer<typeof ctaSchema>
export type HomeContent = z.infer<typeof homeSchema>
export type SolutionsPageContent = z.infer<typeof solutionsPageSchema>
export type MaterialsPageContent = z.infer<typeof materialsPageSchema>
export type CommoditiesPageContent = z.infer<typeof commoditiesPageSchema>
export type AboutPageContent = z.infer<typeof aboutPageSchema>
export type ContactPageContent = z.infer<typeof contactPageSchema>
export type PrivacyPageContent = z.infer<typeof privacyPageSchema>
export type NavContent = z.infer<typeof navSchema>
export type FooterContent = z.infer<typeof footerSchema>
export type TrustStripContent = z.infer<typeof trustStripSchema>

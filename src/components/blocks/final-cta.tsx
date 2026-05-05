import { Container } from "@/components/primitives/container"
import { Section } from "@/components/primitives/section"
import { Stack } from "@/components/primitives/stack"
import { Cluster } from "@/components/primitives/cluster"
import { LinkButton } from "@/components/ui/link-button"
import { DisplayHeading } from "@/components/typography/display-heading"
import type { HomeContent } from "@/lib/content/schema"

type FinalCtaProps = {
  finalCta: HomeContent["finalCta"]
  locale: "en" | "de"
}

export function FinalCta({ finalCta, locale }: FinalCtaProps) {
  return (
    <Section surface="ink" density="loose">
      <Container>
        <div className="max-w-3xl">
          <Stack gap="6">
            <DisplayHeading as="h2" size="display-m" className="text-paper">
              {finalCta.headline}
            </DisplayHeading>
            {finalCta.body && (
              <p className="max-w-[60ch] text-body-l text-paper/80">
                {finalCta.body}
              </p>
            )}
            <Cluster gap="3">
              <LinkButton
                href={`/${locale}${finalCta.primaryCta.href}`}
                variant="primary"
                size="lg"
              >
                {finalCta.primaryCta.label}
              </LinkButton>
              <LinkButton
                href={`/${locale}${finalCta.secondaryCta.href}`}
                variant="inverted"
                size="lg"
              >
                {finalCta.secondaryCta.label}
              </LinkButton>
            </Cluster>
          </Stack>
        </div>
      </Container>
    </Section>
  )
}

export type ProsePart = string | { label: string; href: string }
export type ProseBlock = { heading: string; body: ProsePart[][] }

/** Plain legal text: headings and paragraphs, with inline links. */
export function Prose({ blocks }: { blocks: ProseBlock[] }) {
  return (
    <div className="max-w-3xl space-y-10">
      {blocks.map((block) => (
        <section key={block.heading}>
          <h2 className="text-h3">{block.heading}</h2>
          {block.body.map((para, i) => (
            <p key={i} className="mt-3 whitespace-pre-line text-ink-muted">
              {para.map((part, j) =>
                typeof part === "string" ? (
                  <span key={j}>{part}</span>
                ) : (
                  <a
                    key={j}
                    href={part.href}
                    className="font-semibold text-navy underline underline-offset-2"
                  >
                    {part.label}
                  </a>
                ),
              )}
            </p>
          ))}
        </section>
      ))}
    </div>
  )
}

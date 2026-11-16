// Custom next/image loader for the static export.
// `npm run photos` writes every photo as /img/<name>-<width>.webp in these widths.
export const PHOTO_WIDTHS = [640, 1080, 1600, 2400] as const

type LoaderArgs = { src: string; width: number; quality?: number }

export default function photoLoader({ src, width }: LoaderArgs): string {
  // Anything that is not a managed photo (SVG logos, PNG icons) is served as is.
  const match = /^\/img\/([a-z0-9-]+)$/.exec(src)
  if (!match) return src
  const best = PHOTO_WIDTHS.find((w) => w >= width) ?? PHOTO_WIDTHS[PHOTO_WIDTHS.length - 1]
  return `/img/${match[1]}-${best}.webp`
}

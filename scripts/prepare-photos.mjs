// Turns the selected master photos into web sizes for the custom image loader.
//   node scripts/prepare-photos.mjs <source-dir>
// Source files are named after their slot (e.g. hero-zurich.jpg). Output:
//   public/img/<slot>-<width>.webp for each width in PHOTO_WIDTHS.
import { readdir, mkdir } from "node:fs/promises"
import path from "node:path"
import sharp from "sharp"

const WIDTHS = [640, 1080, 1600, 2400]
const src = process.argv[2] ?? "photos"
const out = path.join(process.cwd(), "public", "img")
await mkdir(out, { recursive: true })

const files = (await readdir(src)).filter((f) => /\.(jpe?g|png|webp)$/i.test(f))
for (const file of files) {
  const slot = path.parse(file).name.toLowerCase()
  for (const width of WIDTHS) {
    await sharp(path.join(src, file))
      .rotate()
      .resize({ width, withoutEnlargement: false })
      .webp({ quality: width >= 1600 ? 72 : 78 })
      .toFile(path.join(out, `${slot}-${width}.webp`))
  }
  console.log(`✓ ${slot}`)
}

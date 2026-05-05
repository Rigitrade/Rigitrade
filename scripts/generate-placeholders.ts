import { writeFile, mkdir } from "node:fs/promises"
import { existsSync } from "node:fs"
import path from "node:path"
import sharp from "sharp"

type Placeholder = {
  out: string
  width: number
  height: number
  bg: { r: number; g: number; b: number }
  label: string
}

const PLACEHOLDERS: Placeholder[] = [
  {
    out: "public/img/hero/specimen.jpg",
    width: 1600,
    height: 2000,
    bg: { r: 31, g: 41, b: 55 },
    label: "INCONEL 718",
  },
  {
    out: "public/img/solutions/high-temp.jpg",
    width: 1200,
    height: 960,
    bg: { r: 194, g: 65, b: 12 },
    label: "HIGH TEMP",
  },
  {
    out: "public/img/solutions/corrosion.jpg",
    width: 1200,
    height: 960,
    bg: { r: 31, g: 41, b: 55 },
    label: "CORROSION",
  },
  {
    out: "public/img/solutions/high-pressure.jpg",
    width: 1200,
    height: 960,
    bg: { r: 11, g: 15, b: 20 },
    label: "HIGH PRESSURE",
  },
  {
    out: "public/img/solutions/castings.jpg",
    width: 1200,
    height: 960,
    bg: { r: 80, g: 60, b: 40 },
    label: "CASTINGS",
  },
]

async function generate(p: Placeholder) {
  const dir = path.dirname(p.out)
  if (!existsSync(dir)) await mkdir(dir, { recursive: true })

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${p.width}" height="${p.height}">
    <rect width="100%" height="100%" fill="rgb(${p.bg.r},${p.bg.g},${p.bg.b})" />
    <text x="50%" y="50%" font-family="monospace" font-size="${p.width / 16}" fill="rgba(250,250,247,0.4)" text-anchor="middle" dominant-baseline="middle" letter-spacing="${p.width / 100}">${p.label}</text>
  </svg>`

  const buffer = await sharp(Buffer.from(svg)).jpeg({ quality: 80 }).toBuffer()
  await writeFile(p.out, buffer)
  console.log(`✓ ${p.out}`)
}

async function main() {
  for (const p of PLACEHOLDERS) await generate(p)
  console.log("Done.")
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})

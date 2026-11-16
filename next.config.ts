import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  // Static export: the site is plain HTML on Vercel's CDN.
  output: "export",
  trailingSlash: true,
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    // Photos are pre-sized by `npm run photos`; the loader maps each request
    // to the nearest generated width so <Image> still emits a real srcset.
    loader: "custom",
    loaderFile: "./src/lib/image-loader.ts",
  },
  experimental: {
    // German and English use separate root layouts (lang="de-CH" / "en"),
    // so the 404 page is defined once at the routing level.
    globalNotFound: true,
  },
}

export default nextConfig

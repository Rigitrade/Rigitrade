import "../globals.css"
import { Document, rootMetadata, rootViewport } from "@/components/layout/document"

export const metadata = rootMetadata
export const viewport = rootViewport

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <Document locale="en">{children}</Document>
}

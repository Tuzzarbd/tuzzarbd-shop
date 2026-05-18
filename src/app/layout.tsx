import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Tuzzarbd - বাংলাদেশের অনলাইন শপ',
  description: 'সেরা পণ্য, সেরা দামে',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="bn">
      <body>{children}</body>
    </html>
  )
}

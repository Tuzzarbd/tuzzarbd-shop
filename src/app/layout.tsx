export const metadata = {
  title: "tuzzarbd — ফ্যাশন, গ্যাজেট ও বিউটি",
  description: "বাংলাদেশের প্রিমিয়াম অনলাইন শপ",
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

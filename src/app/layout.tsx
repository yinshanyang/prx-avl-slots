import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Paper Rex | Alecks’ Top Secret Line-Up Picker',
  description: 'Paper Rex Presents: Alecks’ Top Secret Line-Up Picker',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-purple">{children}</body>
    </html>
  )
}

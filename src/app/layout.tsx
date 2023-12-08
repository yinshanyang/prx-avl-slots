import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Paper Rex | Alecks’ Top Secret Roster Generator',
  description: 'Generate a Paper Rex line-up for the next match',
  openGraph: {
    title: 'Paper Rex | Alecks’ Top Secret Roster Generator',
    description: 'Generate a Paper Rex line-up for the next match',
    images: 'https://prx-avl-roster.vercel.app/og-image.png',
  },
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

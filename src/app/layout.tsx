import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Paper Rex | Alecks’ Top Secret Roster Generator',
  description: 'Paper Rex Presents: Alecks’ Top Secret Roster Generator',
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

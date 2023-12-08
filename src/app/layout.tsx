import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'we need a title',
  description: 'and a description',
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

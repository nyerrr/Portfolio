import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Rainier Burlasa - Full-Stack Developer',
  description: 'Full-stack developer with 5 years of experience building scalable web products.',
}
  
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
import type { Metadata } from 'next'
import { Montserrat_Alternates } from 'next/font/google'
import './globals.css'

const m = Montserrat_Alternates({
  subsets: ['latin'],
  weight: '400',
})

export const metadata: Metadata = {
  title: 'Caroline Souza Design',
  description: 'Portfolio',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${m.className} antialiased`}>{children}</body>
    </html>
  )
}

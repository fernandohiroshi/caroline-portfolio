import type { Metadata } from 'next'
import './globals.css'
import { Montserrat_Alternates } from 'next/font/google'
import Link from 'next/link'
import { PiArrowCircleUpFill } from 'react-icons/pi'

import { Footer } from '@/components/view/footer/Footer'
import { Header } from '@/components/view/header/Header'

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
    <html lang="pt-BR" className="!scroll-smooth">
      <body className={`${m.className} antialiased`}>
        <Header />
        {children}
        <Footer />
        <Link href="#" className="fixed bottom-3 right-3">
          <PiArrowCircleUpFill
            size={30}
            className="opacity-60 duration-300 ease-in-out hover:scale-110 hover:opacity-100"
          />
        </Link>
      </body>
    </html>
  )
}

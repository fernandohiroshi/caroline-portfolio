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
  description:
    'Portfolio de Caroline Souza, especializada em design gráfico, fotografia profissional, UX/UI e muito mais.',
  keywords: [
    'Design gráfico',
    'Fotografia profissional',
    'UX/UI design',
    'Interface do usuário',
    'Experiência do usuário',
    'Identidade visual',
    'Branding',
    'Tipografia',
    'Ilustração digital',
    'Portfólio criativo',
    'Direção de arte',
    'Marketing digital',
    'Redes sociais',
    'Gestão de conteúdo',
    'Estratégias visuais',
    'Publicidade online',
    'Edição de imagens',
    'Criação de logotipos',
    'Layout responsivo',
    'Estratégias de engajamento',
  ],
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  },
  openGraph: {
    title: 'Caroline Souza Design - Portfolio',
    description:
      'Explore o portfólio de Caroline Souza, uma profissional em design gráfico, UX/UI, fotografia e branding, com um olhar criativo e estratégico.',
    url: 'https://carolinesouzadesign.art',
    siteName: 'Caroline Souza Design',
    images: [
      {
        url: 'https://imgix.cosmicjs.com/a2cf1460-ae33-11ef-8a63-eb57d6c77a36-carolinesouzasite.png',
        width: 1200,
        height: 630,
        alt: 'Visão geral do portfólio de Caroline Souza Design',
      },
    ],
  },
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
            size={50}
            className="opacity-60 duration-300 ease-in-out hover:scale-110 hover:opacity-100"
          />
        </Link>
      </body>
    </html>
  )
}

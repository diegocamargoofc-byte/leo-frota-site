import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Evento Presencial | Transforme sua Imagem em Autoridade',
  description: 'Um evento presencial de 4 horas para transformar sua imagem em autoridade que atrai oportunidades de alto valor.',
  generator: 'v0.app',
  openGraph: {
    title: 'Evento Presencial | Transforme sua Imagem em Autoridade',
    description: 'Um evento presencial de 4 horas para transformar sua imagem em autoridade que atrai oportunidades de alto valor.',
    url: 'https://www.leonardofrota.com.br',
    siteName: 'Leonardo Frota',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 1200,
        alt: 'Destrave seu Potencial Digital',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Evento Presencial | Transforme sua Imagem em Autoridade',
    description: 'Um evento presencial de 4 horas para transformar sua imagem em autoridade que atrai oportunidades de alto valor.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: [
      {
        url: '/favicon-logo.png',
        type: 'image/png',
        sizes: '512x512',
      },
    ],
    shortcut: '/favicon-logo.png',
    apple: '/favicon-logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}

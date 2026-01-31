import React from "react"
import type { Metadata, Viewport } from 'next'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Hamburguesas Smash San Isidro | BAJONEANDO SMASH',
  description: 'Las mejores hamburguesas smash artesanales en San Isidro. Entrega en 15-30 minutos. Envío gratis. Pedí por WhatsApp ahora.',
  keywords: 'hamburguesas smash san isidro, smash burger, delivery hamburguesas, bajoneando smash',
  openGraph: {
    title: 'Hamburguesas Smash San Isidro | BAJONEANDO SMASH',
    description: 'Las mejores hamburguesas smash artesanales en San Isidro. Entrega en 15-30 minutos.',
    type: 'website',
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#000000',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://api.whatsapp.com" />
        <link rel="dns-prefetch" href="https://api.whatsapp.com" />
      </head>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}


import { ViewTransitions } from 'next-view-transitions'

import "./globals.css";

import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'AllStar Tattoo Studio',
  description: 'Studio di tatuaggi professionale',
  icons: {
    icon: '/icon.ico', // Percorso relativo alla cartella public o gestito da Next.js in app/
    // Se hai versioni diverse puoi aggiungerle qui:
    apple: '/apple-touch-icon.png', 
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="it">
    
          <body >
          {children}
          </body>
      </html>
    </ViewTransitions>
  )
}

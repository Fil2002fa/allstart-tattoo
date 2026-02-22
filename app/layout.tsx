
import { ViewTransitions } from 'next-view-transitions'

import "./globals.css";
import { Bebas_Neue, Overpass_Mono, Metal_Mania, Playfair_Display_SC } from '@next/font/google';
import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Ink Tatto Studio', 
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

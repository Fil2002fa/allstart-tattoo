import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ViewTransitions } from 'next-view-transitions'
 
import AppWrapper from "./components/AppWrapper"; // Importiamo il nuovo wrapper

// ... (le definizioni dei font e metadata rimangono uguali) ...
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
        <body>{children}</body>
      </html>
    </ViewTransitions>
  )
}

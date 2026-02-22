// app/fonts.ts
import { Playfair_Display_SC, Overpass_Mono, Metal_Mania, Urbanist } from "next/font/google";

export const playfair = Playfair_Display_SC({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-playfair",
  display: "swap",
});

export const overpass = Overpass_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-overpass",
  display: "swap",
});

export const metal = Metal_Mania({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-metal",
  display: "swap",
});

export const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-urbanist",
  display: "swap",
});
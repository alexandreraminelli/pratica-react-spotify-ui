import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Spotify",
  description: "Listen to music.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      {/* Classes:
       * - `bg-zinc-`: cor do fundo
       * - `text-zinc-`: cor do texto
       */}
      <body className="bg-zinc-800 text-zinc-50">{children}</body>
    </html>
  )
}

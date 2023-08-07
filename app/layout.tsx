import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { pageMetaData } from '@/constants/pageMetaData'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: pageMetaData.title,
  description: pageMetaData.description,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

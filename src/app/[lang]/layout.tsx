import clsx from 'clsx'
import '../globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Megazod Form',
  description: 'Megazod to validate forms',
  icons: '/icon.png',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={clsx(inter.variable, 'bg-dark font-inter text-gray-100')}
      >
        {children}
      </body>
    </html>
  )
}

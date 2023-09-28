import clsx from 'clsx'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import PageSidebar from './components/Sidebar'

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
        <main className="container flex h-full min-h-screen gap-16">
          <div className="flex max-w-xs flex-[1] items-center justify-end py-16 max-lg:hidden">
            <PageSidebar />
          </div>
          <div className="flex flex-[2] items-center justify-center">
            <div className="flex w-full max-w-md flex-col gap-16 py-16">
              {children}
            </div>
          </div>
        </main>
      </body>
    </html>
  )
}

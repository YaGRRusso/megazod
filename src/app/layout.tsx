import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import PageSidebar from './components/Sidebar'
import { Providers } from './providers'
import Body from './components/Body'
import clsx from 'clsx'

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
      <Providers>
        <Body className={clsx(inter.variable, 'font-inter')}>
          <div className="text-gray-900 transition-all duration-300 dark:bg-dark dark:text-gray-100">
            <main className="container flex h-full min-h-screen gap-16">
              <PageSidebar />
              <div className="flex flex-[2] items-center justify-center">
                <div className="flex w-full max-w-md flex-col gap-16 py-16">
                  {children}
                </div>
              </div>
            </main>
          </div>
        </Body>
      </Providers>
    </html>
  )
}

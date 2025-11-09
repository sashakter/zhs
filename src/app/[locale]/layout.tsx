// app/[locale]/layout.tsx
import type { Metadata } from 'next'
import { Playfair_Display } from 'next/font/google'
import '@/src/app/globals.css'
import NavBar from '../components/NavBar/NavBar'
import Footer from '../components/Footer'
import AgeVerificationModal from '../components/AgeVerificationModal'
import { NextIntlClientProvider } from 'next-intl'
import StoreProvider from '../../StoreProvider'
import { Providers } from '@/src/app/providers'
import CookieConsent from '../components/CookieConsent'
import React from 'react'
import { locales, defaultLocale } from '@/src/i18n/config'

const playfair = Playfair_Display({ subsets: ['cyrillic', 'latin'] })

export const metadata: Metadata = {
  title: 'Alcotrade UA',
  description: 'Alcohol company',
  icons: '/favicon.svg',
}

type Props = {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

export default async function RootLayout({ children, params }: Props) {
  const { locale } = await params
  const currentLocale = locales.includes(locale as (typeof locales)[number])
    ? locale
    : defaultLocale

  const messages = (await import(`@/src/messages/${currentLocale}.json`))
    .default

  return (
    <html lang={currentLocale} className="scroll-smooth" data-scroll-behavior="smooth">
      <body
        className={`${playfair.className} flex flex-col justify-center text-white`}
      >
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-white focus:text-black">
          Skip to main content
        </a>
        <StoreProvider count={0}>
          <NextIntlClientProvider locale={currentLocale} messages={messages}>
            <Providers>
              <div>
                <AgeVerificationModal />
                <CookieConsent />
              </div>
              <NavBar />
              <main id="main-content">
                {children}
              </main>
              <Footer />
            </Providers>
          </NextIntlClientProvider>
        </StoreProvider>
      </body>
    </html>
  )
}

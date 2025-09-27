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

const playfair = Playfair_Display({ subsets: ['cyrillic', 'latin'] })

export const metadata: Metadata = {
  title: 'Alcotrade UA',
  description: 'Alcohol company',
  icons: '/favicon.svg',
}

type Props = {
  children: React.ReactNode
  params: Promise<{ locale: 'uk' | 'en' }>
}

export default async function RootLayout({ children, params }: Props) {
  const { locale } = await params
  const messages = (await import(`@/src/messages/${locale}.json`)).default

  return (
    <html lang={locale} className="scroll-smooth">
      <body
        className={`${playfair.className} flex flex-col justify-center text-white`}
      >
        <StoreProvider count={0}>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <Providers>
              <div>
                <AgeVerificationModal />
                <CookieConsent />
              </div>
              <NavBar />
              {children}
              <Footer />
            </Providers>
          </NextIntlClientProvider>
        </StoreProvider>
      </body>
    </html>
  )
}

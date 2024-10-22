import type { Metadata } from 'next'
import { Playfair_Display } from 'next/font/google'
import '@/app/globals.css'
import NavBar from '../components/NavBar/NavBar'
import Footer from '../components/Footer'
import AgeVerificationModal from '../components/AgeVerificationModal'
import { ReactLenis } from '@studio-freight/react-lenis'
import { NextIntlClientProvider } from 'next-intl'
import StoreProvider from '../../StoreProvider'
import { getMessages } from 'next-intl/server'
import { locales } from '@/config'

const playfair = Playfair_Display({ subsets: ['cyrillic', 'latin'] })

export const metadata: Metadata = {
  title: 'Alcotrade UA',
  description: 'Alcohol company',
  icons: '/favicon.svg',
}

type Props = {
  children: React.ReactNode
  params: { locale: string }
}

export default async function RootLayout({
  children,
  params: { locale },
}: Props) {
  const messages = await getMessages({ locale })

  const lenisOptions = {
    lerp: 0.1,
    duration: 1.5,
    smoothTouch: false,
    smooth: true,
  }

  return (
    <html lang={locale} className="scroll-smooth">
      <body
        className={`${playfair.className} flex flex-col justify-center text-white`}
      >
        <StoreProvider count={0}>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <div>
              <AgeVerificationModal />
            </div>
            <NavBar />
            {children}
            <Footer />
          </NextIntlClientProvider>
        </StoreProvider>
      </body>
    </html>
  )
}

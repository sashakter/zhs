import type { Metadata } from 'next'
import { Rubik, Outfit } from 'next/font/google'
import './globals.css'
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer'
import AgeVerificationModal from './components/AgeVerificationModal'
import { ReactLenis } from '@studio-freight/react-lenis'
const rubik = Rubik({ subsets: ['cyrillic', 'latin'] })

export const metadata: Metadata = {
  title: 'Alcotrade UA',
  description: 'Alcohol company',
  icons: '/favicon.svg',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const lenisOptions = {
    lerp: 0.1,
    duration: 1.5,
    smoothTouch: false, //smooth scroll for touch devices
    smooth: true,
  }
  return (
    <html lang="uk" className="scroll-smooth">
      <body
        className={`${rubik.className} flex flex-col justify-center bg-black text-white`}
      >
        <div>
          <AgeVerificationModal />
        </div>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}

import type { Metadata } from 'next'
import { Rubik, Outfit } from 'next/font/google'
import './globals.css'
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer'

const rubik = Rubik({ subsets: ['cyrillic', 'latin'] })
const outfit = Outfit({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Alcotrade UA',
  description: 'Alcohol company',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="uk">
      <body
        className={`${rubik.className} flex flex-col justify-center bg-black text-white`}
      >
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}

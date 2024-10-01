'use client'
import Image from 'next/image'
import ContactBar from './ContactBar'
import Link from 'next/link'
import { useState } from 'react'

interface Licenze {
  description: string
}

const Footer: React.FC = () => {
  const [showLicenseInfo, setShowLicenseInfo] = useState<boolean>(false)

  const licenze: Licenze = {
    description: '№ 990108201900005',
  }

  const handleLicenseClick = () => {
    setShowLicenseInfo(!showLicenseInfo)  // Тоглити стан для відображення
  }

  return (
    <footer className="relative flex flex-col gap-10 px-5 pb-3 pt-10">
      {/* <div className="absolute z-20 inset-0 bg-black opacity-90"></div> */}
      <div className="absolute inset-0 z-0">
        <Image
          src={'/footer-bkg-2.jpg'}
          alt="background photo"
          fill={true}
          className="object-cover"
          quality={100}
        />
      </div>
      <div className="absolute inset-0 z-0 bg-[#000] opacity-80"></div>
      <h3 className="relative text-center text-xl font-semibold uppercase md:text-2xl lg:text-3xl">
        <span className="text-yellow">СПОЖИВАЙТЕ ВІДПОВІДАЛЬНО!</span> НЕ
        ДІЛІТЬСЯ ЦИМ КОНТЕНТОМ З ОСОБАМИ, ЯКІ НЕ ДОСЯГЛИ 18 РОКІВ
      </h3>
      <div className="relative flex flex-col items-center justify-around gap-10 p-4 lg:flex-row lg:flex-wrap">
        <div className="flex flex-col items-center gap-10 font-thin lg:items-start">
          <h2 className="text-center text-4xl">
            ТОВ &quot;АлкоТрейд Україна&quot;
          </h2>
          <ContactBar />
          <a href="tel:+380677066847" className="text-2xl">
            +380(67)-706-68-47
          </a>
          <a
            href="mailto:office@alcotrade.com.ua"
            className="text-2xl uppercase"
          >
            office@alcotrade.com.ua
          </a>
        </div>
        <div className="flex flex-col items-center gap-2 text-2xl font-thin uppercase lg:items-start">
          <Link href={'/products'}>продукція</Link>
          <Link href={'/partners'}>партнерство</Link>
          <button
            type="button"
            className="uppercase"
            onClick={handleLicenseClick}
          >
            ліцензія
          </button>
          {showLicenseInfo && (
            <div className="mb-4">
              <p>{licenze.description}</p>
            </div>
          )}
          <Link href={'/policies'}>політика конфіденційності</Link>
        </div>
        <Image
          src={'/alcotrade-logo.svg'}
          className="max-w-300 max-h-200 mx-auto drop-shadow-2xl lg:mx-0"
          alt="logo"
          priority={true}
          width={300}
          height={300}
        />
      </div>
      <h3 className="relative text-center text-xl uppercase">
        тов &quot;алкотрейд Україна&quot; ©2024 УСІ ПРАВА ЗАХИЩЕНО
      </h3>
    </footer>
  )
}

export default Footer

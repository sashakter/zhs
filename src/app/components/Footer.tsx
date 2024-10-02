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
    setShowLicenseInfo(!showLicenseInfo) // Тоглити стан для відображення
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
        <div className="flex flex-col items-center gap-6 text-2xl font-thin uppercase lg:items-start">
          <Link
            className="relative py-1 after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-white hover:after:w-full hover:after:duration-200"
            href={'/products'}
          >
            продукція
          </Link>
          <Link
            className="relative py-1 after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-white hover:after:w-full hover:after:duration-200"
            href={'/partners'}
          >
            партнерство
          </Link>
          <button
            type="button"
            className="className='py-1 hover:after:duration-200' relative uppercase after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-white hover:after:w-full"
            onClick={handleLicenseClick}
          >
            ліцензія
          </button>
          {showLicenseInfo && (
            <div className="mb-4">
              <p>{licenze.description}</p>
            </div>
          )}
          <Link
            className="relative py-1 after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-white hover:after:w-full hover:after:duration-200"
            href={'/policies'}
          >
            політика конфіденційності
          </Link>
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
      <div className="flex flex-col justify-center gap-6 relative items-center">
        <h3 className="text-center text-xl">
          ТОВ &quot;АлкоТрейд Україна&quot; ©2024 УСІ ПРАВА ЗАХИЩЕНО
        </h3>
        <Link className='text-white relative uppercase className="relative py-1 after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-white hover:after:w-full hover:after:duration-600' href="https://www.instagram.com/kalynaitgroup?igsh=eXB4Y3d5bmNja3hp&utm_source=qr">
          Powered by Kalyna group
        </Link>
      </div>
    </footer>
  )
}

export default Footer

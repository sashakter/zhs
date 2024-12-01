'use client'
import Image from 'next/image'
import ContactBar from './ContactBar'
import { Link } from '@/src/navigation'
import { useState } from 'react'
import { useTranslations } from 'next-intl'

const Footer: React.FC = () => {
  const t = useTranslations('Footer')
  const [showLicenseInfo, setShowLicenseInfo] = useState<boolean>(false)

  const handleLicenseClick = () => {
    setShowLicenseInfo(!showLicenseInfo)
  }

  return (
    <footer className="relative flex flex-col gap-10 px-5 pb-3 pt-10">
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
        <span className="text-white">
          {t.rich('responsibleConsumption', {
            span: (chunks) => <span className="text-yellow">{chunks}</span>,
          })}
        </span>
      </h3>
      <div className="relative flex flex-col items-center justify-around gap-10 p-4 lg:flex-row lg:flex-wrap">
        <div className="flex flex-col items-center gap-10 font-thin max-sm:max-w-xs lg:items-start">
          <h2 className="text-center text-4xl">{t('companyName')}</h2>
          <ContactBar />
          <a href="tel:+380677066847" className="text-2xl">
            {t('contactPhone')}
          </a>
          <a
            href="mailto:office@alcotrade.com.ua"
            className="text-lg uppercase md:text-2xl"
          >
            {t('contactEmail')}
          </a>
        </div>
        <div className="flex flex-col items-center gap-6 text-2xl font-thin uppercase lg:items-start">
          <Link
            className="relative py-1 after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-white hover:after:w-full hover:after:duration-200"
            href={'/products'}
          >
            {t('products')}
          </Link>
          <Link
            className="relative py-1 after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-white hover:after:w-full hover:after:duration-200"
            href={'/partners'}
          >
            {t('partnership')}
          </Link>
          <button
            type="button"
            className="relative py-1 uppercase after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-white hover:after:w-full hover:after:duration-200"
            onClick={handleLicenseClick}
          >
            {t('license')}
          </button>
          {showLicenseInfo && (
            <div className="mb-4">
              <p>{t('licenseInfo')}</p>
            </div>
          )}
          <Link
            className="relative py-1 text-center after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-white hover:after:w-full hover:after:duration-200"
            href={'/policies'}
          >
            {t('privacyPolicy')}
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
      <div className="relative flex flex-col items-center justify-center gap-6">
        <h3 className="text-center text-xl">{t('rightsReserved')}</h3>
        <Link
          className="relative py-1 uppercase text-white after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-white hover:after:w-full hover:after:duration-200"
          href="https://kalynagroup.space"
          target="_blank"
        >
          {t('poweredBy')}
        </Link>
      </div>
    </footer>
  )
}

export default Footer

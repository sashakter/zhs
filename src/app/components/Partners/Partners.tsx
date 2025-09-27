import Image from 'next/image'
import css from './Partners.module.css'
import Title from '../Title'
import Marquee from 'react-fast-marquee'
import { Link } from '@/src/navigation'
import { useTranslations } from 'next-intl'
import PartnersVideo from '../PartnersVideo/PartnersVideo'
import React from 'react'
const Partners: React.FC = () => {
  const t = useTranslations('Partners')
  return (
    <div className="relative mb-[1500px] flex justify-center md:mb-[1400px] lg:mb-[1800px]">
      <div className={`${css.covers} relative bg-custom-capacities`}>
        <div className="absolute inset-0 z-30 bg-black opacity-70"></div>
        <div className={css.content}>
          <div className={css.marquee}>
            <Marquee
              style={{ transform: 'rotate(16deg)' }}
              autoFill={true}
              loop={0}
              gradient={false}
              direction="right"
              speed={40}
            >
              <Image
                src={'/first-partner.jpg'}
                alt="First photo gallery"
                width={853}
                height={1280}
                className={css.imagefirst}
              />
              <Image
                src={'/second-partner.jpg'}
                alt="Second photo gallery"
                width={853}
                height={1280}
                className={css.imagefirst}
              />
              <Image
                src={'/third-partner.jpg'}
                alt="Third photo gallery"
                width={853}
                height={1280}
                className={css.imagefirst}
              />
              <Image
                src={'/fourth-partner.jpg'}
                alt="Fourth photo gallery"
                width={853}
                height={1280}
                className={css.imagefirst}
              />
              <Image
                src={'/fifth-partner.jpg'}
                alt="Fifth photo gallery"
                width={853}
                height={1280}
                className={css.imagefirst}
              />
              <Image
                src={'/six-partner.jpg'}
                alt="Six photo gallery"
                width={853}
                height={1280}
                className={css.imagefirst}
              />
              <Image
                src={'/seven-partner.jpg'}
                alt="Seven photo gallery"
                width={853}
                height={1280}
                className={css.imagefirst}
              />
            </Marquee>
            <Marquee
              style={{ transform: 'rotate(16deg)' }}
              autoFill={true}
              loop={0}
              gradient={false}
              direction="left"
              speed={40}
            >
              <Image
                src={'/seven-partner.jpg'}
                alt="Seven photo gallery"
                width={853}
                height={1280}
                className={css.imagefirst}
              />
              <Image
                src={'/first-partner.jpg'}
                alt="First photo gallery"
                width={853}
                height={1280}
                className={css.imagefirst}
              />
              <Image
                src={'/six-partner.jpg'}
                alt="Six photo gallery"
                width={853}
                height={1280}
                className={css.imagefirst}
              />
              <Image
                src={'/second-partner.jpg'}
                alt="Second photo gallery"
                width={853}
                height={1280}
                className={css.imagefirst}
              />
              <Image
                src={'/fifth-partner.jpg'}
                alt="Fifth photo gallery"
                width={853}
                height={1280}
                className={css.imagefirst}
              />
              <Image
                src={'/third-partner.jpg'}
                alt="Third photo gallery"
                width={853}
                height={1280}
                className={css.imagefirst}
              />
              <Image
                src={'/fourth-partner.jpg'}
                alt="Fourth photo gallery"
                width={853}
                height={1280}
                className={css.imagefirst}
              />
            </Marquee>
            <Marquee
              speed={40}
              style={{ transform: 'rotate(16deg)' }}
              autoFill={true}
              loop={0}
              gradient={false}
              direction="right"
            >
              <Image
                src={'/fifth-partner.jpg'}
                alt="Fifth photo gallery"
                width={853}
                height={1280}
                className={css.imagefirst}
              />
              <Image
                src={'/fourth-partner.jpg'}
                alt="Fourth photo gallery"
                width={853}
                height={1280}
                className={css.imagefirst}
              />
              <Image
                src={'/first-partner.jpg'}
                alt="First photo gallery"
                width={853}
                height={1280}
                className={css.imagefirst}
              />
              <Image
                src={'/second-partner.jpg'}
                alt="Second photo gallery"
                width={853}
                height={1280}
                className={css.imagefirst}
              />
              <Image
                src={'/seven-partner.jpg'}
                alt="Seven photo gallery"
                width={853}
                height={1280}
                className={css.imagefirst}
              />
              <Image
                src={'/six-partner.jpg'}
                alt="Six photo gallery"
                width={853}
                height={1280}
                className={css.imagefirst}
              />
              <Image
                src={'/third-partner.jpg'}
                alt="Third photo gallery"
                width={853}
                height={1280}
                className={css.imagefirst}
              />
            </Marquee>
            <Marquee
              style={{ transform: 'rotate(16deg)' }}
              autoFill={true}
              loop={0}
              gradient={false}
              direction="left"
              speed={40}
            >
              <Image
                src={'/seven-partner.jpg'}
                alt="Seven photo gallery"
                width={853}
                height={1280}
                className={css.imagefirst}
              />
              <Image
                src={'/first-partner.jpg'}
                alt="First photo gallery"
                width={853}
                height={1280}
                className={css.imagefirst}
              />
              <Image
                src={'/six-partner.jpg'}
                alt="Six photo gallery"
                width={853}
                height={1280}
                className={css.imagefirst}
              />
              <Image
                src={'/second-partner.jpg'}
                alt="Second photo gallery"
                width={853}
                height={1280}
                className={css.imagefirst}
              />
              <Image
                src={'/fifth-partner.jpg'}
                alt="Fifth photo gallery"
                width={853}
                height={1280}
                className={css.imagefirst}
              />
              <Image
                src={'/third-partner.jpg'}
                alt="Third photo gallery"
                width={853}
                height={1280}
                className={css.imagefirst}
              />
              <Image
                src={'/fourth-partner.jpg'}
                alt="Fourth photo gallery"
                width={853}
                height={1280}
                className={css.imagefirst}
              />
            </Marquee>
            <Marquee
              style={{ transform: 'rotate(16deg)' }}
              autoFill={true}
              loop={0}
              gradient={false}
              direction="right"
              speed={40}
            >
              <Image
                src={'/first-partner.jpg'}
                alt="First photo gallery"
                width={853}
                height={1280}
                className={css.imagefirst}
              />
              <Image
                src={'/second-partner.jpg'}
                alt="Second photo gallery"
                width={853}
                height={1280}
                className={css.imagefirst}
              />
              <Image
                src={'/third-partner.jpg'}
                alt="Third photo gallery"
                width={853}
                height={1280}
                className={css.imagefirst}
              />
              <Image
                src={'/fourth-partner.jpg'}
                alt="Fourth photo gallery"
                width={853}
                height={1280}
                className={css.imagefirst}
              />
              <Image
                src={'/fifth-partner.jpg'}
                alt="Fifth photo gallery"
                width={853}
                height={1280}
                className={css.imagefirst}
              />
              <Image
                src={'/six-partner.jpg'}
                alt="Six photo gallery"
                width={853}
                height={1280}
                className={css.imagefirst}
              />
              <Image
                src={'/seven-partner.jpg'}
                alt="Seven photo gallery"
                width={853}
                height={1280}
                className={css.imagefirst}
              />
            </Marquee>
          </div>
        </div>
      </div>
      <div className="absolute z-40 px-4 py-24 lg:px-20 lg:py-36">
        {/* Overlay */}
        <div className="relative flex flex-col items-center justify-center gap-14 text-white">
          <Title title={t('title')} />

          <div className="flex flex-col items-center justify-center gap-10 lg:text-2xl">
            <p className="max-w-md text-center">{t('description')}</p>

            <div className="flex flex-col items-center justify-center gap-4">
              <p>{t('findUs')}</p>
              <div className="my-5 flex flex-wrap items-center justify-center gap-10">
                <a
                  href="https://marketopt.info/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    className="w-52"
                    src={'/marketopt.png'}
                    alt="Marketopt Icon"
                    width={666}
                    height={376}
                  />
                </a>
                <a
                  href="https://posad.com.ua/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    className="w-52"
                    src={'/logo-posad.svg'}
                    alt="Posad Icon"
                    width={666}
                    height={376}
                  />
                </a>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-20 lg:flex-nowrap">
              <div className="flex flex-col items-center justify-center gap-2 lg:min-w-[429px] lg:gap-5">
                <p className="max-w-80 text-center lg:max-w-96">
                  {t('mainClientsTitle')}
                </p>
                <ul className="text-left font-semibold">
                  <li>{t('client1')}</li>
                  <li>{t('client2')}</li>
                  <li>{t('client3')}</li>
                  <li>{t('client4')}</li>
                  <li>{t('client5')}</li>
                </ul>
              </div>

              <div className="flex flex-col items-start justify-center gap-2 lg:min-w-[429px] lg:gap-5">
                <p className="content-center text-center">
                  {t('supplierTitle')}
                </p>
                <ul className="text-left font-semibold">
                  <li>{t('supplier1')}</li>
                  <li>{t('supplier2')}</li>
                  <li>{t('supplier3')}</li>
                  <li>{t('supplier4')}</li>
                  <li>{t('supplier5')}</li>
                </ul>
              </div>
            </div>
          </div>

          <Link
            href="/contacts"
            className="mt-4 rounded-sm border border-white bg-white px-5 py-2 text-2xl font-medium uppercase text-black hover:bg-custom-black hover:text-white hover:duration-700"
          >
            {t('contactUs')}
          </Link>
        </div>
        <PartnersVideo />
      </div>
    </div>
  )
}

export default Partners

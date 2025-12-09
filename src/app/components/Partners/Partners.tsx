'use client'

import Image from 'next/image'
import { memo, useMemo } from 'react'
import css from './Partners.module.css'
import Title from '../Title'
import Marquee from 'react-fast-marquee'
import { Link } from '@/src/navigation'
import { useTranslations } from 'next-intl'
import PartnersVideo from '../PartnersVideo/PartnersVideo'

// Константы для изображений партнёров
const PARTNER_IMAGES = [
  { src: '/first-partner.jpg', alt: 'First photo gallery' },
  { src: '/second-partner.jpg', alt: 'Second photo gallery' },
  { src: '/third-partner.jpg', alt: 'Third photo gallery' },
  { src: '/fourth-partner.jpg', alt: 'Fourth photo gallery' },
  { src: '/fifth-partner.jpg', alt: 'Fifth photo gallery' },
  { src: '/six-partner.jpg', alt: 'Six photo gallery' },
  { src: '/seven-partner.jpg', alt: 'Seven photo gallery' },
] as const

const MARQUEE_ORDERS = [
  [0, 1, 2, 3, 4, 5, 6], 
  [6, 0, 5, 1, 4, 2, 3], 
  [4, 3, 0, 1, 6, 5, 2], 
  [6, 0, 5, 1, 4, 2, 3], 
  [0, 1, 2, 3, 4, 5, 6],
] as const

const MARQUEE_STYLE = { transform: 'rotate(16deg)' } as const
const IMAGE_DIMENSIONS = { width: 853, height: 1280 } as const

const PARTNER_LINKS = [
  { href: 'https://marketopt.info/', src: '/marketopt.png', alt: 'Marketopt Icon' },
  { href: 'https://posad.com.ua/', src: '/logo-posad.svg', alt: 'Posad Icon' },
] as const

const PartnerImage = memo<{ src: string; alt: string }>(({ src, alt }) => (
  <Image
    src={src}
    alt={alt}
    width={IMAGE_DIMENSIONS.width}
    height={IMAGE_DIMENSIONS.height}
    className={css.imagefirst}
    loading="lazy"
    quality={75}
  />
))
PartnerImage.displayName = 'PartnerImage'

const MarqueeRow = memo<{ order: readonly number[]; direction: 'left' | 'right' }>(
  ({ order, direction }) => (
    <Marquee
      style={MARQUEE_STYLE}
      autoFill
      loop={0}
      gradient={false}
      direction={direction}
      speed={40}
    >
      {order.map((index, i) => (
        <PartnerImage
          key={`${direction}-${i}`}
          src={PARTNER_IMAGES[index].src}
          alt={PARTNER_IMAGES[index].alt}
        />
      ))}
    </Marquee>
  )
)
MarqueeRow.displayName = 'MarqueeRow'

const PartnerLink = memo<{ href: string; src: string; alt: string }>(
  ({ href, src, alt }) => (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <Image
        className="w-52"
        src={src}
        alt={alt}
        width={666}
        height={376}
        loading="lazy"
      />
    </a>
  )
)
PartnerLink.displayName = 'PartnerLink'

const Partners: React.FC = () => {
  const t = useTranslations('Partners')

  const clients = useMemo(
    () => [t('client1'), t('client2'), t('client3'), t('client4'), t('client5')],
    [t]
  )

  const suppliers = useMemo(
    () => [t('supplier1'), t('supplier2'), t('supplier3'), t('supplier4'), t('supplier5')],
    [t]
  )

  return (
    <div className="flex relative mb-[1500px] justify-center md:mb-[1400px] lg:mb-[1800px]">
      <div className={`${css.covers} relative bg-custom-capacities`}>
        <div className="absolute inset-0 z-30 bg-black opacity-70" />
        <div className={css.content}>
          <div className={css.marquee}>
            {MARQUEE_ORDERS.map((order, index) => (
              <MarqueeRow
                key={index}
                order={order}
                direction={index % 2 === 0 ? 'right' : 'left'}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="absolute z-40 px-4 py-24 lg:px-20 lg:py-36">
        <div className="relative flex flex-col items-center justify-center gap-14 text-white">
          <Title title={t('title')} />

          <div className="flex flex-col items-center justify-center gap-10 lg:text-2xl">
            <p className="max-w-md text-center">{t('description')}</p>

            <div className="flex flex-col items-center justify-center gap-4">
              <p>{t('findUs')}</p>
              <div className="my-5 flex flex-wrap items-center justify-center gap-10">
                {PARTNER_LINKS.map((link) => (
                  <PartnerLink key={link.href} {...link} />
                ))}
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-20 lg:flex-nowrap">
              <div className="flex flex-col items-center justify-center gap-2 lg:min-w-[429px] lg:gap-5">
                <p className="max-w-80 text-center lg:max-w-96">
                  {t('mainClientsTitle')}
                </p>
                <ul className="text-left font-semibold">
                  {clients.map((client, index) => (
                    <li key={index}>{client}</li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col items-start justify-center gap-2 lg:min-w-[429px] lg:gap-5">
                <p className="content-center text-center">
                  {t('supplierTitle')}
                </p>
                <ul className="text-left font-semibold">
                  {suppliers.map((supplier, index) => (
                    <li key={index}>{supplier}</li>
                  ))}
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

export default memo(Partners)

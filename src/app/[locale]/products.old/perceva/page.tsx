'use client'
import React from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import SwiperProducts from '@/src/app/components/SwiperProducts/SwiperProducts'
import { useTranslations } from 'next-intl'

const Capacities: React.FC = () => {
  const t = useTranslations('diamondPage')
  const keys = ['Origin', 'Quantity', 'Design'] as const
  const keysTwo = ['alcoholContent', 'shelfLife', 'volume'] as const
  return (
    <div>
      <div className="relative flex flex-col items-center justify-center bg-black px-4 py-8 text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src={'/perceva.jpg'}
            alt="background photo"
            fill={true}
            className="object-cover"
            quality={100}
          />
        </div>
        <div className="absolute inset-0 z-0 bg-[#000] opacity-70"></div>
        {/* Content */}
        <div className="relative z-20 mb-4 mt-28 flex w-full max-w-6xl flex-col items-center justify-between md:flex-row">
          {/* Bottle Image */}
          <div className="flex justify-center md:w-1/2">
            <Image
              src="/perceva.png" // Replace with actual image path
              alt="Bottle Image"
              width={250}
              height={600}
              className="w-[170px] object-contain"
            />
          </div>

          {/* Description */}
          <div className="mt-8 md:ml-8 md:mt-0 md:w-1/2">
            <h2 className="mb-4 text-2xl font-bold md:text-4xl">
              {t('title')}
            </h2>
            <p className="mb-4">{t('description')}</p>

            <div className="mb-6">
              <h3 className="mb-2 text-xl font-semibold">{t('listTitle')}</h3>
              <ul className="list-none space-y-2">
                {keys.map((key) => (
                  <li key={key}>
                    <strong>{t(`list.${key}.strong`)}</strong>{' '}
                    {t(`list.${key}.text`)}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-6">
              <ul className="list-none space-y-2">
                {keysTwo.map((key) => (
                  <li key={key}>
                    <strong>{t(`list.${key}.strong`)}</strong>{' '}
                    {t(`list.${key}.text`)}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <SwiperProducts />
      </div>
    </div>
  )
}

export default Capacities

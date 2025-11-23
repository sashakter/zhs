import React from 'react'
import Image from 'next/image'
import Title from '../Title'
import RunningSroke from '../RunningStroke'
import css from './OurBrands.module.css'
import { getTranslations } from 'next-intl/server'
import { fetchBrands } from '@/src/lib/cms'
import OurBrandsCarousel from './OurBrandsCarousel'

export default async function OurBrands() {
  const t = await getTranslations('OurBrands')
  const data = await fetchBrands({ limit: 100, status: 'ACTIVE' })
  const brands = data.items

  return (
    <div className={`${css.brandsContainer} bg-black text-white`}>
      <Image
        src="/brands.jpg"
        alt="Background"
        fill={true}
        className="object-cover object-bottom opacity-50 blur-sm"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black opacity-30"></div>

      <div className="relative z-10 mt-32 flex h-full flex-col items-center justify-start gap-20 py-7 text-center lg:gap-20 lg:py-20 lg:pb-20">
        <Title title={t('title')} />
        <OurBrandsCarousel brands={brands} />
        <RunningSroke />
      </div>
    </div>
  )
}

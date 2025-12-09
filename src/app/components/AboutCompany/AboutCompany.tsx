'use client'
import React, { useEffect, useState, useMemo, memo } from 'react'
import Title from '../Title'
import css from '../AboutCompany/AboutCompany.module.css'
import { useTranslations } from 'next-intl'
import { SlCursor, SlChart, SlGraph, SlGrid, SlBadge } from 'react-icons/sl'

// Константы размеров иконок
const ICON_SIZE_MOBILE = 25
const ICON_SIZE_DESKTOP = 40
const MOBILE_BREAKPOINT = 768

const AboutCompany: React.FC = () => {
  const t = useTranslations('AboutCompany')
  const [swidth, setSwidth] = useState(ICON_SIZE_DESKTOP)

  useEffect(() => {
    const handleResize = () => {
      setSwidth(window.innerWidth < MOBILE_BREAKPOINT ? ICON_SIZE_MOBILE : ICON_SIZE_DESKTOP)
    }
    handleResize()
    // Опционально: слушать ресайз для адаптивности
    // window.addEventListener('resize', handleResize)
    // return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className="relative flex flex-col items-center bg-test bg-cover bg-no-repeat p-14 text-black grayscale contain-paint">
      <div className="absolute inset-0 z-10"></div>
      <div className="relative z-20 mb-16 flex flex-col items-center justify-center text-black lg:gap-6">
        <Title title={t('title')} earColor="#000" />
        <div className="relative mt-9 flex flex-wrap items-center justify-center gap-7 text-white">
          <div
            className={`${css.partlist} flex min-h-[300px] w-[280px] rounded-xl bg-aboutpart bg-cover bg-center text-left lg:min-h-[240px] lg:w-[448px]`}
          >
            <div className={`${css.imagecontainer} flex items-start`}>
              <SlCursor size={swidth} />
            </div>
            <div className="flex w-full items-center justify-center px-3 uppercase tracking-wide text-white lg:px-6">
              <p className="my-6 text-center text-2xl font-semibold">
                {t('part1.title')}
              </p>
              <p className={css.overlay}>{t('part1.description')}</p>
            </div>
          </div>

          <div
            className={`${css.partlist} flex h-60 min-h-[300px] w-[280px] rounded-xl bg-aboutpart bg-cover bg-center text-left lg:min-h-[240px] lg:w-[448px]`}
          >
            <div className={`${css.imagecontainer} flex items-start`}>
              <SlChart size={swidth} />
            </div>
            <div className="flex w-full items-center justify-center px-3 uppercase tracking-wide text-white lg:px-6">
              <p className="my-6 text-center text-2xl font-semibold">
                {t('part2.title')}
              </p>
              <p className={css.overlay}>{t('part2.description')}</p>
            </div>
          </div>

          <div
            className={`${css.partlist} flex h-60 min-h-[300px] w-[280px] rounded-xl bg-aboutpart bg-cover bg-center text-left lg:min-h-[240px] lg:min-h-fit lg:w-[448px]`}
          >
            <div className={`${css.imagecontainer} flex items-start`}>
              <SlGraph size={swidth} />
            </div>
            <div className="flex w-full items-center justify-center px-3 uppercase tracking-wide text-white lg:px-6">
              <p className="my-6 text-center text-2xl font-semibold">
                {t('part3.title')}
              </p>
              <p className={css.overlay}>{t('part3.description')}</p>
            </div>
          </div>

          <div
            className={`${css.partlist} flex h-60 min-h-[300px] w-[280px] rounded-xl bg-aboutpart bg-cover bg-center text-left lg:min-h-[240px] lg:min-h-fit lg:w-[448px]`}
          >
            <div className={`${css.imagecontainer} flex items-start`}>
              <p className="text-2xl font-thin md:text-4xl">
                20<span className="text-2xl">+</span>
              </p>
            </div>
            <div className="flex w-full items-center justify-center px-3 uppercase tracking-wide text-white lg:px-6">
              <p className="my-6 text-center text-2xl font-semibold">
                {t('part4.title')}
              </p>
              <p className={css.overlay}>{t('part4.description')}</p>
            </div>
          </div>

          <div
            className={`${css.partlist} flex h-60 min-h-[300px] w-[280px] rounded-xl bg-aboutpart bg-cover bg-center text-left lg:min-h-[240px] lg:min-h-fit lg:w-[448px]`}
          >
            <div className={`${css.imagecontainer} flex items-start`}>
              <SlGrid size={swidth} />
            </div>
            <div className="flex w-full items-center justify-center px-3 uppercase tracking-wide text-white lg:px-6">
              <p className="my-6 text-center text-2xl font-semibold">
                {t('part5.title')}
              </p>
              <p className={css.overlay}>{t('part5.description')}</p>
            </div>
          </div>

          <div
            className={`${css.partlist} flex h-60 min-h-[300px] w-[280px] rounded-xl bg-aboutpart bg-cover bg-center text-left lg:min-h-[240px] lg:min-h-fit lg:w-[448px]`}
          >
            <div className={`${css.imagecontainer} flex items-start`}>
              <SlBadge size={swidth + 5} />
            </div>
            <div className="flex w-full items-center justify-center px-3 uppercase tracking-wide text-white lg:px-6">
              <p className="my-6 text-center text-2xl font-semibold">
                {t('part6.title')}
              </p>
              <p className={css.overlay}>{t('part6.description')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default memo(AboutCompany)

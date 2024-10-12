'use client'
import React, { useEffect, useState } from 'react'
import Title from '../Title' // Adjust the import path
import css from '../AboutCompany/AboutCompany.module.css'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Keyboard } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/keyboard'

import { SlCursor } from 'react-icons/sl'
import { SlChart } from 'react-icons/sl'
import { SlGraph } from 'react-icons/sl'
import { SlGrid } from 'react-icons/sl'
import { SlBadge } from 'react-icons/sl'
import { useTranslations } from 'next-intl'

const AboutCompany: React.FC = () => {
  const [swidth, setSwidth] = useState(0)
  useEffect(() => {
    if (screen.width < 768) {
      setSwidth(25)
    } else {
      setSwidth(40)
    }
  }, [])
  return (
    <div className="relative flex flex-col items-center bg-test bg-cover bg-no-repeat p-14 text-black grayscale contain-paint">
      <div className="absolute inset-0 z-10"></div>

      {/* Content */}
      <div className="relative z-20 mb-16 flex flex-col items-center justify-center text-black lg:gap-6">
        <Title title="ПРО КОМПАНІЮ" earColor="#000" />
        <div className="relative mt-9 flex flex-wrap items-center justify-center gap-7 text-white">
          <div
            className={`${css.partlist} flex min-h-[300px] w-[280px] rounded-xl bg-aboutpart bg-cover bg-center text-left lg:min-h-[240px] lg:w-[448px]`}
          >
            <div className={`${css.imagecontainer} flex items-start`}>
              <SlCursor size={swidth} />
            </div>
            <div className="flex w-full items-center justify-center px-3 uppercase tracking-wide text-white lg:px-6">
              <p className="my-6 text-center text-2xl font-semibold">
                Унікальне <br /> позиціонування кожної торгової марки
              </p>
              <p className={css.overlay}>
                Ми з гордістю представляємо кожен продукт нашої компанії,
                створюючи унікальні пропозиції для наших споживачів. Кожна марка
                вирізняється своєю якістю, смаком та історією.
              </p>
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
                Високі <br /> показники кількісної та якісної дистрибуції
              </p>
              <p className={css.overlay}>
                Наші дистрибуційні потужності дозволяють доставляти продукцію
                швидко та надійно в будь-який куточок України. Це гарантує, що
                наші напої завжди доступні для кожного споживача.
              </p>
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
                Стабільно висока якість
              </p>
              <p className={css.overlay}>
                В основі кожного нашого продукту лежить безкомпромісна якість.
                Ми ретельно контролюємо всі етапи виробництва, щоб кожен ковток
                приносив задоволення.
              </p>
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
                Компанія на ринку алкоголю України з 2002 року
              </p>
              <p className={css.overlay}>
                За понад 20 років існування ми здобули репутацію надійного
                виробника та партнера. Наш багаторічний досвід дозволяє нам
                адаптуватися до змін ринку і випереджати очікування наших
                клієнтів.
              </p>
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
                Різноманітна лінійка смаків
              </p>
              <p className={css.overlay}>
                У нашому портфелі представлені горілки класичні, особливі сорти,
                а також солодкі та гіркі настоянки. Це різноманіття дозволяє
                знайти ідеальний напій для будь-якого приводу.
              </p>
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
                Інноваційне виробництво
              </p>
              <p className={css.overlay}>
                Ми постійно впроваджуємо новітні технології, щоб вдосконалювати
                виробництво та відповідати сучасним стандартам якості. Кожен
                новий продукт відображає наше прагнення до досконалості.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutCompany

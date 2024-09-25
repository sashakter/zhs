'use client'
import React from 'react'
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

const AboutCompany: React.FC = () => {
  return (
    <div className="bg-about relative flex flex-col items-center bg-cover bg-no-repeat p-14 text-black grayscale contain-paint">
      <div className="absolute inset-0 z-10 bg-white/80 opacity-65"></div>

      {/* Content */}
      <div className="relative z-20 mb-24 flex flex-col items-center justify-center text-black lg:gap-6">
        <Title title="ПРО КОМПАНІЮ" earColor="#000" />
        <div className="flex flex-wrap items-center mt-7 justify-center text-white gap-14">
          <div
            className={`${css.partlist} flex h-48 w-[340px] rounded-xl bg-aboutpart text-left`}
          >
            <div className={`${css.imagecontainer} flex items-start`}>
              <SlCursor size={40} />
            </div>
            <div className="flex items-center justify-center pr-3 text-white">
              <p className="text-center text-xl font-semibold">
                Унікальне позиціонування кожної торгової марки
              </p>
              <p className={css.overlay}>
                Ми з гордістю представляємо кожен продукт нашої компанії,
                створюючи унікальні пропозиції для наших споживачів. Кожна марка
                вирізняється своєю якістю, смаком та історією.
              </p>
            </div>
          </div>

          <div
            className={`${css.partlist} flex h-48 w-[340px] rounded-xl bg-aboutpart text-left`}
          >
            <div className={`${css.imagecontainer} flex items-start`}>
              <SlChart size={40} />
            </div>
            <div className="flex items-center justify-center pr-2 text-white">
              <p className="mt-4 text-center text-xl font-semibold">
                Високі показники кількісної та якісної дистрибуції
              </p>
              <p className={css.overlay}>
                Наші дистрибуційні потужності дозволяють доставляти продукцію
                швидко та надійно в будь-який куточок України. Це гарантує, що
                наші напої завжди доступні для кожного споживача.
              </p>
            </div>
          </div>

          <div
            className={`${css.partlist} flex h-48 w-[340px] rounded-xl bg-aboutpart text-left`}
          >
            <div className={`${css.imagecontainer} flex items-start`}>
              <SlGraph size={50} />
            </div>
            <div className="flex items-center justify-center pr-6 text-white">
              <p className="mt-4 text-center text-xl font-semibold">
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
            className={`${css.partlist} flex h-48 w-[340px] rounded-xl bg-aboutpart text-left`}
          >
            <div className={`${css.imagecontainer} flex items-start`}>
              <p className="text-4xl font-thin">20<span className='text-2xl'>+</span></p>
            </div>
            <div className="flex items-center justify-center pr-6 text-white">
              <p className="mt-4 text-center text-xl font-semibold">
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
            className={`${css.partlist} flex h-48 w-[340px] rounded-xl bg-aboutpart text-left`}
          >
            <div className={`${css.imagecontainer} flex items-start`}>
              <SlGrid size={40} />
            </div>
            <div className="flex items-center justify-center pr-6 text-white">
              <p className="mt-4 text-center text-xl font-semibold">
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
            className={`${css.partlist} flex h-48 w-[340px] rounded-xl bg-aboutpart text-left`}
          >
            <div className={`${css.imagecontainer} flex items-start`}>
              <SlBadge size={45} />
            </div>
            <div className="flex items-center justify-center pr-6 text-white">
              <p className="mt-4 text-center text-xl font-semibold">
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

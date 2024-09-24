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
    <div className="bg-about relative flex flex-col items-center bg-cover bg-no-repeat p-14 pt-[800px] text-black grayscale contain-paint">
      <div className="absolute inset-0 z-10 bg-white/80 opacity-65"></div>

      {/* Content */}
      <div className="relative z-10 mb-24 flex flex-col items-center justify-center text-black lg:gap-6">
        <Title title="ПРО КОМПАНІЮ" earColor="#000" />
        <Swiper
          className="w-full mt-16 flex items-center justify-center uppercase"
          modules={[Navigation, Keyboard]}
          slidesPerView={'auto'}
          breakpoints={{
            375: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1440: {
              slidesPerView: 3,
            },
          }}
          loop={false}
          navigation
          keyboard={{
            enabled: true,
            onlyInViewport: false,
          }}
          grabCursor={true}
          speed={800}
        >
          <SwiperSlide>
            <div
              className={`${css.partlist} rounded-xl bg-custom-pink text-left`}
            >
              <SlCursor size={50} />
              <p className="mt-4 text-center text-lg font-semibold">
                Унікальне позиціонування кожної торгової марки
              </p>
              <p className={css.overlay}>
                Ми з гордістю представляємо кожен продукт нашої компанії,
                створюючи унікальні пропозиції для наших споживачів. Кожна марка
                вирізняється своєю якістю, смаком та історією.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className={`${css.partlist} rounded-xl bg-custom-pink text-left`}
            >
              <SlChart size={50} />
              <p className="mt-4 text-center text-lg font-semibold">
                Високі показники кількісної та якісної дистрибуції
              </p>
              <p className={css.overlay}>
                Наші дистрибуційні потужності дозволяють доставляти продукцію
                швидко та надійно в будь-який куточок України. Це гарантує, що
                наші напої завжди доступні для кожного споживача.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className={`${css.partlist} rounded-xl bg-custom-pink text-left`}
            >
              <SlGraph size={50} />
              <p className="mt-4 text-center text-lg font-semibold">
                Стабільно висока якість
              </p>
              <p className={css.overlay}>
                В основі кожного нашого продукту лежить безкомпромісна якість.
                Ми ретельно контролюємо всі етапи виробництва, щоб кожен ковток
                приносив задоволення та втілював традиції українського
                виробництва.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className={`${css.partlist} rounded-xl bg-custom-pink text-left`}
            >
              <p className="text-6xl font-thin">20+</p>
              <p className="mt-4 text-center text-lg font-semibold">
                Компанія на ринку алкоголю України з 2002 року
              </p>
              <p className={css.overlay}>
                За понад 20 років існування ми здобули репутацію надійного
                виробника та партнера. Наш багаторічний досвід дозволяє нам
                адаптуватися до змін ринку і випереджати очікування наших
                клієнтів.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className={`${css.partlist} rounded-xl bg-custom-pink text-left`}
            >
              <SlGrid size={50} />
              <p className="mt-4 text-center text-lg font-semibold">
                Різноманітна лінійка смаків
              </p>
              <p className={css.overlay}>
                У нашому портфелі представлені горілки класичні, особливі сорти,
                а також солодкі та гіркі настоянки. Це різноманіття дозволяє
                знайти ідеальний напій для будь-якого приводу.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className='w-80 !important'>
            <div
              className={`${css.partlist} rounded-xl bg-custom-pink text-left`}
            >
              <SlBadge size={50} />
              <p className="mt-4 text-center text-lg font-semibold">
                Інноваційне виробництво
              </p>
              <p className={css.overlay}>
                Ми постійно впроваджуємо новітні технології, щоб вдосконалювати
                виробництво та відповідати сучасним стандартам якості. Кожен
                новий продукт відображає наше прагнення до досконалості.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default AboutCompany

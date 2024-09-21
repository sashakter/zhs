import React from 'react'
import Title from '../Title' // Adjust the import path
import css from '../AboutCompany/AboutCompany.module.css'
import { SlCursor } from 'react-icons/sl'
import { SlChart } from 'react-icons/sl'
import { SlGraph } from 'react-icons/sl'
import { SlGrid } from 'react-icons/sl'
import { SlBadge } from 'react-icons/sl'

const AboutCompany: React.FC = () => {
  return (
    <div className="relative flex flex-col items-center bg-gradient-to-b from-custom-black to-black p-14 text-black contain-paint">
      <div className="absolute inset-0 z-10 bg-black/90 opacity-65"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-white lg:gap-6 mb-24">
        <Title title="ПРО КОМПАНІЮ" earColor="#ffff" />

        <div className="mt-16 flex max-w-[1040px] flex-wrap items-center justify-center gap-10 uppercase">
          <div className="flex flex-wrap items-center justify-center gap-10">
            <div
              className={`${css.partlist} bg-custom-pink flex min-h-[263px] max-w-64 flex-col items-center justify-center rounded-xl px-4 py-4 text-left lg:min-w-80`}
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

            <div
              className={`${css.partlist} bg-custom-pink flex min-h-[263px] max-w-64 flex-col items-center justify-center rounded-xl px-4 py-4 text-left lg:min-w-80`}
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

            <div
              className={`${css.partlist} bg-custom-pink flex min-h-[263px] max-w-64 flex-col items-center justify-center rounded-xl px-4 py-4 text-left lg:min-w-80`}
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
          </div>
          <div className="flex flex-wrap items-center justify-center gap-10">
            <div
              className={`${css.partlist} bg-custom-pink flex min-h-[263px] max-w-64 flex-col items-center justify-center rounded-xl px-4 py-4 text-left lg:min-w-80`}
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

            <div
              className={`${css.partlist} bg-custom-pink flex min-h-[263px] max-w-64 flex-col items-center justify-center rounded-xl px-4 py-4 text-left lg:min-w-80`}
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

            <div
              className={`${css.partlist} bg-custom-pink flex min-h-[263px] max-w-64 flex-col items-center justify-center rounded-xl px-4 py-4 text-left lg:min-w-80`}
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
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutCompany

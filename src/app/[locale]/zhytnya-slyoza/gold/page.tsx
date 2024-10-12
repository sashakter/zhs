'use client'
import React from 'react'
import Image from 'next/image'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import SwiperProducts from '@/app/components/SwiperProducts/SwiperProducts'

const Capacities: React.FC = () => {
  return (
    <div>
      <div className="relative flex flex-col items-center justify-center bg-black px-4 py-8 text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src={'/zolota.jpg'}
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
              src="/gold.png" // Replace with actual image path
              alt="Bottle Image"
              width={250}
              height={600}
              className="w-[170px] object-contain"
            />
          </div>

          {/* Description */}
          <div className="mt-8 md:ml-8 md:mt-0 md:w-1/2">
            <h2 className="mb-4 text-2xl font-bold md:text-4xl">
              Житня Сльоза
            </h2>
            <p className="mb-4">
              Житня Сльоза - це українська горілка, що володіє багатою спадщиною
              і неповторним смаком. Її назва відображає традиції та культуру
              України у поєднанні з високою якістю продукту.
            </p>

            <div className="mb-6">
              <h3 className="mb-2 text-xl font-semibold">
                Характеристики "Житня Сльоза":
              </h3>
              <ul className="list-none space-y-2">
                <li>
                  <strong>Походження:</strong> Виготовляється з найкращих
                  українських зернових, що надає горілці особливого аромату і
                  м&quot;якості.
                </li>
                <li>
                  <strong>Якість:</strong> Очищається і фільтрується за
                  особливими технологіями для досягнення чистоти і неповторного
                  смаку.
                </li>
                <li>
                  <strong>Дизайн:</strong> Елегантний дизайн пляшки відображає
                  українські традиції та надає продукту впізнаваного вигляду.
                </li>
              </ul>
            </div>

            <div className="mb-6">
              <ul className="list-none space-y-2">
                <li>
                  <strong>Вміст алкоголю:</strong> 40%
                </li>
                <li>
                  <strong>Срок придатності:</strong> 24 місяці
                </li>
                <li>
                  <strong>Об'єм:</strong> 0.2л, 0.5л, 0.7л
                </li>
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

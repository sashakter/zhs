'use client'

import Image from 'next/image'
import Title from '@/src/app/components/Title'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Pagination, Autoplay } from 'swiper/modules'
import { useMediaQuery } from 'react-responsive'
import css from './Chooser.module.css'
import { useEffect, useState } from 'react'
import { Link } from '@/src/navigation'
import EarTitle from '../../components/EarTitle'
import { useTranslations } from 'next-intl'

export default function ZshPage() {
  const t = useTranslations('ZshPage')
  const isMobileOrTablet = useMediaQuery({
    query: '(max-width: 1024px)',
  })
  const [isHoverGold, setIsHoverGold] = useState(false)
  const [isHoverDiamond, setIsHoverDiamond] = useState(false)
  const [isHoverVidb, setIsHoverVidb] = useState(false)
  const [isHoverPerc, setIsHoverPerc] = useState(false)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <div className="relative" id="content">
      <div className="absolute z-30 my-32 flex w-full flex-col items-center justify-center">
        <EarTitle color={'#C6986D'} />
        <h1 className="uppercase sm:text-2xl lg:text-2xl">{t('title')}</h1>
        <div className="rotate-180">
          <EarTitle color={'#C6986D'} />
        </div>
      </div>
      {isMobileOrTablet && isClient ? (
        <Swiper
          spaceBetween={0}
          pagination={{
            clickable: true,
            bulletActiveClass: css.swiperCustomBulletActive,
          }}
          modules={[Pagination, Autoplay]}
          effect="fade"
          speed={800}
          fadeEffect={{ crossFade: true }}
          // autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
          }}
          loop={true}
          className="w-full"
        >
          <SwiperSlide className="bg-productFirst bg-cover bg-no-repeat pt-56 md:pt-60 lg:pt-72">
            <div className="absolute left-0 top-0 z-40 h-full w-full bg-gradient-to-b from-[#000] from-10% bg-cover bg-center opacity-50 duration-300"></div>
            <Link
              href={'/products/gold'}
              style={{ contain: 'paint' }}
              className="relative h-[1000px] w-full"
            >
              <Image
                className="relative z-50 mx-auto"
                src={'/gold.png'}
                alt="gold"
                width={188}
                height={590}
              />
            </Link>
          </SwiperSlide>
          <SwiperSlide className="bg-productSecond bg-cover bg-no-repeat pt-56 md:pt-60 lg:pt-72">
            <div className="absolute left-0 top-0 z-40 h-full w-full bg-gradient-to-b from-[#000] from-10% bg-cover bg-center opacity-50 duration-300"></div>
            <Link
              href={'/products/diamond'}
              style={{ contain: 'paint' }}
              className="relative h-[820px] w-full"
            >
              <Image
                className="relative z-50 mx-auto"
                src={'/diamond.png'}
                alt="diamond"
                width={188}
                height={590}
              />
            </Link>
          </SwiperSlide>
          <SwiperSlide className="bg-productThird bg-cover bg-no-repeat pt-56 md:pt-60 lg:pt-72">
            <Link
              href={'/products/vidbirna'}
              style={{ contain: 'paint' }}
              className="relative h-[820px] w-full"
            >
              <div className="absolute left-0 top-0 z-50 h-full w-full bg-black bg-cover bg-center opacity-80 duration-300 hover:opacity-0"></div>
              <Image
                className="relative z-50 mx-auto"
                src={'/vidbirna.png'}
                alt="vidbirna"
                width={188}
                height={590}
              />
            </Link>
          </SwiperSlide>
          <SwiperSlide className="bg-productFourth bg-cover bg-no-repeat pt-56 md:pt-60 lg:pt-72">
            <Link
              href={'/products/perceva'}
              style={{ contain: 'paint' }}
              className="relative h-[820px] w-full"
            >
              <div className="absolute left-0 top-0 z-50 h-full w-full bg-black bg-cover bg-center opacity-80 duration-300 hover:opacity-0"></div>
              <Image
                className="relative z-50 mx-auto"
                src={'/perceva.png'}
                alt="perceva"
                width={188}
                height={590}
              />
            </Link>
          </SwiperSlide>
        </Swiper>
      ) : (
        <div className="flex">
          <Link
            href={'/products/gold'}
            style={{ contain: 'paint' }}
            className="relative h-[820px] w-1/4 cursor-pointer bg-productFirst bg-cover bg-no-repeat grayscale hover:grayscale-0"
            onMouseEnter={() => setIsHoverGold(true)}
            onMouseLeave={() => setIsHoverGold(false)}
          >
            <div className="absolute left-0 top-0 z-50 h-full w-full bg-black bg-cover bg-center opacity-80 duration-300 hover:opacity-0"></div>
            <Image
              className={`relative -bottom-1/4 ${isHoverGold ? '-bottom-[12%]' : ''} mx-auto duration-700`}
              src={'/gold.png'}
              priority={true}
              alt="gold"
              width={244}
              height={800}
            />
          </Link>
          <Link
            href={'/products/diamond'}
            style={{ contain: 'paint' }}
            onMouseEnter={() => setIsHoverDiamond(true)}
            onMouseLeave={() => setIsHoverDiamond(false)}
            className="h-[820px] w-1/4 bg-productSecond bg-cover bg-no-repeat grayscale hover:grayscale-0"
          >
            <div className="absolute left-0 top-0 z-50 h-full w-full bg-black bg-cover bg-center opacity-80 duration-300 hover:opacity-0"></div>
            <Image
              className={`relative -bottom-1/4 ${isHoverDiamond ? '-bottom-[12%]' : ''} mx-auto duration-700`}
              src={'/diamond.png'}
              alt="diamond"
              width={244}
              height={800}
            />
          </Link>
          <Link
            href={'/products/vidbirna'}
            style={{ contain: 'paint' }}
            onMouseEnter={() => setIsHoverVidb(true)}
            onMouseLeave={() => setIsHoverVidb(false)}
            className="h-[820px] w-1/4 bg-productThird bg-cover bg-no-repeat grayscale hover:grayscale-0"
          >
            <div className="absolute left-0 top-0 z-50 h-full w-full bg-black bg-cover bg-center opacity-80 duration-300 hover:opacity-0"></div>
            <Image
              className={`relative -bottom-1/4 ${isHoverVidb ? '-bottom-[12%]' : ''} mx-auto duration-700`}
              src={'/vidbirna.png'}
              alt="vidbirna"
              width={244}
              height={800}
            />
          </Link>
          <Link
            href={'/products/perceva'}
            style={{ contain: 'paint' }}
            onMouseEnter={() => setIsHoverPerc(true)}
            onMouseLeave={() => setIsHoverPerc(false)}
            className="h-[820px] w-1/4 bg-productFourth bg-cover bg-no-repeat grayscale hover:grayscale-0"
          >
            <div className="absolute left-0 top-0 z-50 h-full w-full bg-black bg-cover bg-center opacity-80 duration-300 hover:opacity-0"></div>
            <Image
              className={`relative -bottom-1/4 ${isHoverPerc ? '-bottom-[12%]' : ''} mx-auto duration-700`}
              src={'/perceva.png'}
              alt="perceva"
              width={244}
              height={800}
            />
          </Link>
        </div>
      )}
    </div>
  )
}

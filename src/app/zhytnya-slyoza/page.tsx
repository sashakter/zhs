'use client'

import Image from 'next/image'
import Title from '../components/Title'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Pagination, Autoplay } from 'swiper/modules'
import { useMediaQuery } from 'react-responsive'
import css from './Chooser.module.css'
import { useState } from 'react'

export default function ZshPage() {
  const isMobileOrTablet = useMediaQuery({ query: '(max-width: 1024px)' })
  const [isHoverGold, setIsHoverGold] = useState(false)
  const [isHoverDiamond, setIsHoverDiamond] = useState(false)
  const [isHoverVidb, setIsHoverVidb] = useState(false)
  const [isHoverPerc, setIsHoverPerc] = useState(false)
  return (
    <div className="relative" id="content">
      <div className="absolute z-30 my-10 flex w-full justify-center">
        <Title title="обери свій смак" />
      </div>

      {isMobileOrTablet ? (
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
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
          }}
          loop={true}
          className="w-full"
        >
          <SwiperSlide>
            <div
              style={{ contain: 'paint' }}
              className="h-[820px] w-full bg-gradient-to-b from-gold-yellow-top to-gold-yellow-bottom grayscale hover:grayscale-0"
            >
              <div className="absolute left-0 top-0 z-50 h-full w-full bg-black bg-cover bg-center opacity-80 duration-300 hover:opacity-0"></div>
              <Image
                className="relative -bottom-1/4 mx-auto"
                src={'/gold.png'}
                alt="gold"
                width={244}
                height={800}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              style={{ contain: 'paint' }}
              className="h-[820px] w-full bg-gradient-to-b from-diamond-top to-diamond-bottom grayscale hover:grayscale-0"
            >
              <div className="absolute left-0 top-0 z-50 h-full w-full bg-black bg-cover bg-center opacity-80 duration-300 hover:opacity-0"></div>
              <Image
                className="relative -bottom-1/4 mx-auto"
                src={'/diamond.png'}
                alt="diamond"
                width={244}
                height={800}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              style={{ contain: 'paint' }}
              className="h-[820px] w-full bg-gradient-to-b from-vidbir-top to-vidbir-bottom grayscale hover:grayscale-0"
            >
              <div className="absolute left-0 top-0 z-50 h-full w-full bg-black bg-cover bg-center opacity-80 duration-300 hover:opacity-0"></div>
              <Image
                className="relative -bottom-1/4 mx-auto"
                src={'/vidbirna.png'}
                alt="vidbirna"
                width={244}
                height={800}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              style={{ contain: 'paint' }}
              className="h-[820px] w-full bg-gradient-to-b from-perceva-top to-perceva-bottom grayscale hover:grayscale-0"
            >
              <div className="absolute left-0 top-0 z-50 h-full w-full bg-black bg-cover bg-center opacity-80 duration-300 hover:opacity-0"></div>
              <Image
                className="relative -bottom-1/4 mx-auto"
                src={'/perceva.png'}
                alt="perceva"
                width={244}
                height={800}
              />
            </div>
          </SwiperSlide>
        </Swiper>
      ) : (
        <div className="flex">
          <div
            style={{ contain: 'paint' }}
            className="relative h-[820px] w-1/4 bg-gradient-to-b from-gold-yellow-top to-gold-yellow-bottom grayscale hover:grayscale-0"
            onMouseEnter={() => setIsHoverGold(true)}
            onMouseLeave={() => setIsHoverGold(false)}
          >
            <div className="absolute left-0 top-0 z-50 h-full w-full bg-black bg-cover bg-center opacity-80 duration-300 hover:opacity-0"></div>
            <Image
              className={`relative -bottom-1/4 ${isHoverGold ? '-bottom-[12%]' : ''} mx-auto duration-300`}
              src={'/gold.png'}
              priority={true}
              alt="gold"
              width={244}
              height={800}
            />
          </div>
          <div
            style={{ contain: 'paint' }}
            onMouseEnter={() => setIsHoverDiamond(true)}
            onMouseLeave={() => setIsHoverDiamond(false)}
            className="h-[820px] w-1/4 bg-gradient-to-b from-diamond-top to-diamond-bottom grayscale hover:grayscale-0"
          >
            <div className="absolute left-0 top-0 z-50 h-full w-full bg-black bg-cover bg-center opacity-80 duration-300 hover:opacity-0"></div>
            <Image
              className={`relative -bottom-1/4 ${isHoverDiamond ? '-bottom-[12%]' : ''} mx-auto duration-300`}
              src={'/diamond.png'}
              alt="diamond"
              width={244}
              height={800}
            />
          </div>
          <div
            style={{ contain: 'paint' }}
            onMouseEnter={() => setIsHoverVidb(true)}
            onMouseLeave={() => setIsHoverVidb(false)}
            className="h-[820px] w-1/4 bg-gradient-to-b from-vidbir-top to-vidbir-bottom grayscale hover:grayscale-0"
          >
            <div className="absolute left-0 top-0 z-50 h-full w-full bg-black bg-cover bg-center opacity-80 duration-300 hover:opacity-0"></div>
            <Image
              className={`relative -bottom-1/4 ${isHoverVidb ? '-bottom-[12%]' : ''} mx-auto duration-300`}
              src={'/vidbirna.png'}
              alt="vidbirna"
              width={244}
              height={800}
            />
          </div>
          <div
            style={{ contain: 'paint' }}
            onMouseEnter={() => setIsHoverPerc(true)}
            onMouseLeave={() => setIsHoverPerc(false)}
            className="h-[820px] w-1/4 bg-gradient-to-b from-perceva-top to-perceva-bottom grayscale hover:grayscale-0"
          >
            <div className="absolute left-0 top-0 z-50 h-full w-full bg-black bg-cover bg-center opacity-80 duration-300 hover:opacity-0"></div>
            <Image
              className={`relative -bottom-1/4 ${isHoverPerc ? '-bottom-[12%]' : ''} mx-auto duration-300`}
              src={'/perceva.png'}
              alt="perceva"
              width={244}
              height={800}
            />
          </div>
        </div>
      )}
    </div>
  )
}
'use client'

import Image from 'next/image'
import Title from '../Title'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Pagination, Autoplay } from 'swiper/modules'
import { useMediaQuery } from 'react-responsive'
import css from './Chooser.module.css'

const Chooser: React.FC = () => {
  const isMobileOrTablet = useMediaQuery({ query: '(max-width: 1024px)' })

  return (
    <div className="relative">
      <Title
        addClass="absolute z-50 py-10"
        style={{ left: 'calc(50% - 149px)' }}
        title="обери свій смак"
      />

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
          >
            <div className="absolute left-0 top-0 z-50 h-full w-full bg-black bg-cover bg-center opacity-80 duration-300 hover:opacity-0"></div>
            <Image
              className="relative -bottom-1/4 mx-auto"
              src={'/gold.png'}
              priority={true}
              alt="gold"
              width={244}
              height={800}
            />
          </div>
          <div
            style={{ contain: 'paint' }}
            className="h-[820px] w-1/4 bg-gradient-to-b from-diamond-top to-diamond-bottom grayscale hover:grayscale-0"
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
          <div
            style={{ contain: 'paint' }}
            className="h-[820px] w-1/4 bg-gradient-to-b from-vidbir-top to-vidbir-bottom grayscale hover:grayscale-0"
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
          <div
            style={{ contain: 'paint' }}
            className="h-[820px] w-1/4 bg-gradient-to-b from-perceva-top to-perceva-bottom grayscale hover:grayscale-0"
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
        </div>
      )}
    </div>
  )
}

export default Chooser

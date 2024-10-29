import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/autoplay' // Імпортуємо стилі для autoplay
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules' // Імпортуємо модуль Autoplay
import Image from 'next/image'
import css from './SwiperProducts.module.css'
const SwiperProducts = () => {
  return (
    <div className="my-20 flex h-full w-full items-center">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        breakpoints={{
          375: {
            slidesPerView: 3,
            loopAdditionalSlides: 0,
            coverflowEffect: {
              depth: 300,
            },
          },
        }}
        // slidesPerView={5}
        loop={true}
        // loopAdditionalSlides={4}
        speed={500}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 300,
          modifier: 1,
          slideShadows: false,
        }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image
            src={'/first-partner.jpg'}
            alt="First photo gallery"
            width={853}
            height={1280}
            className={css.imagefirst}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={'/nine.jpg'}
            alt="Six photo gallery"
            width={853}
            height={1280}
            className={css.imagefirst}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={'/second-partner.jpg'}
            alt="Second photo gallery"
            width={853}
            height={1280}
            className={css.imagefirst}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={'/third-partner.jpg'}
            alt="Third photo gallery"
            width={853}
            height={1280}
            className={css.imagefirst}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={'/fourth-partner.jpg'}
            alt="Fourth photo gallery"
            width={853}
            height={1280}
            className={css.imagefirst}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={'/fifth-partner.jpg'}
            alt="Fifth photo gallery"
            width={853}
            height={1280}
            className={css.imagefirst}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={'/six-partner.jpg'}
            alt="Six photo gallery"
            width={853}
            height={1280}
            className={css.imagefirst}
          />
        </SwiperSlide>

        <SwiperSlide>
          <Image
            src={'/ten.jpg'}
            alt="Six photo gallery"
            width={853}
            height={1280}
            className={css.imagefirst}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={'/eleven.jpg'}
            alt="Six photo gallery"
            width={853}
            height={1280}
            className={css.imagefirst}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={'/twelve.jpg'}
            alt="Six photo gallery"
            width={853}
            height={1280}
            className={css.imagefirst}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={'/thirteen.jpg'}
            alt="Six photo gallery"
            width={853}
            height={1280}
            className={css.imagefirst}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={'/fourteen.jpg'}
            alt="Six photo gallery"
            width={853}
            height={1280}
            className={css.imagefirst}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={'/fifteen.jpg'}
            alt="Six photo gallery"
            width={853}
            height={1280}
            className={css.imagefirst}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default SwiperProducts

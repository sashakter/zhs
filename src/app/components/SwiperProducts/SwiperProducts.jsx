import React, { memo } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules'
import Image from 'next/image'
import css from './SwiperProducts.module.css'

// Константы для изображений слайдера
const SLIDER_IMAGES = [
  { src: '/first-partner.jpg', alt: 'First photo gallery' },
  { src: '/nine.jpg', alt: 'Nine photo gallery' },
  { src: '/second-partner.jpg', alt: 'Second photo gallery' },
  { src: '/third-partner.jpg', alt: 'Third photo gallery' },
  { src: '/fourth-partner.jpg', alt: 'Fourth photo gallery' },
  { src: '/fifth-partner.jpg', alt: 'Fifth photo gallery' },
  { src: '/six-partner.jpg', alt: 'Six photo gallery' },
  { src: '/ten.jpg', alt: 'Ten photo gallery' },
  { src: '/eleven.jpg', alt: 'Eleven photo gallery' },
  { src: '/twelve.jpg', alt: 'Twelve photo gallery' },
  { src: '/thirteen.jpg', alt: 'Thirteen photo gallery' },
  { src: '/fourteen.jpg', alt: 'Fourteen photo gallery' },
  { src: '/fifteen.jpg', alt: 'Fifteen photo gallery' },
]

const IMAGE_DIMENSIONS = { width: 853, height: 1280 }

// Мемоизированный компонент изображения слайда
const SlideImage = memo(({ src, alt }) => (
  <Image
    src={src}
    alt={alt}
    width={IMAGE_DIMENSIONS.width}
    height={IMAGE_DIMENSIONS.height}
    className={css.imagefirst}
    loading="lazy"
    quality={75}
  />
))
SlideImage.displayName = 'SlideImage'

const SwiperProducts = () => {
  return (
    <div className="my-20 flex h-full w-full items-center">
      <Swiper
        effect="coverflow"
        grabCursor
        centeredSlides
        breakpoints={{
          375: {
            slidesPerView: 3,
            loopAdditionalSlides: 0,
            coverflowEffect: {
              depth: 300,
            },
          },
        }}
        loop
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
        {SLIDER_IMAGES.map((image, index) => (
          <SwiperSlide key={index}>
            <SlideImage src={image.src} alt={image.alt} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default memo(SwiperProducts)

"use client"

import React, { useMemo } from "react"
import Image from "next/image"
import { Link } from "@/src/navigation"
import type { BrandLite } from "@/src/lib/cms"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"
import "swiper/css"

type Props = {
  brands: BrandLite[]
}

export default function OurBrandsCarousel({ brands }: Props) {
  const visibleBrands = useMemo(() => brands.filter((b) => !!b.cover?.url), [brands])

  if (!visibleBrands.length) return null

  return (
    <div className="w-full max-w-full overflow-hidden select-none relative">
      <Swiper
        modules={[Autoplay]}
        slidesPerView={1}
        spaceBetween={12}
        breakpoints={{
          480: { slidesPerView: 1, spaceBetween: 16 },
          640: { slidesPerView: 2, spaceBetween: 20 },
          768: { slidesPerView: 3, spaceBetween: 20 },
          1024: { slidesPerView: 4, spaceBetween: 24 },
          1280: { slidesPerView: 5, spaceBetween: 28 },
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        centeredSlides={visibleBrands.length > 1}
        loop={visibleBrands.length > 5}
        watchOverflow={true}
        touchStartPreventDefault={false}
        style={{ maxWidth: '100%' }}
        className="pb-2! relative"
      >
        {visibleBrands.map((b) => {
          const isSvg = /\.svg(\?|$)/i.test(b.cover?.url || "")
          const pad = isSvg ? "p-4 lg:p-6" : "p-2 lg:p-4"

          return (
            <SwiperSlide key={b.id} className="flex! w-full! h-auto! justify-center!">
              <Link
                href={`/brands/${b.slug}` as any}
                className="group flex flex-col items-center justify-center transition-opacity hover:opacity-80"
              >
                <div className={`relative mb-6 h-32 w-64 lg:h-36 lg:w-72 ${pad}`}>
                  {b.cover?.url ? (
                    <Image
                      src={b.cover.url}
                      alt={b.cover.alt || b.name}
                      fill
                      className="object-contain"
                      sizes="(max-width: 640px) 50vw, (max-width: 768px) 40vw, (max-width: 1024px) 30vw, 20vw"
                    />
                  ) : (
                    <div className="h-full w-full bg-neutral-900" />
                  )}
                </div>
              </Link>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

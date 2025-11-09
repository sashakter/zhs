"use client"

import Image from "next/image"
import { Link } from "@/src/navigation"
import type { BrandLite } from "@/src/lib/cms"
import { useMemo } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"
import "swiper/css"

type Props = { brands: BrandLite[] }

export default function OurBrandsCarousel({ brands }: Props) {
  const visibleBrands = useMemo(() => brands.filter((b) => !!b.cover?.url), [brands])

  if (!visibleBrands.length) return null

  return (
    <div className="w-full">
      <Swiper
        modules={[Autoplay]}
        slidesPerView={2.2}
        spaceBetween={24}
        breakpoints={{
          640: { slidesPerView: 2.6 },
          768: { slidesPerView: 3.2 },
          1024: { slidesPerView: 4 },
          1280: { slidesPerView: 5 },
        }}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        loop={true}
        className="!pb-2"
      >
        {visibleBrands.map((b) => {
          const isSvg = /\.svg(\?|$)/i.test(b.cover?.url || "")
          const pad = isSvg ? "p-4 lg:p-6" : "p-2 lg:p-4"
          return (
            <SwiperSlide key={b.id} style={{ height: "auto" }}>
              <Link
                href={`/brands/${b.slug}` as any}
                className="flex flex-col items-center justify-center"
              >
                <div className={`relative mb-6 h-32 w-64 lg:h-36 lg:w-72 ${pad}`}>
                  {b.cover?.url ? (
                    <Image
                      src={b.cover.url}
                      alt={b.cover.alt || b.name}
                      fill
                      className="object-contain"
                      sizes="(max-width: 640px) 60vw, (max-width: 1024px) 40vw, 25vw"
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

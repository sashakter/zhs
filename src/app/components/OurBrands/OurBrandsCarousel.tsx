"use client"

import React, { useMemo, useRef } from "react"
import Image from "next/image"
import { Link } from "@/src/navigation"
import type { BrandLite } from "@/src/lib/cms"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"

type Props = {
  brands: BrandLite[]
}

export default function OurBrandsCarousel({ brands }: Props) {
  const visibleBrands = useMemo(() => brands.filter((b) => !!b.cover?.url), [brands])

  const autoplay = useRef(
    Autoplay({
      delay: 2500,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    }),
  )

  const [emblaRef] = useEmblaCarousel(
    {
      align: "center",
      loop: visibleBrands.length > 3,
      skipSnaps: false,
      dragFree: false,
      slidesToScroll: 1,
    },
    [autoplay.current],
  )

  if (!visibleBrands.length) return null

  return (
    <div className="relative select-none overflow-hidden" ref={emblaRef}>
      <div className="flex gap-4 px-2 py-2">
        {visibleBrands.map((b) => {
          const isSvg = /\.svg(\?|$)/i.test(b.cover?.url || "")
          const pad = isSvg ? "p-4 lg:p-6" : "p-2 lg:p-4"

          return (
            <div
              key={b.id}
              className="flex shrink-0 grow-0 basis-[80%] justify-center sm:basis-[55%] md:basis-[35%] lg:basis-[24%] xl:basis-[20%]"
            >
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
                      sizes="(max-width: 480px) 70vw, (max-width: 768px) 40vw, (max-width: 1024px) 30vw, 20vw"
                    />
                  ) : (
                    <div className="h-full w-full bg-neutral-900" />
                  )}
                </div>
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}

"use client"

import Image from "next/image"
import { Link } from "@/src/navigation"
import type { BrandLite } from "@/src/lib/cms"
import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"
import "swiper/css"

type Props = { brands: BrandLite[] }

export default function OurBrandsCarousel({ brands }: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const itemsRef = useRef<Array<HTMLAnchorElement | null>>([])
  const [useSlider, setUseSlider] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const scrollRef = useRef<HTMLDivElement | null>(null)
  const dragging = useRef(false)
  const dragStartX = useRef(0)
  const dragStartLeft = useRef(0)

  const visibleBrands = useMemo(() => brands.filter((b) => !!b.cover?.url), [brands])

  const measure = useCallback(() => {
    const el = containerRef.current
    if (!el) return
    const containerWidth = el.clientWidth
    const gap = 32 // px (gap-8)
    const total = itemsRef.current
      .map((a) => a?.getBoundingClientRect().width || 0)
      .reduce((acc, w, i) => acc + w + (i > 0 ? gap : 0), 0)
    setUseSlider(total > containerWidth)
  }, [])

  // Ловим изменение брейкпоинта один раз, без постоянных ресайзов по высоте
  useEffect(() => {
    if (typeof window === 'undefined') return
    const mq = window.matchMedia('(max-width: 767.98px)')
    const handler = (e: MediaQueryListEvent | MediaQueryList) => {
      const matches = 'matches' in e ? e.matches : (e as MediaQueryList).matches
      setIsMobile(matches)
    }
    // init
    handler(mq)
    mq.addEventListener?.('change', handler as (ev: MediaQueryListEvent) => void)
    return () => mq.removeEventListener?.('change', handler as (ev: MediaQueryListEvent) => void)
  }, [])

  useEffect(() => {
    if (isMobile) {
      setUseSlider(true)
      return
    }
    // Desktop/tablet: меряем переполнение
    measure()
    const ro = new ResizeObserver(() => {
      // debounce через rAF для предотвращения дерганья
      requestAnimationFrame(() => measure())
    })
    const el = containerRef.current
    if (el) ro.observe(el)
    const onResize = () => requestAnimationFrame(() => measure())
    window.addEventListener('resize', onResize)
    return () => {
      if (el) ro.unobserve(el)
      window.removeEventListener('resize', onResize)
    }
  }, [isMobile, measure, visibleBrands.length])

  if (!visibleBrands.length) return null

  return (
    <div ref={containerRef} className="w-full">
      {useSlider ? (
        <Swiper
          modules={[Autoplay]}
          slidesPerView={2.2}
          spaceBetween={24}
          breakpoints={{
            640: { slidesPerView: 2.6 },
            768: { slidesPerView: 3.2 },
            1024: { slidesPerView: 4 },
          }}
          autoplay={isMobile ? { delay: 2500, disableOnInteraction: false } : undefined}
          style={{ paddingBottom: 8 }}
        >
          {visibleBrands.map((b) => {
            const isSvg = /\.svg(\?|$)/i.test(b.cover?.url || "")
            const pad = isSvg ? "p-4 lg:p-6" : "p-2 lg:p-4"
            return (
              <SwiperSlide key={b.id} style={{ height: "auto" }}>
                <Link
                  ref={(el) => {
                    const idx = visibleBrands.findIndex((x) => x.id === b.id)
                    itemsRef.current[idx] = el || null
                  }}
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
      ) : (
        <div
          ref={scrollRef}
          className="flex flex-nowrap items-center justify-center gap-10 lg:gap-20 overflow-x-auto touch-pan-x select-none cursor-grab active:cursor-grabbing"
          onPointerDown={(e) => {
            const el = scrollRef.current
            if (!el) return
            dragging.current = true
            dragStartX.current = e.clientX
            dragStartLeft.current = el.scrollLeft
            el.setPointerCapture?.(e.pointerId)
          }}
          onPointerMove={(e) => {
            if (!dragging.current) return
            const el = scrollRef.current
            if (!el) return
            const dx = e.clientX - dragStartX.current
            el.scrollLeft = dragStartLeft.current - dx
          }}
          onPointerUp={(e) => {
            dragging.current = false
            scrollRef.current?.releasePointerCapture?.(e.pointerId)
          }}
          onPointerCancel={() => {
            dragging.current = false
          }}
          onPointerLeave={() => {
            dragging.current = false
          }}
        >
          {visibleBrands.map((b, i) => {
            const isSvg = /\.svg(\?|$)/i.test(b.cover?.url || "")
            const pad = isSvg ? "p-4 lg:p-6" : "p-2 lg:p-4"
            return (
              <Link
                key={b.id}
                ref={(el) => {
                  itemsRef.current[i] = el || null
                }}
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
            )
          })}
        </div>
      )}
    </div>
  )
}

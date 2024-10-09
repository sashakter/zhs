'use client'

import React, { useEffect, useRef, useState } from 'react'
import css from './HeaderVideo.module.css'
import Image from 'next/image'
import { Outfit, Viaoda_Libre } from 'next/font/google'
import Link from 'next/link'

const outfit = Outfit({ subsets: ['latin'] })
const viaodaLibre = Viaoda_Libre({ subsets: ['cyrillic'], weight: ['400'] })

const HeaderVideo: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isVideoVisible, setIsVideoVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVideoVisible(true)
            if (videoRef.current) {
              videoRef.current.play()
            }
          }
        })
      },
      { threshold: 0.1 },
    )

    if (videoRef.current) {
      observer.observe(videoRef.current)
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current)
      }
    }
  }, [])

  return (
    <div>
      <div className={css.videoBackgroundContainer}>
        <video
          ref={videoRef}
          loop
          muted
          playsInline
          className={`${css.videoBackground} rotate-90`}
        >
          {isVideoVisible && (
            <source src="/bg-video-header.mp4" type="video/mp4" />
          )}
          {isVideoVisible && (
            <source src="/bg-video-header.webm" type="video/webm" />
          )}
        </video>
        <Image
          className="relative block object-cover lg:hidden"
          src="/header-mobile.jpg"
          alt="bg-photo"
          fill
        />
        <div
          className={`${css.contentOverlay} relative z-50 flex flex-col items-start pt-32 lg:pt-40`}
        >
          <div className="z-10 flex flex-col items-center lg:items-start gap-10 px-4 lg:pl-24">
            <p className="text-left text-4xl font-medium uppercase leading-tight tracking-wider lg:text-5xl">
              Надійний партнер <br /> у світі алкогольної <br /> продукції.
              <br /> Співпраця, що гарантує
              <br /> успіх!
            </p>
            <Link href='/contacts' className="rounded-sm border border-white bg-white px-5 py-2 text-2xl font-medium uppercase text-black hover:bg-custom-black hover:text-white hover:duration-700">
              Зв'язатись з нами
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderVideo

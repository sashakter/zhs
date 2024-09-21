'use client'

import React, { useEffect, useRef, useState } from 'react'
import css from './HeaderVideo.module.css'
import Image from 'next/image'
import { Outfit } from 'next/font/google'
import Vyshyvanka from '../Vyshyvanka'

const outfit = Outfit({ subsets: ['latin'] })

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
    <div className={css.videoBackgroundContainer}>
      <video
        ref={videoRef}
        loop
        muted
        playsInline
        className={css.videoBackground}
      >
        {isVideoVisible && (
          <source src="/bg-video-header.mp4" type="video/mp4" />
        )}
        {isVideoVisible && (
          <source src="/bg-video-header.webm" type="video/webm" />
        )}
      </video>
      <Image
        className="block object-cover lg:hidden"
        src="/bg-photo.jpg"
        alt="bg-photo"
        fill
      />
      <div
        className={`${css.contentOverlay} relative flex flex-col pt-52 items-center justify-between`}
      >
        <div className="z-10 flex flex-col items-center gap-10">
          <h1
            className={`${(css.textOverlay, outfit.className)} text-4xl font-medium uppercase`}
          >
            alcotrade <span className="font-normal">ua</span>
          </h1>
          <p className="text-center text-3xl">
            Надійний партнер у світі алкогольної продукції.
            <br /> Співпраця, що гарантує успіх!
          </p>
          <button className="bg-white rounded-sm border border-white px-5 py-2 text-2xl font-medium uppercase text-black hover:bg-custom-black hover:text-white hover:duration-700">
            Зв'язатись з нами
          </button>
        </div>
          <Vyshyvanka direction="right" />
      </div>
    </div>
  )
}

export default HeaderVideo

'use client'

import React, { useEffect, useRef, useState } from 'react'
import css from './HeaderVideo.module.css'
import Image from 'next/image'
import { Link } from '@/src/navigation'
import { useTranslations } from 'next-intl'
import { renderWithBreaks } from '../renderWithBreaks'

const HeaderVideo: React.FC = () => {
  const t = useTranslations('HeaderVideo')

  const containerRef = useRef<HTMLDivElement | null>(null)
  const videoRef = useRef<HTMLVideoElement | null>(null)

  const [isVideoVisible, setIsVideoVisible] = useState(false)

  useEffect(() => {
    const containerEl = containerRef.current
    if (!containerEl) return

    const handleIntersect: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVideoVisible(true)
          const vid = videoRef.current
          if (vid) {
            vid.play().catch((err) => {
              console.warn('Video autoplay prevented:', err)
            })
          }
        } else {
          const vid = videoRef.current
          if (vid && !vid.paused) {
            vid.pause()
          }
        }
      })
    }

    const observer = new IntersectionObserver(handleIntersect, {
      threshold: 0.1,
    })

    observer.observe(containerEl)

    return () => {
      observer.unobserve(containerEl)
      observer.disconnect()
    }
  }, [])

  const handleCanPlay = () => {
    const vid = videoRef.current
    if (!vid) return
    if (isVideoVisible) {
      vid.play().catch((err) => {
        console.warn('Video play on canplay failed:', err)
      })
    }
  }

  const handleError: React.ReactEventHandler<HTMLVideoElement> = (e) => {
    const target = e.currentTarget
    const err = target?.error
    console.error('Header BG video error:', err)
  }

  return (
    <div>
      <div ref={containerRef} className={css.videoBackgroundContainer}>
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          loop
          preload="metadata"
          controls={false}
          disablePictureInPicture
          disableRemotePlayback
          onCanPlay={handleCanPlay}
          onError={handleError}
          className={`${css.videoBackground}`}
          aria-hidden="true"
        >
          <source src="/bg-video-header.webm" type="video/webm" />
          <source src="/bg-video-header.mp4" type="video/mp4" />
        </video>

        <Image
          className="relative block object-cover lg:hidden"
          src="/header-mobile.jpg"
          alt="bg-photo"
          fill
          priority
        />

        <div
          className={`${css.contentOverlay} relative z-50 flex flex-col items-start pt-32 lg:pt-40`}
        >
          <div className="z-10 flex flex-col items-center gap-10 px-4 lg:items-start lg:pl-24">
            <p className="text-left text-4xl font-medium uppercase leading-tight tracking-wider lg:text-5xl">
              {renderWithBreaks(t('description'))}
            </p>
            <Link
              href="/contacts"
              className="rounded-sm border border-white bg-white px-5 py-2 text-2xl font-medium uppercase text-black hover:bg-custom-black hover:text-white hover:duration-700"
            >
              {t('button')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderVideo

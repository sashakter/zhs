'use client'

import React, { useEffect, useRef, useState } from 'react'
import css from './HeaderVideo.module.css'
import Image from 'next/image'

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
        {isVideoVisible && <source src="/bg-video.mp4" type="video/mp4" />}
        {isVideoVisible && <source src="/bg-video.webm" type="video/webm" />}
      </video>
      <Image
        className="block object-cover lg:hidden"
        src="/bg-photo.jpg"
        alt="bg-photo"
        fill
      />
      <div className={css.contentOverlay}>
        <h1 className={css.textOverlay}>Welcome to Our Site</h1>
      </div>
    </div>
  )
}

export default HeaderVideo

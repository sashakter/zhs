'use client'

import React, { useState, useRef, useEffect } from 'react'
import Title from '../Title'
import clsx from 'clsx'
import Image from 'next/image'
import css from '../Capacities/Capacities.module.css'
import { useTranslations } from 'next-intl'

interface Section {
  id: number
  title: string
  description: string
}

const Capacities: React.FC = () => {
  const t = useTranslations('Capacities')
  const [openSection, setOpenSection] = useState<number | null>(null)
  const contentRefs = useRef<Array<HTMLDivElement | null>>([])

  const sections: Section[] = [
    {
      id: 1,
      title: t('manufacturingLines.title'),
      description: t('manufacturingLines.description'),
    },
    {
      id: 2,
      title: t('qualityControl.title'),
      description: t('qualityControl.description'),
    },
    {
      id: 3,
      title: t('rawMaterials.title'),
      description: t('rawMaterials.description'),
    },
    {
      id: 4,
      title: t('productionFacilities.title'),
      description: t('productionFacilities.description'),
    },
    {
      id: 5,
      title: t('humanResources.title'),
      description: t('humanResources.description'),
    },
  ]

  const handleToggle = (id: number) => {
    setOpenSection(openSection === id ? null : id)
  }

  const videoRef = useRef<HTMLVideoElement>(null)
  const [isVideoVisible, setIsVideoVisible] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    if (window.innerWidth < 1024) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }

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
    <div className="relative z-40 flex flex-col justify-between bg-none bg-no-repeat text-white grayscale contain-paint lg:h-screen lg:min-h-screen lg:bg-about lg:bg-cover">
      <div className={`${css.videoMobile} z-10 block lg:hidden`}>
        <video
          ref={videoRef}
          loop
          muted
          playsInline
          autoPlay
          className={`${css.videoBackground} grayscale`}
        >
          <source src="/capacities.mp4" type="video/mp4" />
          <source src="/capacities.webm" type="video/webm" />
        </video>
      </div>
      <div className="absolute inset-0 z-10 bg-black opacity-65 lg:bg-white"></div>
      {/* Title Component */}
      <div className="relative z-20 flex flex-col-reverse items-center justify-between lg:-top-52 lg:flex-row-reverse">
        <div className={`${css.video} hidden lg:block`}>
          <div className={css.overlay}></div>
          <video
            ref={videoRef}
            loop
            muted
            playsInline
            className={`${css.videoBackground} grayscale`}
          >
            {isVideoVisible && (
              <>
                <source src="/capacities.mp4" type="video/mp4" />
                <source src="/bg-video-header.webm" type="video/webm" />
              </>
            )}
          </video>
        </div>
        {/* List of Sections */}
        <div className="flex flex-col items-center justify-center px-5 py-24 text-white lg:px-24 lg:py-0 lg:pt-40 xl:pl-48 xl:pt-9">
          <div className="relative z-20">
            <Title
              title={t('title')}
              earColor={isMobile ? '#fff' : '#000'}
              addClass="lg:text-black text-white"
            />
          </div>
          <div className="relative z-40 my-32 flex max-w-md flex-col items-center justify-center space-y-4 lg:mt-28">
            {sections.map((section, index) => (
              <div
                key={section.id}
                className="border-b border-white pb-2 lg:border-black"
              >
                {/* Section Title */}
                <button
                  onClick={() => handleToggle(section.id)}
                  className="flex w-full items-center justify-between text-left text-lg text-white focus:outline-none lg:text-2xl lg:text-black"
                >
                  {section.title}
                  <Image
                    src={
                      openSection === section.id
                        ? isMobile
                          ? '/Expand_right_black.svg'
                          : '/Expand_right_light.svg'
                        : isMobile
                          ? '/Expand_right_black.svg'
                          : '/Expand_right_light.svg'
                    }
                    alt="arrow"
                    width={24}
                    height={24}
                    className={`transition-all lg:w-8 ${openSection === section.id ? 'rotate-90' : 'rotate-0'}`}
                  />
                </button>

                {/* Smooth Transition for the Description */}
                <div
                  ref={(el) => {
                    contentRefs.current[index] = el // Storing the element in ref
                  }}
                  style={{
                    maxHeight:
                      openSection === section.id
                        ? contentRefs.current[index]?.scrollHeight
                        : 0,
                  }}
                  className={clsx(
                    'transition-max-height overflow-hidden duration-500 ease-in-out',
                  )}
                >
                  <div className="mt-2 p-1 text-lg text-white lg:mt-4 lg:text-lg lg:text-black">
                    {section.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Capacities

'use client'

import { useLocale, useTranslations } from 'next-intl'
import VideoJS from './VideoJS'
import { useEffect, useRef, useState } from 'react'
import Title from '../Title'
const PartnersVideo: React.FC = () => {
  const t = useTranslations('PatnersVideo')
  const playerRef = useRef(null)
  const locale = useLocale()
  const [videoJsOptions, setVideoJsOptions] = useState({
    autoplay: false,
    controls: true,
    responsive: true,
    fluid: true,
    sources: [],
  })
  useEffect(() => {
    // Update the video sources based on the locale
    if (locale === 'en') {
      setVideoJsOptions({
        ...videoJsOptions,
        sources: [
          //@ts-ignore
          {
            src: '/Partners-Video-En.mp4',
            type: 'video/mp4',
          },
          //@ts-ignore
          {
            src: '/Partners-Video-En.webm',
            type: 'video/webm',
          },
        ],
      })
    } else {
      setVideoJsOptions({
        ...videoJsOptions,
        sources: [
          //@ts-ignore
          {
            src: '/Partners-Video-Uk.mp4',
            type: 'video/mp4',
          },
          //@ts-ignore
          {
            src: '/Partners-Video-Uk.webm',
            type: 'video/webm',
          },
        ],
      })
    }
  }, [locale])
  return (
    <div className="relative flex flex-col items-center justify-center gap-14 py-10">
      <Title title={t('title')} />
      <VideoJS options={videoJsOptions} />
    </div>
  )
}

export default PartnersVideo

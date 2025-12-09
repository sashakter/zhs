'use client'

import { useLocale, useTranslations } from 'next-intl'
import VideoJS from './VideoJS'
import { useEffect, useRef, useState, useMemo, memo } from 'react'
import Title from '../Title'

// Константы для видео источников
const VIDEO_SOURCES = {
  en: [
    { src: '/partners-video-en.mp4', type: 'video/mp4' },
    { src: '/partners-video-en.webm', type: 'video/webm' },
  ],
  uk: [
    { src: '/partners-video-uk.mp4', type: 'video/mp4' },
    { src: '/partners-video-uk.webm', type: 'video/webm' },
  ],
} as const

const PartnersVideo: React.FC = () => {
  const t = useTranslations('PatnersVideo')
  const playerRef = useRef(null)
  const locale = useLocale()

  const videoJsOptions = useMemo(() => ({
    autoplay: false,
    controls: true,
    responsive: true,
    fluid: true,
    sources: locale === 'en' ? VIDEO_SOURCES.en : VIDEO_SOURCES.uk,
  }), [locale])

  return (
    <div className="relative flex flex-col items-center justify-center gap-14 py-10">
      <Title title={t('title')} />
      <VideoJS options={videoJsOptions} />
    </div>
  )
}

export default memo(PartnersVideo)

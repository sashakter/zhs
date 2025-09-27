'use client'

import { useEffect, useRef } from 'react'
import videojs from 'video.js'
import 'video.js/dist/video-js.css'
import { useTranslations, useLocale } from 'next-intl'
import Title from './Title'

export default function VideoReview() {
  const t = useTranslations('videoPartners')
  const locale = useLocale() // гарантируем реакцию на смену локали

  const videoRef = useRef<HTMLVideoElement | null>(null)
  const playerRef = useRef<typeof videojs.players | null>(null)

  // Инициализация один раз
  useEffect(() => {
    if (!videoRef.current || playerRef.current) return

    playerRef.current = videojs(videoRef.current, {
      controls: true,
      autoplay: false,
      preload: 'metadata',
      fluid: true,
      sources: [
        {
          src: t('video'), // '/partners-video-en.mp4' или '/partners-video-uk.mp4'
          type: 'video/mp4',
        },
      ],
    })

    return () => {
      // корректно убираем плеер при размонтировании
      playerRef.current?.dispose()
      playerRef.current = null
    }
  }, []) // init once

  // Обновляем источник при смене локали / перевода
  useEffect(() => {
    if (!playerRef.current) return
    const src = t('video')
    playerRef.current.src({ src, type: 'video/mp4' })
  }, [locale, t])

  return (
    <div className="flex flex-col gap-20 bg-black">
      <Title title={t('title')} />
      <div data-vjs-player>
        <video
          ref={videoRef}
          className="video-js vjs-default-skin vjs-big-play-centered"
        />
      </div>
    </div>
  )
}

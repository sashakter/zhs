'use client'

import { useTranslations } from 'next-intl'
import Title from './Title'
import { useEffect, useRef } from 'react'
import videojs from 'video.js'

export default function VideoReview() {
  const t = useTranslations('videoPartners') // Получаем перевод с URL видео
  const videoRef = useRef(null)
  const playerRef = useRef(null)

  useEffect(() => {
    if (!playerRef.current) {
      //@ts-ignore
      playerRef.current = videojs(videoRef.current, {
        controls: true,
        autoplay: false,
        sources: [
          {
            src: t('video'), // Используем ссылку на видео из переводов
            type: 'video/mp4',
          },
        ],
      })
    } else {
      //@ts-ignore
      playerRef.current.src({ src: t('video'), type: 'video/mp4' }) // Обновляем источник видео при смене языка
    }
  }, [t]) // Перезапускаем эффект при изменении перевода

  return (
    <div className="flex flex-col gap-20 bg-black">
      <Title title="Відеоогляд" />
      <div data-vjs-player>
        <video ref={videoRef} className="video-js"></video>{' '}
        {/* Обернули видео тег */}
      </div>
    </div>
  )
}

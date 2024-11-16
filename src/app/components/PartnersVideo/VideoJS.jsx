'use client'

import videojs from 'video.js'
import 'video.js/dist/video-js.css'
import { useRef, useEffect } from 'react'

export const VideoJS = (props) => {
  const videoRef = useRef(null)
  const playerRef = useRef(null)
  const { options, onReady } = props
  useEffect(() => {
    // Make sure Video.js player is only initialized once
    if (!playerRef.current) {
      // The Video.js player needs to be _inside_ the component el for React 18 Strict Mode.
      const videoElement = document.createElement('video-js')

      videoElement.classList.add('vjs-big-play-centered')
      videoRef.current.appendChild(videoElement)

      const player = (playerRef.current = videojs(videoElement, options, () => {
        onReady && onReady(player)
      }))
    } else {
      const player = playerRef.current

      player.autoplay(options.autoplay)
      player.src(options.sources)
    }
  }, [options, videoRef])

  useEffect(() => {
    const player = playerRef.current

    return () => {
      if (player && !player.isDisposed()) {
        player.dispose()
        playerRef.current = null
      }
    }
  }, [playerRef])

  return (
    <div data-vjs-player="" className="rounded-full">
      <div
        ref={videoRef}
        className="min-w-80 md:min-w-[640px] lg:min-w-[800px] xl:min-w-[1024px]"
      />
    </div>
  )
}

export default VideoJS

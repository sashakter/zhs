'use client'
import { CSSProperties } from 'react'

interface TitleProps {
  title: string
  titleColor?: string
  addClass?: string
  style?: CSSProperties
  earColor?: string
}

const Title: React.FC<TitleProps> = ({ title }) => {
  return (
    <div className="relative inline-block">
      {/* Yellow Background */}
      <div className="absolute inset-0 z-0 translate-x-1 translate-y-1 transform border border-black bg-yellow"></div>

      {/* White Box with Black Border */}
      <div className="relative z-10 border border-black bg-white px-4 py-2">
        <h1 className="text-center text-3xl font-medium uppercase text-black">
          {title}
        </h1>
      </div>
    </div>
  )
}

export default Title

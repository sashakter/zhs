'use client'

import EarTitle from './EarTitle'
import React, { CSSProperties } from 'react'

interface TitleProps {
  title: string
  addClass?: string
  style?: CSSProperties
  earColor?: string
}

const Title: React.FC<TitleProps> = ({
  title,
  addClass,
  style,
  earColor = '#C6986D',
}) => {
  return (
    <div
      className={`flex flex-col items-center justify-center ${addClass} mx-auto`}
      style={style}
    >
      <div>
        <EarTitle color={earColor} />
      </div>
      <h1 className="text-2xl uppercase sm:text-[40px] md:text-3xl lg:text-4xl">
        {title}
      </h1>
      <div className="rotate-180">
        <EarTitle color={earColor} />
      </div>
    </div>
  )
}

export default Title

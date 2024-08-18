'use client'

import EarTitle from './EarTitle'
import { CSSProperties } from 'react'

interface TitleProps {
  title: string
  titleColor?: string
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
      className={`mb-16 flex flex-col items-center justify-center ${addClass} mx-auto`}
      style={style}
    >
      <div>
        <EarTitle color={earColor} />
      </div>
      <h1 className={`text-4xl uppercase sm:text-[40px] lg:text-5xl`}>
        {title}
      </h1>
      <div className="rotate-180">
        <EarTitle color={earColor} />
      </div>
    </div>
  )
}

export default Title

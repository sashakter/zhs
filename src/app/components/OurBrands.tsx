import React from 'react'
import Image from 'next/image' // Assuming you're using Next.js
import Title from './Title' // Adjust the import path
import Link from 'next/link'

const OurBrands: React.FC = () => {
  return (
    <div className="relative flex items-center justify-center bg-black text-white lg:h-screen">
      {/* Background Image */}
      <Image
        src="/bg-image-brands.jpg" // Replace with your background image path
        alt="Background"
        layout="fill"
        className="object-cover opacity-70"
      />

      {/* Overlay to darken the background */}
      <div className="absolute inset-0 bg-black opacity-90"></div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col justify-start gap-20 py-10 text-center lg:gap-24 lg:pb-20">
        {/* Title */}
        <Title title="НАШІ БРЕНДИ" />

        {/* Brand Logo */}
        <Link
          href={'/zhytnya-slyoza#content'}
          className="flex flex-col items-center justify-center"
        >
          <Image
            src="/logoColored.png" // Replace with your brand logo path
            alt="Житня Сльоза"
            width={500}
            height={500}
            className="w-52 drop-shadow-2xl lg:w-64"
          />

          {/* Brand Caption */}
          <p className="text-xl font-thin lg:text-2xl">ТМ “ЖИТНЯ СЛЬОЗА”</p>
        </Link>
      </div>
    </div>
  )
}

export default OurBrands

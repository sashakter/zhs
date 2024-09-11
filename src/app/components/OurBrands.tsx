import React from 'react'
import Image from 'next/image' // Assuming you're using Next.js
import Title from './Title' // Adjust the import path
import Link from 'next/link'

const OurBrands: React.FC = () => {
  return (
    <div className="relative flex h-screen items-center justify-center bg-black text-white lg:h-auto lg:items-start lg:py-10">
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
      <div className="relative z-10 text-center">
        {/* Title */}
        <Title title="НАШІ БРЕНДИ" />

        {/* Brand Logo */}
        <Link
          href={'/zhytnya-slyoza'}
          className="my-10 flex items-center justify-center"
        >
          <Image
            src="/logoColored.png" // Replace with your brand logo path
            alt="Житня Сльоза"
            width={200}
            height={200}
            className="drop-shadow-2xl"
          />
        </Link>

        {/* Brand Caption */}
        <p className="text-xl font-thin">ТМ “ЖИТНЯ СЛЬОЗА”</p>
      </div>
    </div>
  )
}

export default OurBrands

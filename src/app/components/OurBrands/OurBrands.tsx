import React from 'react'
import Image from 'next/image' // Assuming you're using Next.js
import Title from '../Title' // Adjust the import path
import Link from 'next/link'
import RunningSroke from '../RunningStroke'
import css from './OurBrands.module.css'

const OurBrands: React.FC = () => {
  return (
    <div className={`${css.brandsContainer} bg-black text-white`}>
      {/* Background Image */}
      <Image
        src="/brands.jpg" // Replace with your background image path
        alt="Background"
        layout="fill"
        className="object-cover object-bottom opacity-50 blur-sm"
      />

      {/* Overlay to darken the background */}
      <div className="absolute inset-0 bg-black opacity-30"></div>

      {/* Content */}
      <div className="relative z-10 mt-56 flex h-full flex-col items-center justify-start gap-20 py-7 text-center lg:gap-10 lg:py-10 lg:pb-20">
        {/* Title */}
        <Title title="НАШІ БРЕНДИ" />

        {/* Brand Logo */}
        <div className="flex flex-wrap items-center justify-center gap-10 lg:gap-20">
          <Link
            href={'/'}
            className="flex flex-col items-center justify-center"
          >
            <Image
              src={'/ice-peak.svg'} // Replace with your brand logo path
              alt="Ice Peack"
              width={500}
              height={500}
              className="mb-6 w-52 hover:drop-shadow-[0_35px_35px_rgba(135,217,255,0.25)] hover:duration-150 lg:w-64"
            />

            {/* Brand Caption */}
            {/* <p className="text-xl font-thin lg:text-2xl">Ice Peack</p> */}
          </Link>
          <Link
            href={'/zhytnya-slyoza#content'}
            className="flex flex-col items-center justify-center"
          >
            <Image
              src="/logoColored.png" // Replace with your brand logo path
              alt="Житня Сльоза"
              width={500}
              height={500}
              className="mb-6 w-52 drop-shadow-2xl hover:drop-shadow-[0_15px_15px_rgba(194,153,113,0.25)] hover:duration-150 lg:w-64"
            />

            {/* Brand Caption */}
            {/* <p className="text-xl font-thin lg:text-2xl">ТМ “ЖИТНЯ СЛЬОЗА”</p> */}
          </Link>
          <Link
            href={'/'}
            className="flex flex-col items-center justify-center"
          >
            <Image
              src={'/mirka.png'} // Replace with your brand logo path
              alt="Mirka"
              width={500}
              height={500}
              className="mb-6 w-52 hover:drop-shadow-[0_15px_15px_rgba(253,61,64,0.55)] hover:duration-150 lg:w-64"
            />

            {/* Brand Caption */}
            {/* <p className="text-xl font-thin lg:text-2xl">Mirka</p> */}
          </Link>
        </div>
        <RunningSroke />
      </div>
    </div>
  )
}

export default OurBrands

import React from 'react'
import Image from 'next/image' // Assuming you're using Next.js
import Title from '../Title' // Adjust the import path
import css from '../AboutCompany/AboutCompany.module.css'
import Marquee from 'react-fast-marquee'

const AboutCompany: React.FC = () => {
  return (
    <div className="relative flex flex-col items-center bg-white p-8 text-black contain-paint">
      {/* <div className="absolute inset-0 z-0 h-full max-lg:hidden">
        <Marquee autoFill={true} direction="right">
          <Image
            src={`/bg-about-img3.jpg`} // Adjust with your image paths
            alt={`bg-image`}
            width={300}
            height={150}
            className="h-full w-[600px] object-cover object-center lg:h-screen"
          />
          <Image
            src={`/bg-about-img1.jpg`} // Adjust with your image paths
            alt={`bg-image`}
            width={300}
            height={150}
            className="w-[600px] object-cover object-center lg:h-screen"
          />
          <Image
            src={`/bg-about-img2.jpg`} // Adjust with your image paths
            alt={`bg-image`}
            width={300}
            height={150}
            className="w-[600px] object-cover lg:h-screen"
          />
        </Marquee>
      </div> */}

      {/* Overlay to darken the background */}
      <div className="absolute inset-0 z-10 bg-white opacity-65"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center lg:gap-6">
        <Title title="ПРО КОМПАНІЮ" earColor="#000" />

        <div className="mt-16 flex max-w-[1040px] flex-wrap items-center justify-center gap-10 uppercase">
          <div className="flex flex-wrap items-center justify-center gap-10">
            <div className={`${css.partlist} bg-custom-cream flex min-h-[263px] max-w-64 flex-col items-center justify-center rounded-xl px-4 py-4 text-left lg:min-w-80`}>
              <Image src="/star.svg" alt="Icon 1" width={50} height={50} />
              <p className="mt-4 text-center text-lg font-semibold">
                Унікальне позиціонування кожної торгової марки
              </p>
              <p className={css.overlay}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                eget leo at augue feugiat rutrum mollis non tellus. Nullam vel
                libero dignissim, tempor augue quis.
              </p>
            </div>

            <div className={`${css.partlist} bg-custom-cream flex min-h-[263px] max-w-64 flex-col items-center justify-center rounded-xl px-4 py-4 text-left lg:min-w-80`}>
              <Image src="/quality.svg" alt="Icon 2" width={50} height={50} />
              <p className="mt-4 text-center text-lg font-semibold">
                Високі показники кількісної та якісної дистрибуції
              </p>
              <p className={css.overlay}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                eget leo at augue feugiat rutrum mollis non tellus. Nullam vel
                libero dignissim, tempor augue quis.
              </p>
            </div>

            <div className={`${css.partlist} bg-custom-cream flex min-h-[263px] max-w-64 flex-col items-center justify-center rounded-xl px-4 py-4 text-left lg:min-w-80`}>
              <Image
                src="/arrow-double.svg"
                alt="Icon 3"
                width={50}
                height={50}
              />
              <p className="mt-4 text-center text-lg font-semibold">
                Стабільно висока якість
              </p>
              <p className={css.overlay}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                eget leo at augue feugiat rutrum mollis non tellus. Nullam vel
                libero dignissim, tempor augue quis.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-10">
            <div className={`${css.partlist} bg-custom-cream flex min-h-[263px] max-w-64 flex-col items-center justify-center rounded-xl px-4 py-4 text-left lg:min-w-80`}>
              <p className="text-6xl font-thin">20+</p>
              <p className="mt-4 text-center text-lg font-semibold">
                Компанія на ринку алкоголю України з 2002 року
              </p>
              <p className={css.overlay}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                eget leo at augue feugiat rutrum mollis non tellus. Nullam vel
                libero dignissim, tempor augue quis.
              </p>
            </div>

            <div className={`${css.partlist} bg-custom-cream flex min-h-[263px] max-w-64 flex-col items-center justify-center rounded-xl px-4 py-4 text-left lg:min-w-80`}>
              <Image src="/way.svg" alt="Icon 4" width={50} height={50} />
              <p className="mt-4 text-center text-lg font-semibold">
                Різноманітна лінійка смаків, що включає в себе горілки класичні,
                горілки особливі, солодкі та гіркі настоянки
              </p>
              <p className={css.overlay}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                eget leo at augue feugiat rutrum mollis non tellus. Nullam vel
                libero dignissim, tempor augue quis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutCompany

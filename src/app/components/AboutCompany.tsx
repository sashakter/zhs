import React from 'react'
import Image from 'next/image' // Assuming you're using Next.js
import Title from './Title' // Adjust the import path
import Marquee from 'react-fast-marquee'

const AboutCompany: React.FC = () => {
  return (
    <div className="relative flex flex-col items-center bg-white p-8 text-black contain-paint lg:h-screen">
      <div className="absolute inset-0 z-0 h-full max-lg:hidden">
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
      </div>

      {/* Overlay to darken the background */}
      <div className="absolute inset-0 z-10 bg-white opacity-65"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center lg:gap-14">
        <Title title="ПРО КОМПАНІЮ" earColor="#000" />

        <div className="mt-16 flex max-w-[1040px] flex-wrap items-center justify-center gap-10 uppercase">
          <div className="flex flex-wrap items-center justify-center gap-10">
            <div className="flex max-w-64 flex-col items-center text-left lg:min-w-80">
              <Image src="/star.svg" alt="Icon 1" width={50} height={50} />
              <p className="mt-4 text-lg font-semibold">
                Унікальне позиціонування кожної торгової марки
              </p>
            </div>

            <div className="flex max-w-64 flex-col items-center text-left lg:min-w-80">
              <Image src="/quality.svg" alt="Icon 2" width={50} height={50} />
              <p className="mt-4 text-lg font-semibold">
                Високі показники кількісної та якісної дистрибуції
              </p>
            </div>

            <div className="flex max-w-64 flex-col items-center text-left lg:min-w-80">
              <Image
                src="/arrow-double.svg"
                alt="Icon 3"
                width={50}
                height={50}
              />
              <p className="mt-4 text-lg font-semibold">
                Стабільно висока якість
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-10">
            <div className="flex max-w-64 flex-col items-center text-left lg:min-w-80">
              <p className="text-6xl font-thin">20+</p>
              <p className="mt-4 text-lg font-semibold">
                Компанія на ринку алкоголю України з 2002 року
              </p>
            </div>

            <div className="flex max-w-64 flex-col items-center text-left lg:min-w-80">
              <Image src="/way.svg" alt="Icon 4" width={50} height={50} />
              <p className="mt-4 text-lg font-semibold">
                Різноманітна лінійка смаків, що включає в себе горілки класичні,
                горілки особливі, солодкі та гіркі настоянки
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutCompany

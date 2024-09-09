import React from 'react'
import Image from 'next/image' // Assuming you're using Next.js
import Title from './Title' // Adjust the import path

const AboutCompany: React.FC = () => {
  return (
    <div
      className="relative flex flex-col items-center bg-white p-8 text-black"
      style={{ contain: 'paint' }}
    >
      {/* Background Image 1 */}
      <div className="absolute -left-[50%] top-0 z-0 h-96 w-96 opacity-10">
        <Image
          src="/bg-image-about.png" // Replace with your image path
          alt="Background 1"
          layout="fill"
          objectFit="contain"
          className="object-contain object-left"
        />
      </div>

      {/* Background Image 2 */}
      <div className="absolute -right-[50%] bottom-0 z-0 h-96 w-96 opacity-10">
        <Image
          src="/bg-image-about.png" // Replace with your image path
          alt="Background 2"
          layout="fill"
          objectFit="contain"
          className="object-right"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center">
        <Title title="ПРО КОМПАНІЮ" />

        <div className="mt-16 flex flex-col items-center gap-10">
          <div className="flex flex-col items-center text-center">
            <Image src="/star.svg" alt="Icon 1" width={50} height={50} />
            <p className="mt-4 text-lg font-semibold">
              Унікальне позиціонування кожної торгової марки.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <Image src="/quality.svg" alt="Icon 2" width={50} height={50} />
            <p className="mt-4 text-lg font-semibold">
              Високі показники кількісної та якісної дистрибуції.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
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

          <div className="flex flex-col items-center text-center">
            <p className="text-6xl font-thin">20+</p>
            <p className="mt-4 text-lg font-semibold">
              Компанія на ринку алкоголю України з 2002 року.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <Image src="/way.svg" alt="Icon 4" width={50} height={50} />
            <p className="mt-4 text-lg font-semibold">
              Різноманітна лінійка смаків, що включає в себе горілки класичні,
              горілки особливі, солодкі та гіркі настоянки.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutCompany

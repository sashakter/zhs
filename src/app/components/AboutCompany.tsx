import Image from 'next/image'
import Title from './Title'

const AboutCompany: React.FC = () => {
  return (
    <div className="relative py-10">
      <div className="absolute inset-0 z-0">
        <Image
          src={'/about-com-bg.jpg'}
          alt="background photo"
          fill={true}
          className="object-cover"
          quality={50}
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 z-0 bg-[#000] opacity-90"></div>
      <div className="container relative z-10 mx-auto p-4 md:p-6 lg:p-8">
        <Title title="ПРО КОМПАНІЮ" addClass="" />
        <div className="flex flex-col items-center justify-around lg:flex-row">
          <Image
            src={'/companyLogo.png'}
            alt="company logo"
            width={350}
            height={350}
          />
          <Image
            src={'/EarLine.svg'}
            className="w-8 max-lg:rotate-90 max-md:w-4"
            alt="ear line"
            width={344}
            height={26}
          />
          <div className="flex flex-col items-center lg:items-start">
            <ul className="flex max-w-md list-none flex-col gap-5 text-2xl">
              <li className="flex items-center gap-5">
                <Image
                  className="shadow-sm"
                  src={'/ear.svg'}
                  alt="ear"
                  width={24}
                  height={24}
                />
                Високі показники кількісної та якісної дистрибуції.
              </li>
              <li className="flex items-center gap-5">
                <Image
                  className="shadow-sm"
                  src={'/ear.svg'}
                  alt="ear"
                  width={24}
                  height={24}
                />
                Унікальне позиціонування кожної торгової марки.
              </li>
              <li className="flex items-center gap-5">
                <Image
                  className="shadow-sm"
                  src={'/ear.svg'}
                  alt="ear"
                  width={24}
                  height={24}
                />
                Стабільно висока якість.
              </li>
              <li className="flex items-center gap-5">
                <Image
                  className="shadow-sm"
                  src={'/ear.svg'}
                  alt="ear"
                  width={24}
                  height={24}
                />
                Компанія на ринку алкоголю України з 2002 року.
              </li>
              <li className="flex items-center gap-5">
                <Image
                  className="shadow-sm"
                  src={'/ear.svg'}
                  alt="ear"
                  width={24}
                  height={24}
                />
                Різноманітна лінійка смаків, що включає в себе горілки класичні,
                горілки особливі, солодкі та гіркі настоянки.
              </li>
              <li></li>
            </ul>
            <button className="rounded-lg bg-white px-5 py-2 text-2xl uppercase text-black">
              дізнатися більше
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutCompany

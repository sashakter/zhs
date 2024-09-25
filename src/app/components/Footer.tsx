import Image from 'next/image'
import ContactBar from './ContactBar'
import Link from 'next/link'

const Footer: React.FC = () => {
  return (
    <footer className="relative flex flex-col gap-10 px-5 pb-3 pt-10">
      <div className="absolute inset-0 z-0">
        <Image
          src={'/footer-bkg.jpg'}
          alt="background photo"
          fill={true}
          className="object-cover"
          quality={100}
        />
      </div>
      <div className="absolute inset-0 z-0 bg-[#000] opacity-80"></div>
      <h3 className="relative text-center text-xl font-semibold uppercase md:text-2xl lg:text-3xl">
        <span className="text-yellow">СПОЖИВАЙТЕ ВІДПОВІДАЛЬНО!</span> НЕ
        ДІЛІТЬСЯ ЦИМ КОНТЕНТОМ З ОСОБАМИ, ЯКІ НЕ ДОСЯГЛИ 18 РОКІВ
      </h3>
      <div className="relative flex flex-col items-center justify-around gap-10 p-4 lg:flex-row lg:flex-wrap">
        <div className="flex flex-col items-center gap-10 font-thin lg:items-start">
          <h2 className="text-center text-4xl">
            ТОВ &quot;АлкоТрейд Україна&quot;
          </h2>
          <ContactBar />
          <a href="tel:+380677066847" className="text-2xl">
            +380(67)-706-68-47
          </a>
          <a
            href="mailto:office@alcotrade.com.ua"
            className="text-2xl uppercase"
          >
            office@alcotrade.com.ua
          </a>
          <div className="flex items-center gap-8">
            <a href="https://instagram.com">
              <Image
                src={'/instagram.svg'}
                alt="instagram"
                width={75}
                height={75}
                className="rounded-full border p-2"
              />
            </a>
            <a href="https://instagram.com">
              <Image
                src={'/instagram.svg'}
                alt="instagram"
                width={75}
                height={75}
                className="rounded-full border p-2"
              />
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center gap-2 text-2xl font-thin uppercase lg:items-start">
          <Link href={'/products'}>продукція</Link>
          <Link href={'/partnership'}>партнерство</Link>
          <Link href={'/license'}>ліцензія</Link>
          <Link href={'/policies'}>політика конфіденційності</Link>
        </div>
        <Image
          src={'/alcotrade-logo.svg'}
          className="max-w-300 max-h-200 mx-auto drop-shadow-2xl lg:mx-0"
          alt="logo"
          priority={true}
          width={300}
          height={300}
        />
      </div>
      <h3 className="relative text-center text-xl uppercase">
        тов &quot;алкотрейд Україна&quot; ©2024 УСІ ПРАВА ЗАХИЩЕНО
      </h3>
    </footer>
  )
}

export default Footer

import Image from 'next/image'
import ContactBar from './ContactBar'
import Link from 'next/link'

const Footer: React.FC = () => {
  return (
    <footer className="relative flex flex-col gap-10 pb-3 pt-10">
      <div className="absolute inset-0 z-0">
        <Image
          src={'/footer-bg.png'}
          alt="background photo"
          fill={true}
          className="object-cover"
          quality={100}
        />
      </div>
      <div className="absolute inset-0 z-0 bg-[#000] opacity-90"></div>
      <h3 className="relative text-center text-xl uppercase md:text-2xl lg:text-4xl">
        <span className="text-yellow">СПОЖИВАЙТЕ ВІДПОВІДАЛЬНО!</span> НЕ
        ДІЛІТЬСЯ ЦИМ КОНТЕНТОМ З ОСОБАМИ, ЯКІ НЕ ДОСЯГЛИ 18 РОКІВ
      </h3>
      <div className="relative flex flex-col items-center justify-around gap-10 p-4 lg:flex-row lg:flex-wrap">
        <div className="flex flex-col items-center gap-10 lg:items-start">
          <h2 className="text-center text-5xl uppercase">
            ТМ &quot;ЖИТНЯ СЛЬОЗА&quot;
          </h2>
          <ContactBar />
          <a href="tel:+380677066847" className="text-3xl">
            +380(67)-706-68-47
          </a>
          <a href="mailto:Sv-kompani@ukr.net" className="text-3xl uppercase">
            Sv-kompani@ukr.net
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
        <div className="flex flex-col items-center gap-2 text-2xl uppercase lg:items-start">
          <Link href={'/products'}>продукція</Link>
          <Link href={'/partnership'}>партнерство</Link>
          <Link href={'/export'}>експорт</Link>
          <Link href={'/license'}>ліцензія</Link>
          <Link href={'/policies'}>політика конфіденційності</Link>
        </div>
        <Image
          src={'/logoColored.png'}
          className="max-w-300 max-h-200 mx-auto drop-shadow-2xl lg:mx-0"
          alt="logo"
          priority={true}
          width={300}
          height={300}
        />
      </div>
      <h3 className="relative text-center text-xl uppercase">
        ПП &quot;ОЛЕКСАНДРІЯ ПРЕМІУМ&quot; ©2024 УСІ ПРАВА ЗАХИЩЕНО
      </h3>
    </footer>
  )
}

export default Footer

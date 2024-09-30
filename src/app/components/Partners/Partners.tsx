import Image from 'next/image'
import css from './Partners.module.css'
import Title from '../Title'
import Marquee from 'react-fast-marquee'
import RunningSroke from '../RunningStroke'
const Partners: React.FC = () => {
  return (
    <div className="relative mb-[900px] flex justify-center">
      <div className={`${css.covers} relative bg-custom-capacities`}>
        <div className="absolute inset-0 z-30 bg-black opacity-70"></div>
        <RunningSroke />
        <div className={css.content}>
          <div className={css.marquee}>
            <Marquee
              style={{ transform: 'rotate(16deg)' }}
              autoFill={true}
              loop={0}
              gradient={false}
              direction="right"
              speed={40}
            >
              <Image
                src={'/first-partner.jpg'}
                alt="First photo gallery"
                width={853}
                height={1280}
                className={css.imagefirst}
              />
              <Image
                src={'/second-partner.jpg'}
                alt="Second photo gallery"
                width={853}
                height={1280}
                className={css.imagefirst}
              />
              <Image
                src={'/third-partner.jpg'}
                alt="Third photo gallery"
                width={853}
                height={1280}
                className={css.imagefirst}
              />
              <Image
                src={'/fourth-partner.jpg'}
                alt="Fourth photo gallery"
                width={853}
                height={1280}
                className={css.imagefirst}
              />
              <Image
                src={'/fifth-partner.jpg'}
                alt="Fifth photo gallery"
                width={853}
                height={1280}
                className={css.imagefirst}
              />
              <Image
                src={'/six-partner.jpg'}
                alt="Six photo gallery"
                width={853}
                height={1280}
                className={css.imagefirst}
              />
              <Image
                src={'/seven-partner.jpg'}
                alt="Seven photo gallery"
                width={853}
                height={1280}
                className={css.imagefirst}
              />
            </Marquee>
            <Marquee
              style={{ transform: 'rotate(16deg)' }}
              autoFill={true}
              loop={0}
              gradient={false}
              direction="left"
              speed={40}
            >
              <Image
                src={'/seven-partner.jpg'}
                alt="Seven photo gallery"
                width={853}
                height={1280}
                className={css.imagefirst}
              />
              <Image
                src={'/first-partner.jpg'}
                alt="First photo gallery"
                width={853}
                height={1280}
                className={css.imagefirst}
              />
              <Image
                src={'/six-partner.jpg'}
                alt="Six photo gallery"
                width={853}
                height={1280}
                className={css.imagefirst}
              />
              <Image
                src={'/second-partner.jpg'}
                alt="Second photo gallery"
                width={853}
                height={1280}
                className={css.imagefirst}
              />
              <Image
                src={'/fifth-partner.jpg'}
                alt="Fifth photo gallery"
                width={853}
                height={1280}
                className={css.imagefirst}
              />
              <Image
                src={'/third-partner.jpg'}
                alt="Third photo gallery"
                width={853}
                height={1280}
                className={css.imagefirst}
              />
              <Image
                src={'/fourth-partner.jpg'}
                alt="Fourth photo gallery"
                width={853}
                height={1280}
                className={css.imagefirst}
              />
            </Marquee>
            <Marquee
              speed={40}
              style={{ transform: 'rotate(16deg)' }}
              autoFill={true}
              loop={0}
              gradient={false}
              direction="right"
            >
              <Image
                src={'/fifth-partner.jpg'}
                alt="Fifth photo gallery"
                width={853}
                height={1280}
                className={css.imagefirst}
              />
              <Image
                src={'/fourth-partner.jpg'}
                alt="Fourth photo gallery"
                width={853}
                height={1280}
                className={css.imagefirst}
              />
              <Image
                src={'/first-partner.jpg'}
                alt="First photo gallery"
                width={853}
                height={1280}
                className={css.imagefirst}
              />
              <Image
                src={'/second-partner.jpg'}
                alt="Second photo gallery"
                width={853}
                height={1280}
                className={css.imagefirst}
              />
              <Image
                src={'/seven-partner.jpg'}
                alt="Seven photo gallery"
                width={853}
                height={1280}
                className={css.imagefirst}
              />
              <Image
                src={'/six-partner.jpg'}
                alt="Six photo gallery"
                width={853}
                height={1280}
                className={css.imagefirst}
              />
              <Image
                src={'/third-partner.jpg'}
                alt="Third photo gallery"
                width={853}
                height={1280}
                className={css.imagefirst}
              />
            </Marquee>
          </div>
        </div>
      </div>

      <div className="absolute z-40 px-4 py-36 text-black lg:px-20">
        {/* Overlay */}
        <div className="relative flex flex-col items-center justify-center gap-14 text-white">
          <Title title="партнери" />
          <div className="flex flex-col items-center justify-center gap-10 lg:text-2xl">
            <p className="max-w-md text-center">
              Завод співпрацює з дистриб&#39;юторами по всій Україні і планує
              вихід на міжнародний ринок.
            </p>
            <Image className="w-52" src={"/marketopt.png"} alt="Marketopt Icon" width={666} height={376}/>
            <div className="flex flex-wrap gap-20">
              <div className="flex flex-col items-center justify-center gap-2 lg:min-w-[429px] lg:gap-5">
                <p className="max-w-80 text-center lg:max-w-96">
                  Основні клієнти включають:
                </p>
                <ul className="text-left font-semibold">
                  <li>ПП &quot;АЛКОГРУПА ПЛЮС&quot; </li>
                  <li>ПП &quot;ГУРТОВА БАЗА&quot;</li>
                  <li>ТОВ &quot;АЛКОБАЗА&quot;</li>
                  <li>ТОВ &quot;КЛЕВЕР ЮА&quot;</li>
                  <li>ТОВ &quot;ТД ІМПЕРІАЛ&quot;</li>
                </ul>
              </div>
              <div className="flex flex-col items-start justify-center gap-2 lg:min-w-[429px] lg:gap-5">
                <p className="content-center text-center">Постачальники:</p>
                <ul className="text-left font-semibold">
                  <li>ТОВ &quot;СПІРІТУС ВИШНЯКИ&quot;</li>
                  <li>ТОВ &quot;УОЛЛ-СТРИТ&quot;</li>
                  <li>ТОВ &quot;МАЛИНІВСЬКИЙ СКЛОЗАВОД&quot;</li>
                  <li>ТОВ &quot;СКЛЯННИЙ АЛЬЯНС&quot;</li>
                  <li>ТОВ ТД &quot;ОСТОВ-БАРДС&quot;</li>
                </ul>
              </div>
            </div>
          </div>
          <button className="mt-4 rounded-sm border border-white bg-white px-5 py-2 text-2xl font-medium uppercase text-black hover:bg-custom-black hover:text-white hover:duration-700">
            Зв'язатись з нами
          </button>
        </div>
      </div>
    </div>
  )
}

export default Partners

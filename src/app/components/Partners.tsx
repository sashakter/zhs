import Image from 'next/image'
import Title from './Title'
const Partners: React.FC = () => {
  return (
    <div className="relative px-4 py-10 text-black lg:h-screen lg:px-20">
      <div className="absolute inset-0 z-0">
        <Image
          src={'/bg-benefits.jpg'}
          alt="background photo"
          fill={true}
          className="object-cover"
          priority={true}
          quality={50}
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 z-0 bg-black opacity-90"></div>
      <div className="relative flex flex-col items-center justify-center gap-14 text-white">
        <Title title="партнери" />
        <div className="flex flex-wrap items-center justify-center gap-10 lg:text-2xl">
          <div className="flex flex-col gap-2 lg:gap-5">
            <p className="max-w-80 text-center lg:max-w-96">
              Завод співпрацює з дистриб&#39;юторами по всій Україні і планує
              вихід на міжнародний ринок. Основні клієнти включають:{' '}
            </p>
            <ul className="text-left font-semibold">
              <li>ПП &quot;АЛКОГРУПА ПЛЮС&quot; </li>
              <li>ПП &quot;ГУРТОВА БАЗА&quot;</li>
              <li>ТОВ &quot;АЛКОБАЗА&quot;</li>
              <li>ТОВ &quot;КЛЕВЕР ЮА&quot;</li>
              <li>ТОВ &quot;ТД ІМПЕРІАЛ&quot;</li>
            </ul>
          </div>
          <div className="flex flex-col gap-2 lg:gap-5">
            <p className="content-center text-center lg:min-h-[160px]">
              Постачальники:
            </p>
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
    </div>
  )
}

export default Partners

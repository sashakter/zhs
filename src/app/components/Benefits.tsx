import Image from 'next/image'
import Title from './Title'
const Partners: React.FC = () => {
  return (
    <div className="relative px-4 py-10 text-black lg:px-20">
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
      <div className="absolute inset-0 z-0 bg-[#fff] opacity-90"></div>
      <div className="relative flex flex-col items-center justify-center gap-14">
        <Title title="партнери" />
        <div className="flex flex-wrap items-center justify-center gap-10 text-center">
          <div className="">
            <p>
              Завод співпрацює з дистриб&#39;юторами по всій Україні і планує
              вихід на міжнародний ринок. Основні клієнти включають:{' '}
            </p>
            <ul className="font-semibold">
              <li>ПП &quot;АЛКОГРУПА ПЛЮС&quot; </li>
              <li>ПП &quot;ГУРТОВА БАЗА&quot;</li>
              <li>ТОВ &quot;АЛКОБАЗА&quot;</li>
              <li>ТОВ &quot;КЛЕВЕР ЮА&quot;</li>
              <li>ТОВ &quot;КЛЕВЕР ЮА&quot;</li>
            </ul>
          </div>
          <div>
            <p>Постачальники:</p>
            <ul className="font-semibold">
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

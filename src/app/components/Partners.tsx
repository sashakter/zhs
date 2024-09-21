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
      <div className="absolute inset-0 z-0 bg-black opacity-80"></div>
      <div className="relative flex flex-col items-center justify-center gap-14 text-white">
        <Title title="партнери" />
        <div className="flex flex-col items-center justify-center gap-10 lg:text-2xl">
          <p className="max-w-md text-center">
            Завод співпрацює з дистриб&#39;юторами по всій Україні і планує
            вихід на міжнародний ринок.
          </p>
          <div className="flex flex-wrap gap-20">
            <div className="flex flex-col items-center justify-center gap-2 lg:gap-5">
              <p className="max-w-80 text-center lg:max-w-96">
                Основні клієнти включають:{' '}
              </p>
              <ul className="text-left font-semibold">
                <li>ПП &quot;АЛКОГРУПА ПЛЮС&quot; </li>
                <li>ПП &quot;ГУРТОВА БАЗА&quot;</li>
                <li>ТОВ &quot;АЛКОБАЗА&quot;</li>
                <li>ТОВ &quot;КЛЕВЕР ЮА&quot;</li>
                <li>ТОВ &quot;ТД ІМПЕРІАЛ&quot;</li>
              </ul>
            </div>
            <div className="flex flex-col items-center justify-center gap-2 lg:gap-5">
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
        <button className="bg-custom-black rounded-sm border border-white px-5 py-2 font-medium uppercase text-white text-2xl hover:duration-700 hover:bg-white hover:text-black">
          Зв'язатись з нами
        </button>
      </div>
    </div>
  )
}

export default Partners

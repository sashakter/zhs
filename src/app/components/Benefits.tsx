import Image from 'next/image'
import Title from './Title'
const Benefits: React.FC = () => {
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
      <div className="relative flex flex-col">
        <Title title="переваги" earColor="#000000" />
        <div className="flex flex-wrap items-start justify-around gap-14 text-center uppercase lg:gap-0">
          <div className="flex max-w-sm flex-col items-center justify-center gap-14">
            <h2 className="text-3xl font-medium">Висока якість продукції</h2>
            <p className="text-2xl lg:min-h-[192px]">
              Завдяки впровадженню новітніх авторських рецептур, використанню
              натуральних інгредієнтів та суворому контролю якості на всіх
              етапах виробництва, наша продукція славиться своїм приємним
              смаком, ароматом, м&apos;якістю та легкістю.
            </p>
            <Image
              src={'/earLineB.svg'}
              quality={100}
              alt="earLine"
              width={140}
              height={10}
              className="relative lg:-right-1/4"
            />
          </div>

          <div className="flex max-w-sm flex-col items-center justify-center gap-14">
            <h2 className="text-3xl font-medium">Міжнародні стандарти</h2>
            <p className="text-2xl lg:min-h-[192px]">
              Ми працюємо відповідно до міжнародних стандартів ISO 9001:2015 та
              ISO 22000:2018, що гарантує високу якість і безпечність нашої
              продукції.
            </p>
            <Image
              src={'/earLineB.svg'}
              quality={100}
              alt="earLine"
              width={140}
              height={10}
              className="relative lg:-right-1/4"
            />
          </div>

          <div className="flex max-w-sm flex-col items-center justify-center gap-14">
            <h2 className="text-3xl font-medium">Масштабна реконструкція:</h2>
            <p className="text-2xl lg:min-h-[192px]">
              За останні роки на нашому заводі проведено масштабну
              реконструкцію, яка включає будівництво нових цехів і складів,
              встановлення сучасного обладнання та впровадження нових технологій
              виробництва.
            </p>
            <Image
              src={'/earLineB.svg'}
              quality={100}
              alt="earLine"
              width={140}
              height={10}
              className="relative lg:-right-1/4"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Benefits

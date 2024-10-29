import Image from 'next/image'
import Title from './Title'

const News: React.FC = () => {
  return (
    <div className="relative">
      <div className="absolute inset-0 z-0">
        <Image
          src={'/news-bg.jpg'}
          alt="background photo"
          fill={true}
          className="object-cover"
          quality={50}
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 z-0 bg-[#000] opacity-90"></div>
      <div className="relative px-5 py-10">
        <Title title="новини" earColor="#fff" />
        <div className="flex flex-col-reverse flex-wrap gap-24 lg:flex-row">
          <div className="flex flex-col gap-6">
            <p className="text-3xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              facilisis aliquam magna, eget consectetur magna bibendum quis.
              Nullam id erat sed nisl fringilla cursus. Maecenas malesuada velit
              a felis convallis.
            </p>
          </div>

          <Image
            src="/logoKrem.png"
            alt=" ХК Кременчук"
            width={400}
            height={400}
          />
        </div>
        <div>
          <p></p>
          <p></p>
          <p></p>
        </div>
      </div>
    </div>
  )
}
export default News

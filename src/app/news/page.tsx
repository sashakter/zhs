import Image from 'next/image'
import Title from '../components/Title'
import { IoCalendarOutline } from 'react-icons/io5'
import { IoIosArrowForward } from 'react-icons/io'

export default function News() {
  return (
    <div className="relative flex h-full w-full flex-col justify-center bg-news bg-contain xl:bg-cover">
      <div className="absolute inset-0 z-10 bg-black/70"></div>
      <div className="relative z-20 my-32">
        <div className="mb-10">
          <Title title="новини" earColor="#fff" />
        </div>
        <div className="mb-10 flex flex-col items-center justify-center">
          <div className="flex w-[350px] flex-col rounded-xl bg-black">
            <Image
              src="/first-news.png" // Replace with your brand logo path
              alt="Hokey News"
              width={816}
              height={819}
              className="w-[400px] rounded-xl"
            />
            <div className="flex flex-col px-4 py-2">
              <div className="bg-custom-calendar mb-3 mt-2 flex w-36 items-center justify-center gap-2 rounded-2xl p-1">
                <span>
                  <IoCalendarOutline size={20} />
                </span>
                <p className="">28 вер. 2024</p>
              </div>
              <p className="mb-5 text-xl font-semibold">
                Матч півфіналу закінчився прикрою поразкою нашої команди
              </p>
              <div className='flex justify-end mb-4'>
                <div className="bg-custom-calendar flex w-36 items-center justify-center gap-1 rounded-2xl py-2 px-2 text-center">
                  <a>Детальніше</a>
                  <span>
                    <IoIosArrowForward size={15} />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-3">
          <div className="flex gap-6">
            <Image
              src="/sloza.png" // Replace with your brand logo path
              alt="Житня Сльоза"
              width={500}
              height={500}
              className="mb-6 w-24 drop-shadow-2xl hover:drop-shadow-[0_15px_15px_rgba(194,153,113,0.25)] hover:duration-150 lg:w-44"
            />{' '}
            <Image
              src="/hokey-logo.png" // Replace with your brand logo path
              alt="Житня Сльоза"
              width={250}
              height={224}
              className="mb-6 w-24 drop-shadow-2xl hover:drop-shadow-[0_15px_15px_rgba(194,153,113,0.25)] hover:duration-150 lg:w-44"
            />{' '}
          </div>
          <h2 className="text-center text-3xl leading-10">
            ТМ "Житня Сльоза" - офіційний спонсор ХК Кременчук
          </h2>
        </div>
      </div>
    </div>
  )
}

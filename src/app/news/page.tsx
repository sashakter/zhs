import Image from 'next/image'
import Title from '../components/Title'
import { IoCalendarOutline } from 'react-icons/io5'
import { IoIosArrowForward } from 'react-icons/io'
import Link from 'next/link'

export default function News() {
  return (
    <div className="relative flex h-full w-full flex-col justify-center bg-news bg-contain xl:bg-cover">
      <div className="absolute inset-0 z-10 bg-black/70"></div>
      <div className="relative z-20 my-32">
        <div className="mb-14">
          <Title title="новини" earColor="#fff" />
        </div>
        <div className="mb-10 flex flex-row items-center justify-center gap-4">
          <div className="flex w-[350px] flex-col rounded-xl bg-black">
            <Image
              src="/first-news.png" // Replace with your brand logo path
              alt="Hokey News"
              width={816}
              height={819}
              className="w-[400px] rounded-xl"
            />
            <div className="flex h-[228px] flex-col px-4 py-2">
              <div className="mb-3 mt-2 flex w-36 items-center justify-center gap-2 rounded-2xl bg-custom-calendar p-1">
                <span>
                  <IoCalendarOutline size={20} />
                </span>
                <p className="roboto">28 Вер. 2024</p>
              </div>
              <p className="mb-5 h-[84px] text-xl font-semibold">
                Матч півфіналу закінчився прикрою поразкою нашої команди
              </p>
              <div className="mb-4 flex justify-end">
                <div className="flex w-36 items-center justify-center gap-1 rounded-2xl bg-custom-calendar px-2 py-2 text-center">
                  <a
                    className="roboto cursor-pointer"
                    href="https://www.instagram.com/p/DAdpeYHtlSy/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
                    target="_blanc"
                  >
                    Детальніше
                  </a>
                  <span>
                    <IoIosArrowForward size={15} />
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex w-[350px] flex-col rounded-xl bg-black">
            <Image
              src="/second-news.png" // Replace with your brand logo path
              alt="Hokey News"
              width={816}
              height={819}
              className="w-[400px] rounded-xl"
            />
            <div className="flex h-[228px] flex-col px-4 py-2">
              <div className="mb-3 mt-2 flex w-36 items-center justify-center gap-2 rounded-2xl bg-custom-calendar p-1">
                <span>
                  <IoCalendarOutline size={20} />
                </span>
                <p className="roboto">27 Вер. 2024</p>
              </div>
              <p className="mb-5 h-[84px] text-xl font-semibold">
                ХК Кременчук презентували нову форму!
              </p>
              <div className="mb-4 flex justify-end">
                <div className="flex w-36 items-center justify-center gap-1 rounded-2xl bg-custom-calendar px-2 py-2 text-center">
                  <a
                    className="roboto cursor-pointer"
                    href="https://www.instagram.com/reel/DAbDe6cNjhH/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
                    target="_blanc"
                  >
                    Детальніше
                  </a>
                  <span>
                    <IoIosArrowForward size={15} />
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex w-[350px] flex-col rounded-xl bg-black">
            <Image
              src="/third-news.png" // Replace with your brand logo path
              alt="Hokey News"
              width={816}
              height={819}
              className="w-[400px] rounded-xl"
            />
            <div className="flex h-[228px] flex-col px-4 py-2">
              <div className="mb-3 mt-2 flex w-36 items-center justify-center gap-2 rounded-2xl bg-custom-calendar p-1">
                <span>
                  <IoCalendarOutline size={20} />
                </span>
                <p className="roboto">22 Вер. 2024</p>
              </div>
              <p className="mb-5 h-[84px] text-xl font-semibold">
                В Кременчуці відбувся конгрес ФХУ: Сергій Мазур новий президент
                федерації
              </p>
              <div className="mb-4 flex justify-end">
                <div className="flex w-36 items-center justify-center gap-1 rounded-2xl bg-custom-calendar px-2 py-2 text-center">
                  <a
                    className="roboto cursor-pointer"
                    href="https://www.instagram.com/p/DAOvT_dN7WL/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
                    target="_blank"
                  >
                    Детальніше
                  </a>
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
            <Link href='/products'>
              <Image
                src="/sloza.png" // Replace with your brand logo path
                alt="Житня Сльоза"
                width={500}
                height={500}
                className="mb-6 w-24 drop-shadow-2xl hover:drop-shadow-[0_15px_15px_rgba(194,153,113,0.25)] hover:duration-150 lg:w-44"
              />{' '}
            </Link>
            <a href="https://hckremenchuk.com/" target="_blanc">
              <Image
                src="/hokey-logo.png" // Replace with your brand logo path
                alt="Хокейний клуб"
                width={250}
                height={224}
                className="mb-6 w-24 drop-shadow-2xl hover:drop-shadow-[0_15px_15px_rgba(135,217,255,0.25)] hover:duration-150 lg:w-44"
              />{' '}
            </a>
          </div>
          <h2 className="text-center text-3xl leading-10">
            ТМ "Житня Сльоза" - Генеральний Спонсор ХК Кременчук
          </h2>
        </div>
      </div>
    </div>
  )
}

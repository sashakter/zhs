'use client'

import React, { useState, useRef, useEffect } from 'react'
import Title from './Title'
import clsx from 'clsx'
import Image from 'next/image'
import Marquee from 'react-fast-marquee'

interface Section {
  id: number
  title: string
  description: string
}

const Capacities: React.FC = () => {
  const [openSection, setOpenSection] = useState<number | null>(null)
  const contentRefs = useRef<Array<HTMLDivElement | null>>([]) // Correctly typed as an array of HTMLDivElement or null
  const sections: Section[] = [
    {
      id: 1,
      title: 'ВИРОБНИЧІ ЛІНІЇ',
      description:
        'Завод обладнаний сучасними виробничими лініями, які дозволяють виготовляти різноманітні алкогольні напої великими обсягами без втрати якості.',
    },
    {
      id: 2,
      title: 'ЛАБОРАТОРІЇ КОНТРОЛЮ ЯКОСТІ',
      description:
        'Компанія має власні лабораторії, де проводиться постійний контроль якості всіх стадій виробництва - від відбору сировини до готової продукції. Це дозволяє забезпечити високу якість та безпеку наших продуктів.',
    },
    {
      id: 3,
      title: 'СИРОВИНА',
      description:
        'Ми співпрацюємо з найкращими постачальниками української сировини, що гарантує використання найякісніших інгредієнтів у виробництві, та його безперебійності.',
    },
    {
      id: 4,
      title: 'ВИРОБНИЧІ ПЛОЩІ',
      description:
        'Завод розташований на великій території, що дозволяє розширювати виробничі потужності та впроваджувати нові технології для вдосконалення процесів виробництва.',
    },
    {
      id: 5,
      title: 'КАДРОВИЙ ПОТЕНЦІАЛ',
      description:
        'Команда складається з висококваліфікованих спеціалістів з великим досвідом у галузі виробництва алкогольних напоїв, що гарантує високий рівень професіоналізму та ефективність у роботі.',
    },
  ]

  // Function to toggle the open section
  const handleToggle = (id: number) => {
    setOpenSection(openSection === id ? null : id)
  }

  return (
    <div className="relative flex flex-col items-center bg-black px-4 py-8 text-white md:px-16 lg:h-screen">
      <div className="absolute inset-0 z-0">
        <Marquee autoFill={true}>
          <Image
            src={`/zavod.jpg`} // Adjust with your image paths
            alt={`bg-image`}
            width={1368}
            height={768}
            className="h-screen w-[600px] object-cover object-center"
          />
          <Image
            src={`/factory.jpg`} // Adjust with your image paths
            alt={`bg-image`}
            width={1120}
            height={1120}
            className="h-screen w-[600px] object-cover object-center"
          />
          <Image
            src={`/bg-cap-image2.jpg`} // Adjust with your image paths
            alt={`bg-image`}
            width={300}
            height={150}
            className="h-screen w-[600px] object-cover"
          />
        </Marquee>
      </div>

      {/* Overlay to darken the background */}
      <div className="absolute inset-0 z-10 bg-white opacity-65"></div>

      {/* Title Component */}
      <div className="relative z-20">
        <Title title="ПОТУЖНОСТІ" earColor="#000" addClass="text-black" />
      </div>

      {/* List of Sections */}
      <div className="relative z-40 mt-14 flex max-w-md flex-col items-center justify-center space-y-4 lg:mt-28">
        {sections.map((section, index) => (
          <div key={section.id} className="border-b border-black pb-2">
            {/* Section Title */}
            <button
              onClick={() => handleToggle(section.id)}
              className="flex w-full items-center justify-between text-left text-lg text-black focus:outline-none lg:text-2xl"
            >
              {section.title}
              {openSection === section.id ? (
                <Image
                  src={'/Expand_right_light.svg'}
                  alt="arrow"
                  width={24}
                  height={24}
                  className="rotate-90 transition-all lg:w-8"
                />
              ) : (
                <Image
                  src={'/Expand_right_light.svg'}
                  alt="arrow"
                  width={24}
                  height={24}
                  className="rotate-0 transition-all lg:w-8"
                />
              )}
            </button>

            {/* Smooth Transition for the Description */}
            <div
              ref={(el) => {
                contentRefs.current[index] = el // Сохраняем элемент в ref, но ничего не возвращаем
              }}
              style={{
                maxHeight:
                  openSection === section.id
                    ? contentRefs.current[index]?.scrollHeight
                    : 0,
              }}
              className={clsx(
                'transition-max-height overflow-hidden duration-500 ease-in-out',
              )}
            >
              <div className="mt-2 p-1 text-sm text-black lg:mt-4 lg:text-lg">
                {section.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Capacities

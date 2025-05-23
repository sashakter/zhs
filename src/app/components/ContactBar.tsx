'use client'

import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { Link } from '@/src/navigation'

const ContactBar: React.FC = () => {
  const t = useTranslations('ContactUsBar')
  return (
    <Link href="/contacts">
      <div className="flex cursor-pointer flex-col items-start gap-1">
        <div className="flex w-[300px] items-center justify-between px-3 py-2 font-thin">
          <span className="text-2xl uppercase">{t('title')}</span>
          <Image src="/arrow.svg" alt="arrow" width={26} height={26} />
        </div>
        <div className="">
          <Image src="/vector-line.svg" alt="line" width={300} height={22} />
        </div>
      </div>
    </Link>
  )
}

export default ContactBar

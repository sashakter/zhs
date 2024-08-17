'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'

export function NavLinks() {
  const pathname = usePathname()

  return (
    <nav
      className={`hidden lg:flex justify-between w-full py-14 bg-black text-white xl:px-12 lg:px-4 text-xl 2xl:text-2xl border-b-2 border-yellow`}
    >
      <div className="flex justify-between xl:w-1/4 lg:w-1/3">
        <Link className={`link ${pathname === '/' ? 'active' : ''}`} href="/">
          Головна
        </Link>
        <Image src={'/ear.svg'} alt="ear" width={20} height={20} />
        <Link
          className={`link ${pathname === '/products' ? 'active' : ''}`}
          href="/products"
        >
          Продукція
        </Link>
        <Image src={'/ear.svg'} alt="ear" width={20} height={20} />
        <Link
          className={`link ${pathname === '/partners' ? 'active' : ''}`}
          href="/partners"
        >
          Партнерство
        </Link>
      </div>
      <div className="flex justify-between xl:w-1/4 lg:w-1/3">
        <Link
          className={`link ${pathname === '/news' ? 'active' : ''}`}
          href="/news"
        >
          Новини
        </Link>
        <Image src={'/ear.svg'} alt="ear" width={20} height={20} />
        <Link
          className={`link ${pathname === '/contacts' ? 'active' : ''}`}
          href="/contacts"
        >
          Контакти
        </Link>
        <Image src={'/ear.svg'} alt="ear" width={20} height={20} />
        <Link
          className={`link ${pathname === '/export' ? 'active' : ''}`}
          href="/export"
        >
          Експорт
        </Link>
        <span className="xl:pl-6 lg:pl-3">UA</span>
      </div>
    </nav>
  )
}

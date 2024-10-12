'use client'

import { usePathname } from '@/navigation'
import { Link } from '@/navigation'
import Image from 'next/image'

export function NavLinks() {
  const pathname = usePathname()

  return (
    <nav
      className={`hidden w-full justify-between border-b-2 border-yellow bg-black py-14 text-xl text-white lg:flex lg:px-4 xl:px-12 2xl:text-2xl`}
    >
      <div className="flex justify-between lg:w-1/3 xl:w-1/4">
        <Link className={`link ${pathname === '/' ? 'active' : ''}`} href="/">
          Головна
        </Link>
        <span>|</span>
        <Link
          className={`link ${pathname === '/products' ? 'active' : ''}`}
          href="/products"
        >
          Продукція
        </Link>
        <span>|</span>
        <Link
          className={`link ${pathname === '/partners' ? 'active' : ''}`}
          href="/partners"
        >
          Партнерство
        </Link>
      </div>
      <div className="flex justify-between lg:w-1/3 xl:w-1/4">
        <Link
          className={`link ${pathname === '/news' ? 'active' : ''}`}
          href="/news"
        >
          Новини
        </Link>
        <span>|</span>
        <Link
          className={`link ${pathname === '/contacts' ? 'active' : ''}`}
          href="/contacts"
        >
          Контакти
        </Link>
        <span className="lg:pl-3 xl:pl-6">UA</span>
      </div>
    </nav>
  )
}

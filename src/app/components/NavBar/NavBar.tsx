'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import Burger from '../Burger'
import LanguageSelector from '../LanguageSelector'
import css from './NavBar.module.css'
import MenuButton from '../MenuButton'

const NavBar: React.FC = () => {
  const pathname = usePathname()
  const [burger, setBurger] = useState(false)
  useEffect(() => {
    if (burger) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [burger])
  return (
    <nav
      className={`relative z-40 flex w-full items-center justify-between bg-black px-6 py-4 text-xl uppercase text-white lg:px-4 lg:py-10 xl:px-12 2xl:text-2xl ${css.shimmerBorder}`}
    >
      <Link className={`link ${pathname === '/' ? 'active' : ''}`} href="/">
        <Image
          src={'/alcotrade-logo.svg'}
          className="top-1 drop-shadow-2xl max-[1023px]:w-20 lg:w-48 lg:px-7"
          alt="logo"
          priority={true}
          width={1000}
          height={1000}
        />
      </Link>
      <div className="xl: flex items-center pr-14 gap-10 xl:justify-between">
        <div className="hidden gap-2 lg:flex xl:gap-6">
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
          <span>|</span>
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
        </div>
        <button className="lg:hidden" onClick={() => setBurger(!burger)}>
          <MenuButton />
        </button>
      </div>
      <LanguageSelector />

      {burger && <Burger setBurger={setBurger} />}
    </nav>
  )
}
export default NavBar

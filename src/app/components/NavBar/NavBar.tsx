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
      className={`absolute inset-0 z-40 flex w-full items-center h-28 justify-between px-6 py-6 text-xl uppercase text-white lg:px-4 lg:py-10 xl:px-12 2xl:text-2xl`}
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
      <div className="xl: flex items-center gap-10 pr-14 xl:justify-between">
        <div className="hidden gap-2 lg:flex xl:gap-6">
          <Link className={`link ${pathname === '/' ? 'active' : ''} px-2 py-1 relative after:w-0 after:h-[1px] after:absolute after:bottom-0 after:left-0 after:bg-white hover:after:w-full hover:after:duration-200`} href="/">
            Головна
          </Link>
          <Image src={'/ear.svg'} alt='Ear image' width={20} height={20}/>
          <Link
            className={`link ${pathname === '/products' ? 'active' : ''} px-2 py-1 relative after:w-0 after:h-[1px] after:absolute after:bottom-0 after:left-0 after:bg-white hover:after:w-full hover:after:duration-200`}
            href="/products"
          >
            Продукція
          </Link>
          <Image src={'/ear.svg'} alt='Ear image' width={20} height={20}/>
          <Link
            className={`link ${pathname === '/partners' ? 'active' : ''} px-2 py-1 relative after:w-0 after:h-[1px] after:absolute after:bottom-0 after:left-0 after:bg-white hover:after:w-full hover:after:duration-200`}
            href="/partners"
          >
            Партнерство
          </Link>
          <Image src={'/ear.svg'} alt='Ear image' width={20} height={20}/>
          <Link
            className={`link ${pathname === '/news' ? 'active' : ''} px-2 py-1 relative after:w-0 after:h-[1px] after:absolute after:bottom-0 after:left-0 after:bg-white hover:after:w-full hover:after:duration-200`}
            href="/news"
          >
            Новини
          </Link>
          <Image src={'/ear.svg'} alt='Ear image' width={20} height={20}/>
          <Link
            className={`link ${pathname === '/contacts' ? 'active' : ''} px-2 py-1 relative after:w-0 after:h-[1px] after:absolute after:bottom-0 after:left-0 after:bg-white hover:after:w-full hover:after:duration-200`}
            href="/contacts"
          >
            Контакти
          </Link>
        </div>
      </div>
      <LanguageSelector />
      <button className="pl-3 lg:hidden" onClick={() => setBurger(!burger)}>
        <MenuButton />
      </button>
      {burger && <Burger setBurger={setBurger} />}
    </nav>
  )
}
export default NavBar

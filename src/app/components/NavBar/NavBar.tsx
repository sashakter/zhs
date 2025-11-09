'use client'

import { usePathname } from '@/src/navigation'
import { Link } from '@/src/navigation'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import Burger from '../Burger'
import LanguageSelector from '../LanguageSelector'
import css from './NavBar.module.css'
import MenuButton from '../MenuButton'
import LocaleSwitcher from '../LocaleSwitcher'
import { useTranslations } from 'next-intl'
import { PiSignInBold } from 'react-icons/pi'
import { CgProfile } from 'react-icons/cg'

const NavBar: React.FC = () => {
  const pathname = usePathname()
  const t = useTranslations('NavBar')
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
      aria-label="Main navigation"
      className={`absolute inset-0 z-50 flex h-28 w-full items-center justify-between px-6 py-6 text-xl uppercase text-white lg:px-4 lg:py-10 xl:px-12 2xl:text-2xl`}
    >
      <Link className={`link ${pathname === '/' ? 'active' : ''}`} href="/" aria-label="Alcotrade Home">
        <Image
          src={'/alcotrade-logo.svg'}
          className="top-1 drop-shadow-2xl max-[1023px]:w-20 lg:w-48 lg:px-7"
          alt="logo"
          priority={true}
          width={192}
          height={48}
          style={{ height: 'auto' }}
        />
      </Link>
      <div className="xl: flex items-center pr-14 xl:justify-between">
        <div className="hidden gap-2 lg:flex xl:gap-6">
          <Link
            className={`link ${pathname === '/' ? 'active' : ''} relative px-2 py-1 after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-white hover:after:w-full hover:after:duration-200 lg:text-sm xl:text-xl`}
            href="/"
          >
            {t('main')}
          </Link>
          <Image src={'/ear.svg'} alt="" width={20} height={20} role="presentation" style={{ height: 'auto', width: 'auto' }} />
          <Link
            className={`link ${pathname === '/products' ? 'active' : ''} relative px-2 py-1 after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-white hover:after:w-full hover:after:duration-200 lg:text-sm xl:text-xl`}
            href="/products"
          >
            {t('products')}
          </Link>
          <Image src={'/ear.svg'} alt="" width={20} height={20} role="presentation" style={{ height: 'auto', width: 'auto' }} />
          <Link
            className={`link ${pathname === '/partners' ? 'active' : ''} relative px-2 py-1 after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-white hover:after:w-full hover:after:duration-200 lg:text-sm xl:text-xl`}
            href="/partners"
          >
            {t('partners')}
          </Link>
          <Image src={'/ear.svg'} alt="" width={20} height={20} role="presentation" style={{ height: 'auto', width: 'auto' }} />
          <Link
            className={`link ${pathname === '/news' ? 'active' : ''} relative px-2 py-1 after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-white hover:after:w-full hover:after:duration-200 lg:text-sm xl:text-xl`}
            href="/news"
          >
            {t('news')}
          </Link>
          <Image src={'/ear.svg'} alt="" width={20} height={20} role="presentation" style={{ height: 'auto', width: 'auto' }} />
          <Link
            className={`link ${pathname === '/contacts' ? 'active' : ''} relative px-2 py-1 after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-white hover:after:w-full hover:after:duration-200 lg:text-sm xl:text-xl`}
            href="/contacts"
          >
            {t('contact_us')}
          </Link>
        </div>
      </div>
      <div className="flex gap-10 items-center">
        <Link href="/signin" aria-label="Sign In">
          <CgProfile />
        </Link>
        <LocaleSwitcher />
        <button className="pl-3 lg:hidden" onClick={() => setBurger(!burger)} aria-label="Open menu">
          <MenuButton />
        </button>
        {burger && <Burger setBurger={setBurger} />}
      </div>
    </nav>
  )
}
export default NavBar

import Image from 'next/image'
import { Link } from '@/src/navigation'
import { usePathname } from '@/src/navigation'
import { useTranslations } from 'next-intl'

interface BurgerProps {
  setBurger: (value: boolean) => void
}

const Burger: React.FC<BurgerProps> = ({ setBurger }) => {
  const t = useTranslations('NavBar')
  const pathname = usePathname()
  return (
    <div className="fixed inset-0 z-[999] flex h-full w-full flex-col items-center justify-center space-y-6 bg-black transition-all duration-300 ease-in-out lg:hidden">
      <button
        className="absolute right-4 top-4"
        onClick={() => setBurger(false)}
      >
        <Image src={'/Close.svg'} alt="close" width={25} height={25} />
      </button>
      <Image
        src={'/alcotrade-logo.svg'}
        className="drop-shadow-2xl"
        alt="logo"
        width={120}
        height={120}
      />
      <nav className="flex flex-col items-center justify-center gap-3">
        <Link
          className={`link ${pathname === '/' ? 'active' : ''}`}
          href="/"
          onClick={() => setBurger(false)}
        >
          {t('main')}
        </Link>
        <Link
          className={`link ${pathname === '/products' ? 'active' : ''}`}
          href="/products"
          onClick={() => setBurger(false)}
        >
          {t('products')}
        </Link>
        <Link
          className={`link ${pathname === '/partners' ? 'active' : ''}`}
          href="/partners"
          onClick={() => setBurger(false)}
        >
          {t('partners')}
        </Link>
        <Link
          className={`link ${pathname === '/news' ? 'active' : ''}`}
          href="/news"
          onClick={() => setBurger(false)}
        >
          {t('news')}
        </Link>
        <Link
          className={`link ${pathname === '/contacts' ? 'active' : ''}`}
          href="/contacts"
          onClick={() => setBurger(false)}
        >
          {t('contact_us')}
        </Link>
      </nav>
      <div className="social">
        <a href="https://instagram.com/" target="_blanc">
          <Image
            className="rounded-full border p-1"
            src={'/instagram.svg'}
            alt="instagram"
            width={45}
            height={45}
          />
        </a>
      </div>
    </div>
  )
}
export default Burger

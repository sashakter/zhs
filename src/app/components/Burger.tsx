import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface BurgerProps {
  setBurger: (value: boolean) => void
}

const Burger: React.FC<BurgerProps> = ({ setBurger }) => {
  const pathname = usePathname()
  return (
    <div className="fixed inset-0 z-40 flex h-full w-full flex-col items-center justify-center space-y-6 bg-black transition-all duration-300 ease-in-out lg:hidden">
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
        width={85}
        height={85}
      />
      <nav className="flex flex-col items-center justify-center gap-3">
        <Link
          className={`link ${pathname === '/' ? 'active' : ''}`}
          href="/"
          onClick={() => setBurger(false)}
        >
          Головна
        </Link>
        <Link
          className={`link ${pathname === '/products' ? 'active' : ''}`}
          href="/products"
          onClick={() => setBurger(false)}
        >
          Продукція
        </Link>
        <Link
          className={`link ${pathname === '/partners' ? 'active' : ''}`}
          href="/partners"
          onClick={() => setBurger(false)}
        >
          Партнерство
        </Link>
        <Link
          className={`link ${pathname === '/news' ? 'active' : ''}`}
          href="/news"
          onClick={() => setBurger(false)}
        >
          Новини
        </Link>
        <Link
          className={`link ${pathname === '/contacts' ? 'active' : ''}`}
          href="/contacts"
          onClick={() => setBurger(false)}
        >
          Контакти
        </Link>
        <Link
          className={`link ${pathname === '/export' ? 'active' : ''}`}
          href="/export"
          onClick={() => setBurger(false)}
        >
          Експорт
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

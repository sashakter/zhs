import { createNavigation } from 'next-intl/navigation'

export const locales = ['en', 'uk'] // твои локали
export const localePrefix = 'always' // либо 'as-needed' / 'never'
export const pathnames = {
  '/': '/',
  '/products': '/products',
  '/contacts': '/contacts',
  '/dashboard': '/dashboard',
  '/news': '/news',
  '/partners': '/partners',
  '/policies': '/policies',
  '/reset-password': '/reset-password',
  '/request': '/request',
  '/signin': '/signin',
  '/signup': '/signup',
  // дополни свои маршруты
}

export const { Link, redirect, usePathname, useRouter } = createNavigation({
  locales,
  localePrefix,
  pathnames,
})

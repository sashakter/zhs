import { LocalePrefix, Pathnames } from 'next-intl/routing'

export const locales = ['uk', 'en'] as const

export type Locales = typeof locales

export const pathnames: Pathnames<Locales> = {
  '/': '/',
  '/products': '/products',
  '/partners': '/partners',
  '/news': '/news',
  '/contacts': '/contacts',
  '/policies': '/policies',
  '/zhytnya-slyoza': '/zhytnya-slyoza',
  '/zhytnya-slyoza/gold': '/zhytnya-slyoza/gold',
  '/zhytnya-slyoza/perceva': '/zhytnya-slyoza/perceva',
  '/zhytnya-slyoza/vidbirna': '/zhytnya-slyoza/vidbirna',
  '/zhytnya-slyoza/diamond': '/zhytnya-slyoza/diamond',
}

export const localePrefix: LocalePrefix<Locales> = 'always'

// src/i18n/config.ts
export const locales = ['uk', 'en'] as const
export type AppLocale = (typeof locales)[number]

export const defaultLocale: AppLocale = 'uk'

export const localePrefix = 'always' as const

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
} as const

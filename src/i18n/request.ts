// src/i18n/request.ts
import { getRequestConfig } from 'next-intl/server'
import { locales, defaultLocale } from './config'

type AppLocale = (typeof locales)[number]

export default getRequestConfig(async ({ locale }) => {
  // нормализуем: если undefined/невалидная — берём defaultLocale
  const currentLocale: AppLocale = locales.includes(locale as AppLocale)
    ? (locale as AppLocale)
    : defaultLocale

  const messages = (await import(`../messages/${currentLocale}.json`)).default

  return {
    locale: currentLocale,
    messages,
  }
})

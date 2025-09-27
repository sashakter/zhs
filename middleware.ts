// /middleware.ts
import createMiddleware from 'next-intl/middleware'
import { locales, defaultLocale, localePrefix } from './src/i18n/config'

export default createMiddleware({
  locales,
  defaultLocale,
  localePrefix,
})

export const config = {
  // ВАЖНО: исключаем API, _next, _vercel и любой путь с расширением (статика)
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
}

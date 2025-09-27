// middleware.ts
import createMiddleware from 'next-intl/middleware'
import { locales, defaultLocale, localePrefix } from '@/src/i18n/config'
// import { pathnames } from './i18n/config' // если локализуете роуты — можно добавить

export default createMiddleware({
  locales,
  defaultLocale,
  localePrefix,
  // pathnames, // если используете локализованные маршруты
})

export const config = {
  matcher: [
    // Обрабатываем всё, КРОМЕ api, _next, _vercel и любых url с расширением (.*\..*)
    '/((?!api|_next|_vercel|.*\\..*).*)',
  ],
}

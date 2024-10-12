import createMiddleware from 'next-intl/middleware'
import { locales } from './config'

export default createMiddleware({
  locales,
  defaultLocale: 'uk',
  localeDetection: false,
})

export const config = {
  matcher: ['/', '/(de|en)/:path*'],
}

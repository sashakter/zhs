// middleware.ts
import { NextRequest, NextResponse } from 'next/server'
import createMiddleware from 'next-intl/middleware'
import { locales, defaultLocale, localePrefix } from './src/i18n/config'

const intlMiddleware = createMiddleware({
  locales: [...locales],
  defaultLocale,
  localePrefix, // 'always'
})

// статика/служебное — пропускаем
const PUBLIC_FILE =
  /\.(?:png|jpe?g|webp|svg|ico|gif|mp4|webm|pdf|txt|xml|json|css|js|map|woff2?|ttf|eot)$/i

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl

  // 1) Служебные пути — мимо
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/_vercel')
  ) {
    return NextResponse.next()
  }

  // 2) Если ассет пришёл как /{locale}/file.ext — перепишем на /file.ext
  const assetLocaleMatch = pathname.match(
    /^\/(uk|en)\/(.+\.(?:png|jpe?g|webp|svg|ico|gif|mp4|webm|pdf|txt|xml|json|css|js|map|woff2?|ttf|eot))$/i,
  )
  if (assetLocaleMatch) {
    const url = req.nextUrl.clone()
    url.pathname = `/${assetLocaleMatch[2]}`
    return NextResponse.rewrite(url)
  }

  // 3) Статические файлы без локали — не трогаем
  if (PUBLIC_FILE.test(pathname)) {
    return NextResponse.next()
  }

  // 4) HTML-навигации без локали — редиректим на дефолтную локаль
  const hasLocale = locales.some(
    (loc) => pathname === `/${loc}` || pathname.startsWith(`/${loc}/`),
  )
  const accept = req.headers.get('accept') || ''
  const isHtmlNav = accept.includes('text/html')

  if (!hasLocale && isHtmlNav) {
    const url = req.nextUrl.clone()
    url.pathname = `/${defaultLocale}${pathname}`
    return NextResponse.redirect(url)
  }

  // 5) Остальное отдаём next-intl
  return intlMiddleware(req)
}

export const config = {
  matcher: ['/', '/((?!_next|api|_vercel|.*\\..*).*)'],
}

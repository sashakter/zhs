import { createNavigation } from 'next-intl/navigation'
import { locales, localePrefix, pathnames } from './i18n/config'

export const { Link, redirect, usePathname, useRouter } = createNavigation({
  locales: [...locales],
  localePrefix,
  pathnames,
})

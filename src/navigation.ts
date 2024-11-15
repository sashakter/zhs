import { createLocalizedPathnamesNavigation } from 'next-intl/navigation'
import { localePrefix, locales, pathnames } from './config'

export const {
  Link,
  getPathname,
  redirect,
  usePathname,
  useRouter,
  useSearchParams,
} = createLocalizedPathnamesNavigation({
  locales,
  pathnames,
  localePrefix,
})

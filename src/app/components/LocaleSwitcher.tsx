import { useLocale, useTranslations } from 'next-intl'
import LanguageSelector from './LanguageSelector'
import { locales } from '@/src/config'

export default function LocaleSwitcher() {
  const t = useTranslations('LocaleSwitcher')
  const locale = useLocale()

  return (
    <LanguageSelector defaultValue={locale} label={t('label')}>
      {locales.map((cur) => (
        <option className="text-black" key={cur} value={cur}>
          {t(`locale.${cur}`)}
        </option>
      ))}
    </LanguageSelector>
  )
}

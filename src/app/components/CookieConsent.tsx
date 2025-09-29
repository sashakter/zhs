'use client'

import React, { useEffect, useMemo, useState } from 'react'
import GoogleAnalytics from './GoogleAnalytics'
import CookieSettingsModal from './CookieSettingsModal'
import { useTranslations } from 'next-intl'

type Consent = {
  necessary: boolean
  analytics: boolean
  ads: boolean
}

function normalizeConsent(raw: string | null): Consent | null {
  if (!raw) return null

  try {
    const parsed = JSON.parse(raw)
    if (
      parsed &&
      typeof parsed === 'object' &&
      'necessary' in parsed &&
      'analytics' in parsed &&
      'ads' in parsed
    ) {
      return {
        necessary: !!parsed.necessary,
        analytics: !!parsed.analytics,
        ads: !!parsed.ads,
      }
    }
  } catch {}

  const s = raw.trim().toLowerCase()
  if (s === 'all') return { necessary: true, analytics: true, ads: true }
  if (s === 'analytics') return { necessary: true, analytics: true, ads: false }
  if (s === 'necessary')
    return { necessary: true, analytics: false, ads: false }
  if (s === 'none' || s === 'deny' || s === 'denied')
    return { necessary: false, analytics: false, ads: false }

  return null
}

const CookieConsent = () => {
  const t = useTranslations('cookie')
  const [rawConsent, setRawConsent] = useState<string | null>(null)
  const [showSettings, setShowSettings] = useState(false)

  // читаем один раз при монтировании
  useEffect(() => {
    setRawConsent(localStorage.getItem('cookieConsent'))
  }, [])

  const consent: Consent | null = useMemo(
    () => normalizeConsent(rawConsent),
    [rawConsent],
  )

  const setConsent = (next: Consent) => {
    localStorage.setItem('cookieConsent', JSON.stringify(next))
    setRawConsent(JSON.stringify(next))
  }

  const acceptAll = () =>
    setConsent({ necessary: true, analytics: true, ads: true })

  const rejectAll = () =>
    setConsent({ necessary: true, analytics: false, ads: false })

  const saveCustomConsent = (types: { analytics: boolean }) => {
    setConsent({ necessary: true, analytics: types.analytics, ads: false })
    setShowSettings(false)
  }

  const allowAnalytics = !!consent?.analytics

  return (
    <>
      {allowAnalytics && (
        <GoogleAnalytics measurementId={process.env.NEXT_PUBLIC_GA_ID!} />
      )}

      {consent === null && (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-black p-4 text-center text-sm text-white">
          <p className="mb-2">{t('description')}</p>
          <div className="flex justify-center gap-2">
            <button
              onClick={acceptAll}
              className="rounded border border-white px-4 py-2 text-sm uppercase"
            >
              {t('buttonAccept')}
            </button>
            <button
              onClick={rejectAll}
              className="rounded border border-white px-4 py-2 text-sm uppercase"
            >
              {t('buttonDecline')}
            </button>
            <button
              onClick={() => setShowSettings(true)}
              className="rounded border border-white px-4 py-2 text-sm uppercase"
            >
              {t('buttonSettings')}
            </button>
          </div>
        </div>
      )}

      {showSettings && (
        <CookieSettingsModal
          onSave={saveCustomConsent}
          onCancel={() => setShowSettings(false)}
        />
      )}
    </>
  )
}

export default CookieConsent

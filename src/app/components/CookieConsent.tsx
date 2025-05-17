'use client'

import React, { useEffect, useState } from 'react'
import GoogleAnalytics from './GoogleAnalytics'
import CookieSettingsModal from './CookieSettingsModal'
import { useTranslations } from 'next-intl'

const CookieConsent = () => {
  const [consent, setConsent] = useState<string | null>(null)
  const [showSettings, setShowSettings] = useState(false)
  const t = useTranslations('cookie')
  useEffect(() => {
    const savedConsent = localStorage.getItem('cookieConsent')
    setConsent(savedConsent)
  }, [])

  const acceptAll = () => {
    localStorage.setItem('cookieConsent', 'all')
    setConsent('all')
  }

  const rejectAll = () => {
    localStorage.setItem('cookieConsent', 'necessary')
    setConsent('necessary')
  }

  const saveCustomConsent = (types: { analytics: boolean }) => {
    localStorage.setItem(
      'cookieConsent',
      JSON.stringify({
        necessary: true,
        analytics: types.analytics,
      }),
    )
    setConsent(JSON.stringify({ necessary: true, analytics: types.analytics }))
    setShowSettings(false)
  }

  const parsedConsent = (() => {
    try {
      return JSON.parse(consent || '')
    } catch {
      return null
    }
  })()

  const allowAnalytics = consent === 'all' || parsedConsent?.analytics === true

  return (
    <>
      {allowAnalytics && (
        <GoogleAnalytics measurementId={process.env.NEXT_PUBLIC_GA_ID!} />
      )}

      {consent === null && (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-black text-white p-4 text-center text-sm">
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

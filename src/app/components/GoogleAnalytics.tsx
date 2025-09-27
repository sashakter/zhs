'use client'

import Script from 'next/script'
import { useEffect, useState } from 'react'

declare global {
  interface Window {
    gtag?: (...args: any[]) => void
  }
}

type Props = {
  measurementId: string
}

type Consent = {
  necessary: boolean
  analytics: boolean
  ads: boolean
}

function normalizeConsent(raw: string): Consent | null {
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

  // 2) Легаси-строки
  const s = raw.trim().toLowerCase()
  if (s === 'all') {
    return { necessary: true, analytics: true, ads: true }
  }
  if (s === 'analytics') {
    return { necessary: true, analytics: true, ads: false }
  }
  if (s === 'necessary') {
    return { necessary: true, analytics: false, ads: false }
  }
  if (s === 'none' || s === 'deny' || s === 'denied') {
    return { necessary: false, analytics: false, ads: false }
  }

  return null
}

const GoogleAnalytics = ({ measurementId }: Props) => {
  const [consent, setConsent] = useState<Consent | null>(null)

  useEffect(() => {
    const raw = localStorage.getItem('cookieConsent')
    if (!raw) {
      setConsent(null)
      return
    }

    const normalized = normalizeConsent(raw)
    if (!normalized) {
      // мусор в localStorage — чистим и не грузим GA
      console.warn('Invalid cookieConsent value, resetting.')
      localStorage.removeItem('cookieConsent')
      setConsent(null)
      return
    }

    window.gtag?.('consent', 'update', {
      ad_storage: normalized.ads ? 'granted' : 'denied',
      analytics_storage: normalized.analytics ? 'granted' : 'denied',
    })

    setConsent(normalized)
  }, [])

  if (!consent) return null

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
      />
      <Script
        id="ga-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}       

            // Базовый default (пока ещё не подхватили localStorage)
            gtag('consent', 'default', {
              ad_storage: 'denied',
              analytics_storage: 'denied',
              wait_for_update: 500,
              region: ['UA', 'EU'],
            });

            gtag('js', new Date());
            gtag('config', '${measurementId}', {
              anonymize_ip: true,
              cookie_flags: 'SameSite=None;Secure'
            });
          `,
        }}
      />
      <Script
        id="ga-consent-update"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            try {
              var raw = localStorage.getItem('cookieConsent');
              if (raw) {
                var c;
                try {
                  c = JSON.parse(raw);
                } catch (e) {
                  // поддержка легаси-строк
                  var s = (raw || '').trim().toLowerCase();
                  if (s === 'all') c = {necessary:true, analytics:true, ads:true};
                  else if (s === 'analytics') c = {necessary:true, analytics:true, ads:false};
                  else if (s === 'necessary') c = {necessary:true, analytics:false, ads:false};
                  else c = {necessary:false, analytics:false, ads:false};
                }
                if (c && typeof c === 'object') {
                  window.gtag && window.gtag('consent', 'update', {
                    ad_storage: c.ads ? 'granted' : 'denied',
                    analytics_storage: c.analytics ? 'granted' : 'denied'
                  });
                }
              }
            } catch (e) {
              console.warn('GA consent reapply error', e);
            }
          `,
        }}
      />
    </>
  )
}

export default GoogleAnalytics

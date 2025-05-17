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

const GoogleAnalytics = ({ measurementId }: Props) => {
  const [consentUpdated, setConsentUpdated] = useState(false)

  useEffect(() => {
    const rawConsent = localStorage.getItem('cookieConsent')
    if (!rawConsent) return

    try {
      const consent = JSON.parse(rawConsent)

      window.gtag?.('consent', 'update', {
        ad_storage: consent.ads ? 'granted' : 'denied',
        analytics_storage: consent.analytics ? 'granted' : 'denied',
      })

      setConsentUpdated(true)
    } catch (error) {
      console.error('Consent parse error:', error)
    }
  }, [])

  if (!consentUpdated) return null

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
    </>
  )
}

export default GoogleAnalytics

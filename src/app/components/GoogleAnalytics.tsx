'use client'

import Script from 'next/script'
import { useEffect, useState } from 'react'

type Props = {
  measurementId: string
}

const GoogleAnalytics = ({ measurementId }: Props) => {
  const [isAnalyticsAllowed, setIsAnalyticsAllowed] = useState(false)

  useEffect(() => {
    try {
      const consent = localStorage.getItem('cookieConsent')
      if (consent) {
        const parsed = JSON.parse(consent)
        if (parsed.analytics === true) {
          setIsAnalyticsAllowed(true)
        }
      }
    } catch (e) {
      console.error('GA consent check failed:', e)
    }
  }, [])

  if (!isAnalyticsAllowed) return null

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

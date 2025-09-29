'use client'

import React, { useEffect, useState } from 'react'
import { Switch } from '@mui/material'
import { styled } from '@mui/material/styles'
import { useTranslations } from 'next-intl'

type Props = {
  onSave: (types: { analytics: boolean }) => void
  onCancel: () => void
}

const WhiteSwitch = styled(Switch)(({ theme }) => ({
  '& .MuiSwitch-switchBase.Mui-checked': {
    color: '#C6986D',
  },
  '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
    backgroundColor: '#C6986D',
  },
  '& .MuiSwitch-track': {
    backgroundColor: '#666',
  },
}))

const CookieSettingsModal = ({ onSave, onCancel }: Props) => {
  const [analytics, setAnalytics] = useState(false)
  const t = useTranslations('cookie')

  // Предзаполняем текущим значением (если уже есть)
  useEffect(() => {
    try {
      const raw = localStorage.getItem('cookieConsent')
      if (!raw) return
      const parsed = JSON.parse(raw)
      if (parsed && typeof parsed === 'object' && 'analytics' in parsed) {
        setAnalytics(!!parsed.analytics)
      }
    } catch {
      /* noop */
    }
  }, [])

  const handleSave = () => {
    // Пишем единый JSON-формат:
    const consent = { necessary: true, analytics, ads: false }
    localStorage.setItem('cookieConsent', JSON.stringify(consent))

    // Обновляем gtag, если уже инициализирован
    if (typeof window.gtag === 'function') {
      window.gtag('consent', 'update', {
        analytics_storage: analytics ? 'granted' : 'denied',
        ad_storage: 'denied',
      })
    }

    onSave({ analytics })
  }

  const handleCancel = () => {
    // Ничего не меняем — просто закрываем
    onCancel()
  }

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black bg-opacity-80">
      <div className="w-full max-w-md rounded-lg border border-white bg-black p-6 text-white">
        <h2 className="mb-4 text-lg font-bold">{t('settings.title')}</h2>

        <div className="mb-4">
          <p>
            {t.rich('settings.necessary', {
              strong: (chunks) => <strong>{chunks}</strong>,
            })}
          </p>
        </div>

        <div className="mb-6 flex items-center justify-between">
          <span>{t('settings.analytics')}</span>
          <WhiteSwitch
            checked={analytics}
            onChange={(e) => setAnalytics(e.target.checked)}
          />
        </div>

        <div className="flex justify-end gap-2">
          <button
            onClick={handleCancel}
            className="rounded border border-white px-4 py-2 text-sm"
          >
            {t('settings.buttonCancel')}
          </button>
          <button
            onClick={handleSave}
            className="rounded bg-white px-4 py-2 text-sm text-black"
          >
            {t('settings.buttonSave')}
          </button>
        </div>
      </div>
    </div>
  )
}

export default CookieSettingsModal

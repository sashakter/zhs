'use client'
import { Link } from '@/src/navigation'
import { useTranslations } from 'next-intl'
import React, { useState, useEffect } from 'react'

const AgeVerificationModal: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true)
  const t = useTranslations('AgeModal')
  useEffect(() => {
    const isVerified = localStorage.getItem('ageVerified')
    if (isVerified === 'true') {
      setIsVisible(false)
    }
  }, [])

  const handleYes = () => {
    localStorage.setItem('ageVerified', 'true')
    setIsVisible(false)
  }

  const handleNo = () => {
    window.close()
  }

  if (!isVisible) {
    return null
  }

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-80 uppercase">
      <div className="rounded-lg border border-white bg-black p-8 text-center text-white">
        <h2 className="mb-4 text-lg font-semibold">
          {t.rich('title', { br: () => <br /> })}
        </h2>
        <div className="flex justify-center gap-4 uppercase">
          <button
            onClick={handleYes}
            className="rounded border border-white px-4 py-2 text-lg uppercase"
          >
            {t('button')}
          </button>
          <button
            onClick={handleNo}
            className="rounded border border-white px-4 py-2 text-lg uppercase"
          >
            {t('button2')}
          </button>
        </div>
        <p className="mt-4 text-sm">
          {t.rich('description', {
            privacy: (chunks) => (
              <Link href="/policies" className="ml-1 underline">
                {chunks}
              </Link>
            ),
          })}
        </p>
      </div>
    </div>
  )
}

export default AgeVerificationModal

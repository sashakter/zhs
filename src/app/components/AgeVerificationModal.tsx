'use client'
import React, { useState, useEffect } from 'react'

const AgeVerificationModal: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true)

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
    window.close() // This will attempt to close the window. It might not work in all browsers.
  }

  if (!isVisible) {
    return null
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
      <div className="rounded-lg border border-white bg-black p-8 text-center text-white">
        <h2 className="mb-4 text-lg font-semibold">
          ДАНИЙ КОНТЕНТ ДОСТУПНИЙ ТІЛЬКИ ПОВНОЛІТНІМ КОРИСТУВАЧАМ.
          <br />
          ВИ ДОСЯГЛИ ВІКУ ЛЕГАЛЬНОГО СПОЖИВАННЯ АЛКОГОЛЬНИХ НАПОЇВ?
        </h2>
        <div className="flex justify-center gap-4">
          <button
            onClick={handleYes}
            className="rounded border border-white px-4 py-2 text-lg"
          >
            ТАК
          </button>
          <button
            onClick={handleNo}
            className="rounded border border-white px-4 py-2 text-lg"
          >
            НІ
          </button>
        </div>
        <p className="mt-4 text-sm">
          ПІДТВЕРДЖУЮЧИ ВАШ ВІК ВИ ПОГОДЖУЄТЕСЬ З НАШОЮ
          <a href="/privacy-policy" className="ml-1 underline">
            ПОЛІТИКОЮ КОНФІДЕНЦІЙНОСТІ
          </a>
        </p>
      </div>
    </div>
  )
}

export default AgeVerificationModal

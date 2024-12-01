// app/reset-password/request/page.tsx
'use client'

import React, { useState } from 'react'
import axios from 'axios'

export default function RequestPasswordReset() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const res = await axios.post('/api/request-password-reset', { email })
      setMessage(res.data.message)
    } catch (error: any) {
      setMessage(error.response?.data?.message || 'Ошибка при отправке запроса')
    }
  }

  return (
    <div className="flex items-center justify-center text-black bg-black pt-32 pb-28">
      <div className="w-full max-w-md bg-white p-8 rounded shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Сброс пароля</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">
              Электронная почта
            </label>
            <input
              type="email"
              name="email"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
          >
            Отправить запрос
          </button>
          {message && <p className="mt-4 text-center">{message}</p>}
        </form>
      </div>
    </div>
  )
}

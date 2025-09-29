// app/reset-password/page.tsx
'use client'

import { useState } from 'react'
import { useRouter } from '@/src/navigation'
import { useSearchParams } from 'next/navigation'
import axios from 'axios'

export default function ResetPassword() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const token = searchParams.get('token')

  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState('')

  if (!token) {
    return <p>Неверный или отсутствующий токен</p>
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (password !== confirmPassword) {
      setMessage('Пароли не совпадают')
      return
    }

    try {
      const res = await axios.post('/api/reset-password', { token, password })
      setMessage(res.data.message)
      router.push('/signin')
    } catch (error: any) {
      setMessage(error.response?.data?.message || 'Ошибка при сбросе пароля')
    }
  }

  return (
    <div className="flex items-center justify-center bg-black pt-32 pb-28">
      <div className="w-full max-w-md bg-white p-8 rounded shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Установить новый пароль
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">
              Новый пароль
            </label>
            <input
              type="password"
              name="password"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="confirmPassword" className="block text-gray-700">
              Подтвердите новый пароль
            </label>
            <input
              type="password"
              name="confirmPassword"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
          >
            Сбросить пароль
          </button>
          {message && <p className="mt-4 text-center">{message}</p>}
        </form>
      </div>
    </div>
  )
}

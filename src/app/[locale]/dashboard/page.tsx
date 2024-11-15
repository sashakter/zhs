// app/dashboard/page.tsx
'use client'

import { useSession, signOut } from 'next-auth/react'
import { useEffect } from 'react'
import { useRouter } from '@/src/navigation'

export default function Dashboard() {
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.replace('/signin')
    }
  }, [status, router])

  if (status === 'loading') {
    return <p>Загрузка...</p>
  }

  // @ts-ignore
  return (
    <div className="pt-52 bg-black">
      <h1>Добро пожаловать, {session?.user?.name}</h1>
      <p>Это защищенная страница панели управления.</p>
      <button onClick={() => signOut({ callbackUrl: '/' })}>Выйти</button>
    </div>
  )
}

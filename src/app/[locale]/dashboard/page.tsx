// app/dashboard/page.tsx
'use client'

import { useSession, signOut } from 'next-auth/react'
import { useEffect } from 'react'
import { useRouter } from '@/src/navigation'

// Import the styles provided by the react-pdf-viewer packages
import '@react-pdf-viewer/core/lib/styles/index.css'
import '@react-pdf-viewer/default-layout/lib/styles/index.css'
import PdfView from '@/src/app/components/Pdfview'

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
    <div className="pt-52 pb-10 flex flex-col justify-center items-center gap-10 bg-black">
      <h2 className={`text-2xl uppercase`}>Вітаємо, {session?.user?.name}!</h2>
      <p className={`uppercase`}>Для Вас доступний ознайомчий документ</p>
      <div className={`w-2/3`}>
        <PdfView fileUrl={'/pj-prop.pdf'} />
      </div>

      <button
        className={`p-2 bg-custom-about rounded-xl text-xl`}
        onClick={() => signOut({ callbackUrl: '/' })}
      >
        Вийти
      </button>
    </div>
  )
}

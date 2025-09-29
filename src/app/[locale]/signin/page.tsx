// app/signin/page.tsx
import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/src/lib/authOptions'
import { redirect } from '@/src/navigation'
import LoginForm from '@/src/app/components/LoginForm'
import { getLocale } from 'next-intl/server'

export default async function SignInPage() {
  const session = await getServerSession(authOptions)
  const locale = await getLocale()
  if (session) {
    redirect({ href: '/dashboard', locale })
  }

  return <LoginForm />
}

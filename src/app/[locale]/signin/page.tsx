// app/login/page.tsx
import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/src/app/api/auth/[...nextauth]/route'
import { redirect } from '@/src/navigation'
import LoginForm from '@/src/app/components/LoginForm'

export default async function LoginPage() {
  const session = await getServerSession(authOptions)

  if (session) {
    redirect('/dashboard')
  }

  return <LoginForm />
}
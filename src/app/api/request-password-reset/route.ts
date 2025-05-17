// app/api/request-password-reset/route.ts
import { NextResponse } from 'next/server'
import clientPromise from '@/src/lib/mongodb'
import { randomBytes } from 'crypto'
import { sendEmail } from '@/src/lib/sendEmail' // Создадим эту функцию позже

export async function POST(request: Request) {
  const { email } = await request.json()

  if (!email) {
    return NextResponse.json(
      { message: 'Пожалуйста, введите ваш email' },
      { status: 400 },
    )
  }

  try {
    const client = await clientPromise
    const usersCollection = client.db().collection('users')

    const user = await usersCollection.findOne({
      email: String(email).toLowerCase(),
    })

    if (!user) {
      return NextResponse.json(
        { message: 'Пользователь с таким email не найден' },
        { status: 404 },
      )
    }

    const token = randomBytes(32).toString('hex')
    const expires = new Date(Date.now() + 3600000) // Токен действителен 1 час

    await usersCollection.updateOne(
      { email: String(email).toLowerCase() },
      { $set: { resetPasswordToken: token, resetPasswordExpires: expires } },
    )

    const resetUrl = `${process.env.BASE_URL}/reset-password?token=${token}`

    // Отправка email с ссылкой для сброса пароля
    await sendEmail({
      to: user.email,
      subject: 'Сброс пароля',
      text: `Вы запросили сброс пароля. Пожалуйста, перейдите по ссылке для установки нового пароля: ${resetUrl}`,
    })

    return NextResponse.json({
      message: 'Письмо для сброса пароля отправлено на ваш email',
    })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ message: 'Ошибка сервера' }, { status: 500 })
  }
}

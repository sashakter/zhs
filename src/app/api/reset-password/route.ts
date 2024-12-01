// app/api/reset-password/route.ts
import { NextResponse } from 'next/server'
import clientPromise from '@/src/lib/mongodb'
import bcrypt from 'bcrypt'

export async function POST(request: Request) {
  const { token, password } = await request.json()

  if (!token || !password) {
    return NextResponse.json(
      { message: 'Недостаточно данных' },
      { status: 400 },
    )
  }

  try {
    const client = await clientPromise
    const usersCollection = client.db().collection('users')

    const user = await usersCollection.findOne({
      resetPasswordToken: token,
      resetPasswordExpires: { $gt: new Date() },
    })

    if (!user) {
      return NextResponse.json(
        { message: 'Токен недействителен или истек' },
        { status: 400 },
      )
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    await usersCollection.updateOne(
      { _id: user._id },
      {
        $set: { password: hashedPassword },
        $unset: { resetPasswordToken: '', resetPasswordExpires: '' },
      },
    )

    return NextResponse.json({ message: 'Пароль успешно обновлен' })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ message: 'Ошибка сервера' }, { status: 500 })
  }
}

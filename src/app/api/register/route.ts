// app/api/register/route.ts
import { NextResponse } from 'next/server'
import clientPromise from '@/src/lib/mongodb'
import bcrypt from 'bcrypt'

export async function POST(request: Request) {
  const body = await request.json()
  const {
    name,
    email,
    password,
    confirmPassword,
    phone,
    company,
    companyWebsite,
  } = body

  if (
    !name ||
    !email ||
    !password ||
    !confirmPassword ||
    !phone ||
    !company ||
    !companyWebsite
  ) {
    return NextResponse.json(
      { message: 'Пожалуйста, заполните все поля' },
      { status: 400 },
    )
  }

  if (password !== confirmPassword) {
    return NextResponse.json(
      { message: 'Пароли не совпадают' },
      { status: 400 },
    )
  }

  try {
    const client = await clientPromise
    const usersCollection = client.db().collection('users')

    const existingUser = await usersCollection.findOne({ email })

    if (existingUser) {
      return NextResponse.json(
        { message: 'Пользователь с такой почтой уже существует' },
        { status: 409 },
      )
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    await usersCollection.insertOne({
      name,
      email,
      password: hashedPassword,
      phone,
      company,
    })

    return NextResponse.json(
      { message: 'Пользователь создан' },
      { status: 201 },
    )
  } catch (error) {
    return NextResponse.json({ message: 'Ошибка сервера' }, { status: 500 })
  }
}

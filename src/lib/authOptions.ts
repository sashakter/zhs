// src/lib/authOptions.ts
import { NextAuthOptions, Session } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import clientPromise from './mongodb'
import { MongoDBAdapter } from '@next-auth/mongodb-adapter'
import bcrypt from 'bcrypt'
import { JWT } from 'next-auth/jwt'

export const authOptions: NextAuthOptions = {
  adapter: MongoDBAdapter(clientPromise),
  session: {
    strategy: 'jwt',
  },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Электронная почта', type: 'email' },
        password: { label: 'Пароль', type: 'password' },
      },
      async authorize(credentials) {
        const client = await clientPromise
        const usersCollection = client.db().collection('users')

        const email = credentials?.email?.toLowerCase()
        const user = await usersCollection.findOne({ email })

        if (user && credentials?.password) {
          const isValid = await bcrypt.compare(
            credentials.password,
            user.password,
          )
          if (isValid) {
            return {
              id: user._id.toString(),
              name: user.name ?? 'Пользователь',
              email: user.email ?? '',
            }
          }
        }

        return null
      },
    }),
  ],
  pages: {
    signIn: '/signin',
    error: '/login',
  },
  callbacks: {
    async session({ session, token }: { session: Session; token: JWT }) {
      if (token && session.user && token.sub) {
        session.user.id = token.sub
      }
      return session
    },
  },
}

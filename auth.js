import NextAuth from 'next-auth'

import GitHub from 'next-auth/providers/github'
import Google from 'next-auth/providers/google'
import Credentials from 'next-auth/providers/credentials'

import { connectMongoDB } from './lib/mongoose'
import User from './models/user'
import bcrypt from 'bcryptjs'

export const handler = NextAuth({
  providers: [
    Credentials({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        await connectMongoDB()

        const user = await User.findOne({ email: credentials.email })
        const isPasswordMatch = await bcrypt.compare(
          credentials.password,
          user.password
        )

        const { name, email, rule, position, image } = user

        if (user && isPasswordMatch) {
          return { name, email, rule, position, image }
        }
        return null
      },
    }),
    GitHub,
    Google,
  ],
  callbacks: {
    authorized({ request, auth }) {
      const { pathname } = request.nextUrl
      if (pathname.startsWith('/dashboard')) return !!auth
      return true
    },
    async jwt({ token, user }) {
      if (user) {
        // token.accessToken = user.access_token
        return { ...token, ...user }
      }
      return token
    },
    async session({ session, token }) {
      // session.accessToken = token.accessToken
      session.user.id = token.id
      session.user.rule = token.rule
      session.user.position = token.position
      return session
    },
  },
  pages: {
    signIn: '/login',
  },
  session: {
    strategy: 'jwt',
  },
})

export const { handlers, auth, signIn, signOut } = handler

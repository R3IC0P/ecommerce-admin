import { Providers } from './providers'
import './globals.css'
import { SessionProvider } from 'next-auth/react'
import { auth } from '@/auth'

export default async function RootLayout({ children }) {
  const session = await auth()

  return (
    <html lang="pl" suppressHydrationWarning>
      <body className="h-screen">
        <SessionProvider session={session}>
          <Providers>{children}</Providers>
        </SessionProvider>
      </body>
    </html>
  )
}

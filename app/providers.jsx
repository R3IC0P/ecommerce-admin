'use client'

import { NextUIProvider } from '@nextui-org/react'
import { ThemeProvider as NextThemeProvider } from 'next-themes'
import { SessionProvider } from 'next-auth/react'

export function Providers({ children }) {
  return (
    <NextUIProvider className="h-full">
      <NextThemeProvider attribute="class" defaultTheme="dark">
        <SessionProvider>{children}</SessionProvider>
      </NextThemeProvider>
    </NextUIProvider>
  )
}

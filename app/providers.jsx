'use client'

import { NextUIProvider } from '@nextui-org/react'
import { ThemeProvider as NextThemeProvider } from 'next-themes'

export function Providers({ children }) {
  return (
    <NextUIProvider className="h-full">
      <NextThemeProvider attribute="class" defaultTheme="dark">
        {children}
      </NextThemeProvider>
    </NextUIProvider>
  )
}

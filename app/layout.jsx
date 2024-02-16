import { Providers } from './providers'
import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="pl" suppressHydrationWarning>
      <body className="h-screen">
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}

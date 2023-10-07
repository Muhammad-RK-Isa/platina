import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

import AuthProvider from '@/providers/auth-provider'
import { ThemeProvider } from '@/providers/theme-provider'
import { Toaster } from '@/components/ui/toaster'

const poppins = Poppins({ subsets: ['latin'], weight: "500" })

export const metadata: Metadata = {
  title: 'Platina',
  description: 'Developed by Muhammad Isa',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <AuthProvider>
      <html lang="en">
        <body className={poppins.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            <Toaster />
            {children}
          </ThemeProvider>
        </body>
      </html>
    </AuthProvider>
  )
}

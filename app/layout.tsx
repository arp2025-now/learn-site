import type { Metadata } from 'next'
import { Rubik } from 'next/font/google'
import './globals.css'

const rubik = Rubik({ subsets: ['hebrew', 'latin'] })

export const metadata: Metadata = {
  title: 'מדריכים | AP Automations',
  description: 'מדריכים מקצועיים לאוטומציה ו-CRM',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="he" dir="rtl" className={rubik.className}>
      <body>{children}</body>
    </html>
  )
}

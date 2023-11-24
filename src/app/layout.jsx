import MainLayout from '@/Layout/MainLayout'
import './globals.css'

export const metadata = {
  title: 'Admin Started Next',
  description: 'Aprendendo a usar o Next',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body><MainLayout>{children}</MainLayout></body>
    </html>
  )
}

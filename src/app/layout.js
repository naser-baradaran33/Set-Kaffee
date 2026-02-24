import './globals.css'
import { Inter } from 'next/font/google'
import AOSInit from '@/utils/aos';
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'فروشگاه اینترنتی  SET Coffee - صفحه اصلی کافه',
  description: 'Naser Baradaran coffee project with next.js v13',


}

export default function RootLayout({ children }) {
  return (
    <html lang="fa">
      <body className={inter.className}>
        <AOSInit />
        {children}</body>
    </html>
  )
}

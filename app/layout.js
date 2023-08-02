import './globals.css'
import { Inter } from 'next/font/google'
import Home from './page'
import SideMenu from './SideMenu'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'JM Port',
  description: 'Personal website'
}

export default function RootLayout () {
  return (
    <html lang='en'>
      <head>
        <script src='https://kit.fontawesome.com/494709a4b7.js' crossOrigin='anonymous' async />
      </head>
      <body className={inter.className}>
        <SideMenu />
        <main>
          <Home />
        </main>
      </body>
    </html>
  )
}

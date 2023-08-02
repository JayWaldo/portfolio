import './globals.css'
import { Inter } from 'next/font/google'
import Home from './page'
import SideMenu from './SideMenu'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'JM Port',
  description: 'Generated by create next app'
}

export default function RootLayout () {
  return (
    <html lang='en'>
      <head>
        <script src='https://kit.fontawesome.com/494709a4b7.js' crossorigin='anonymous' async />
      </head>
      <body className={inter.className}>
        <main>
          <SideMenu />
          <Home />
        </main>
      </body>
    </html>
  )
}
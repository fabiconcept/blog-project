import MyProfilePic from './components/MyProfilePic'
import NavBar from './components/NavBar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Blog Project',
  description: 'Created by Fabiconcept - Dave NextJS Tutorials Chapter 6',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-800`}>
        <NavBar />
        <MyProfilePic />
        {children}
      </body>
    </html>
  )
}

import Link from 'next/link'
import './globals.css'
import { Inter } from 'next/font/google'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { LogOutBtn } from './LogOutBtn'
import  LoginBtn  from './LoginBtn'
import  SignupBtn  from './SignupBtn'
import './css/navbar.css';




const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default async function RootLayout({ children }) {
  let session = await getServerSession(authOptions)
  return (
    <html lang="en">
      <body className={inter.className}>
      <div className="navbar"> 
      <Link href="/" className="logo">#Cafe</Link> 
      <Link href="/list">List</Link>
      { 
      // session 
      // ? <span>{session.user.name} <LogOutBtn/> </span> 
      //  : <LoginBtn></LoginBtn>
      session ? (
        <span>
          {session.user.name} <LogOutBtn />
        </span>
      ) : (
        <span>
          <LoginBtn />
          <SignupBtn />
        </span>
      )
      }

      </div>
      {children}</body>
    </html>
  )
}

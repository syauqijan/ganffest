import React from 'react'
import { signIn, signOut, useSession } from 'next-auth/react'
import styles from './Navbar.module.css'
import Link from 'next/link'
const Navbar = () => {
    const { data } : any = useSession()
    console.log(data)

    return (
        <div className={styles.navbar}>
            
            
        <div className="m-4 mt-6 flex items-center">
          <img src="/logo.png" alt="Logo" className="w-48 h-32-" />
          
        </div>
        <div className="m-4 flex items-center">
        <Link  href="/" className="text-tertiary mx-4 text-l font-bold">
            Homepage
          </Link>
          <Link href="/submission" className="text-tertiary mx-4 text-l ">
            Submission
          </Link>
          <Link href="/about" className="text-tertiary mx-4 text-l">
            About Us
          </Link>
          {/* <img src='@/usergff.png' alt="Logo Akun" className="w-14 h-14 mx-4" /> */}
          <div className="m-4 flex items-center">
              {data && data.user.name}{''}
              {data ? (
              <button className= {styles.button} onClick={() => signOut()}>Sign Out</button>
            ) : (
              <button className= {styles.button} onClick={() => signIn()}>Sign In</button>
            )}
            </div>
        </div>
      
      </div>
    )
}

export default Navbar;
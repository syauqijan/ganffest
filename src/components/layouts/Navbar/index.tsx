import React from 'react'
import { signIn, signOut, useSession } from 'next-auth/react'
import styles from './Navbar.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router';

const Navbar = () => {
  const router = useRouter(); // Dapatkan rute saat ini
    const { data } : any = useSession()
    console.log(data)
    const isLinkActive = (href: string) => {
      return router.asPath === href ? styles.boldLink : '';
      console.log(router.asPath)
    };
    return (
        <div className={styles.navbar}>
            
        <div className={styles.navbarContainer}>
        <div className={styles.logo}>
          <img src="/logo.png" alt="Logo" className={styles.logo} />
          
        </div>
        <div className={styles.contentNavbar}>
        <Link  href="/" className={`text-tertiary mx-4 text-l ${isLinkActive('/')}`}>
            Homepage
          </Link>
          <Link href="/submission" className={`text-tertiary mx-4 text-l ${isLinkActive('/submission')}`}>
            Submission
          </Link>
          <Link href="/about" className={`text-tertiary mx-4 text-l ${isLinkActive('/about')}`}>
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
      </div>

    )
}

export default Navbar;
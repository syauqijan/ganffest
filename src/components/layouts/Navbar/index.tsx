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
        <div className={styles.navbar} style={{ position: router.pathname === '/' ? 'absolute' : 'relative', zIndex: 2 }}>
            
        <div className={styles.navbarContainer}>
        <div className={styles.logo}>
          <img src="/logonavbar.png" alt="Logo" className={styles.logo} />
          
        </div>
        <div className={styles.contentNavbar}>
        <Link  href="/" className={styles.navPage}>
            Homepage
          </Link>
          <Link href="/submission" className={styles.navPage}>
            Submission
          </Link>
          <Link href="/about" className={styles.navPage}>
            About Us
          </Link>
          {/* <img src='@/usergff.png' alt="Logo Akun" className="w-14 h-14 mx-4" /> */}
          <div className="m-4 flex items-center">
              {data && data.user.name}{''}
              {data ? (
              <button className= {styles.buttonAuth} onClick={() => signOut()}>
                <p>Sign Out</p>
                </button>
            ) : (
              <button className= {styles.buttonAuth} onClick={() => signIn()}>
                <p>Sign In</p>
              </button>
            )}
            </div>
        </div>
      
      </div>
      </div>

    )
}

export default Navbar;
import React, { useState } from 'react';
import { signIn, signOut, useSession } from 'next-auth/react'
import styles from './Navbar.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router';
import Image from 'next/image';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Navbar = () => {
    const router = useRouter(); // Dapatkan rute saat ini
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const { data } = useSession();
    const closeDropdown = () => {
      setDropdownVisible(false);
    };
    const toggleDropdown = () => {
      setDropdownVisible(!dropdownVisible);
    };
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
            
          {data ? (
            
              <div className={styles.avatarContainer}>

                  <button
                  className={styles.avatarButton}
                  onClick={() => toggleDropdown()}
                >
                  <AccountCircleIcon className={styles.avatar} style={{ fontSize: '40px' , color:'#F9F6D5'}}/>
                </button>

                {dropdownVisible && (
                  <div className={styles.dropdownWrap} onClick={() => closeDropdown()}>
                    <div className={styles.dropdown}>
                    <button className={styles.buttonSignout} onClick={() => signOut()}>Sign Out</button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
            
              <button className={styles.buttonAuth} onClick={() => signIn()}>
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
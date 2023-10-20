import React, { useState } from 'react';
import { signIn, signOut, useSession } from 'next-auth/react'
import styles from './Navbar.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router';
import Image from 'next/image';

const Navbar = () => {
    const router = useRouter(); // Dapatkan rute saat ini
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const { data } = useSession();

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
                {data?.user?.image ? (
                  <button
                  className={styles.avatarButton}
                  onClick={() => toggleDropdown()}
                >
                  <img
                    src={data.user.image}
                    alt="Profile"
                    className={styles.avatar}
                  />
                </button>
                ) : (
                  <button
                  className={styles.avatarButton}
                  onClick={() => toggleDropdown()}
                >
                  <img
                    src='/usergff.png'
                    alt="Profile"
                    className={styles.avatar}
                  />
                </button>
                )}
                {dropdownVisible && (
                  <div className={styles.dropdown}>
                    <button className={styles.buttonProfile}>
                    <p>My Profile</p>
                    </button>
                    <button onClick={() => signOut()}>Sign Out</button>
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
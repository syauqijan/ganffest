import React, { useState } from 'react';
import { signIn, signOut, useSession } from 'next-auth/react'
import styles from './Navbar.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router';
import Image from 'next/image';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
const Navbar = () => {
    const router = useRouter(); 
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [dropdownMobileVisible, setDropdownMobileVisible] = useState(false);
    const { data } = useSession();
    const closeDropdown = () => {
      setDropdownVisible(false);
    };
    const toggleDropdown = () => {
      setDropdownVisible(!dropdownVisible);
    };
    const toggleDropdownMobile = () => {
      setDropdownMobileVisible(!dropdownMobileVisible);
    }
    return (
        <div className={styles.navbar} style={{ position: router.pathname === '/' ? 'absolute' : 'relative', zIndex: 2 }}>
            
        <div className={styles.navbarContainer}>
        <div className={styles.logo}>
          <img src="/logonavbar.svg" alt="Logo" className={styles.logo} />
          
        </div>
        <div className={styles.contentNavbar}>
          
        <Link href="/" className={`${styles.navPage} ${router.pathname === '/' ? styles.activeLink : ''}`}>
          Homepage
        </Link>
        <Link href="/submission" className={`${styles.navPage} ${router.pathname === '/submission' ? styles.activeLink : ''}`}>
          Submission
        </Link>
        <Link href="/about" className={`${styles.navPage} ${router.pathname === '/about' ? styles.activeLink : ''}`}>
          About Us
        </Link>
          {/* <img src='@/usergff.png' alt="Logo Akun" className="w-14 h-14 mx-4" /> */}
        <div className={styles.authButton}>
          
          {data ? (
            
            <div className={styles.avatarContainer}>

                <button
                className={styles.avatarButton}
                onClick={() => toggleDropdown()}
              >
                <AccountCircleIcon className={styles.avatar} style={{ fontSize: '40px' , color:'white'}}/>
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



          <div className={styles.hamburger} onClick={() => toggleDropdownMobile()}>
            {dropdownMobileVisible ? (
              <MenuOpenIcon className={styles.hamburgerIcon} style={{ fontSize: '40px' , color:'white'}}/>
            ) : (
              <MenuIcon className={styles.hamburgerIcon} style={{ fontSize: '40px' , color:'white'}}/>
            )}

          </div>
          {dropdownMobileVisible && (
                <div className={styles.dropdownWrapMobile} onClick={() => closeDropdown()}>
                  <div className={styles.dropdownMobile}>
                  <Link href="/" className={`${styles.navPageMobile} ${router.pathname === '/' ? styles.boldLink : ''}`}>
                    Homepage
                  </Link>
                  <Link href="/submission" className={`${styles.navPageMobile} ${router.pathname === '/submission' ? styles.boldLink : ''}`}>
                    Submission
                  </Link>
                  <Link href="/about" className={`${styles.navPageMobile} ${router.pathname === '/about' ? styles.boldLink : ''}`}>
                    About Us
                  </Link>
                  {data ? (
                          <button className={styles.buttonSignout} onClick={() => signOut()}>Sign Out</button>
                  ) : (
                    <button className={styles.buttonAuth} onClick={() => signIn()}>
                      <p>Sign In</p>
                    </button>
                  )}
                  </div>
                </div>
              )}
        </div>
      
      </div>
      </div>

    )
}

export default Navbar;
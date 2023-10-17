import React from 'react'
import styles from './Footer.module.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import EmailIcon from '@mui/icons-material/Email';
const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div >
        <div className="mr-4">
          <p className={styles.title}>Ganesha Film Festival</p>
          <p className={styles.address}>Jl. Ganesha No.10, Lb. Siliwangi, Coblong </p>
          <p className={styles.address}>Bandung,  JawaBarat </p>
          <p className={styles.address}>40132</p>
        </div>
        </div>
        <div className={styles.socmed}>
          <div className={styles.titleScomed}>
            <p>Find Us On Social Media</p>
          </div>
          <div className={styles.contentScomed}>
          <div className={styles.socmedIcon}>
              <a href="mailto:mail.ganffest@gmail.com" target="_blank" rel="noreferrer">
                <EmailIcon className="social-icons" style={{color:'#222536'}}/>
              </a>
            </div>
            <div className={styles.socmedIcon}>
              <a href="https://www.instagram.com/ganffest/" target="_blank" rel="noreferrer">
                  <InstagramIcon className="social-icons" style={{color:'#222536'}}/>
              </a>
            </div>
            {/* <div className={styles.socmedIcon}>
              <a href="https://www.youtube.com/@LFMITB" target="_blank" rel="noreferrer">   
                <YouTubeIcon className="social-icons" style={{color:'#222536'}}/>
              </a>
            </div> */}
            
            <div className={styles.socmedIcon}>
              <a href="https://twitter.com/ganffest" target="_blank" rel="noreferrer">
                <TwitterIcon className="social-icons" style={{color:'#222536'}}/>
              </a>
            </div>
          </div>
          
        
      </div>
      
    </footer>
  )
}

export default Footer
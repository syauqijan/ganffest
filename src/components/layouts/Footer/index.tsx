import React from 'react'
import styles from './Footer.module.css'
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles}>
        <div className="mr-4">
          <p className="text-2xs" style = {{color:'var(--primary)'}}>Ganesha Film Festival</p>
          <p className="text-xs"style = {{color:'var(--primary)'}}>Jl. Ganesha No.10, Lb. Siliwangi, Coblong </p>
          <p className="text-xs"style = {{color:'var(--primary)'}}>Bandung,  JawaBarat </p>
          <p className="text-xs"style = {{color:'var(--primary)'}}>40132</p>
        </div>
      </div>
      
    </footer>
  )
}

export default Footer
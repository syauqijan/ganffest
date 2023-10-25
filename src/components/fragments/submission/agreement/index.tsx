import React from 'react'
import styles from './Agreement.module.css'
const Agreement = ({ isVisible, onClose, onBack }: any) => {
    if( !isVisible ) return null;
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <h1 className={styles.header}>
        Mandatory Agreement
        </h1>
        <ol className={styles.content}>
          <li>1. Karya anda boleh ditayangkan baik melalui OTT maupun secara luring dalam kegiatan pemutaran Ganesha Film Festival</li>
          <li>2. Karya Anda boleh ditayangkan pada acara-acara non-profit seperti pameran, presentasi, diskusi, roadshow dan workshop yang melibatkan Ganesha Film Festival</li>
        </ol>
        <button className={styles.backButton} onClick={() => onBack()}>Kembali</button>
        <button className={styles.closeButton} onClick={() => onClose()}>
          Saya Menyetujui
        </button>
      </div>
    </div>  
  )
}

export default Agreement
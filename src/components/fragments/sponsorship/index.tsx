import React from 'react'
import styles from './Sponsorship.module.css'
import Image from 'next/image'

const Sponsorship = () => {
  return (
    <div className={styles.con}>
        <h1 className={styles.title_spon}>Sponsor & Media Partner</h1>
        <div className={styles.sponsor_con}>
        <Image
          src="/sponsorship.png"
          alt="Sponsorship"
          className={styles.sponsorship}
          width={700}
          height={500}
            
        />
        </div>

    </div>
  )
}

export default Sponsorship
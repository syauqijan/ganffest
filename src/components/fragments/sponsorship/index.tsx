import React from 'react'
import styles from './Sponsorship.module.css'
import Image from 'next/image'
import 'aos/dist/aos.css'


const Sponsorship = () => {
  return (
    <div className={styles.con}>
        <h1 className={styles.title_spon}>Sponsor & Partners</h1>
        <div className={styles.sponsor_con} data-aos="zoom-out-up">
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
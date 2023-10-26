import React from 'react'
import styles from './RegisterPopUp.module.css'
const RegisterPopUp = ({ isVisible, onClose }: any) => {
    if( !isVisible ) return null;
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <h1 className={styles.header}>
        Register Success
        </h1>
        <ol className={styles.content}>
          <li>Welcome!</li>
        </ol>
        <button className={styles.closeButton} onClick={() => onClose()}>
          Continue
        </button>
      </div>
    </div>  
  )
}

export default RegisterPopUp
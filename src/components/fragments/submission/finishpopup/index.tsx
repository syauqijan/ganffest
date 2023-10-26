import React from 'react'
import styles from './FinishPopUp.module.css'
const Agreement = ({ isVisible, onClose }: any) => {
    if( !isVisible ) return null;
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <h1 className={styles.header}>
        Success
        </h1>
        <ol className={styles.content}>
          <li>Film has been submitted!</li>
          <li>Thank you!</li>
        </ol>
        <button className={styles.closeButton} onClick={() => onClose()}>
          Continue
        </button>
      </div>
    </div>  
  )
}

export default Agreement
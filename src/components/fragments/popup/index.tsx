import React from 'react'
import styles from './PopUp.module.css'
const PopUp = ({ isVisible, onClose, message, messageTitle }: any) => {
    if( !isVisible ) return null;
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <h1 className={styles.header}>
        {messageTitle}
        </h1>
        <ol className={styles.content}>
          <p>{message}</p>
        </ol>
        <button className={styles.closeButton} onClick={() => onClose()}>
          Continue
        </button>
      </div>
    </div>  
  )
}

export default PopUp
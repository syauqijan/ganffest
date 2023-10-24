import React from "react";
import styles from "./FilmTerms.module.css";

const FilmTerms = ({isVisible, onClose}:any) => {
  if ( !isVisible ) return null; 
  return( 
    <div className={styles.container}>
      <div className={styles.box}>
        <h1 className={styles.header}>
        Ketentuan Film
        </h1>
        <ol className={styles.content}>
          <li>1. Resolusi film minimal 1080p atau setaranya</li>
          <li>2. Film wajib baru selesai diproduksi dalam rentang Maret 2022 hingga masa submisi berakhir</li>
          <li>3. Film wajib memiliki subtitle Bahasa Indonesia. Subtitle wajib bersifat hardsubbed</li>
          <li>4. Film disubmisikan dalam bentuk digital melalui form submisi yang sudah disediakan dalam website</li>
          <li>5. Keperluan submisi lainnya sudah tertera dalam forms tersebut </li>
        </ol>
        <button className={styles.closeButton} onClick={() => onClose()}>
          Saya Mengerti
        </button>
      </div>
    </div>    
  )
};

export default FilmTerms;
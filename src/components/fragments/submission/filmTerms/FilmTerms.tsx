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
        <div className={styles.line}></div>
        <ol className={styles.content}>
          <li className={styles.definition}>Film Pendek adalah : Film berdurasi maksimal 45 menit termasuk dengan credits scene</li>
          <li className={styles.rules}>1. Resolusi film minimal 1080p atau setaranya</li>
          <li className={styles.rules}>2. Film wajib baru selesai diproduksi dalam rentang Maret 2022 hingga masa submisi berakhir</li>
          <li className={styles.rules}>3. Film wajib memiliki subtitle Bahasa Indonesia. Subtitle wajib bersifat <i>hardsubbed</i></li>
          <li className={styles.rules}>4. Film disubmisikan dalam bentuk digital melalui form submisi yang sudah disediakan dalam website</li>
          <li className={styles.rules}>5. Keperluan submisi lainnya sudah tertera dalam forms berikut ini </li>
        </ol>
        <button className={styles.closeButton} onClick={() => onClose()}>
          Saya Mengerti
        </button>
      </div>
    </div>    
  )
};

export default FilmTerms;
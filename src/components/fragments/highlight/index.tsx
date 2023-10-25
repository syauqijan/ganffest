import React from 'react';
import styles from './Highlight.module.css';

const Highlight = () => {
  return (
    <div className={styles.highlightContainer}>
      <h1 className={styles.highlightHeader}>The Highlight of Ganesha Film Festival</h1>
      <div className={styles.highlightEvent}>
        <div className={styles.highlightImageContainer}>
        <img
          src="/c1.jpg"
          alt="Event 1"
          className={styles.highlightImage}
        />
        </div>
        <div className={styles.highlightInfo}>
          <h2 className={styles.highlightTitle}>Roadshow</h2>
          <p className={styles.highlightDescription}>
          Rangkaian acara ini merupakan upaya Ganesha Film Festival untuk menjalin silaturahmi yang baik dengan berbagai komunitas perfilman di Indonesia sekaligus mengajak partisipasi mereka dalam festival dua tahunan ini melalui kehadiran dalam main event serta melakukan submisi film.
          
          </p>
        </div>
      </div>

      <div className={styles.highlightEvent}>
        <div className={styles.highlightImageContainer}>
        <img
          src="/c2.jpg"
          alt="Event 2"
          className={styles.highlightImage}
        />
        </div>
        <div className={styles.highlightInfo}>
          <h2 className={styles.highlightTitle}>Sinema Keliling</h2>
          <p className={styles.highlightDescription}>
          Sinema Keliling merupakan sebuah pengabdian masyarakat dari Ganesha Film Festival dengan bentuk pemutaran film sebagai upaya untuk mendekatkan film-film pendek kepada masyarakat umum.
          </p>
        </div>
      </div>

      <div className={styles.highlightEvent}>
        <div className={styles.highlightImageContainer}>
        <img
          src="/c3.jpg"
          alt="Event 3"
          className={styles.highlightImage}
        />
        </div>
        <div className={styles.highlightInfo}>
          <h2 className={styles.highlightTitle}>Main Event</h2>
          <p className={styles.highlightDescription}>
          Rangkaian acara Main Event dari Ganesha Film Festival 2024  akan dilaksanakan selama tiga hari. Acara ini berisikan pembukaan acara, pemutaran film, diskusi film, workshop, ekshibisi, temu komunitas, dan malam penganugerahan.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Highlight;

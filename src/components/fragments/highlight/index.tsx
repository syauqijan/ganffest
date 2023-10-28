import React from 'react';
import styles from './Highlight.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css'
import Image from 'next/image';

const Highlight = () => {
  return (
    <div className={styles.highlightContainer}>
      <h1 className={styles.highlightHeader}>The Highlight of Ganesha Film Festival</h1>
      <div className={styles.highlightEvent} data-aos="zoom-in-right">
        <div className={styles.highlightImageContainer}>
        <Image
          src="/roadshow.jpg"
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

      <div className={styles.highlightEvent} data-aos="zoom-in-left">
        <div className={styles.highlightImageContainer}>
        <Image
          src="/g6.jpg"
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

      <div className={styles.highlightEvent} data-aos="zoom-in-right">
        <div className={styles.highlightImageContainer}>
        <Image
          src="/g2.jpg"
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

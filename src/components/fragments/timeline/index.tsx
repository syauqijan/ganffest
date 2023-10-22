// pages/ourprocess.tsx
import { NextApiRequest } from 'next';
import React, { useEffect, useRef } from 'react';
import Head from 'next/head';
import styles from './Timeline.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; 



const Timeline = () => {
  const lineRef = useRef<HTMLDivElement | null>(null); 
  const maxLineHeight = 1200;
  useEffect(() => {
    AOS.init({
      duration: 600, // Durasi animasi
      offset: 200, // Offset dari tepi layar
      easing: 'ease-in-out', // Easing function
    });

    const handleScroll = () => {
      const line = lineRef.current;

      if (line) {
        const rect = line.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const lineTop = rect.top;

        
        // Menghitung tinggi garis berdasarkan posisi scroll
        let lineHeight = Math.max(0, windowHeight - lineTop);

        // Batasi tinggi garis sesuai dengan maksimum yang diinginkan
        if (lineHeight > maxLineHeight) {
          lineHeight = maxLineHeight;
        }
        line.style.height = `${lineHeight}px`;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.topSection}>
        <h1 className={styles.timelineTitle}>Our Timeline</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit delectus iusto consequatur natus voluptatibus distinctio quo tenetur placeat nihil? Eligendi dolore consequatur eveniet commodi illum obcaecati assumenda distinctio blanditiis? Beatae?
          </p>
      </div>
      <div className={styles.timeline} >
      <div ref={lineRef} className={styles.line}>

        </div>
        <div data-aos="fade-right" className={styles.section}>
          <div className={styles.bead}></div>
          <div className={styles.content}>
            <h2 className={styles.eventTitle}>Calling Entry</h2>
            <p>
              TBA
            </p>
          </div>
        </div>

        <div data-aos="fade-left" className={styles.section}>
          <div className={styles.bead}></div>
          <div className={styles.content}>
            <h2 className={styles.eventTitle}>Roadshow Komunitas</h2>
            <p>
              TBA
            </p>
          </div>
        </div>

        <div data-aos="fade-right" className={styles.section}>
          <div className={styles.bead}></div>
          <div className={styles.content}>
            <h2 className={styles.eventTitle}>Malam Komunitas</h2>
            <p>
              TBA
            </p>
          </div>
        </div>

        <div data-aos="fade-left" className={styles.section}>
          <div className={styles.bead}></div>
          <div className={styles.content}>
            <h2 className={styles.eventTitle}>Sinema Keliling</h2>
            <p>
              TBA
            </p>
          </div>
        </div>

        <div data-aos="fade-right" className={styles.section}>
          <div className={styles.bead}></div>
          <div className={styles.content}>
            <h2 className={styles.eventTitle}>Main Event</h2>
            <p>
              TBA
            </p>
          </div>
        </div>


      </div>
    </div>
  )
}

export default Timeline;

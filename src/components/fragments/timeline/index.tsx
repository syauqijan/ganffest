// pages/ourprocess.tsx
import { NextApiRequest } from 'next';
import React, { useEffect, useRef } from 'react';
import Head from 'next/head';
import styles from './Timeline.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; 



const Timeline = () => {
  const lineRef = useRef<HTMLDivElement | null>(null); 
  const maxLineHeight = 1250;
  useEffect(() => {
    AOS.init({
      duration: 900, 
      offset: 200, 
      easing: 'ease-in-out', 
    });

    const handleScroll = () => {
      const line = lineRef.current;

      if (line) {
        const rect = line.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const lineTop = rect.top;

        let lineHeight = Math.max(0, windowHeight - lineTop);

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
  useEffect(() => {
    // Mengambil referensi ke elemen dengan ID "mySection"
    const section = document.getElementById("mySection");
    const section2 = document.getElementById("mySection2");

    // Periksa lebar layar saat komponen dimuat
    const handleResize = () => {
      if (window.innerWidth <= 768 && section && section2) {
        section.setAttribute("data-aos", "fade-right");
        section2.setAttribute("data-aos", "fade-right");
      } else if (section&&section2) {
        section.setAttribute("data-aos","fade-left");
        section2.setAttribute("data-aos","fade-left");
      }
    };

    // Panggil fungsi handleResize saat komponen dimuat
    handleResize();
  
    // Tambahkan event listener untuk merespons perubahan lebar layar
    window.addEventListener("resize", handleResize);
  
    // Bersihkan event listener saat komponen dibongkar
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  
  
  
  
  
  
  return (
    <div className={styles.container}>
      <div className={styles.topSection}>
        <h1 className={styles.timelineTitle}>Timeline GFF 2024</h1>
          {/* <p>
            Don't miss our timeline!
          </p> */}
      </div>
      <div className={styles.timeline} >
      <div ref={lineRef} className={styles.line}>
        
        </div>
        <div data-aos="fade-right" className={styles.section}>
          <div className={styles.bead}></div>
          <div className={styles.content}>
            <h2 className={styles.eventTitle}>Calling Entry</h2>
            <p>
              1 November 2023
            </p>
          </div>
        </div>

        <div data-aos="fade-left" className={styles.sectionRight} id="mySection">
          <div className={styles.bead}></div>
          <div className={styles.content}>
            <h2 className={styles.eventTitle}>Roadshow Komunitas</h2>
            <p>
              November-Desember 2023
            </p>
          </div>
        </div>

        <div data-aos="fade-right" className={styles.section}>
          <div className={styles.bead}></div>
          <div className={styles.content}>
            <h2 className={styles.eventTitle}>Malam Komunitas</h2>
            <p>
              Desember 2023
            </p>
          </div>
        </div>

        <div data-aos="fade-left" className={styles.sectionRight} id="mySection2">
          <div className={styles.bead}></div>
          <div className={styles.content}>
            <h2 className={styles.eventTitle}>Sinema Keliling</h2>
            <p>
              Januari-Februari 2024
            </p>
          </div>
        </div>

        <div data-aos="fade-right" className={styles.section}>
          <div className={styles.bead}></div>
          <div className={styles.content}>
            <h2 className={styles.eventTitle}>Main Event</h2>
            <p className={styles.eventDate}>
              Maret 2024
            </p>
          </div>
        </div>


      </div>
    </div>
  )
}

export default Timeline;

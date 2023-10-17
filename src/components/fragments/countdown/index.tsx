// CountdownTimer.tsx
import React, { useEffect, useState } from 'react';
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "./CountdownTimer.module.css";

const CountdownTimer = () => {
  const eventDate = new Date('2023-10-16T00:00:00Z'); // Tanggal event 'calling entry'
  const currentDate = new Date();

  const [partyTime, setPartyTime] = useState(false);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const target = new Date('2023-10-18T00:00:00Z');

    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(d);

      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setHours(h);

      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(m);

      const s = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(s);

      if (d <= 0 && h <= 0 && m <= 0 && s <= 0) {
        setPartyTime(true);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  


  return (
    <div className={styles.container}>
      <Head>
        <title>Countdown Timer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {partyTime ? (
        <>
          <h1>Happy new year!</h1>

        </>
      ) : (
        
          <div className={styles.timer_wrapper}>
            <div className={styles.timer_inner}>
              <div className={styles.timer_segment}>
                <span className={styles.time}>{days}</span>
                <span className={styles.label}>Days</span>
              </div>
              <span className={styles.divider}>:</span>
              <div className={styles.timer_segment}>
                <span className={styles.time}>{hours}</span>
                <span className={styles.label}>Hours</span>
              </div>
              <span className={styles.divider}>:</span>
              <div className={styles.timer_segment}>
                <span className={styles.time}>{minutes}</span>
                <span className={styles.label}>Minutes</span>
              </div>
              <span className={styles.divider}>:</span>
              <div className={styles.timer_segment}>
                <span className={styles.time}>{seconds}</span>
                <span className={styles.label}>Seconds</span>
              </div>
            </div>
          </div>

        
      )}
    </div>
  );
};

export default CountdownTimer;

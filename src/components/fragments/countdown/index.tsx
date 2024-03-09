import React, { useEffect, useState } from 'react';
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Styles from "./CountdownTimer.module.css";
import { Link } from 'react-router-dom';

const CountdownTimer = () => {
  const [partyTime, setPartyTime] = useState(false);
  const [days, setDays] = useState<number>(0);
  const [hours, setHours] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);

  useEffect(() => {
    const target = new Date('2024-03-08T11:00:00Z');
  
    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();
  
      let d, h, m, s; // Declare the variables
      if (difference <= 0) {
        d = days; // Assign the values to the variables
        h = hours;
        m = minutes;
        s = seconds;
        setPartyTime(true);
        clearInterval(interval); // stop the interval
      } else {
        const d = Math.floor(difference / (1000 * 60 * 60 * 24));
        setDays(Number(d.toString().padStart(2, '0')));

        const h = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        setHours(Number(h.toString().padStart(2, '0')));

        const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        setMinutes(Number(m.toString().padStart(2, '0')));

        const s = Math.floor((difference % (1000 * 60)) / 1000);
        setSeconds(Number(s.toString().padStart(2, '0')));
      }
    }, 1000);
  
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='flex flex-col pl-8 pr-8  pb-24 pt-20 w-5/6  h-4/5 items-center justify-center text-center mt-40 sm:mb-36 rounded-xl bg-gradient-to-b from-primary/70 to-secondary/20'>
      <div >
        <h1 className='sm:text-5xl text-3xl font-semibold tracking-wide '>Get ready! Let&apos;s immerse ourselves in the captivating world of cinema at </h1>
        <div className=' animate-pulse sm:text-5xl text-3xl font-semibold tracking-wide mt-2 '>GANFFEST</div>
      </div>
      {/* <div>
        <h1 className='text-2xl'>The event will open in</h1>
        
      </div> */}
      <div className='flex flex-row pl-8 pr-8  gap-3 mt-10 text-center justify-center items-center line-clamp-6 '>
        {/* <div className='flex flex-col items-center justify-center'>
          <h1 className='flex w-20 h-20 items-center justify-center text-5xl rounded-lg bg-primary font-semibold'>{days}</h1>
          <h1 className='text-l font-bold'>Days</h1>
        </div> */}
        
        <div className='flex flex-col'>
          <h1 className='flex w-16 h-16 sm:w-20 sm:h-20 items-center justify-center sm:text-5xl text-4xl rounded-lg bg-primary font-semibold'>{hours.toString().padStart(2, '0')}</h1>
          <h1 className='text-l font-bold'>Hours</h1>
        </div>
        <div>
          <h1 className='text-4xl  font-semibold'>:</h1>
        </div>
        <div className='flex flex-col'>
          <h1 className='flex w-16 h-16 sm:w-20 sm:h-20 items-center justify-center sm:text-5xl text-4xl rounded-lg bg-primary font-semibold'>{minutes.toString().padStart(2, '0')}</h1>
          <h1 className='text-l font-bold'>Minutes</h1>
        </div>
        <div>
          <h1 className='text-4xl font-semibold'>:</h1>
        </div>
        <div className='flex flex-col'>
          <h1 className='flex w-16 h-16 sm:w-20 sm:h-20 items-center justify-center sm:text-5xl text-4xl rounded-lg bg-primary font-semibold'>{seconds.toString().padStart(2, '0')}</h1>
          <h1 className='text-l font-bold'>Seconds</h1>
        </div>
    </div>
    <div>
      <a href='https://www.tiket.com/to-do/ganesha-film-festival' target="_blank" rel="noopener noreferrer">
      <button className='mt-10 w-36 bg-white text-black font-semibold rounded-3xl p-3 hover:bg-black hover:text-white duration-200'>Buy Ticket</button>
      </a>
    </div>
    </div>
  )
}

export default CountdownTimer
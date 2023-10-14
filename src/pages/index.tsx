import Image from 'next/image'
import { Inter } from 'next/font/google'

import Slider from '@/components/fragments/carousel/slider'
import CountdownTimer from '@/components/fragments/countdown'
import TimelineEvent from '@/components/fragments/timeline'
import styles from '@/styles/Homepage.module.css'
import Timeline from '@/components/fragments/timeline'
import OurProcess from '@/components/fragments/timeline'
import AcaraFragment from '@/components/fragments/acara'
const inter = Inter({ subsets: ['latin'] })
const events = [
  { date: 'October 10, 2023', description: 'Event 1' },
  { date: 'October 15, 2023', description: 'Event 2' },
  { date: 'October 20, 2023', description: 'Event 3' },
  { date: 'October 25, 2023', description: 'Event 4' },
];
export default function Home() {
  return (
    <div className={styles.homepage}>
      {/* <div className={styles.header}>
      <h1 className={styles.calling}>Get ready! An interesting event will open soon!</h1>
      </div> */}
      {/* <CountdownTimer/> */}
      <Slider/>
      {/* <Timeline  />
      <OurProcess/> */}
      <AcaraFragment/>
    </div>
  )
}

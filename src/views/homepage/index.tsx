import React from 'react'
import Slider from '@/components/fragments/carousel/slider'
import CountdownTimer from '@/components/fragments/countdown'
import TimelineEvent from '@/components/fragments/timeline'
import styles from '@/styles/Homepage.module.css'
import Timeline from '@/components/fragments/timeline'
import OurProcess from '@/components/fragments/timeline'
import AcaraFragment from '@/components/fragments/acara'
// const inter = Inter({ subsets: ['latin'] })

const HomepageView = () => {
    return (
        <div className={styles.homepage}>
        <title>
          Ganesha Film Festival
        </title>
          {/* <div className={styles.header}>
          <h1 className={styles.calling}>Get ready! An interesting event will open soon!</h1>
          </div>
          <CountdownTimer/> */}
          <Slider/>
          {/* <Timeline  />
          <OurProcess/> */}
          <AcaraFragment/>
          <Timeline/>
        </div>
      )
}

export default HomepageView
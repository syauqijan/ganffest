import React from 'react'
import Slider from '@/components/fragments/carousel/slider'
import CountdownTimer from '@/components/fragments/countdown'
import TimelineEvent from '@/components/fragments/timeline'
import styles from '@/styles/Homepage.module.css'
import Timeline from '@/components/fragments/timeline'
import OurProcess from '@/components/fragments/timeline'
import AcaraFragment from '@/components/fragments/acara'
import { EmblaOptionsType } from 'embla-carousel-react'
import Highlight from '@/components/fragments/highlight'
import EmblaCarousel from '@/components/fragments/gallery'

const OPTIONS: EmblaOptionsType = { dragFree: true, containScroll: 'trimSnaps' }
const SLIDE_COUNT = 16
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
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
          <Highlight/>

          {/* <EmblaCarousel slides={SLIDES} options={OPTIONS} /> */}
          
        </div>
      )
}

export default HomepageView
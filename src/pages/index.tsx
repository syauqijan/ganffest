import Image from 'next/image'
import { Inter } from 'next/font/google'

import Slider from '@/components/fragments/carousel/slider'
import CountdownTimer from '@/components/fragments/countdown'
import TimelineEvent from '@/components/fragments/timeline'
import styles from '@/styles/Homepage.module.css'
import Timeline from '@/components/fragments/timeline'
import OurProcess from '@/components/fragments/timeline'
import AcaraFragment from '@/components/fragments/acara'
import HomepageView from '@/views/homepage'

export default function Home() {
  return (
    <HomepageView/>

  )
}

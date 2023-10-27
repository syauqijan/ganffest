import React from 'react'
import Slider from '@/components/fragments/carousel/slider'
import CountdownTimer from '@/components/fragments/countdown'

import styles from '@/styles/Homepage.module.css'
import Timeline from '@/components/fragments/timeline'
import AcaraFragment from '@/components/fragments/acara'
import Highlight from '@/components/fragments/highlight'
import Gallery from '@/components/fragments/gallery'


import image1 from '../../../public/c1.jpg';
import image2 from '../../../public/c2.jpg';
import image3 from '../../../public/c3.jpg';
import image4 from '../../../public/c1.jpg';
import image5 from '../../../public/c2.jpg';
import image6 from '../../../public/c3.jpg';
import image7 from '../../../public/c1.jpg';
import image8 from '../../../public/c2.jpg';
import image9 from '../../../public/c3.jpg';
import image10 from '../../../public/c1.jpg';
import image11 from '../../../public/c2.jpg';
import image12 from '../../../public/c3.jpg';

const images = [image1, image2, image3, image4].map(image => image.src);

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
          <AcaraFragment/>
          <Timeline/>
          <Highlight/>
          <Gallery images={images}/>
          
        </div>
      )
}

export default HomepageView
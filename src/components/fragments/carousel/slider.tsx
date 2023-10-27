import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import styles from './Slider.module.css';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/scale-out-animation.css';

const Slider = () => {
  return (
    <div className={styles.sliderContainer}>
      <AwesomeSlider animation="scaleOutAnimation">
        <div data-src='/c1.jpg'>
          <a
            href="https://www.youtube.com/watch?v=qBnkCCJuz_E"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.watchButton}
          >
            Watch on YouTube
          </a>
        </div>
        <div data-src='/c4.jpg'>
          <a
            href="https://www.youtube.com/watch?v=qBnkCCJuz_E"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.watchButton}
          >
            Watch on YouTube
          </a>
        </div>
        <div data-src='/c5.jpg'>
          <a
            href="https://www.youtube.com/watch?v=qBnkCCJuz_E"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.watchButton}
          >
            Watch on YouTube
          </a>
        </div>
      </AwesomeSlider>
    </div>
  );
};

export default Slider;

import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import styles from './Slider.module.css';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/scale-out-animation.css';

const Slider = () => {
    return (
        <div className={styles.sliderContainer}>
        <AwesomeSlider animation="scaleOutAnimation">
        <div data-src='/c1.jpg' />
        <div data-src='/c2.jpg' />
        <div data-src='/c3.jpg' />

        </AwesomeSlider>
        </div>
    );
    }

export default Slider;
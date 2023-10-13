import React from 'react';
import AwesomeSlider from 'react-awesome-slider';

import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/scale-out-animation.css';

const Slider = () => {
    return (
        <AwesomeSlider animation="scaleOutAnimation">
        <div data-src='/c1.jpg' />
        <div data-src='/c2.jpg' />
        <div data-src='/c3.jpg' />

        </AwesomeSlider>
        
    );
    }

export default Slider;
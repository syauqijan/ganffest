import React, { useState } from 'react';
import styles from './gallery.module.css';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
const Gallery: React.FC<{ images: string[] }> = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const imagesPerSlide = 3;
  const totalSlides = Math.ceil(images.length / imagesPerSlide);
  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className={styles.gallery}>
      <h1 className={styles.galleryHeader}>Gallery of Ganesha Film Festival</h1>
      <div className={styles.galleryContainer} style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {images.map((image, index) => (
          <div key={index} className={styles.gallerySlide}>
            <img src={image} alt={`Slide ${index + 1}`} className={styles.galleryImg} />
          </div>
        ))}
      </div>

      <div className={styles.galleryNavigation}>
      {Array.from({ length: totalSlides }).map((_, index) => (
        <button
          key={index}
          className={`${styles.galleryDot} ${index === currentSlide ? styles.active : ''}`}
          onClick={() => goToSlide(index)}
        ></button>
      ))}
      </div>

      <button className={styles.prevButton} onClick={prevSlide}>
        <ArrowBackIosNewIcon />
      </button>
      <button className={styles.nextButton} onClick={nextSlide}>
        <ArrowForwardIosIcon />
      </button>
    </div>
  );
};

export default Gallery;
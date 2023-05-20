import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import styles from './SlideShow.module.css';

const SlideShow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    'https://ostop.digital/wp-content/uploads/2023/05/a-1024x291.png',
    'https://ostop.digital/wp-content/uploads/2023/05/b-1024x291.png',
    'https://ostop.digital/wp-content/uploads/2023/05/c-1024x291.png'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + images.length) % images.length);
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  return (

    <>
    <div className="slideshow">
      <div className="slide-container">
      <img
  src={images[currentSlide]}
  alt={`Slide ${currentSlide}`}
  className={styles.slideImage}
/>
      </div>
      <div className="controls">
        <button className={styles.button} onClick={goToPrevSlide}>
          <FaChevronLeft />
        </button>
        <button className={styles.button} onClick={goToNextSlide}>
          <FaChevronRight />
        </button>
      </div>
    </div>
    </>
  );
};

export default SlideShow;

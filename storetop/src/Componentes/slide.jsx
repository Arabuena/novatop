import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import styles from './SlideShow.module.css';

const SlideShow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    '/src/assets/slideGallery/original/a.png',
    '/src/assets/slideGallery/original/b.png',
    '/src/assets/slideGallery/original/c.png'
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
    <div className="slideshow">
      <div className="slide-container">
        <img
          src={images[currentSlide]}
          alt={`Slide ${currentSlide}`}
          style={{ maxWidth: '100%', maxHeight: '100%' }}
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
  );
};

export default SlideShow;

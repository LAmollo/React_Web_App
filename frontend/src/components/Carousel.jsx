import React, { useState } from 'react';
import './Carousel.css';

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="carousel">
      <button className="carousel-button" onClick={prevImage}>
        &lt;
      </button>
      <img src={images[currentIndex]} alt="carousel" className="carousel-image" />
      <button className="carousel-button" onClick={nextImage}>
        &gt;
      </button>
    </div>
  );
};

export default Carousel;

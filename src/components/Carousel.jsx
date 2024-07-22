// src/components/Carousel.jsx

import React from 'react';
import './Carousel.css';

/**
 * Carousel component to display a series of images.
 * @param {Object} props - Component properties.
 * @param {Array} props.images - Array of image URLs to display in the carousel.
 */
const Carousel = ({ images }) => {
  return (
    <div className="carousel">
      {images.map((image, index) => (
        <img key={index} src={image} alt={`Slide ${index}`} className="carousel-image" />
      ))}
    </div>
  );
};

export default Carousel;

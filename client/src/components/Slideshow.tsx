import React, { useState } from "react";
import '../scss/slidestyle.scss'

type ImageProps = {
  src: string;
  alt: string;
};

type SlideshowProps = {
  images: ImageProps[];
};

const Slideshow = ({ images }: SlideshowProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  const handleNextClick = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  return (
    <div className="slideshow-container">
      <div className="slide active">
        <img width="600px" height="400px" vertical-align="middle" src={images[currentIndex].src} alt={images[currentIndex].alt} />
      </div>
      <div className="slider-controls">
        <button onClick={handlePrevClick}>Prev</button>
        <button onClick={handleNextClick}>Next</button>
      </div>
    </div>
  );
};

export default Slideshow;

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

  const prev = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  const nextC = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  return (
    <div className="sliderBox">
      <div className="slide active">
        <img width="600px" height="400px" vertical-align="middle" src={images[currentIndex].src} alt={images[currentIndex].alt} />
      </div>
      <div className="sliderC">
        <button onClick={prev}>Prev</button>
        <button onClick={nextC}>Next</button>
      </div>
    </div>
  );
};

export default Slideshow;

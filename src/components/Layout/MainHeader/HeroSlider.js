import React, { useState, useRef, useEffect } from "react";

import { heroSliderData } from "./heroSliderData";
import "./HeroSlider.css";

const delay = 6000;

const HeroSlider = () => {
  const slides = heroSliderData;
  const [index, setIndex] = useState(0);
  const [updateRef, setUpdateRef] = useState(false);
  const timeoutRef = useRef(null);
  const sliderWidthRef = useRef();

  const sliderWidth = sliderWidthRef.current
    ? sliderWidthRef.current.offsetWidth
    : 0;

  useEffect(() => {
    setUpdateRef(true);
  }, []);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow">
      <div
        className="slideshow-slider"
        style={{
          // transform: `translate3d(${-index * 100}%, 0 ,0)`,
          transform: `translateX(-${index * sliderWidth + "px"})`,
          transition: "0.4s ease all",
        }}
        ref={sliderWidthRef}
      >
        {slides.map((item, index) => (
          <div className="slide" key={index}>
            <div className={`slide-text ${item.cName3}`}>
              <h1 className="slide-title-1">{item.title}</h1>
              <h1 className="slide-title-2">{item.title2}</h1>
              <h1 className="slide-title-3">{item.title3}</h1>
              <span className={item.cName2}></span>
            </div>
            <div className="slide-image-wrapper">
              <img src={item.image} alt={item.title} />
            </div>
          </div>
        ))}
      </div>
      <div className="slideshow-dots">
        {slides.map((_, idx) => (
          <div
            key={idx}
            className={`slideshow-dot ${index === idx ? "active" : ""}`}
            onClick={() => setIndex(idx)}
          >
            {idx + 1}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;

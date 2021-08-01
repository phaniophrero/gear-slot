import React, { useState, useRef, useEffect } from "react";
import { BtnSlider } from "./BtnSlider";
import classes from "./AboutUsSlider.module.css";
import dataSlider from "./dataSlider";
import "./AboutUsSlider.css";

const delay = 3000;

const AboutUsSlider = () => {
  const slides = dataSlider;
  const [slideIndex, setSlideIndex] = useState(0);
  const [updateRef, setUpdateRef] = useState(false);
  const timeoutRef = useRef(null);
  const sliderAboutWidthRef = useRef();

  const [dimensions, setDimensions] = React.useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });
  useEffect(() => {
    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }

    window.addEventListener("resize", handleResize);

    return (_) => {
      window.removeEventListener("resize", handleResize);
    };
  });

  const sliderWidth = sliderAboutWidthRef.current
    ? sliderAboutWidthRef.current.offsetWidth
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
        setSlideIndex((prevIndex) =>
          prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [slideIndex]);

  const nextSlide = () => {};
  const prevSlide = () => {};

  return (
    <div className={classes["about-slider-main"]}>
      {/* <div className={classes["about-slider-button"]}>
        <BtnSlider moveSlide={prevSlide} direction={"prev"} />
      </div> */}
      <div className={classes["about-slider"]}>
        <div
          className={classes["about-slider-wrapper"]}
          style={{
            transform: `translateX(-${slideIndex * sliderWidth + "px"})`,
            transition: "0.4s ease all",
          }}
          ref={sliderAboutWidthRef}
        >
          {dataSlider.map((item, index) => {
            return (
              <div key={item.id} className="about-slide">
                <img src={item.image} alt="slider images" />
              </div>
            );
          })}
        </div>
        <div className="about-slider-indicators">
          {dataSlider.map((_, idx) => (
            <div
              key={idx}
              className={`about-slider-dot ${
                slideIndex === idx ? "active" : ""
              }`}
              onClick={() => setSlideIndex(idx)}
            ></div>
          ))}
        </div>
      </div>
      {/* <div className={classes["about-slider-button"]}>
        <BtnSlider moveSlide={nextSlide} direction={"next"} />
      </div> */}
    </div>
  );
};

export default AboutUsSlider;

import React, { useState, useEffect, useRef } from "react";

import "./TestSlider.css";
import dataSlider from "../AboutUs/dataSlider";
import TestSliderContent from "./TestSliderContent";
import TestSlide from "./TestSlide";
import Arrow from "./Arrow";
import TestDots from "./TestDots";

const slides = dataSlider;
const getWidth = () => window.innerWidth;
const autoPlay = 4;

const TestSlider = () => {
  const firstSlide = slides[0];
  const secondSlide = slides[1];
  const lastSlide = slides[slides.length - 1];

  const [state, setState] = useState({
    activeSlide: 0,
    translate: getWidth(),
    transition: 0.45,
    _slides: [lastSlide, firstSlide, secondSlide],
  });

  const { translate, transition, activeSlide, _slides } = state;
  const autoPlayRef = useRef();
  const transitionRef = useRef();
  const resizeRef = useRef();

  useEffect(() => {
    autoPlayRef.current = nextSlide;
    transitionRef.current = smoothTransition;
    resizeRef.current = handleResize;
  });

  useEffect(() => {
    const play = () => {
      autoPlayRef.current();
    };

    const smooth = (e) => {
      if (e.target.className.includes("testSliderContent")) {
        transitionRef.current();
      }
    };

    const resize = () => {
      resizeRef.current();
    };

    let interval = null;
    const transitionEnd = window.addEventListener("transitionend", smooth);
    const onResize = window.addEventListener("resize", resize);

    if (autoPlay) {
      interval = setInterval(play, autoPlay * 1000);
      return () => clearInterval(interval);
    }

    return () => {
      window.removeEventListener("transitionend", transitionEnd);
      window.removeEventListener("resize", onResize);

      if (autoPlay) {
        clearInterval(interval);
      }
    };
  }, [autoPlay]);

  useEffect(() => {
    if (transition === 0) {
      setState({ ...state, transition: 0.45 });
    }
  }, [transition]);

  const handleResize = () => {
    setState({ ...state, translate: getWidth(), transition: 0 });
  };

  const smoothTransition = () => {
    let _slides = [];

    // We're at the last slide
    if (activeSlide === slides.length - 1) {
      _slides = [slides[slides.length - 2], lastSlide, firstSlide];
    }
    // We're back at the first slide. Just reset to how it was on  initial render
    else if (activeSlide === 0) {
      _slides = [lastSlide, firstSlide, secondSlide];
    }
    // Create an array of the previous last slide, and the next two slides that follow it.
    else {
      _slides = slides.slice(activeSlide - 1, activeSlide + 2);
    }

    setState({
      ...state,
      _slides,
      transition: 0,
      translate: getWidth(),
    });
  };

  const nextSlide = () => {
    setState({
      ...state,
      translate: translate + getWidth(),
      activeSlide: activeSlide === slides.length - 1 ? 0 : activeSlide + 1,
    });
  };

  const prevSlide = () => {
    setState({
      ...state,
      translate: 0,
      activeSlide: activeSlide === 0 ? slides.length - 1 : activeSlide - 1,
    });
  };

  return (
    <div className="test-slider-container">
      <TestSliderContent
        className="testSliderContent"
        translate={translate}
        transition={transition}
        width={getWidth() * _slides.length}
      >
        {_slides.map((_slide, i) => (
          <TestSlide
            width={getWidth()}
            slideIndex={_slide.id}
            key={_slide + i}
            image={_slide.image}
          />
        ))}
      </TestSliderContent>
      <Arrow direction="left" hanldeClick={prevSlide} />
      <Arrow direction="right" hanldeClick={nextSlide} />
      <TestDots slides={slides} activeSlide={activeSlide} />
    </div>
  );
};

TestSlider.defaultProps = {
  slides: [],
  autoPlay: null,
};

export default TestSlider;

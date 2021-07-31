import React from "react";

const TestSlide = (props) => {
  return (
    <div key={props.slideIndex} className="test-slide-image">
      <img src={props.image} alt="Imagine slider" />
    </div>
  );
};

export default TestSlide;

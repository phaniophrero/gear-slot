import React from "react";

import styled from "styled-components";

const TestDots = ({ slides, activeSlide }) => {
  return (
    <React.Fragment>
      <Dots>
        {slides.map((slide, i) => (
          <Dot
            key={slide}
            active={activeSlide === i}
            className={`${activeSlide === i ? "active" : ""}`}
          />
        ))}
      </Dots>
    </React.Fragment>
  );
};

const Dot = styled.span`
  width: 20px;
  height: 20px;
  margin-left: 20px;
  border: 1px solid #fff;
  border-radius: 50%;
  background: transparent;
  transition: all 0.3s ease-out;

  &.active {
    background: #b40000;
    border: 1px solid #b40000;
    transition: all 0.3s ease-out;
  }
`;

const Dots = styled.div`
  position: absolute;
  right: 5%;
  bottom: 25px;
  width: 100%;
  max-width: 30rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default TestDots;

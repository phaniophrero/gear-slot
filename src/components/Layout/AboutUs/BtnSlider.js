import React from "react";

import { IconContext } from "react-icons";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";

export const BtnSlider = ({ direction, moveSlide }) => {
  return (
    <span
      onClick={moveSlide}
      className={
        direction === "next" ? "button-slider next" : "button-slider prev"
      }
    >
      {direction === "next" ? (
        <IconContext.Provider
          value={{
            style: {
              color: "#fff",
              fontSize: "4rem",
              cursor: "pointer",
            },
          }}
        >
          <IoIosArrowDropright />
        </IconContext.Provider>
      ) : (
        <IconContext.Provider
          value={{
            style: {
              color: "#fff",
              fontSize: "4rem",
              cursor: "pointer",
            },
          }}
        >
          <IoIosArrowDropleft />
        </IconContext.Provider>
      )}
    </span>
  );
};

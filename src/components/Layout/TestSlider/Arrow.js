import React from "react";

import styled from "styled-components";
import { IconContext } from "react-icons";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";

const Arrow = ({ direction, hanldeClick }) => {
  return (
    <ArrowContainer onClick={hanldeClick}>
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
    </ArrowContainer>
  );
};

const ArrowContainer = styled.div`
  width: 80%;
  display: flex;
  position: absolute;
  top: 50%;
  justify-content: space-between;
  align-items: center;
  transition: transform ease-in 0.1s;
`;

export default Arrow;

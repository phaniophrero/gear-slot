import React from "react";
// import { IconContext } from "react-icons";
import classes from "./About.module.css";
// import slide1 from "../media/img/slide-1.jpeg";
// import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import AboutUsSlider from "../components/Layout/AboutUs/AboutUsSlider";

const About = () => {
  return (
    <React.Fragment>
      <AboutUsSlider />
      <div className={classes["about-content"]}>
        <div className={classes["about-header"]}>
          <h1 className={classes["about-title-1"]}>Despre</h1>
          <h2 className={classes["about-title-2"]}>Localul</h2>
          <h3 className={classes["about-title-3"]}>Gear - Slot</h3>
        </div>
        <div className={classes["about-description-wrapper"]}>
          <p className={classes["about-description"]}>
            Va asteptam cu drag la localul nostru unde puteti servi bauturi
            racoritoare, de asemenea va oferim un spatiu special dedicat
            jocurilor de slot.
          </p>
          <p className={classes["about-description-2"]}>
            Speram sa aveti o experienta placuta alaturi de noi.
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default About;

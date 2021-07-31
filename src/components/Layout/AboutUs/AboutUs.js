import React from "react";
import { Link } from "react-router-dom";
import classes from "./AboutUs.module.css";
import aboutUs from "../../../media/img/about-us.JPG";

const AboutUs = () => {
  return (
    <div className={classes["about-us-content"]}>
      <div className={classes["about-us-header"]}>
        <h1 className={classes["about-us-title1"]}>Despre</h1>
        <h2 className={classes["about-us-title2"]}>Noi</h2>
        <div className={classes["bottom-line-wrapper"]}>
          <span className={classes["bottom-line"]}></span>
        </div>
      </div>
      <div className={classes["about-us-image"]}>
        <img src={aboutUs} alt="Despre Noi Gear Slot" />
        <Link to="/about-us" className={classes["about-us-link"]}>
          Vezi Mai Multe
        </Link>
      </div>
    </div>
  );
};

export default AboutUs;

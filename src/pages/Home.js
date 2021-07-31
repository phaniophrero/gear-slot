import React from "react";

import Welcome from "../components/Layout/Welcome/Welcome";
import MenuCards from "../components/Layout/MenuCards/MenuCards";
import AboutUs from "../components/Layout/AboutUs/AboutUs";
import HeroSlider from "../components/Layout/MainHeader/HeroSlider";

import WaterMarkCA23 from "../components/WaterMark/WaterMarkCA23";

// import TestSlider from "../components/Layout/TestSlider/TestSlider";

const Home = () => {
  return (
    <React.Fragment>
      <WaterMarkCA23 />
      <HeroSlider />
      <Welcome />
      <WaterMarkCA23 />
      <MenuCards />
      <WaterMarkCA23 />
      <AboutUs />
    </React.Fragment>
  );
};

export default Home;

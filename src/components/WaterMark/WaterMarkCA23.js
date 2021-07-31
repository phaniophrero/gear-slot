import React from "react";

import "./WaterMarkCA23.css";
import logoCA23 from "../../media/img/logo-ca23.png";

const WaterMarkCA23 = () => {
  return (
    <div className="logo-ca23-container">
      <div className="logo-ca23-wrapper">
        <img src={logoCA23} alt="Logo CA 23" />
      </div>
      <div className="logo-ca23-wrapper logo-ca23-2">
        <img src={logoCA23} alt="Logo CA 23" />
      </div>
      <div className="logo-ca23-wrapper logo-ca23-3">
        <img src={logoCA23} alt="Logo CA 23" />
      </div>
    </div>
  );
};

export default WaterMarkCA23;

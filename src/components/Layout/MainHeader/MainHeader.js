import React from "react";

import { Link } from "react-router-dom";
import logo from "../../../media/img/logo.png";
import { IconContext } from "react-icons";
import { IoLogoWhatsapp } from "react-icons/io";
import { SiFacebook } from "react-icons/si";

import classes from "./MainHeader.module.css";
import "./MainHeader.css";

const MainHeader = () => {
  return (
    <header className={classes["main-header"]}>
      <div className={classes["navbar"]}>
        {/* <div className={classes["navbar-center"]}> */}
        <Link className={classes["navbar-center"]} to="/">
          <h1 className={classes["logo-text"]}>Gear</h1>
          <div className={classes["img-wrapper"]}>
            <img src={logo} alt="Logo Gear Slot" />
          </div>
          <h1 className={classes["logo-text"]}>Slot</h1>
        </Link>
        {/* </div> */}
        <div className={classes["contact-wrapper"]}>
          <div className={classes["icon-wrapper"]}>
            <IconContext.Provider
              value={{
                className: "icon",
              }}
            >
              <Link to="https://www.facebook.com/Gear-Slot-Sal%C4%83-de-Jocuri-761374560736864/">
                <SiFacebook />
              </Link>
            </IconContext.Provider>
          </div>
          <div className={classes["icon-wrapper"]}>
            <IconContext.Provider
              value={{
                className: "icon icon-2",
              }}
            >
              <IoLogoWhatsapp />
            </IconContext.Provider>
          </div>
          <h3 className={classes["phone-number"]}>+40 722 753 527</h3>
        </div>
      </div>

      <nav className={classes.nav}>
        <ul className={classes["nav-list"]}>
          <li className={classes["nav-item"]}>
            <Link to="/">Acasa</Link>
          </li>
          <li className={classes["nav-item"]}>
            <Link to="/bauturi-alcoolice">Bauturi Alcoolice</Link>
          </li>
          <li className={classes["nav-item"]}>
            <Link to="/bauturi-racoritoare">Bauturi Racoritoare</Link>
          </li>
          <li className={classes["nav-item"]}>
            <Link to="/bauturi-espresso">Bauturi Espresso</Link>
          </li>
          <li className={classes["nav-item"]}>
            <Link to="/about-us">Despre noi</Link>
          </li>
        </ul>
      </nav>

      <div className={classes["bottom-line-wrapper"]}>
        <span className={classes["bottom-line"]}></span>
      </div>
    </header>
  );
};

export default MainHeader;

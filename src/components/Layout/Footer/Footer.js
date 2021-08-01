import React from "react";

import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import logo from "../../../media/img/logo.png";
import { IoLogoWhatsapp } from "react-icons/io";
import { SiFacebook } from "react-icons/si";
import pin from "../../../media/img/pin.svg";
import Map from "./Map";
import classes from "./Footer.module.css";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes["footer-left"]}>
        <div className={classes["footer-logo"]}>
          <div className={classes["logo-img-wrapper"]}>
            <img src={logo} alt="Gear Slot Logo" />
          </div>
          <h2 className={classes["logo-text"]}>Gear - Slot</h2>
        </div>
        <div className={classes["social-media"]}>
          <h3 className={classes["social-media-text"]}>
            Social <span>Media</span>
          </h3>
          <div className={classes["icons-wrapper"]}>
            <IconContext.Provider
              value={{
                className: "footer-icon footer-icon-2",
              }}
            >
              <a href="tel:0722753527">
                <IoLogoWhatsapp />
              </a>
              <a href="https://wa.me/0722753527">
                <IoLogoWhatsapp />
              </a>
            </IconContext.Provider>
            <IconContext.Provider
              value={{
                className: "footer-icon ",
              }}
            >
              <a href="https://www.facebook.com/Gear-Slot-Sal%C4%83-de-Jocuri-761374560736864/">
                <SiFacebook />
              </a>
            </IconContext.Provider>
          </div>
        </div>
      </div>
      <ul className={classes["program"]}>
        <li className={classes["program-item"]}>
          <span>Luni</span> 10:00 AM - 2:00 AM
        </li>
        <li className={classes["program-item"]}>
          <span>Marti</span> 10:00 AM - 2:00 AM
        </li>
        <li className={classes["program-item"]}>
          <span>Miercuri</span> 10:00 AM - 2:00 AM
        </li>
        <li className={classes["program-item"]}>
          <span>Joi</span> 10:00 AM - 2:00 AM
        </li>
        <li className={classes["program-item"]}>
          <span>Vineri</span> 10:00 AM - 2:00 AM
        </li>
        <li className={classes["program-item"]}>
          <span>Sambata</span> 10:00 AM - 2:00 AM
        </li>
        <li className={classes["program-item"]}>
          <span>Duminica</span> 10:00 AM - 2:00 AM
        </li>
      </ul>
      <div className={classes["footer-right"]}>
        <div className={classes["footer-address"]}>
          <div className={classes["footer-icon"]}>
            <img src={pin} alt="Pin Map Icon" />
          </div>
          <div className={classes["footer-address-text-wrapper"]}>
            <h1 className={classes["footer-address-text"]}>
              Bulevardul 1 Mai, Nr. 132
            </h1>
            <h1 className={classes["footer-address-text2"]}>
              Berceni, Romania
            </h1>
          </div>
        </div>
        <div className={classes["footer-map"]}>
          <Map />
        </div>
        <div className={classes["footer-phone-wrapper"]}>
          <IconContext.Provider
            value={{
              className: "footer-icon footer-icon-3",
            }}
          >
            <a href="https://wa.me/0722753527">
              <IoLogoWhatsapp />
            </a>
            {/* <IoLogoWhatsapp /> */}
          </IconContext.Provider>
          <a
            href="https://wa.me/0722753527"
            className={classes["footer-phone"]}
          >
            +40 722 753 527
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

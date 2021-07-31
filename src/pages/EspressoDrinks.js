import React from "react";

import classes from "./AlcoholicDrinks.module.css";
import coffeeDrinksData from "../data/coffee/coffeeDrinksData";

const EspressoDrinks = () => {
  return (
    <div className={classes["menu-content"]}>
      <div className={classes["header"]}>
        <h1 className={classes["header-title-1"]}>Bauturi</h1>
        <h2 className={classes["header-title-2"]}>Espresso</h2>
        <div className={classes["bottom-line-wrapper"]}>
          <span className={classes["bottom-line"]}></span>
        </div>
      </div>
      <div className={classes["drinks-content"]}>
        {coffeeDrinksData.map((item) => (
          <div key={item.id} className={classes["card-drink"]}>
            <div className={classes["drink-image-wrapper"]}>
              <img src={item.image} alt={item.title} />
            </div>
            <h1 className={classes["drink-title"]}>{item.title}</h1>
            <h3 className={classes["drink-description"]}>{item.description}</h3>
            <h2 className={classes["drink-price"]}>{item.price}</h2>
          </div>
        ))}
      </div>
      <div className={classes["card-line-wrapper"]}>
        <span className={classes["card-line"]}></span>
      </div>
      <div className={classes["space"]}></div>
    </div>
  );
};

export default EspressoDrinks;

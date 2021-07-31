import React from "react";

import classes from "./AlcoholicDrinks.module.css";
import spiritsDrinksData from "../data/alcoholic/spiritsDrinksData";
import wineDrinksData from "../data/alcoholic/wineDrinksData";
import beerDrinksData from "../data/alcoholic/beerDrinksData";

const AlcoholicDrinks = () => {
  return (
    <div className={classes["menu-content"]}>
      <div className={classes["header"]}>
        <h1 className={classes["header-title-1"]}>Bauturi</h1>
        <h2 className={classes["header-title-2"]}>Alcoolice</h2>
        <div className={classes["bottom-line-wrapper"]}>
          <span className={classes["bottom-line"]}></span>
        </div>
      </div>
      <div className={classes["drinks-container"]}>
        <div className={classes["drinks-heading"]}>
          <h1 className={classes["drinks-heading-title"]}>Bauturi Alcoolice</h1>
        </div>
        <div className={classes["drinks-content"]}>
          {spiritsDrinksData.map((item) => (
            <div key={item.id} className={classes["card-drink"]}>
              <div className={classes["drink-image-wrapper"]}>
                <img src={item.image} alt={item.title} />
              </div>
              <h1 className={classes["drink-title"]}>{item.title}</h1>
              <h3 className={classes["drink-description"]}>
                {item.description}
              </h3>
              <h2 className={classes["drink-price"]}>{item.price}</h2>
            </div>
          ))}
        </div>
      </div>
      <div className={classes["card-line-wrapper"]}>
        <span className={classes["card-line"]}></span>
      </div>
      <div className={classes["drinks-container"]}>
        <div className={classes["drinks-heading"]}>
          <h1 className={classes["drinks-heading-title"]}>Vinuri</h1>
        </div>
        <div className={classes["drinks-content"]}>
          {wineDrinksData.map((item) => (
            <div key={item.id} className={classes["card-drink"]}>
              <div className={classes["drink-image-wrapper"]}>
                <img src={item.image} alt={item.title} />
              </div>
              <h1 className={classes["drink-title"]}>{item.title}</h1>
              <h3 className={classes["drink-description"]}>
                {item.description}
              </h3>
              <h2 className={classes["drink-price"]}>{item.price}</h2>
            </div>
          ))}
        </div>
      </div>
      <div className={classes["card-line-wrapper"]}>
        <span className={classes["card-line"]}></span>
      </div>
      <div className={classes["drinks-container"]}>
        <div className={classes["drinks-heading"]}>
          <h1 className={classes["drinks-heading-title"]}>Beri</h1>
        </div>
        <div className={classes["drinks-content"]}>
          {beerDrinksData.map((item) => (
            <div key={item.id} className={classes["card-drink"]}>
              <div className={classes["drink-image-wrapper"]}>
                <img src={item.image} alt={item.title} />
              </div>
              <h1 className={classes["drink-title"]}>{item.title}</h1>
              <h3 className={classes["drink-description"]}>
                {item.description}
              </h3>
              <h2 className={classes["drink-price"]}>{item.price}</h2>
            </div>
          ))}
        </div>
      </div>
      <div className={classes["space"]}></div>
    </div>
  );
};

export default AlcoholicDrinks;

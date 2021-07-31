import React from "react";

import { Link } from "react-router-dom";

import classes from "./MenuCards.module.css";
import menuCardsData from "./menuCardsData";
import Card from "../../UI/Card";

const MenuCards = () => {
  return (
    <div className={classes["menu-content"]}>
      <div className={classes["menu-header"]}>
        <h1 className={classes["menu-title-1"]}>Meniu</h1>
        <h2 className={classes["menu-title-2"]}>Bauturi</h2>
        <div className={classes["menu-line-wrapper"]}>
          <span className={classes["menu-line"]}>line</span>
        </div>
      </div>
      <div className={classes["menu-cards"]}>
        {menuCardsData.map((item) => (
          <Link key={item.id} to={item.path}>
            <Card>
              <div className={`${classes[item.className]}`}>
                <img src={item.image} alt={item.category} />
              </div>
              <h2 className={classes["card-title"]}>{item.title}</h2>
              <h3 className={classes["card-category"]}>{item.category}</h3>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MenuCards;

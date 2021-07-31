import React from "react";

import classes from "./Card.module.css";

const Card = (props) => {
  //   const className = classes + props.className;

  return <div className={classes.card}>{props.children}</div>;
};

export default Card;

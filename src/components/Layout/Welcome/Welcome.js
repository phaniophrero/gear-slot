import React from "react";

import classes from "./Welcome.module.css";

const Welcome = () => {
  return (
    <div className={classes["welcome"]}>
      <h1 className={classes["title-1"]}>Bine Ati Venit</h1>
      <h2 className={classes["title-2"]}>Gear - Slot</h2>
      <h3 className={classes["title-3"]}>Berceni</h3>
    </div>
  );
};

export default Welcome;

import React from "react";
import classes from "./Header.module.css";

function Header() {
  return (
    <header className={classes.header}>
      <span className={classes.title}>COUNTER</span>
    </header>
  );
}

export default Header;

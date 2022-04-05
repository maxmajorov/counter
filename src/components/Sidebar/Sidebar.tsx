import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <aside className={classes.sidebar}>
      <ul className="sidebar__list list-reset">
        <li className={classes.item}>
          <NavLink
            to="/counter_v1.0.0"
            className={({ isActive }) =>
              classes.link + " " + (isActive ? classes.active : "")
            }
          >
            Counter v1.0
          </NavLink>
        </li>
        <li className={classes.item}>
          <NavLink
            to="/counter_v2.0/"
            className={({ isActive }) =>
              classes.link + " " + (isActive ? classes.active : "")
            }
          >
            Counter v2.0
          </NavLink>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;

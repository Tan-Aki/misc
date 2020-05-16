import React from "react";
import PropTypes from "prop-types";
import classes from "./NavigationItem.module.scss";
import { NavLink } from "react-router-dom";

const navigationItem = (props) => {
  return (
    <li className={classes.NavigationItem}>
      {/* <div className={classes.box}> */}
      <NavLink activeClassName={classes.active} exact to={props.link}>
        {props.children}
        {/* for the activeClassname probleme with css modules. See lecture 229 : Implementing Navigation Links */}
      </NavLink>
      {/* </div> */}
    </li>
  );
};

navigationItem.propTypes = {};

export default navigationItem;

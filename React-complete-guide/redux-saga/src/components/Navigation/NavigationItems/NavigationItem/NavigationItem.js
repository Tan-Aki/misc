import React from "react";
import PropTypes from "prop-types";
import classes from "./NavigationItem.module.scss";
import { NavLink } from "react-router-dom";

const navigationItem = (props) => {
  return (
    <li className={classes.NavigationItem}>
      <NavLink activeClassName={classes.active} exact to={props.link}>
        {/* for the activeClassname probleme with css modules. See lecture 229 : Implementing Navigation Links */}
        {props.children}
      </NavLink>
    </li>
  );
};

navigationItem.propTypes = {};

export default navigationItem;

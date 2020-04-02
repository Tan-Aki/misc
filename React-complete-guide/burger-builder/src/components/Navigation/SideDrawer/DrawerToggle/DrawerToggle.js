import React from "react";
import PropTypes from "prop-types";
import classes from "./DrawerToggle.module.scss";

const drawerToogle = props => {
  return (
    <div className={classes.DrawerToggle} onClick={props.clicked}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

drawerToogle.propTypes = {};

export default drawerToogle;

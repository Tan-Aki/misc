import React from "react";
import PropTypes from "prop-types";
import classes from "./ToolbarToggle.module.scss";

const ToolbarToogle = (props) => {
  return (
    <div className={classes.ToolbarToggle}>
      <div className={classes.Icon}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className={classes.Menu}>Menu</div>
    </div>
  );
};

ToolbarToogle.propTypes = {};

export default ToolbarToogle;

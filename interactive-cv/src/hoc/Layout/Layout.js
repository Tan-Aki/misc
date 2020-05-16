import React from "react";
import PropTypes from "prop-types";
import classes from "./Layout.module.scss";

const Layout = (props) => {
  return (
    <div className={classes.Layout}>
      <div className={classes.Frame}>{props.children}</div>
    </div>
  );
};

Layout.propTypes = {};

export default Layout;

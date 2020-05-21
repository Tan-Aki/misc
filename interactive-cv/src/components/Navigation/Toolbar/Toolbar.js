import React from "react";
import PropTypes from "prop-types";
import classes from "./Toolbar.module.scss";
import NavigationItems from "../NavigationItems/NavigationItems";
import ToolbarToggle from "./ToolbarToggle/ToolbarToggle";

const toolbar = (props) => {
  return (
    //    <MenuToggle clicked={props.menuToggleClicked} />
    <nav className={classes.Toolbar}>
      <ToolbarToggle />
      <NavigationItems />
    </nav>
  );
};

toolbar.propTypes = {};

export default toolbar;

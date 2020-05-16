import React from "react";
import PropTypes from "prop-types";
import classes from "./NavigationItems.module.scss";
import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = (props) => {
  return (
    <ul className={classes.NavigationItems}>
      <NavigationItem link="/">General Info</NavigationItem>
      <NavigationItem link="/skills">Skills</NavigationItem>
      <NavigationItem link="/projects">Projects</NavigationItem>
      <NavigationItem link="/education">Education</NavigationItem>
      <NavigationItem link="/experience">Experience</NavigationItem>
      <NavigationItem link="/additionalInfo">Additional Info </NavigationItem>
      <NavigationItem link="/contact">Contact</NavigationItem>
      {/* <NavigationItem link="/logout">Logout </NavigationItem> */}
    </ul>
  );
};

navigationItems.propTypes = {};

export default navigationItems;

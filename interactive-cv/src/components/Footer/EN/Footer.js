import React from "react";
import PropTypes from "prop-types";
import classes from "../Footer.module.scss";
import ReactLogo from "../../Logos/React/ReactLogo";

const Footer = (props) => {
  return (
    <footer className={classes.Footer}>
      <div className={classes.Row}>
        <h2>Interactive and responsive resume, made by Tanneguy Jullin in 2020, with React.JS.</h2>
        <ReactLogo />
      </div>
      <h2>Design inspired by WordPress.com</h2>
    </footer>
  );
};

Footer.propTypes = {};

export default Footer;

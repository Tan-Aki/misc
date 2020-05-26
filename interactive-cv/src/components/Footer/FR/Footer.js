import React from "react";
import PropTypes from "prop-types";
import classes from "../Footer.module.scss";
import ReactLogo from "../../Logos/React/ReactLogo";

const Footer = (props) => {
  return (
    <footer className={classes.Footer}>
      <div className={classes.Row}>
        <h2>
          Curriculum Vitae interactif et "responsive", réalisé par Tanneguy Jullin en 2020, en
          React.JS.
        </h2>
        <ReactLogo />
      </div>
      <h2>Design inspiré de WordPress.com</h2>
    </footer>
  );
};

Footer.propTypes = {};

export default Footer;

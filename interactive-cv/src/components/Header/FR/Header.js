import React from "react";
import PropTypes from "prop-types";
import classes from "../Header.module.scss";

const Header = (props) => {
  return (
    <header className={classes.Header}>
      <h1>Tanneguy Jullin</h1>
      <h2>
        Ancien technicien informatique/gestionnaire de changements TI reconverti en développeur web
        front-end et spécialisé en React.JS.
        <br /> Passionné de technologie et assoiffé de connaissances !
      </h2>
    </header>
  );
};

Header.propTypes = {};

export default Header;

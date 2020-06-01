import React from "react";
import PropTypes from "prop-types";
import classes from "../Header.module.scss";

const Header = (props) => {
  return (
    <header className={classes.Header}>
      <h1>Tanneguy Jullin</h1>
      <h2>
        <span>–</span>Front-end Web developper<span>–</span>
      </h2>
      <h2>
        Retrained former IT technician/IT change manager specialized in React.JS.
        <br /> Tech aficionado and thirsty for knowledge !
      </h2>
    </header>
  );
};

Header.propTypes = {};

export default Header;

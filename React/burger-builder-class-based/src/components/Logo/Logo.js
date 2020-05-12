import React from "react";
// import PropTypes from 'prop-types'
import burgerLogo from "../../assets/images/burger-logo.png";
import classes from "./Logo.module.scss";

const logo = props => {
  return (
    <div className={classes.Logo} style={{ height: props.height }}>
      {/* className={`${classes.Logo} ${props.height === "50%" ? classes.Twenty : null}`} */}

      <img src={burgerLogo} alt="Burger Logo" />
    </div>
  );
};

// logo.propTypes = {};

export default logo;

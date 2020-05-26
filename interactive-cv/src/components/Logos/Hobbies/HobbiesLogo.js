import React from "react";
import { ReactComponent as HobbiesSVG } from "./hobbies.svg";
import classes from "./HobbiesLogo.module.scss";

import PropTypes from "prop-types";

const HobbiesLogo = (props) => {
  return (
    <React.Fragment>
      <HobbiesSVG className={classes.HobbiesLogo} />
    </React.Fragment>
  );
};

HobbiesLogo.propTypes = {};

export default HobbiesLogo;

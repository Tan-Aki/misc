import React from "react";
import { ReactComponent as ChevronSVG } from "./chevron.svg";
import classes from "./ChevronLogo.module.scss";

import PropTypes from "prop-types";

const ChevronLogo = (props) => {
  return (
    <React.Fragment>
      <ChevronSVG className={classes.ChevronLogo} />
    </React.Fragment>
  );
};

ChevronLogo.propTypes = {};

export default ChevronLogo;

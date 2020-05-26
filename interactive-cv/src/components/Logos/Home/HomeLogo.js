import React from "react";
import { ReactComponent as HomeSVG } from "./home.svg";
import classes from "./HomeLogo.module.scss";

import PropTypes from "prop-types";

const HomeLogo = (props) => {
  return (
    <React.Fragment>
      <HomeSVG className={classes.HomeLogo} />
    </React.Fragment>
  );
};

HomeLogo.propTypes = {};

export default HomeLogo;

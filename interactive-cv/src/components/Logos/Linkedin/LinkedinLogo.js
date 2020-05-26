import React from "react";
import { ReactComponent as LinkedinSVG } from "./linkedin.svg";
import classes from "./LinkedinLogo.module.scss";

import PropTypes from "prop-types";

const LinkedinLogo = (props) => {
  return (
    <React.Fragment>
      <LinkedinSVG className={classes.LinkedinLogo} />
    </React.Fragment>
  );
};

LinkedinLogo.propTypes = {};

export default LinkedinLogo;

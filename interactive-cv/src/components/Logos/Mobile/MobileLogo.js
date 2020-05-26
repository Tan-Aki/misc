import React from "react";
import { ReactComponent as MobileSVG } from "./mobile.svg";
import classes from "./MobileLogo.module.scss";

import PropTypes from "prop-types";

const MobileLogo = (props) => {
  return (
    <React.Fragment>
      <MobileSVG className={classes.MobileLogo} />
    </React.Fragment>
  );
};

MobileLogo.propTypes = {};

export default MobileLogo;

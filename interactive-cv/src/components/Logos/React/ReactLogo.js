import React from "react";
import { ReactComponent as ReactSVG } from "./react.svg";
import classes from "./ReactLogo.module.scss";

import PropTypes from "prop-types";

const ReactLogo = (props) => {
  return (
    <React.Fragment>
      <ReactSVG className={classes.ReactLogo} />
    </React.Fragment>
  );
};

ReactLogo.propTypes = {};

export default ReactLogo;

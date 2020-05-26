import React from "react";
import { ReactComponent as GithubSVG } from "./github.svg";
import classes from "./GithubLogo.module.scss";

import PropTypes from "prop-types";

const GithubLogo = (props) => {
  return (
    <React.Fragment>
      <GithubSVG className={classes.GithubLogo} />
    </React.Fragment>
  );
};

GithubLogo.propTypes = {};

export default GithubLogo;

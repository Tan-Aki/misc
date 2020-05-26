import React from "react";
import { ReactComponent as MailSVG } from "./mail.svg";
import classes from "./MailLogo.module.scss";

import PropTypes from "prop-types";

const MailLogo = (props) => {
  return (
    <React.Fragment>
      <MailSVG className={classes.MailLogo} />
    </React.Fragment>
  );
};

MailLogo.propTypes = {};

export default MailLogo;

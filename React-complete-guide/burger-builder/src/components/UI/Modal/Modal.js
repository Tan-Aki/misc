import React, { Fragment } from "react";
import PropTypes from "prop-types";
import classes from "./Modal.module.scss";
import Backdrop from "../Backdrop/Backdrop";

const modal = props => {
  const assignedClasses = [classes.Modal];

  if (!props.show) assignedClasses.push(classes.isHidden);

  return (
    <Fragment>
      <Backdrop show={props.show} clicked={props.modalClosed} />
      <div className={assignedClasses.join(" ")}>{props.children}</div>
    </Fragment>
  );
};

modal.propTypes = {};

export default modal;

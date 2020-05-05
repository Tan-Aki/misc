import React, { Fragment, Component, useEffect } from "react";
import PropTypes from "prop-types";
import classes from "./Modal.module.scss";
import Backdrop from "../Backdrop/Backdrop";

const Modal = (props) => {
  // shouldComponentUpdate(nextProps, nextState) {
  //   // if (nextProps.show !== this.props.show) return true;
  //   // return false;
  //   // return nextProps.show !== this.props.show;

  //   return (
  //     nextProps.show !== this.props.show ||
  //     (this.props.show && nextProps.children !== this.props.children)
  //   );
  //   //Check if visibility changes  OR  (is visible  AND  content changes):
  // }

  // componentWillUpdate(nextProps, nextState) {
  //   console.log("Modal will update");
  // }

  const assignedClasses = [classes.Modal];
  if (!props.show) assignedClasses.push(classes.isHidden);

  return (
    <Fragment>
      <Backdrop show={props.show} clicked={props.modalClosed} />
      <div className={assignedClasses.join(" ")}>{props.children}</div>
    </Fragment>
  );
};

Modal.propTypes = {};

export default React.memo(
  Modal,
  (prevProps, nextProps) =>
    nextProps.show === prevProps.show && nextProps.children === prevProps.children
);

//Until now we checked: should the component be updated (= re-render required)?

// From now on we check the opposite: should the component be memoized (= re-render not required)?

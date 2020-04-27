import React, { Fragment, Component } from "react";
import classes from "./Modal.module.scss";
import Backdrop from "../Backdrop/Backdrop";

class Modal extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    // if (nextProps.show !== this.props.show) return true;
    // return false;
    // return nextProps.show !== this.props.show;

    return (
      nextProps.show !== this.props.show ||
      (this.props.show && nextProps.children !== this.props.children)
    );
    //Check if visibility changes  OR  (is visible  AND  content changes):
  }

  componentWillUpdate(nextProps, nextState) {
    console.log("Modal will update");
  }

  render() {
    const assignedClasses = [classes.Modal];
    if (!this.props.show) assignedClasses.push(classes.isHidden);

    return (
      <Fragment>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
        <div className={assignedClasses.join(" ")}>{this.props.children}</div>
      </Fragment>
    );
  }
}

Modal.propTypes = {};

export default Modal;

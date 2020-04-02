import React, { Fragment, Component } from "react";
import PropTypes from "prop-types";
import classes from "./Modal.module.scss";
import Backdrop from "../Backdrop/Backdrop";

class Modal extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    // if (nextProps.show !== this.props.show) return true;
    // return false;
    return nextProps.show !== this.props.show;
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

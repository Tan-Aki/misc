import React from "react";
import PropTypes from "prop-types";
import classes from "./ToolbarToggle.module.scss";
import { toggleToolbar } from "../../../../store/actions/toolbar";
import classNames from "classnames/bind";

import { useDispatch, useSelector } from "react-redux";

const ToolbarToogle = (props) => {
  const dispatch = useDispatch();

  const toggleToolbarHandler = () => {
    dispatch(toggleToolbar());
  };

  const showToolbar = useSelector((state) => state.toolbarReducer.showToolbar);

  const cx = classNames.bind(classes);

  const toggleClass = cx({
    ToolbarToggle: true,
    active: showToolbar,
  });

  return (
    <div className={toggleClass} onClick={toggleToolbarHandler}>
      <div className={classes.Icon}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className={classes.Menu}>Menu</div>
    </div>
  );
};

ToolbarToogle.propTypes = {};

export default ToolbarToogle;

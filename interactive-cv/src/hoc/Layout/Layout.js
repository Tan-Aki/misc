import React from "react";
import PropTypes from "prop-types";
import "./Layout.scss";

const Layout = (props) => {
  return (
    <div className="Layout">
      <div className="Frame">{props.children}</div>
    </div>
  );
};

Layout.propTypes = {};

export default Layout;

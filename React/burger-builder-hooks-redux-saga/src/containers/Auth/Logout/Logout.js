import React, { Component, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

import * as actions from "../../../store/actions/index";

const Logout = (props) => {
  // componentDidMount() {
  //   // this.props.onLogout(this.props.history);
  //   // we could do the above, as in forward the props of this component which will be loaded by the router
  //   // therefor we could forward this.props.history  and on the history object we we would have the push method

  //   this.props.onLogout();
  // }

  useEffect(() => {
    props.onLogout();
  }, []);

  return <Redirect to="/" />;
};

const mapDispatchToProps = (dispatch) => ({
  onLogout: () => dispatch(actions.logout()),
});

export default connect(null, mapDispatchToProps)(Logout);

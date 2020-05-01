import React, { Component, Fragment, useState, useEffect } from "react";
import PropTypes from "prop-types";

import Modal from "../../components/UI/Modal/Modal";

const withErrorHandler = (WrappedComponent, axios) => {
  return (props) => {
    const [error, setError] = useState(null);

    const reqInterceptor = axios.interceptors.request.use((req) => {
      // setState({ error: null });
      setError(null);
      return req;
    });

    const resInterceptor = axios.interceptors.response.use(
      (res) => res,
      (err) => {
        setError(err);
      }
    );
    console.log("configuring req/res interceptors");

    useEffect(() => {
      return () => {
        axios.interceptors.request.eject(reqInterceptor);
        axios.interceptors.response.eject(resInterceptor);
        console.log("removing req/res interceptors");
      };
    }, []);

    const errorConfirmedHandler = () => {
      setError(null);
    };

    return (
      <Fragment>
        <Modal show={error} modalClosed={errorConfirmedHandler}>
          {error ? error.message : null}
        </Modal>
        <WrappedComponent {...props} />
      </Fragment>
    );
  };
};

withErrorHandler.propTypes = {};

export default withErrorHandler;

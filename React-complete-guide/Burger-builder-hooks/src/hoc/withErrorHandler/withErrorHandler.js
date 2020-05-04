import React, { Component, Fragment, useState, useEffect, useLayoutEffect, useRef } from "react";
import PropTypes from "prop-types";

import Modal from "../../components/UI/Modal/Modal";

const withErrorHandler = (WrappedComponent, axios) => {
  return (props) => {
    const [error, setError] = useState(null);

    // const reqInterceptor = useRef();
    // const resInterceptor = useRef();

    // if (reqInterceptor.current || resInterceptor.current) {
    //   console.log("eject current req");
    //   axios.interceptors.request.eject(reqInterceptor);
    //   axios.interceptors.response.eject(resInterceptor);
    // }

    // reqInterceptor.current = axios.interceptors.request.use((req) => {
    //   // setState({ error: null });
    //   console.log("req + setstate", req);
    //   setError(null);
    //   return req;
    // });

    // resInterceptor.current = axios.interceptors.response.use(
    //   (res) => {
    //     console.log("res", res);
    //     return res;
    //   },
    //   (err) => {
    //     setError(err);
    //     console.log("err", err);
    //   }
    // );

    // useLayoutEffect(() => {
    //   console.log("Use Layout Effect");
    // }, []);

    // useLayoutEffect(() => {
    const reqInterceptor = axios.interceptors.request.use((req) => {
      // setState({ error: null });
      console.log("req + seterror", req);
      setError(null);
      return req;
    });

    const resInterceptor = axios.interceptors.response.use(
      (res) => {
        console.log("res", res);
        return res;
      },
      (err) => {
        setError(err);
        console.log("err", err);
      }
    );
    console.log("configuring req/res interceptors");
    //   return () => {
    //     axios.interceptors.request.eject(reqInterceptor);
    //     axios.interceptors.response.eject(resInterceptor);
    //     console.log("removing req/res interceptors");
    //   };
    // });

    // useEffect(() => {
    //   return () => {};
    // });

    useEffect(() => {
      return () => {
        axios.interceptors.request.eject(reqInterceptor);
        axios.interceptors.response.eject(resInterceptor);
        console.log("removing req/res interceptors");
      };
    });

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

import React, { Component, useState, useEffect } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button";
import classes from "./Auth.module.scss";
import Spinner from "../../components/UI/Spinner/Spinner";
import { checkValidity } from "../../shared/utility";

import * as actions from "../../store/actions/index";

const Auth = (props) => {
  const [controls, setControls] = useState({
    email: {
      elementType: "input",
      elementConfig: {
        type: "email",
        placeholder: "Mail Address",
      },
      value: "",
      validation: {
        required: true,
        isEmail: true,
      },
      valid: false,
      touched: false,
    },
    password: {
      elementType: "input",
      elementConfig: {
        type: "password",
        placeholder: "Password",
      },
      value: "",
      validation: {
        required: true,
        minLength: 6,
      },
      valid: false,
      touched: false,
    },
  });

  const [isSignup, setIsSignup] = useState(true);

  //////////////////////// Hey ! I agree with you, I feel like it's unnecessary since we
  // redirect to "/" in the Checkout component when we don't have any ingredients.
  // componentDidMount() {
  // }

  const { buildingBurger, authRedirectPath, onSetAuthRedirectPath } = props;

  useEffect(() => {
    if (!buildingBurger && authRedirectPath !== "/") {
      onSetAuthRedirectPath("/");
    }
  }, [buildingBurger, authRedirectPath, onSetAuthRedirectPath]);
  ////////////////////////////////////////////////////////////////////////////

  const inputChangedHandler = (event, controlName) => {
    // what follows is deep copying

    // const updatedControls = { ...this.state.controls };

    // const updatedControl = { ...updatedControls[controlName] };

    // updatedControl.value = event.target.value;
    // updatedControl.valid = this.checkValidity(updatedControl.value, updatedControl.validation);
    // updatedControl.touched = true;

    // updatedControls[controlName] = updatedControl;

    // same as above
    const updatedControls = {
      ...controls,
      [controlName]: {
        ...controls[controlName],
        value: event.target.value,
        valid: checkValidity(event.target.value, controls[controlName].validation),
        touched: true,
      },
    };

    // let formIsValid = true;
    // for (let controlName in updatedControls) {
    //   if (updatedControls.hasOwnProperty(controlName)) {
    //     formIsValid = updatedControls[controlName].valid && formIsValid;
    //   }
    // }

    // this.setState({ controls: updateControls, formIsValid });

    // this.setState({ controls: updatedControls });
    setControls(updatedControls);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onAuth(controls.email.value, controls.password.value, isSignup);
  };

  const switchAuthModeHandler = () => {
    // this.setState((prevState) => {
    //   return { isSignup: !prevState.isSignup };
    // });

    setIsSignup((prevState) => !prevState);
  };

  let formElementsArray = [];

  for (let key in controls) {
    formElementsArray.push(
      <Input
        key={key}
        {...controls[key]}
        changed={(event) => {
          inputChangedHandler(event, key);
          {
            /* <Input key="..." elementType="..." elementConfig="{...}" value="..." changed="..."/> */
          }
        }}
      />
    );
  }

  if (props.loading) {
    formElementsArray = <Spinner />;
  }
  let errorMessage = null;
  if (props.error) {
    errorMessage = <p>{props.error.message}</p>;
  }

  let authRedirect = null;
  if (props.isAuthenticated) {
    authRedirect = <Redirect to={props.authRedirectPath} />;
  }

  return (
    <div className={classes.Auth}>
      {authRedirect}
      {errorMessage}
      <p>{isSignup ? "SIGNUP" : "SIGNIN"}</p>
      <form onSubmit={submitHandler}>
        {formElementsArray}
        <Button btnType="Success">SUBMIT</Button>
      </form>
      <Button btnType="Danger" clicked={switchAuthModeHandler}>
        SWITCH TO {isSignup ? "SIGNIN" : "SIGNUP"}
      </Button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  loading: state.authReducer.loading,
  error: state.authReducer.error,
  isAuthenticated: state.authReducer.token !== null,
  authRedirectPath: state.authReducer.authRedirectPath,
  buildingBurger: state.burgerBuilderReducer.building,
});

const mapDispatchToProps = (dispatch) => ({
  onAuth: (email, password, isSignup) => dispatch(actions.auth(email, password, isSignup)),
  onSetAuthRedirectPath: (path) => dispatch(actions.setAuthRedirectPath(path)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
